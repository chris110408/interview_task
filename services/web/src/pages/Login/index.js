import { connect } from "react-redux";
import { compose } from "redux";

import { userSelecter } from "./model/selectors";

import { WrappedNormalLoginForm } from "./Login";

// eslint-disable-next-line
const mapStateToProps = state => ({ user: userSelecter });

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(WrappedNormalLoginForm);
