import React from "react";
import { OccupationalHealthcareEntry } from "../types";

const style = { margin: 10 };

const OccupationalHealthcare: React.FC<{
  entry: OccupationalHealthcareEntry;
}> = ({ entry }) => (
  <div>
    <section style={style}>
      <p>{entry.date}</p>
      <p>description={entry.description}</p>
    </section>
  </div>
);

export default OccupationalHealthcare;
