import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import backgroundIcon from "../../assets/images/background_icon.svg";
import { useTheme, Button, Typography } from "@mui/material";
import OutlinedLabelledTextField from "../../components/OutlinedLabelledTextfield";
import MessageCard from "./components/MessageCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { checkVerify } from "../../api/checkVerify.request";
import { Link } from "react-router-dom";
import { reset } from "../../api/reset.request";

function EmailVerificationSuccessful() {
  const theme = useTheme();
  const [workMail, setWorkMail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setWorkMail(event.target.value);
  };

  const isWorkMailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(workMail);
  };

  const handleSendEmail = async () => {
    try {
      await reset({ email: workMail });
      setEmailSent(true);
      checkEmailVerification();
    } catch (error) {
      console.error("Error sending reset email:", error);
    }
  };

  const checkEmailVerification = async () => {
    try {
      const interval = setInterval(async () => {
        const response = await checkVerify({ email: workMail }, true,true);
        if (response.verified) {
          clearInterval(interval);
          setIsVerified(true);
          navigate(`/resetPassword?email=${encodeURIComponent(workMail)}`);
        }
      }, 5000);
    } catch (error) {
      console.error("Error checking email verification:", error);
    }
  };
  

  useEffect(() => {
    if (isVerified) {
      // navigate("/resetPassword");
      <Link to="/resetPassword" state={{ email: workMail }}></Link>
    }
  }, [isVerified, navigate]);

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
          {emailSent ? (
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
              primaryText={"Reset Password Email Sent"}
              secondaryText={`We've just emailed your a reset link to ${workMail}.\n Click on the link to reset your password`}
              richText={"Entered wrong email?"}
              richLinkText={"Go Back"}
              richLinkHref={"/reset"}
            />
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "90%", md: "30%" },
                  alignItems: "center",
                }}
              >
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
                  Enter your email linked to your account and we'll send you a
                  link to reset your password.
                </Typography>
              </Box>
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
                  id="workMail"
                  label="Work Mail"
                  placeholder="Enter your email"
                  type="email"
                  value={workMail}
                  onChange={handleEmailChange}
                  width="65%"
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    mb: { xs: 1, md: 3 },
                    borderRadius: "8px",
                    mt: 5,
                    backgroundColor: isWorkMailValid()
                      ? theme.palette.primary.main
                      : theme.palette.grey.border,
                    color: isWorkMailValid() ? "white" : theme.palette.text,
                    width: { md: "67%" },
                    textTransform: "none",
                  }}
                  disabled={!isWorkMailValid()}
                  onClick={handleSendEmail} // Call handleSendEmail on click
                >
                  Send Email
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
