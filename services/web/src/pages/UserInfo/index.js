import { connect } from "react-redux";
import { compose } from "redux";

import { UserInfoPage } from "./UserInfo";
import { userSelecter } from "./model/selectors";

const mapStateToProps = state => ({
  user: userSelecter(state)
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(UserInfoPage);
