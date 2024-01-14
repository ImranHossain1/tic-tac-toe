/* eslint-disable react/prop-types */
export default function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="bg-white border border-gray-400 hover:bg-gray-700 hover:text-white h-24 w-24 m-1 leading-9 text-lg"
    >
      {value}
    </button>
  );
}
