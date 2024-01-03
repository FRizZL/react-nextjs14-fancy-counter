import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({
  type,
  setCount,
  isLocked,
}: {
  type: "plus" | "minus";
  setCount: React.Dispatch<React.SetStateAction<number>>;
  isLocked: boolean;
}) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCount((prev: number) => {
      if (prev === 0 && type === "minus") return prev;
      if (type === "plus") {
        if (prev > 4) return 5;
        return prev + 1;
      } else if (type === "minus") {
        return prev - 1;
      }

      return prev;
    });

    event.currentTarget.blur();
  };
  return (
    <button className="count-btn" onClick={handleClick} disabled={isLocked}>
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
}
