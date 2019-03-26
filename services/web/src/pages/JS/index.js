import { connect } from "react-redux";
import { compose } from "redux";
import { withSearchReducer } from "./model/reducers";
import { withSaga } from "./model/sagas";

import Search from "./Search";
import { searchSelecter } from "./model/selectors";

const mapStateToProps = state => ({
  search: searchSelecter(state)
});

const withConnect = connect(mapStateToProps);

export default compose(
  withSaga,
  withSearchReducer,
  withConnect
)(Search);
