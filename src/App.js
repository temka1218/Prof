import "./App.css";
import Navbar from "./components/pages/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import SignOut from "./SignOut.js";
import Footer from "./components/pages/Footer/Footer";
import Choose from "./components/Choose";
import Login from "./SignIn.js";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import SignUp from "./SignUp.js";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signout" component={SignOut} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
