export default function Stats({ items }) {
  const totalItem = items.length;
  const numpacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numpacked / totalItem) * 100);

  return (
    <footer className="stats">
      {percent === 100 ? (
        <em>Enjoy the trip</em>
      ) : (
        <em>
          'You can have {totalItem} item in your list and you already packed{" "}
          {numpacked} (%{percent}).Enjoy the trip!'
        </em>
      )}
    </footer>
  );
}
