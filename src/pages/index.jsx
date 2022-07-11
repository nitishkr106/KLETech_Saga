import React from "react";
import Loadable from "react-loadable";
import "../styles/home.css";
import Home from "../containers/GOD"

const loader = () => <div>Loading.</div>;
//
const HomeLazy = Loadable({
  loader: () => import("../containers/GOD"), 
  loading: loader,
});

const Index = () => {
  return (
    <>
      <Home />
    </>
  );
};
export default Index;
