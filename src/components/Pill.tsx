interface PillProps {
  text: string;
  onClick: () => void;
}

const Pill = ({ text, onClick }: PillProps) => {
  return (
    <span
      className="h-5 flex items-center gap-1 bg-green-500 text-white p-1.5 rounded-md cursor-pointer"
      onClick={onClick}
    >
      {text} &times;
    </span>
  );
};

export default Pill;
