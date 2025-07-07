import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Person, Email, Message } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function ContactFormDuo() {
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    // onSubmit: (values, {resetForm} => {
    //     resetForm();
    // })
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      style={{ height: "80%" }}
    >
      <Box
        sx={{
          height: "100%",
          display: "grid",
          placeItems: "center",
          alignContent: "center",
        }}
      >
        <Typography variant="h2" sx={{ mb: 5 }}>
          Contact Me!
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            maxWidth: 500,
            backgroundColor: theme.palette.secondary.main,
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 4,
            width: "100%",
          }}
        >
          <TextField
            label="Name"
            name="name"
            fullWidth
            variant="filled"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{
              backgroundColor: theme.palette.background.default,
            }}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            variant="filled"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{
              backgroundColor: theme.palette.background.default,
            }}
          />
          <TextField
            label="Message"
            name="message"
            variant="filled"
            multiline
            rows={4}
            fullWidth
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            sx={{
              backgroundColor: theme.palette.background.default,
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: theme.palette.warning.contrastText,
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
}
