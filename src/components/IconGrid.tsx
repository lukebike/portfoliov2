import { iconComponents } from "../data/icons";
import { Chip, useTheme } from "@mui/material";

export default function IconGrid() {
  const theme = useTheme();
  return (
    <>
      {iconComponents.map(({ Icon, name }, idx) => (
        <Chip
          avatar={
            <Icon
              width="100%"
              height="100%"
              style={{ display: "block" }}
              aria-label={`icon-${idx}`}
            />
          }
          label={name}
          key={idx}
          sx={{
            marginRight: 1,
            marginBottom: "10px",
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: theme.palette.secondary.main,
            },
          }}
        />
      ))}
    </>
  );
}
