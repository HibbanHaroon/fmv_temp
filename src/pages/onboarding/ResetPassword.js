import React, { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import backgroundIcon from "../../assets/images/background_icon.svg";
import { useTheme, Button, Typography } from "@mui/material";
import OutlinedLabelledTextField from "../../components/OutlinedLabelledTextfield";
import MessageCard from "./components/MessageCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { resetPassword } from "../../api/reset.request";

function EmailVerificationSuccessful() {
  const theme = useTheme();
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordUpdated, setPasswordUpdated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleCreatePasswordChange = (event) => {
    setCreatePassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSavePassword = async () => {
    try {
      const email = new URLSearchParams(location.search).get("email");
      await resetPassword(email, createPassword);
      setPasswordUpdated(true);
    } catch (error) {
      console.error("Error resetting password:", error);
    }
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
