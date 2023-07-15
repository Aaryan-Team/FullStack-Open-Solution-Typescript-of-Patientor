import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";
import {
  CoursePartOne,
  CoursePartTwo,
  CoursePartThree,
  CoursePartFour,
  CoursePartFive,
} from "./types";

type CoursePart =
  | CoursePartOne
  | CoursePartTwo
  | CoursePartThree
  | CoursePartFour
  | CoursePartFive
  ;
const App = () => {
  const courseName: string = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
    },
    {
      name: "Another course part",
      exerciseCount: 8,
      description: "Confusing description",
      comment: "This is a comment",
    },
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      kind: "special"
    }
  ];

  return (
    <div>
      <Header name={courseName} />
      <Content courseParts={courseParts} />

      <Total courseParts={courseParts} />
    </div>
  );
};

export default App;
