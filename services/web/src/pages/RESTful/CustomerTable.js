import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";

const CustomerTable = ({ customers, showDeleteModal, showEditModal }) => {
  const customersColumns = [
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "First Name",
      dataIndex: "firstName"
    },
    {
      title: "Last Name",
      dataIndex: "lastName"
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
      dataIndex: "createdAt"
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt"
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (text, record) => (
        <div>
          <a onClick={() => showEditModal(record)}>Edit</a>

          <a style={{ marginLeft: 14 }} onClick={() => showDeleteModal(record)}>
            Delete
          </a>
        </div>
      )
    }
  ];

  return (
    <Table
      style={{ marginBottom: 16 }}
      rowKey={record => record._id}
      dataSource={customers.size === 0 ? null : customers}
      columns={customersColumns}
      scroll={{ x: 1300 }}
    />
  );
};

CustomerTable.propTypes = {
  customers: PropTypes.array,
  showDeleteModal: PropTypes.func,
  showEditModal: PropTypes.func
};

export { CustomerTable };
