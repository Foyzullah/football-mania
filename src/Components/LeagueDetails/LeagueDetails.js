import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import mealPhoto from "../../image/male.png";
import femealPhoto from "../../image/female.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faFutbol,
  faMars,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const LeagueDetails = () => {
  const { id } = useParams();
  const [leagueDetails, setLeagueDetails] = useState([]);
  const {
    strLeague,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strDescriptionEN,
    strBadge,
    strBanner,
  } = leagueDetails;
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => setLeagueDetails(data.leagues[0]));
  }, [id]);
  let leaguePhoto = "Male" === strGender ? mealPhoto : femealPhoto;
  return (
    <div className="main-area">
      <Header banner={strBanner} badge={strBadge}></Header>
      <div className="container">
        <div className="league-details">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h3>{strLeague}</h3>
              <div className="league-info-text">
                <p className="icon-outer">
                  <FontAwesomeIcon className="icon-inner" icon={faClock} />
                  <strong>Founded:</strong> {intFormedYear}
                </p>
                <p className="icon-outer">
                  <FontAwesomeIcon className="icon-inner" icon={faFlag} />
                  <strong>Country:</strong> {strCountry}
                </p>
                <p className="icon-outer">
                  <FontAwesomeIcon className="icon-inner" icon={faFutbol} />
                  <strong>Sport Type:</strong> {strSport}
                </p>
                <p className="icon-outer">
                  <FontAwesomeIcon className="icon-inner" icon={faMars} />
                  <strong>Gender: </strong> {strGender}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="imag">
                <img src={leaguePhoto} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="league-description">
          <p>{strDescriptionEN}</p>
        </div>
        <div className="footer">
          <ul>
            <li>
              <Link to="facebook.com">
                <FontAwesomeIcon className="social-link" icon={faFacebookF} />
              </Link>
            </li>
            <li>
              <FontAwesomeIcon className="social-link" icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon className="social-link" icon={faYoutube} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeagueDetails;
