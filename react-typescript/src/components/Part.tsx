import React from "react";
import { Part } from "../types";



const PartItem = ({name, exerciseCount}:Part) => {
  return (
  <p>
    
    {name} {exerciseCount}


  </p>);
};

export default PartItem;
