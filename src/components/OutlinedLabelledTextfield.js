// src/components/OutlinedLabelledTextField.js

import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const OutlinedLabelledTextField = ({
  id,
  label,
  placeholder,
  type,
  value,
  onChange,
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
      <Typography
        variant="body1"
        gutterBottom
        fontWeight="300"
        align="left"
        sx={{
          fontSize: { xs: "subtitle2.fontSize", md: "body1.fontSize" },
        }}
      >
        {label}
      </Typography>
      <TextField
        required
        fullWidth
        id={id}
        placeholder={placeholder}
        variant="outlined"
        type={type}
        value={value}
        onChange={onChange}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          style: {
            borderRadius: "10px",
            height: "45px",
          },
          sx: {
            "& .MuiInputBase-input::placeholder": {
              fontSize: "0.9rem",
              color: theme.palette.grey.text,
              opacity: 1,
            },
            "& .MuiInputBase-input": {
              display: "flex",
              alignItems: "center",
              padding: "0 15px",
              height: "100%",
            },
          },
        }}
      />
    </Box>
  );
};

export default OutlinedLabelledTextField;
