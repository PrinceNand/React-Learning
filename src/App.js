import { useState } from "react";
import "./index.css";

function App() {
  const bodyStyle = {
    backgroundImage: "url('./back.jpg')", // Replace with the actual path to your image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={bodyStyle}>
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState("");

  function showAnswer(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((ques) => (
        <div
          key={ques.id}
          onClick={() => showAnswer(ques.id)}
          className={selectedId === ques.id ? "selected" : ""}
        >
          <p>{selectedId === ques.id ? ques.answer : ques.question}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
