import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import Tooltip from "./Tooltip";

const StandardLabeledTextfield = ({
  label,
  placeholder,
  id,
  inputType = "text",
  isError = false,
  errorMessage = "",
  value,
  onChange,
}) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography
          variant="body1"
          gutterBottom
          fontWeight="400"
          align="left"
          sx={{
            fontSize: { xs: "subtitle2.fontSize", md: "body1.fontSize" },
          }}
        >
          {label}
        </Typography>
        {isError === true && <Tooltip text={errorMessage} error={true} />}
      </Box>
      <TextField
        id={id}
        variant="standard"
        placeholder={placeholder}
        type={inputType}
        InputProps={{ disableUnderline: true }}
        error={isError}
        value={value}
        onChange={onChange}
        sx={{
          input: {
            color: isError
              ? theme.palette.primary.main
              : theme.palette.text.primary,

            fontSize: isXs
              ? theme.typography.subtitle2.fontSize
              : theme.typography.body1.fontSize,
          },
          "& .MuiInputBase-input::placeholder": {
            fontSize: isXs
              ? theme.typography.subtitle2.fontSize
              : theme.typography.body1.fontSize,
          },
        }}
      />
    </Box>
  );
};

export default StandardLabeledTextfield;
