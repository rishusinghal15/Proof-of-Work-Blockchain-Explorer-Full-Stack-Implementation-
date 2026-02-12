import React, { useEffect, useState } from "react";
import axios from "axios";
import Block from "./Block";

const Blockchain = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    axios.get("/api/blocks").then((response) => {
      setBlocks(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Blockchain Overview: </h2>

      {/* IMPORTANT WRAPPER */}
      <div className="block-list">
        {blocks.map((block, index) => (
          <Block key={index} block={block} />
        ))}
      </div>

    </div>
  );
};

export default Blockchain;

