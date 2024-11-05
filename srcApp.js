

src/App.js


import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState("status");
  const [sortBy, setSortBy] = useState("priority");

  useEffect(() => {
    // Fetch data from API
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => setTickets(data.tickets))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="app">
      <Header setGroupBy={setGroupBy} setSortBy={setSortBy} />
      <KanbanBoard tickets={tickets} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
}

export default App;
