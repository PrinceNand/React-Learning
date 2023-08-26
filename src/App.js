import "./App.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

const bodyStyle = {
  backgroundImage: "url('./back1.jpg')", // Replace with the actual path to your image
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  margin: 0,
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function App() {
  return (
    <div style={bodyStyle}>
      <Accordion listItem={faqs} />
    </div>
  );
}

function Accordion({ listItem }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {/* i is index , el is for loop single item.......below line is used to loop the item and accordianItem shows its using the UI */}
      {listItem.map((el, i) => (
        <AccordionItem
          open={curOpen}
          setopen={setCurOpen}
          num={i}
          title={el.title}
          // text={el.text} this passed as childern props
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, children, open, setopen }) {
  const isOpen = num === open;
  function onToggle() {
    setopen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={onToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default App;
