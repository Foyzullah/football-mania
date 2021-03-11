import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import League from "../League/League";
import bannerImage from "../../image/img-1.jpg";

const Home = () => {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
      .then((res) => res.json())
      .then((data) => setLeagues(data.leagues.slice(0, 9)));
  }, []);
  return (
    <div className="main-area">
      <Header homeBanner={bannerImage}></Header>
      <div className="container">
        <div className="row">
          {leagues &&
            leagues.map((league) => (
              <League league={league} key={league.idLeague}></League>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
