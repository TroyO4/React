const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");

const app = express();
app.use(cors());

app.get("/standings", async (req, res) => {
  try {
    console.log("Launching browser...");
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.goto("https://www.espn.com/nba/standings", { waitUntil: "networkidle2", timeout: 60000 });

    console.log("Scraping data...");

    const standings = await page.evaluate(() => {
      const teams = [];
      const rows = document.querySelectorAll(".standings__table tbody tr");

      rows.forEach((row) => {
        const columns = row.querySelectorAll("td");

        if (columns.length > 2) {
          const teamName = columns[0]?.innerText.trim() || "";
          const wins = columns[1]?.innerText.trim() || "0";
          const losses = columns[2]?.innerText.trim() || "0";

          if (teamName && !isNaN(parseInt(wins)) && !isNaN(parseInt(losses))) {
            teams.push({
              team: teamName,
              wins: parseInt(wins),
              losses: parseInt(losses),
            });
          }
        }
      });

      return teams;
    });

    console.log("Scraping complete!");

    await browser.close();

    if (standings.length === 0) {
      throw new Error("No data found - ESPN page structure may have changed.");
    }

    res.json(standings);
  } catch (error) {
    console.error("Error scraping ESPN standings:", error);
    res.status(500).json({ error: "Failed to fetch standings from ESPN" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
