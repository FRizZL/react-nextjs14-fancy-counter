import { ResetIcon } from "@radix-ui/react-icons";

export default function Reset({
  setCount,
}: {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCount(0);
    event.currentTarget.blur();
  };
  return (
    <button className="reset-btn" onClick={handleClick}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
