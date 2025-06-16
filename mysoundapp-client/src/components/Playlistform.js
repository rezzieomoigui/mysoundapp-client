import React, { useState } from "react";

const PlaylistForm = ({ onAdd }) => {
  const [form, setForm] = useState({ title: "", artist: "", album: "", genre: "", img_name: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.artist) {
      alert("Title and Artist are required.");
      return;
    }

    const res = await fetch("https://mysoundapp-server.onrender.com/api/playlists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setMessage("Playlist added!");
      onAdd();
      setForm({ title: "", artist: "", album: "", genre: "", img_name: "" });
    } else {
      setMessage("Failed to add playlist.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="playlist-form">
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <input name="artist" placeholder="Artist" value={form.artist} onChange={handleChange} />
      <input name="album" placeholder="Album" value={form.album} onChange={handleChange} />
      <input name="genre" placeholder="Genre" value={form.genre} onChange={handleChange} />
      <input name="img_name" placeholder="Image Name (e.g. song1.jpg)" value={form.img_name} onChange={handleChange} />
      <button type="submit">Add Playlist</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default PlaylistForm;

