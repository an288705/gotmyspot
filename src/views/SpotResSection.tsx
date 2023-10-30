import React from "react";
import SpotCard from "./SpotCard";

export default function SpotResSection() {
  const res = ["ex 1", "ex 2", "ex 3"];
  return (
    <div>
      {res.map((spotCard) => (
        <SpotCard name={spotCard} />
      ))}
    </div>
  );
}
