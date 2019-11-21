import React from "react";
import { Switch, Route } from "react-router-dom";
import store, { history } from "./store";
import Hotel from "./pages/hotel";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import GlobalStyles from "./component/styles/golobal-styles";

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path='/' component={Hotel} />
          </Switch>
          <GlobalStyles />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
