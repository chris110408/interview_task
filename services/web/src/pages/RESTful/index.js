import { connect } from "react-redux";
import { compose } from "redux";
import { withRESTfulReducer } from "./model/reducers";
import { withSaga } from "./model/sagas";

import RESTful from "./RESTful";
import { restfulSelecter } from "./model/selectors";

const mapStateToProps = state => ({
  restful: restfulSelecter(state)
});

const withConnect = connect(mapStateToProps);

export default compose(
  withSaga,
  withRESTfulReducer,
  withConnect
)(RESTful);
