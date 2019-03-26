import React from "react";
import { updateCustomersAction, updateColumnsAction } from "./model/actions";
import { createColumns } from "./fns";

import CSVReader from "./CSVParser";

import { Card, Row, Col, Table } from "antd";
import PropTypes from "prop-types";

const filterCallback = data => {
  return data != "";
};

const ETL = ({ dispatch, etl }) => {
  const csvData = etl.get("customers");
  const csvColumns = etl.get("columns_item");

  const handleOnLoad = (data, header) => {
    dispatch(updateCustomersAction(data));
    const columns = createColumns(header);
    dispatch(updateColumnsAction(columns));
  };

  const getTable = () => {
    if (csvData === 0 || csvColumns.size === 0) {
      return null;
    } else {
      return (
        <Table
          style={{ marginBottom: 16 }}
          rowKey={csvColumns[0].title}
          dataSource={csvData}
          columns={csvColumns}
          scroll={{ x: 1300 }}
        />
      );
    }
  };

  return (
    <div>
      <Card>
        <CSVReader
          label="Please choose the csv file you want to convert to table"
          onFileLoaded={handleOnLoad}
          parserOptions={{ header: true }}
          filterCallback={filterCallback}
        />

        <Row gutter={{ md: 24, lg: 24, xl: 24 }}>
          <Col md={24} sm={24}>
            {getTable()}
          </Col>
        </Row>
      </Card>
    </div>
  );
};

ETL.propTypes = {
  dispatch: PropTypes.func,
  etl: PropTypes.any
};

export default ETL;
