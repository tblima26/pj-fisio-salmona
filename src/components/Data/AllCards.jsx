import { Card } from "./Card";
import data from "./Data.js";

export function AllCards() {
    return (
      <div className="flex space-x-6">
        {data.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            photo={card.photo}
            comment={card.comment}
            link={card.link}
           />
        ))}
      </div>
    );
  }