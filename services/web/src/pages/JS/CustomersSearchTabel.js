import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";

const CustomersSearchTabel = ({ customers }) => {
  const customersColumns = [
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "First Name",
      dataIndex: "first_name"
    },
    {
      title: "Last Name",
      dataIndex: "last_name"
    },
    {
      title: "Ip",
      dataIndex: "ip"
    },
    {
      title: "Latitude",
      dataIndex: "latitude"
    },
    {
      title: "Longitude",
      dataIndex: "longitude"
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      render: text => <span>{text ? text : "NA"}</span>
    },
    {
      title: "Updated At",
      dataIndex: "updated_at",
      render: text => <span>{text ? text : "NA"}</span>
    }
  ];

  return (
    <Table
      style={{ marginBottom: 16 }}
      rowKey={record => record.id}
      dataSource={customers}
      columns={customersColumns}
      scroll={{ x: 1300 }}
    />
  );
};

CustomersSearchTabel.propTypes = {
  customers: PropTypes.array
};

export { CustomersSearchTabel };
