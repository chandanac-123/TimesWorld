import "./App.css";
import Header from "./components/Header/Header";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { checkAutoLogin } from "./services/AuthService";
import { isAuthenticated } from "./store/selectors/AuthSelectors";

const Home = lazy(() => import("./pages/Home/Home"));
const SignUp = lazy(() => import("./pages/SignUp/SignUp"));

function App(props) {

  let routes = (
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/" component={Home} />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/" component={Home} exact />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div>
      {/* <Home /> */}
      <Header />
      <div className="container px-3 mx-auto">
        <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

export default withRouter(connect(mapStateToProps)(App));
