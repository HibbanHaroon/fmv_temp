import React from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import "./StandardLabelledTextfield.css";

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
        {isError === true && (
          <Box sx={{ position: "relative" }}>
            <div class="tooltip" title={errorMessage}>
              <IconButton sx={{ p: 0 }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16.7307C12.2288 16.7307 12.4207 16.6533 12.5755 16.4985C12.7303 16.3437 12.8077 16.1519 12.8077 15.9231C12.8077 15.6942 12.7303 15.5024 12.5755 15.3476C12.4207 15.1928 12.2288 15.1154 12 15.1154C11.7711 15.1154 11.5793 15.1928 11.4245 15.3476C11.2697 15.5024 11.1923 15.6942 11.1923 15.9231C11.1923 16.1519 11.2697 16.3437 11.4245 16.4985C11.5793 16.6533 11.7711 16.7307 12 16.7307ZM12.0003 13.0769C12.2129 13.0769 12.391 13.005 12.5346 12.8613C12.6782 12.7175 12.75 12.5394 12.75 12.3269V7.82688C12.75 7.61439 12.6781 7.43628 12.5343 7.29253C12.3904 7.14878 12.2122 7.0769 11.9997 7.0769C11.7871 7.0769 11.609 7.14878 11.4654 7.29253C11.3218 7.43628 11.25 7.61439 11.25 7.82688V12.3269C11.25 12.5394 11.3219 12.7175 11.4657 12.8613C11.6095 13.005 11.7877 13.0769 12.0003 13.0769ZM12.0016 21.5C10.6877 21.5 9.45268 21.2506 8.29655 20.752C7.1404 20.2533 6.13472 19.5765 5.2795 18.7217C4.42427 17.8669 3.74721 16.8616 3.24833 15.706C2.74944 14.5504 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45268 3.248 8.29655C3.74667 7.1404 4.42342 6.13472 5.27825 5.2795C6.1331 4.42427 7.13834 3.74721 8.29398 3.24833C9.44959 2.74944 10.6844 2.5 11.9983 2.5C13.3122 2.5 14.5473 2.74933 15.7034 3.248C16.8596 3.74667 17.8652 4.42342 18.7205 5.27825C19.5757 6.1331 20.2527 7.13834 20.7516 8.29398C21.2505 9.44959 21.5 10.6844 21.5 11.9983C21.5 13.3122 21.2506 14.5473 20.752 15.7034C20.2533 16.8596 19.5765 17.8652 18.7217 18.7205C17.8669 19.5757 16.8616 20.2527 15.706 20.7516C14.5504 21.2505 13.3156 21.5 12.0016 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76664 19.225 7.87498 17.675 6.32498C16.125 4.77498 14.2333 3.99998 12 3.99998C9.76664 3.99998 7.87498 4.77498 6.32498 6.32498C4.77498 7.87498 3.99998 9.76664 3.99998 12C3.99998 14.2333 4.77498 16.125 6.32498 17.675C7.87498 19.225 9.76664 20 12 20Z"
                    fill="#F25700"
                  ></path>
                </svg>
                <span class="MuiTouchRipple-root css-w0pj6f"></span>
              </IconButton>
            </div>
          </Box>
        )}
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
          input: { color: isError ? "primary.main" : "text.primary" },
        }}
      />
    </Box>
  );
};

export default StandardLabeledTextfield;
