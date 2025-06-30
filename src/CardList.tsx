import { useEffect, useState } from "react";
import { Card } from "./Card";
import type { CardTypes } from "./Card";
import cards from "./cardInfo";

export default function CardList() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`mt-50 flex flex-wrap gap-4 justify-center transition-opacity duration-700 ease-in ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {cards.map((card: CardTypes, idx: number) => (
        <Card key={idx} {...card} />
      ))}
    </div>
  );
}
