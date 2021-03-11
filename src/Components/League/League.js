import React from "react";
import { useHistory } from "react-router-dom";

const League = (props) => {
  const { idLeague, strLeague, strSport } = props.league;

  const history = useHistory();
  const showDetails = (id) => {
    const url = `league/${id}`;
    history.push(url);
  };

  return (
    <div className="col-md-4">
      <div className="single-league">
        <div className="league-logo"></div>
        <h4>{strLeague}</h4>
        <p>
          <strong>Sports type:</strong> {strSport}
        </p>
        <button onClick={() => showDetails(idLeague)}>Details</button>
      </div>
    </div>
  );
};

export default League;
