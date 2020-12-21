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
class App extends Component {
  render(){
  return (
    <>
{/* <MyContext.Provider value={this.props.data}> */}
  {console.log('hOME PROPS',this.props.data)}
      <Router>
              <Nav />
              <Switch>
                   <Route path="/cart" component={Cart}></Route>
                {/* <Route path="*" component={NotFound} /> */}
                    <Route exact path="/" component={Home} ></Route>
                    <Route path="/Login" component={Login}></Route>
                    <Route path="/SignUp" component={SignUp}></Route>
                    <Route path="/Products" component={ProductTab}></Route>
                    <Route path="/services" component={Services}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route path="/Faqs" component={Faqs}></Route>
                {/* <Route path="/admin" component={Admin}></Route>
                    <Redirect from="/admin" to="/admin/dashboard" /> */}
              </Switch>
      </Router>
{/* </MyContext.Provider> */}
    </>
  );
  }
};

export default App;