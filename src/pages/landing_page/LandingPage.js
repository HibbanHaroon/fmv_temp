import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import { useTheme } from "@mui/material/styles";
import {
  Typography,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  Snackbar,
  Alert,
} from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./LandingPage.css";
import StandardLabeledTextfield from "../../components/StandardLabelledTextfield";
import CustomDivider from "../../components/CustomDivider";
import LandingPageMarquee from "../../components/LandingPageMarquee";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import GradientBlob from "../../components/GradientBlob";
import RegistrationSuccessfulMessage from "../../components/RegistrationSuccessfulMessage";
import { registerVenue } from "../../api/venue.request";
import Tooltip from "../../components/Tooltip";

const words = ["Venue", "Ballroom", "Auditorium", "Hotel", "Restaurant"];

function LandingPage() {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [venueName, setVenueName] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isError, setIsError] = useState({ email: false, phone: false });
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const [isRegistered, setIsRegistered] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const isFormValid = fullName && workEmail && phone && venueName;
    setButtonDisabled(!isFormValid);
  }, [fullName, workEmail, phone, venueName]);

  const handleRegister = async () => {
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phonePattern = /^[0-9]{10,15}$/;

    const emailValid = emailPattern.test(workEmail);
    const phoneValid = phonePattern.test(phone);

    setIsError({ email: !emailValid, phone: !phoneValid });

    if (emailValid && phoneValid) {
      try {
        const venueData = {
          name: fullName,
          email: workEmail,
          phoneNumber: phone,
          venueName: venueName,
        };

        const response = await registerVenue(venueData);
        console.log("Venue registered successfully:", response);
        setIsRegistered(true);
        setSnackbar({
          open: true,
          message: "Venue registered successfully!",
          severity: "success",
        });
      } catch (error) {
        console.error("Error registering venue:", error);
        setSnackbar({
          open: true,
          message: "Failed to register venue. Please try again.",
          severity: "error",
        });
      }
    } else {
      setSnackbar({
        open: true,
        message: "Please correct the errors in the form.",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <ResponsiveAppBar />
      <div style={{ minHeight: "75vh", maxWidth: "100vw", width: "100%" }}>
        <Box
          className="arc-container"
          sx={{
            borderBottomLeftRadius: { xs: "100% 20%", md: "50% 20%" },
            borderBottomRightRadius: { xs: "100% 20%", md: "50% 20%" },
            width: "100%",
            display: "Flex",
            flexDirection: "column",
            alignItems: { xs: "start", md: "center" },
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mt: { xs: 3, md: 3 },
                fontWeight: "700",
                fontSize: { xs: "1.7rem", sm: "2rem", md: "3rem" },
                ml: { md: -20 },
                pl: { xs: 3, sm: 11, md: 0 },
              }}
            >
              List your
            </Typography>
            <div className="word-container">
              <TransitionGroup component={null}>
                <CSSTransition
                  key={words[index]}
                  timeout={500}
                  classNames="word"
                >
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                      ml: { xs: "5px" },
                      mt: 3,
                      fontWeight: "700",
                      color: "primary.main",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      fontSize: { xs: "1.7rem", sm: "2rem", md: "3rem" },
                    }}
                  >
                    {words[index]}
                  </Typography>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </Box>
          <Box style={{ display: "flex" }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: "700",
                fontSize: { xs: "1.2rem", sm: "2rem", md: "3rem" },
                px: { xs: 3, sm: 11, md: 0 },
                textAlign: "center",
              }}
            >
              for a profitable opportunity!
            </Typography>
          </Box>
          {/* yaha sai */}
          {isRegistered === false ? (
            <>
              <Box style={{ display: "flex" }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: "300",
                    fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
                    px: { xs: 3, sm: 11, md: 0 },
                    textAlign: "left",
                    mb: { xs: 3 },
                  }}
                >
                  Join thousands of hosts renting their space for events on{" "}
                  <b>Find my venue.</b>
                </Typography>
              </Box>
              <Box
                sx={{
                  p: 3,
                  width: "75%",
                  m: "auto",
                  borderRadius: "12px",
                  boxShadow: "0 6px 10px #00000016",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: { xs: "center", md: "space-between" },
                    gap: { xs: 2, md: 0 },
                  }}
                >
                  {/* Left */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      width: { xs: "50%", md: "100%" },
                    }}
                  >
                    <StandardLabeledTextfield
                      id="fullName"
                      label="Full Name"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <CustomDivider
                      orientation="vertical"
                      flexItem
                      sx={{ display: { xs: "none", md: "block" } }}
                    />
                    <StandardLabeledTextfield
                      id="workEmail"
                      label="Work Email"
                      placeholder="Enter your work email"
                      inputType="email"
                      isError={isError.email}
                      errorMessage={
                        isError.email
                          ? "Please enter a valid email address"
                          : ""
                      }
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                    />
                    <CustomDivider
                      orientation="vertical"
                      flexItem
                      sx={{ display: { xs: "none", md: "block" } }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Typography
                          variant="body1"
                          gutterBottom
                          fontWeight="400"
                          align="left"
                          sx={{
                            fontSize: {
                              xs: "subtitle2.fontSize",
                              md: "body1.fontSize",
                            },
                          }}
                        >
                          Contact Number
                        </Typography>
                        {isError.phone === true && (
                          <Tooltip
                            text={"Please enter a valid contact number"}
                            error={true}
                          ></Tooltip>
                        )}
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <PhoneInput
                          countryCodeEditable={false}
                          country={"ae"}
                          placeholder="Enter your contact no."
                          enableSearch={true}
                          value={phone}
                          onChange={(phone) => setPhone(phone)}
                          inputProps={{
                            name: "phone",
                            required: true,
                          }}
                          inputStyle={{
                            border: "none",
                            boxShadow: "none",
                            color: isError.phone ? "red" : "black.text",
                          }}
                          isValid={(value) => /^[0-9]{10,15}$/.test(value)}
                          containerStyle={{
                            border: "none",
                          }}
                        />
                      </Box>
                    </Box>
                    <CustomDivider
                      orientation="vertical"
                      flexItem
                      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                    />
                  </Box>
                  {/* Right */}
                  <Box>
                    <StandardLabeledTextfield
                      id="venueName"
                      label="Venue Name"
                      placeholder="Enter venue name"
                      value={venueName}
                      onChange={(e) => setVenueName(e.target.value)}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    size="medium"
                    disabled={buttonDisabled}
                    sx={{ height: 40, textTransform: "none", borderRadius: 2 }}
                    onClick={handleRegister}
                    fullWidth={isMd}
                  >
                    Register
                  </Button>
                </Box>
              </Box>
            </>
          ) : (
            <RegistrationSuccessfulMessage />
          )}
        </Box>
        <div className="marquee-container">
          <LandingPageMarquee />
        </div>
        {isMd ? null : (
          <>
            <GradientBlob position="left"></GradientBlob>
            <GradientBlob position="right" top={70}></GradientBlob>
          </>
        )}
      </div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default LandingPage;
