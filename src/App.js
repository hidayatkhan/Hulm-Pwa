import React ,{Component}from "react";
import Nav from './components/Nav';
import Home from "./components/Home";
import Login, { MyContext } from "./components/Login";
import SignUp from './components/Signup';
import Products from "./components/Products";
import Services from './components/Services'
import About from "./components/About"
import Contact from "./components/Contact"
import Faqs from './components/Faqs';
import { BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom";
import ProductTab from "./components/ProductTab";
import Cart from "./components/pages/cart";
// import NotFound from "./components/pages/NotFound"
// import Admin from "./components/Dashboard/layouts/Admin"
import LoginContext from './components/contexts/LoginContext';
import Keycloak from "keycloak-js";
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';





class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    };
  }

  login() {
      const keycloak = Keycloak("./keycloak.json");
      console.log("this",this)
      keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
        this.setState({ authenticated})
      // //  this.props.history.push({
      // //     pathname: "/",
      //   });
      });
  }

  render(){
  return (
    <>
      <Router>
        <LoginContext.Provider value={this.state}>
              <Nav />
              <Switch>
                   <Route path="/cart" component={Cart}></Route>
                    {/* <Route path="*" component={NotFound} /> */}
                    <Route exact path="/" component={Home} ></Route>
                    <Route path="/Login"
                    render={(props) => (
                    <Login {...props} login={() => this.login()} />)}>
                       {/* component={(props) => <Login  props={props} login={this.login.bind(this)}/>} */}

                     </Route>
                    <Route path="/SignUp" component={SignUp}></Route>
                    <Route path="/Products" component={ProductTab}></Route>
                    <Route path="/services" component={Services}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route path="/Faqs" component={Faqs}></Route>
                {/* <Route path="/admin" component={Admin}></Route>
                    <Redirect from="/admin" to="/admin/dashboard" /> */}
              </Switch>
              </LoginContext.Provider>
      </Router>
    </>
  );
  }
};

export default App;