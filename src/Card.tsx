import cocktailImg from "./assets/cocktailproject.png";
import { Button } from "@mui/material";

type CardTypes = {
  img?: string;
  cardTitle: string;
  cardText: string;
  anchorText: string;
  anchorLink: string;
};

function Card({
  img = cocktailImg,
  cardTitle,
  cardText,
  anchorText,
  anchorLink,
}: CardTypes) {
  return (
    <div
      className="card mt-5 bg-base-100 image-full w-96 shadow-sm"
      style={{ backgroundColor: "rgb(35,36,37)" }}
    >
      <figure>
        <img src={img} alt={cardTitle} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-center">{cardTitle}</h2>
        <p>{cardText}</p>
        <div className="card-actions justify-end">
          <Button
            href={anchorLink}
            variant="contained"
            sx={{
              marginTop: "10px",
              backgroundColor: "#c1121f",
              transition:
                "background-color 0.5s cubic-bezier(0.4,0,0.2,1), color 0.5s cubic-bezier(0.4,0,0.2,1)",
              "&:hover": {
                backgroundColor: "#780000",
                color: "black",
              },
            }}
          >
            {anchorText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export { Card };
export type { CardTypes };
