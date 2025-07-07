import { useFormik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export default function ContactFormDuo() {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  console.log("EmailJS Config:", {
    SERVICE_ID: SERVICE_ID ? "Set" : "Missing",
    TEMPLATE_ID: TEMPLATE_ID ? "Set" : "Missing",
    PUBLIC_KEY: PUBLIC_KEY ? "Set" : "Missing",
  });
  const form = useRef<HTMLFormElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery("(min-width: 200px)");

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
    onSubmit: async (
      values: ContactFormValues,
      { setSubmitting, resetForm }: FormikHelpers<ContactFormValues>
    ) => {
      try {
        if (!form.current) {
          throw new Error("Invalid form");
        }
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
          publicKey: PUBLIC_KEY,
        });
        alert(
          "Thank you for messaging, I'll get back to you as soon as possible!"
        );
        resetForm();
      } catch (error) {
        console.log(error);
        alert("Failed to send message. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      style={{
        height: isMobile ? "100dvh" : "",
        paddingTop: isMobile ? 30 : 5,
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "grid",
          placeItems: "center",
          alignContent: "center",
        }}
      >
        {isMobile ? (
          <Typography variant="h3" sx={{ mb: 5, fontWeight: "400" }}>
            Contact Me!
          </Typography>
        ) : (
          <Typography variant="h2" sx={{ mb: 5 }}>
            Contact Me!
          </Typography>
        )}
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          ref={form}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
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
        <h2 className="mt-8 text-xl font-medium text-center text-gray-700 tracking-tight">
          Or connect with me through these platforms:
        </h2>
        <div className="flex flex-col items-center gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/luke-salem-17051a231/"
            target="_blank"
            className="flex items-center gap-2 text-blue-700 hover:underline"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.87 0-2.156 1.46-2.156 2.969v5.698h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/lukebike"
            target="_blank"
            className="flex items-center gap-2 text-gray-800 hover:underline"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="mailto:lukesalem2002@gmail.com"
            className="flex items-center gap-2 text-red-700 hover:underline"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 13.065 2.4 6.6A2 2 0 0 1 4 4h16a2 2 0 0 1 1.6 2.6l-9.6 6.465zm9.6-7.465A4 4 0 0 0 20 2H4a4 4 0 0 0-1.6.6l9.6 6.465 9.6-6.465zM2 8.236V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.236l-9.6 6.465L2 8.236z" />
            </svg>
            Email
          </a>
        </div>
      </Box>
    </motion.div>
  );
}
