import React from "react";
import "./Block.css";

const Block = ({ block }) => {
  return (
    <div className="block-card">
      <h3 className="block-title">Block</h3>

      <div className="block-row"><strong>Timestamp:</strong> {block.timestamp}</div>
      <div className="block-row"><strong>Nonce:</strong> {block.nonce}</div>
      <div className="block-row"><strong>Difficulty:</strong> {block.difficulty}</div>

      <div className="block-row">
        <strong>Previous Hash:</strong>
        <div className="hash">{block.prevHash}</div>
      </div>

      <div className="block-row">
        <strong>Hash:</strong>
        <div className="hash">{block.hash}</div>
      </div>

      <div className="block-row">
        <strong>Data:</strong> {JSON.stringify(block.data)}
      </div>
    </div>
  );
};

export default Block;
