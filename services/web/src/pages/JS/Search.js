import React from "react";
import {
  fetchCustomersAction,
  updateFilteredCustomersAction
} from "./model/actions";
import { CustomersSearchTabel } from "./CustomersSearchTabel";

import { strictSearch, fuzzySearch } from "./fns";

import { Card, Input, Button, Form, Col, Row, DatePicker, Switch } from "antd";

import PropTypes from "prop-types";
import { compose, lifecycle } from "recompose";

const { Item } = Form;

// the this page contains inject state and state from the store of injectedSearchReducer
// the customers contains the customers data from the API call
// and the filteredCustomers is a copy of the customers
// use filtered Customers from state as the datasource of that table

const Search = ({ dispatch, search, form }) => {
  const customers = search.get("customers");
  const filteredCustomers = search.get("filtered_customers");

  const handleSubmit = e => {
    e.preventDefault();

    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { Mode, ...criteria } = values;
        //create search criteriaSearch Object
        const criteriaSearch = Object.keys(criteria).reduce((obj, key) => {
          if (criteria[key]) {
            obj[key] = criteria[key];
          }
          return obj;
        }, {});

        let newCustomer;
        if (Mode) {
          newCustomer = strictSearch(criteriaSearch, customers);
        } else {
          newCustomer = fuzzySearch(criteriaSearch, customers);
        }

        dispatch(updateFilteredCustomersAction(newCustomer));
      }
    });
  };

  const renderSimpleForm = () => {
    const { getFieldDecorator } = form;
    return (
      <Form onSubmit={handleSubmit} layout="inline">
        <Row gutter={{ md: 24, lg: 24, xl: 24 }}>
          <Col md={8} sm={24}>
            <Item label="Your Email">
              {getFieldDecorator("email")(<Input placeholder="Email" />)}
            </Item>
          </Col>
          <Col md={8} sm={24}>
            <Item label="Created">
              {getFieldDecorator("created_at")(
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder="The Search Date"
                />
              )}
            </Item>
          </Col>

          <Col md={8} sm={24}>
            <Item label="Ip             ">
              {getFieldDecorator("ip")(<Input placeholder="IP" />)}
            </Item>
          </Col>
          <Col md={8} sm={24}>
            <Item label="First Name">
              {getFieldDecorator("first_name")(
                <Input placeholder="First Name" />
              )}
            </Item>
          </Col>

          <Col md={8} sm={24}>
            <Item label="Latitude">
              {getFieldDecorator("latitude")(<Input placeholder="latitude" />)}
            </Item>
          </Col>

          <Col md={3} sm={12}>
            <span>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
            </span>
          </Col>

          <Col md={5} sm={12}>
            <Item label="Strict">
              {getFieldDecorator("Mode", { valuePropName: "checked" })(
                <Switch />
              )}
            </Item>
          </Col>
        </Row>
      </Form>
    );
  };

  return (
    <div>
      <Card
        bordered={false}
        title="Search Page - JS"
        style={{ marginTop: 24 }}
        loading={customers.size === 0}
      >
        <div style={{ marginBottom: 10 }}>{renderSimpleForm()}</div>
        <CustomersSearchTabel
          customers={filteredCustomers.size === 0 ? null : filteredCustomers}
        />
      </Card>
    </div>
  );
};

Search.propTypes = {
  dispatch: PropTypes.func,
  search: PropTypes.any.isRequired,
  form: PropTypes.any.isRequired
};

export const SearchPage = compose(
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props;
      dispatch(fetchCustomersAction());
    }
  }),
  Form.create()
)(Search);

export default SearchPage;
