import { motion } from "framer-motion";
import { Box } from "@mui/material";
import type React from "react";

const MotionWrapper: React.FC<MotionWrapperProps> = ({ children, sx }) => {
  return (
    <Box sx={sx}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default MotionWrapper;
