import React from "react";
import { Card, Row, Col, Avatar, Divider, Table, Badge } from "antd";
import { AvatarHolderDiv, MainPageDiv } from "./styles";

import { DetailContent } from "./DetailContent";
import { InterestContent } from "./InterestContent";

import { compose } from "recompose";
import { stateHandlers } from "./model/state_handlers";

import PropTypes from "prop-types";

const status = ["Processing", "Shipped", "Delivered"];
const statusMap = ["processing", "success", "default"];


const orderColumns = [
  {
    title: "date",
    dataIndex: "date",
    key: "date"
  },
  {
    title: "status",
    dataIndex: "status",
    key: "status",
    render(val) {
      return <Badge status={statusMap[val]} text={status[val]} />;
    }
  },
  {
    title: "id",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "view",
    dataIndex: "url",
    render(val) {
      return (
        <a
          href="#"
          onClick={() => {
            // eslint-disable-next-line
            console.log(val);
          }}
        >
          view
        </a>
      );
    }
  }
];

export const UserInfo = ({
  user,
  inputValue,
  inputVisible,
  newTags,
  showInput,
  handleInputChange,
  handleInputConfirm
}) => {
  const name = user.get("name");
  return (
    <MainPageDiv>
      <Row gutter={24} className="header-row">
        <Col lg={10} md={24}>
          <Card
            bordered={false}
            style={{ marginBottom: 24 }}
            loading={name == "na"}
          >
            {user && Object.keys(user).length ? (
              <div>
                <AvatarHolderDiv>
                  <Avatar
                    size={164}
                    src="https://avatars0.githubusercontent.com/u/10645051?s=460&v=4"
                  />
                  <div className="name">{name}</div>
                </AvatarHolderDiv>
                <DetailContent
                  Email={user.get("Email")}
                  phone={user.get("phone")}
                  mobile={user.get("mobile")}
                  Since={user.get("Since")}
                  Location={user.get("Location")}
                />
                <Divider dashed />
                <InterestContent
                  Interests={user.get("interests")}
                  inputValue={inputValue}
                  inputVisible={inputVisible}
                  newTags={newTags}
                  showInput={showInput}
                  handleInputChange={handleInputChange}
                  handleInputConfirm={handleInputConfirm}
                />
              </div>
            ) : (
              "loading..."
            )}
          </Card>
        </Col>
        <Col lg={14} md={24}>
          <Card title="Orders" bordered={false}>
            <Table
              style={{ marginBottom: 16 }}
              pagination={false}
              dataSource={user.get("orders")}
              columns={orderColumns}
              rowKey="id"
            />
          </Card>
        </Col>
      </Row>
    </MainPageDiv>
  );
};

UserInfo.propTypes = {
  user: PropTypes.object,
  inputValue: PropTypes.string.isRequired,
  inputVisible: PropTypes.bool.isRequired,
  newTags: PropTypes.array.isRequired,
  showInput: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleInputConfirm: PropTypes.func.isRequired
};

export const UserInfoPage = compose(
  stateHandlers
)(UserInfo);
