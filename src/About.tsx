import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import IconGrid from "./IconGrid";
import { aboutItems } from "./info";
import Heading from "./Heading";
import { Description } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:300px)");
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <Box
        sx={{
          display: { lg: "flex" },
          marginTop: isMobile ? 15 : 25,
          marginBottom: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={{ xs: 5, lg: 10, md: 20 }} sx={{}}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Heading headingText="About me" />
          </Grid>
          <Grid size={{ md: 8, xs: 12 }}>
            <Box style={{ marginRight: "20px" }}>
              {aboutItems.map((item, idx) => (
                <Box display={"flex"} key={idx} sx={{ flexDirection: "row" }}>
                  <CodeIcon
                    sx={{
                      color: theme.palette.secondary.main,
                      marginRight: 2,
                      marginBottom: 1,
                      marginTop: { xs: 2, lg: 1, md: "10px" },
                      padding: 0.1,
                    }}
                  />
                  {isMobile ? (
                    <Typography
                      variant="body1"
                      style={{ marginTop: "15px" }}
                      key={idx}
                    >
                      {item}
                    </Typography>
                  ) : (
                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: "left",
                        fontWeight: "300",
                        margin: "5px",
                        flexShrink: "1",
                      }}
                      key={idx}
                    >
                      {item}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid size={{ md: 4, xs: 12 }}>
            <Heading headingText="Resumé" />
          </Grid>
          <Grid
            size={{ md: 8, xs: 12 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant={isMobile ? "h6" : "h4"}
              sx={{ width: "100%", textAlign: { xs: "center", md: "left" } }}
            >
              You can check out my resumé using the button below.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                mt: 2,
                width: "100%",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  color: theme.palette.secondary.main,
                  borderColor: theme.palette.secondary.main,
                }}
                endIcon={<Description />}
                href="/CV.pdf"
                download
              >
                Resumé
              </Button>
            </Box>
          </Grid>
          <Grid size={{ md: 4, xs: 12 }}>
            <Heading headingText="Skills" />
          </Grid>
          <Grid size={{ md: 8, xs: 12 }}>
            <Box
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
              }}
            >
              <IconGrid />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
}
