import React from "react";

import { HospitalEntry } from "../types";

const style = { margin: 10 };

const Hospital: React.FC<{ entry: HospitalEntry }> = ({ entry }) => (
  <div>
    <div style={style}>
      <p>{entry.date}</p>
      <p>description={entry.description}</p>
    </div>
  </div>
);

export default Hospital;
