import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import OutlinedLabelledTextField from "../../components/OutlinedLabelledTextfield";
import backgroundIcon from "../../assets/images/background_icon.svg";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import MessageCard from "../onboarding/components/MessageCard";
import EmailSentBadgeIcon from "../../assets/icons/EmailSentBadgeIcon";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { register } from "../../api/signup.request";
import EmailVerification from "./EmailVerification";

function Register() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [workMail, setWorkMail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  let verifyPassword;
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const signupData = {
        email: workMail,
        name: fullName,
        password: createPassword,
      };

      const response = await register(signupData);
      setApiResponse(response);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error registering venue:", error);
    }
  };
  const handleRetryRegistration = async () => {
    try {
      const signupData = {
        email: workMail,
        name: fullName,
        password: createPassword,
      };

      const response = await register(signupData);
      setApiResponse(response);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error registering venue:", error);
    }
  };

  const isFormValid = () => {
    return (
      fullName.trim() !== "" &&
      workMail.trim() !== "" &&
      createPassword.trim() !== "" &&
      confirmPassword.trim() !== "" &&
      checked
    );
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
        }}
      >
        {isSubmitted ? (
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                mt: 25,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "85%",
              }}
            >
              <EmailVerification
                email={workMail}
                password={(verifyPassword = "email")}
              />
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
                primaryText={"Verify your email"}
                secondaryText={`We've sent an email to ${workMail} to verify your email address and activate your account`}
                richText={"If you haven't received an email after a while,"}
                richLinkText={"click here to try again"}
                onRichLinkClick={handleRetryRegistration}
              />
            </Box>
          </Container>
        ) : (
          <>
            <Container>
              <Box sx={{ mt: 6 }}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    mt: { xs: 7, md: 10 },
                    fontWeight: "bold",
                    fontSize: { xs: "1.6rem" },
                  }}
                >
                  Please fill in the details below to{" "}
                  <span style={{ color: theme.palette.primary.main }}>
                    Register
                  </span>
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ mb: { md: 4 }, color: "grey.text" }}
                >
                  Ready to list your venue?
                </Typography>
              </Box>
            </Container>
            <Container
              maxWidth="sm"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ mt: 7, width: { md: "80%" } }}>
                <form onSubmit={handleSubmit}>
                  <OutlinedLabelledTextField
                    id="fullName"
                    label="Full Name"
                    placeholder="Enter Full Name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />

                  <OutlinedLabelledTextField
                    id="workMail"
                    label="Work Mail"
                    placeholder="user@workapp.com"
                    type="email"
                    value={workMail}
                    onChange={(e) => setWorkMail(e.target.value)}
                  />

                  <OutlinedLabelledTextField
                    id="createPassword"
                    label="Create Password"
                    placeholder="Create a password"
                    type="password"
                    value={createPassword}
                    onChange={(e) => setCreatePassword(e.target.value)}
                  />

                  <OutlinedLabelledTextField
                    id="confirmPassword"
                    label="Confirm Password"
                    placeholder="Re-enter your password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  <Box sx={{ mb: { xs: 2, md: 7 } }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked}
                          onChange={(e) => setChecked(e.target.checked)}
                          sx={{
                            transform: "scale(1.5)", // Adjust the size of the checkbox
                            marginRight: "10px", // Add some space between the checkbox and label
                            color: "grey.border",
                          }}
                        />
                      }
                      label={
                        <Typography
                          variant="body1" // Change this to match the text field size
                          sx={{
                            color: "grey.text",
                            fontSize: "1rem",
                            textAlign: { xs: "left" },
                          }}
                        >
                          I agree to the{" "}
                          <Link
                            href="#"
                            color="primary"
                            sx={{ textDecoration: "none" }}
                          >
                            Terms & Conditions
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="#"
                            color="primary"
                            sx={{ textDecoration: "none" }}
                          >
                            Privacy Policy
                          </Link>
                        </Typography>
                      }
                    />
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      mb: { xs: 1, md: 3 },
                      borderRadius: "8px",
                      mt: 2,
                      backgroundColor: isFormValid()
                        ? "primary.main"
                        : "grey.border",
                      color: isFormValid() ? "white" : "text",
                    }}
                    disabled={!isFormValid()}
                  >
                    Register
                  </Button>
                </form>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1rem",
                    color: "grey.text",
                  }}
                >
                  Already have an account?{" "}
                  <Link
                    href="#"
                    color="primary"
                    sx={{ textDecoration: "none" }}
                  >
                    Login.
                  </Link>
                </Typography>
              </Box>
            </Container>
          </>
        )}
      </div>
    </>
  );
}

export default Register;
