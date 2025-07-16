import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import IconGrid from "../components/IconGrid";
import { aboutItems } from "../data/aboutInfo";
import Heading from "../components/Header";
import { Description } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import { motion } from "framer-motion";
import Footer from "../layout/Footer.tsx";

export default function About() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        style={{
          display: isMobile ? "block" : "flex",
          height: isMobile ? "auto" : "95%",
          alignItems: isMobile ? undefined : "center",
          justifyContent: isMobile ? undefined : "center",
          width: "100%",
          paddingTop: isMobile ? "100px" : "30px",
          paddingBottom: isMobile ? "60px" : "20px",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            height: isMobile ? "auto" : "100%",
            display: { lg: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={{ xs: 5, lg: 10, md: 20 }} sx={{}}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Heading headerText="About me" />
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
              <Heading headerText="Resumé" />
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
                sx={{
                  width: "100%",
                  textAlign: { xs: "center", md: "left", fontWeight: 300 },
                }}
              >
                You can check out my resumé using the button below.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  mt: 2,
                  width: "100%",
                  gap: 2,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    color: theme.palette.secondary.main,
                    borderColor: theme.palette.secondary.main,
                    transition:
                      "background-color 0.5s cubic-bezier(0.4,0,0.2,1), color 0.5s cubic-bezier(0.4,0,0.2,1)",
                    "&:hover": {
                      color: theme.palette.warning.contrastText,
                      backgroundColor: theme.palette.secondary.main,
                    },
                  }}
                  endIcon={<Description />}
                  href="/Luke Salem CV ENG.pdf"
                  download
                >
                  Resumé ENG
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: theme.palette.secondary.main,
                    borderColor: theme.palette.secondary.main,
                    transition:
                      "background-color 0.5s cubic-bezier(0.4,0,0.2,1), color 0.5s cubic-bezier(0.4,0,0.2,1)",
                    "&:hover": {
                      color: theme.palette.warning.contrastText,
                      backgroundColor: theme.palette.secondary.main,
                    },
                  }}
                  endIcon={<Description />}
                  href="/Luke Salem CV SE.pdf"
                  download
                >
                  Resumé SE
                </Button>
              </Box>
            </Grid>
            <Grid size={{ md: 4, xs: 12 }}>
              <Heading headerText="Skills" />
            </Grid>
            <Grid size={{ md: 8, xs: 12 }}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: isMobile ? "center" : "",
                }}
              >
                <IconGrid />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
      <Footer />
    </>
  );
}
