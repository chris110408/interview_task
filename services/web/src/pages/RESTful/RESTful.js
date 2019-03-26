import React from "react";
import { numReg, ipReg } from "../../utils/utils";

import { Card, Input, Button, Modal, Form } from "antd";

import {
  setVisibleAction,
  setCustomerAction,
  fetchCustomersAction,
  updateCustomerAction,
  createCustomerAction,
  deleteCustomerAction
} from "./model/actions";
import PropTypes from "prop-types";
import { compose, lifecycle } from "recompose";
import { MainPageDiv } from "./styles";
import { CustomerTable } from "./CustomerTable";

const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 }
};

const { Item } = Form;

const RESTful = ({ dispatch, form, restful }) => {
  const showModal = () => {
    dispatch(setVisibleAction(true));
    dispatch(setCustomerAction({}));
  };

  const handleCancel = () => {
    dispatch(setVisibleAction(false));
  };

  const showEditModal = item => {
    dispatch(setVisibleAction(true));
    dispatch(setCustomerAction(item));
  };

  const deleteCustomer = id => {
    dispatch(deleteCustomerAction(id));
  };

  const showDeleteModal = customer => {
    Modal.confirm({
      title: "Confirm Delete",
      content: "Are you sure to delete this record？",
      okText: "Confirm",
      cancelText: "Cancel",
      onOk: () => deleteCustomer(customer._id)
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (customer._id) {
          const id = customer ? customer._id : "";
          dispatch(updateCustomerAction({ id, ...values }));
        } else {
          dispatch(createCustomerAction(values));
        }
      }
    });
  };

  const customer = restful.get("customer");
  const visible = restful.get("visible");
  const customers = restful.get("customers");
  const { getFieldDecorator } = form;

  const getModalContent = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Item label="First Name" {...formLayout}>
          {getFieldDecorator("firstName", {
            rules: [
              { required: true, message: "Please input Customer First Name" }
            ],
            initialValue: customer.firstName
          })(<Input placeholder="First Name" />)}
        </Item>

        <Item label="Last Name" {...formLayout}>
          {getFieldDecorator("lastName", {
            rules: [
              { required: true, message: "Please input Customer Last Name" }
            ],
            initialValue: customer.lastName
          })(<Input placeholder="Last Name" />)}
        </Item>

        <Item label="Email" {...formLayout}>
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              { required: true, message: "Please input Customer Email" }
            ],
            initialValue: customer.email
          })(<Input placeholder="Email" />)}
        </Item>

        <Item label="IP" {...formLayout}>
          {getFieldDecorator("ip", {
            rules: [
              { pattern: ipReg, message: "Please input a IP address" },
              { required: true, message: "Please input Customer latitude" }
            ],
            initialValue: customer.ip
          })(<Input placeholder="IP" />)}
        </Item>
        <Item label="Latitude" {...formLayout}>
          {getFieldDecorator("latitude", {
            rules: [
              { pattern: numReg, message: "Please input a latitude" },
              { required: true, message: "Please input Customer latitude" }
            ],
            initialValue: customer.latitude
          })(<Input placeholder="Latitude" />)}
        </Item>
        <Item label="Longitude" {...formLayout}>
          {getFieldDecorator("longitude", {
            rules: [
              { pattern: numReg, message: "Please input a longitude" },
              { required: true, message: "Please input Customer longitude" }
            ],
            initialValue: customer.longitude
          })(<Input placeholder="Longitude" />)}
        </Item>
      </Form>
    );
  };

  return (
    <MainPageDiv>
      <Card
        bordered={false}
        title="RESTful"
        style={{ marginTop: 24 }}
        loading={customers.size === 0}
      >
        <Button
          type="dashed"
          style={{ width: "100%", margin: 8 }}
          icon="plus"
          onClick={showModal}
        >
          Create Customer
        </Button>

        <CustomerTable
          customers={customers.size === 0 ? null : customers}
          showDeleteModal={showDeleteModal}
          showEditModal={showEditModal}
        />
      </Card>
      <Modal
        title={`${customer.id ? "Edit" : "Create"} Customer`}
        width={640}
        bodyStyle={{ padding: "72px 0" }}
        destroyOnClose
        visible={visible}
        onCancel={handleCancel}
        onOk={handleSubmit}
      >
        {getModalContent()}
      </Modal>
    </MainPageDiv>
  );
};

RESTful.propTypes = {
  dispatch: PropTypes.func,
  form: PropTypes.any.isRequired,
  restful: PropTypes.any
};

export const RESTfulPage = compose(
  lifecycle({
    componentDidMount() {
      const { dispatch } = this.props;
      dispatch(fetchCustomersAction());
    }
  }),
  Form.create()
)(RESTful);

export default RESTfulPage;
