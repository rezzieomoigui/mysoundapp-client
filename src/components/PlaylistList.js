import React from "react";

const PlaylistList = ({ playlists }) => {
  return (
    <div className="playlist-list">
      {playlists.map((item) => (
        <div key={item._id} className="playlist-card">
          <img src={`/images/${item.img_name}`} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.artist}</p>
          <p>{item.album}</p>
          <p>{item.genre}</p>
        </div>
      ))}
    </div>
  );
};

export default PlaylistList;
