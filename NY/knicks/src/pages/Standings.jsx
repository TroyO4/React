import React, { useEffect, useState } from "react";
import "./Standings.css";

const Standings = () => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        console.log("Fetching scraped standings...");
        const response = await fetch("http://localhost:5000/standings");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Standings Data:", data);

        setStandings(data);
      } catch (error) {
        console.error("Error fetching standings:", error);
        setError("Failed to fetch standings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
  }, []);

  return (
    <div className="standings-container">
      <h1>NBA Standings</h1>
      {loading ? (
        <p>Loading standings...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : standings.length > 0 ? (
        <table className="standings-table">
          <thead>
            <tr>
              <th>Team</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Win %</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team, index) => (
              <tr key={index}>
                <td>{team.team}</td>
                <td>{team.wins}</td>
                <td>{team.losses}</td>
                <td>{(parseFloat(team.winPercentage) * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No standings data found.</p>
      )}
    </div>
  );
};

export default Standings;
