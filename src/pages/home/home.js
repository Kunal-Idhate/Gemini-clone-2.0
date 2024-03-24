import React from "react";
import "./home.css";
import Sidebar from "../../components/sidebar/sidebar";
import Main from "../../components/main/main";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Main />
    </div>
  );
}

export default Home;
