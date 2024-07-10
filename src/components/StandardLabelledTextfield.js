import React from "react";
import { Box, Typography, TextField, IconButton, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const StandardLabeledTextfield = ({
  label,
  placeholder,
  id,
  inputType = "text",
  error = false,
  errorMessage = "",
}) => {
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
          variant={{ xs: "body2", md: "body1" }}
          gutterBottom
          fontWeight="400"
          align="left"
        >
          {label}
        </Typography>
        {error === true && (
          <>
            {/* <Tooltip
              title={
                <Typography fontSize={15} sx={{ color: "red", p: 1.5 }}>
                  {errorMessage}
                </Typography>
              }
              placement="bottom-start"
              arrow
              sx={{
                color: "red",
                ml: 1,
                p: 0,
              }}
            >
              <IconButton aria-label="delete" color="red">
                <InfoOutlinedIcon />
              </IconButton>
            </Tooltip> */}
          </>
        )}
      </Box>
      <TextField
        id={id}
        variant="standard"
        placeholder={placeholder}
        type={inputType}
        InputProps={{ disableUnderline: true }}
      />
    </Box>
  );
};

export default StandardLabeledTextfield;
