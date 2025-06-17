import React, { useState, useEffect } from "react";
import PlaylistList from "./components/tempfix";
import PlaylistForm from "./components/PlaylistForm";
import "./App.css";

const App = () => {
  const [playlists, setPlaylists] = useState([]);

  const fetchPlaylists = () => {
    fetch("https://rezzieomoigui.onrender.com/api/playlists")
      .then((res) => res.json())
      .then((data) => setPlaylists(data));
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  return (
    <div className="app">
      <h1>🎧 MySoundApp</h1>
      <PlaylistForm onAdd={fetchPlaylists} />
      <PlaylistList playlists={playlists} />
    </div>
  );
};

export default App;

