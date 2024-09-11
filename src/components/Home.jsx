import React from "react";
import Feed from "./Feed/Feed.jsx";
import Head from "./Helpe/Head.jsx";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Fotos home" />;
      <Feed />
    </section>
  );
};

export default Home;
