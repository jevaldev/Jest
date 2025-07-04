export default function Button({ text, handleClick }) {
  return (
    <button className="px-4 py-2 rounded-sm" onClick={handleClick}>
      {text}
    </button>
  );
}
