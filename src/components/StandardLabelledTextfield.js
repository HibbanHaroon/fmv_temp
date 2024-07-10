import React from "react";
import { Box, Typography, TextField } from "@mui/material";

const StandardLabeledTextfield = ({ label, placeholder, id }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="body1" gutterBottom fontWeight="400" align="left">
        {label}
      </Typography>
      <TextField id={id} variant="standard" placeholder={placeholder} />
    </Box>
  );
};

export default StandardLabeledTextfield;
