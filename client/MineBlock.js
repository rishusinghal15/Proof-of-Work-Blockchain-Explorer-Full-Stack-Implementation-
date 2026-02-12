import React, { useState } from "react";
import axios from "axios";

const MineBlock = () => {
  const [data, setData] = useState("");

  const mineBlock = () => {
    axios.post("/api/mine", { data })
      .then(response => {
        console.log(response.data);
        window.location.href = "/";
      });
  };

  return (
  <div className="mine-container">
    <div className="mine-box">
      <h2>Mine New Block</h2>

      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <button onClick={mineBlock}>
        Mine
      </button>
    </div>
  </div>
);

};

export default MineBlock;
