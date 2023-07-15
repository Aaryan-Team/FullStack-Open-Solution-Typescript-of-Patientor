import { PartProps } from "../types";

const PartItem = ({ part }: PartProps) => {
  switch (part.name) {
    case "Fundamentals":
      return (
        <p>
          <b>{part.name}  {part.exerciseCount}</b><br/> <i>{part.description}</i>
        </p>
      );
    case "Using props to pass data":
      return (
        <p>
          {part.name} {part.description} {part.exerciseCount}{" "}
          {part.groupProjectCount}
        </p>
      );
    case "Deeper type usage":
      return (
        <p>
          {part.name} {part.description} {part.exerciseCount}{" "}
          {part.exerciseSubmissionLink}
        </p>
      );
    case "Another course part":
      return (
        <p>
          {part.name} {part.description} {part.exerciseCount} {part.comment}
        </p>
      );
    default:
      return null;
  }
};

export default PartItem;
