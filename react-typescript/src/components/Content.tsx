import { ContentProps } from "../types";
import Part from "./Part";

const Content = ({ courseParts }: ContentProps) => {
  return (
    <div>
      {courseParts.map((part,i) => (
        <Part key={i} part={part} />
      ))}
    </div>
  );
};

export default Content;
