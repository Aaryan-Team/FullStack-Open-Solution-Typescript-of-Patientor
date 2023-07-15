import React from "react";
import { ContentProps } from "../types";
import Part from "./Part";





const Content = ({ courseParts } : ContentProps) => {
  

  return (
    <div>
      {
        courseParts.map(({name,exerciseCount})=>(
          <Part key={name} name={name} exerciseCount={exerciseCount}/>
        ))
      }
    </div>
  );
};

export default Content;
