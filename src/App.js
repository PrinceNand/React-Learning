import { useState } from "react";

export default function App() {
  const [step, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  // const date = new Date("2023-08-25").toLocaleDateString("en-US", {
  //   weekday: "short",
  //   year: "numeric",
  //   month: "short",
  //   day: "numeric",
  // });

  // handling + and - date
  const currentDate = new Date();
  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + count);

  const formattedFutureDate = futureDate.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const style = {
    backgroundColor: "#7950f2",
    color: "#ffffff",
    marginTop: "1rem",
    textAlign: "center",
  };

  function decreaseSteps() {
    if (step > 1) setSteps((s) => s - 1);
  }

  function increaseSteps() {
    setSteps((s) => s + 1);
  }

  function increaseCount() {
    setCount((s) => s + step);
  }

  function decreaseCount() {
    setCount((s) => s - step);
  }

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
      <div className="steps">
        <h1>Days Counter Web App</h1>

        <div className="buttons">
          <button style={style} onClick={decreaseSteps}>
            Decrease Steps
          </button>
          <p>Steps : {step} </p>
          <button style={style} onClick={increaseSteps}>
            Increase Steps
          </button>
        </div>

        <div className="buttons">
          <button style={style} onClick={decreaseCount}>
            Decrease Count
          </button>
          <p>Counts : {count} </p>
          <button style={style} onClick={increaseCount}>
            Increase Count
          </button>
        </div>

        <h4 style={{ textAlign: "center" }}>
          {count} days from today is {formattedFutureDate}.
        </h4>
      </div>
    </div>
  );
}
