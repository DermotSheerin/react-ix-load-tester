import React from "react";
import ReactDOM from "react-dom"; // eslint-disable-next-line
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ChatStats from "./components/chatStats";
import SiteHeader from "./components/siteHeader";
import ChatParameters from "./components/chatParameters";
import ChatStatsPage from "./components/pages/chatStatsPage";
import ChatParametersPage from "./components/pages/chatParametersPage";
import ResourceChart from "./components/resourceChart/index";


// In general, the top component in an app's component hierarchy is primarily concerned with routing
const App = () => {
  // The exact param disables the partial matching for a route and makes sure that it only returns the route if the path is an EXACT match to the current url.
  // The App component composes the MoviesContextProvider with 'the rest of our components'. This means all components can now access the values contained in the context associated with the MoviesContextProvider component

  return (
    <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader /> {/* New Header  */}
          <div className="container">
                  <Switch>
                    <Route path="/chatParameters" component={ChatParametersPage} />
                    {/* <Route path="/resourceChart" component={ResourceChart} /> */}
                    <Route path="/" component={ChatStatsPage} />
                    <Redirect from="*" to="/" />
                  </Switch>
          </div>
        </div>
    </BrowserRouter>
  );

};

ReactDOM.render(<App />, document.getElementById("root"));