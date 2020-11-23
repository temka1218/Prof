import React from "react";
import app from "./base";
import { withRouter, Redirect } from "react-router";

const Home1 = () => {
  return (
    <>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      {app.auth().signOut()}
      {/* <Redirectto="/" />; */}
    </>
  );
};

export default Home1;