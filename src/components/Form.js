import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function FormSubmission(e) {
    e.preventDefault();

    if (!description) return;

    const finalList = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    console.log(finalList);
    onAddItem(finalList);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={FormSubmission}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(val) => setQuantity(val.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((val) => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(msg) => setDescription(msg.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
