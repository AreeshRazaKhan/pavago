import React from "react";

const PulseBadge = ({ paragraph, margin }) => {
  return (
    <>
      <div className={`pulse-badge ${margin}`}>
        <div className="pulse-badge-inner">
          <div className="badge-glow ripple"></div>
          <p>{paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default PulseBadge;
