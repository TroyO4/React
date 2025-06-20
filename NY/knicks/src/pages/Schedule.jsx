import React, { useEffect, useState } from "react";
import "./Schedule.css";

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        console.log("Fetching Knicks schedule from ESPN API...");

        const response = await fetch(
          "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/ny/schedule"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Full API Response:", data); // Debugging full response

        if (data.events && data.events.length > 0) {
          const formattedGames = data.events.map((game) => {
            const homeCompetitor = game.competitions[0].competitors.find(
              (team) => team.homeAway === "home"
            );
            const awayCompetitor = game.competitions[0].competitors.find(
              (team) => team.homeAway === "away"
            );

            console.log(
              `Game: ${homeCompetitor.team.displayName} (${homeCompetitor.team.abbreviation}) vs ${awayCompetitor.team.displayName} (${awayCompetitor.team.abbreviation})`
            ); // Debugging team names and abbreviations

            const homeTeamFull = homeCompetitor.team.displayName;
            const awayTeamFull = awayCompetitor.team.displayName;


            const homeTeam = homeCompetitor.team.abbreviation;
            const awayTeam = awayCompetitor.team.abbreviation;

            // Ensure score exists; if not, set to "TBD"
            const homeScore = homeCompetitor?.score?.value !== undefined ? homeCompetitor.score.value : "TBD";
            const awayScore = awayCompetitor?.score?.value !== undefined ? awayCompetitor.score.value : "TBD";

            console.log(`Extracted Scores -> ${homeTeam}: ${homeScore}, ${awayTeam}: ${awayScore}`);

            const gameCompleted = game.competitions[0].status.type.completed;

            // Correct Knicks team detection
            const knicksHome = homeCompetitor.team.abbreviation === "NY";
            const knicksAway = awayCompetitor.team.abbreviation === "NY";

            // Determine Win/Loss based on Knicks' score
            let result;
            if (gameCompleted) {
              if (!isNaN(homeScore) && !isNaN(awayScore)) {
                if (knicksHome) {
                  result = parseInt(homeScore) > parseInt(awayScore) ? "Win" : "Loss";
                } else if (knicksAway) {
                  result = parseInt(awayScore) > parseInt(homeScore) ? "Win" : "Loss";
                } else {
                  result = "Completed";
                }
              } else {
                result = "Game Completed";
              }
            } else {
              result = "TBD";
            }

            return {
              date: new Date(game.date).toLocaleDateString(),
              opponent: knicksHome ? awayTeamFull : homeTeamFull,
              status: result,
              score: gameCompleted
                ? `${homeTeam}: ${homeScore} - ${awayTeam}: ${awayScore}`
                : "TBD",
            };
          });

          setSchedule(formattedGames);
        } else {
          console.warn("No games found for the Knicks.");
          setSchedule([]);
        }
      } catch (error) {
        console.error("Error fetching Knicks schedule:", error);
        setError("Failed to fetch schedule. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  return (
    <div className="schedule-container">
      {loading ? (
        <p>Loading schedule...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : schedule.length > 0 ? (
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Opponent</th>
              <th>Outcome</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((game, index) => (
              <tr key={index}>
                <td>{game.date}</td>
                <td>{game.opponent}</td>
                <td>{game.status}</td>
                <td>{game.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No recent games found.</p>
      )}
    </div>
  );
};

export default Schedule;
