import { connect } from "react-redux";
import { compose } from "redux";
import { withETLReducer } from "./model/reducers";

import ETL from "./ETL";
import { etlSelecter } from "./model/selectors";

const mapStateToProps = state => ({
  etl: etlSelecter(state)
});

const withConnect = connect(mapStateToProps);

export default compose(
  withETLReducer,
  withConnect
)(ETL);
