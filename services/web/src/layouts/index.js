import { connect } from "react-redux";

import { BasicLayout } from "./BasicLayout";
import { enquireScreen } from "../utils/enquireJS";

import { compose, withState, withHandlers, lifecycle } from "recompose";

const mapStateToProps = state => ({
  collapsed: state.getIn(["layout", "collapsed"]),
  currentUser: state.getIn(["user", "userinfo"])
});

const withConnect = connect(mapStateToProps);

const withLifecyle = lifecycle({
  componentDidMount() {
    enquireScreen(mobile => {
      this.props.setIsMobile({ isMobile: mobile });
    });
  }
});

const addState = compose(
  withState("layoutObj", "updateLayout", { collapsed: false, isMobile: false }),
  withHandlers({
    setCollapsed: ({ updateLayout }) => ({ collapsed }) => {
      updateLayout(state => ({ ...state, collapsed }));
    },
    setIsMobile: ({ updateLayout }) => ({ isMobile }) => {
      updateLayout(state => ({ ...state, isMobile }));
    }
  })
);

export default compose(
  addState,
  withLifecyle,
  withConnect
)(BasicLayout);
