import Count from "./Count";
import ResetButton from "./ResetButton";
import Title from "./Title";
import ButtonContainer from "./ButtonContainer";
import { useEffect, useState } from "react";
import CountButton from "./CountButton";

export default function Card() {
  const [count, setCount] = useState(0);
  const isLocked = count === 5;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // spacebar is pressed
      if (e.code === "Space") {
        if (isLocked) return setCount(5);
        setCount(count + 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [count, isLocked]);
  return (
    <div className={`card ${isLocked ? "card--limit" : ""}`}>
      <Title count={count} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} isLocked={isLocked} />
        <CountButton type="plus" setCount={setCount} isLocked={isLocked} />
      </ButtonContainer>
    </div>
  );
}
