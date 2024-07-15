import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import backgroundIcon from "../../assets/images/background_icon.svg";
import { useTheme, Button, Typography } from "@mui/material";
import OutlinedLabelledTextField from "../../components/OutlinedLabelledTextfield";
import MessageCard from "./components/MessageCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function EmailVerificationSuccessful() {
  const theme = useTheme();
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordUpdated, setPasswordUpdated] = useState(false);

  const handleCreatePasswordChange = (event) => {
    setCreatePassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSavePassword = () => {
    // You can add validation logic here if needed before saving
    // For example, check if passwords match or meet certain criteria
    // For simplicity, I'm not adding validation in this example

    // Update state to indicate password has been updated
    setPasswordUpdated(true);
  };

  return (
    <>
      <ResponsiveAppBar />
      <div
        style={{
          backgroundImage: `url(${backgroundIcon})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          minHeight: "75vh",
          display: "flex",
          justifyContent: "center",
          alignItems: { md: "center" },
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {passwordUpdated ? (
            <MessageCard
              loaderComponent={
                <CheckCircleIcon
                  sx={{
                    fontSize: 60,
                    mt: 4,
                    color: theme.palette.green.text,
                  }}
                />
              }
              primaryText={"Password Updated"}
              secondaryText={`Your password has been updated successfully. Redirecting to login page.`}
              buttonText={"Back to Log in"}
              buttonHref={"/login"}
            />
          ) : (
            <>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  mt: { xs: 7, md: 10 },
                  fontWeight: "bold",
                  fontSize: { xs: "1.6rem" },
                }}
              >
                Reset Password
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ mb: { md: 4 }, color: "grey.text" }}
              >
                Please create a new password for your account.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mt: 2,
                  width: "100%",
                  maxWidth: "sm",
                }}
              >
                <OutlinedLabelledTextField
                  id="createPassword"
                  label="Create Password"
                  placeholder="Create a password"
                  type="password"
                  value={createPassword}
                  onChange={handleCreatePasswordChange}
                  width="75%"
                />
                <OutlinedLabelledTextField
                  id="confirmPassword"
                  label="Confirm Password"
                  placeholder="Re-enter your password"
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  width="75%"
                />
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    mt: 3,
                    borderRadius: "8px",
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                    textTransform: "none",
                    width: { md: "75%" },
                  }}
                  onClick={handleSavePassword}
                  disabled={
                    !createPassword || createPassword !== confirmPassword
                  }
                >
                  Update Password
                </Button>
              </Box>
            </>
          )}
        </Container>
      </div>
    </>
  );
}

export default EmailVerificationSuccessful;
