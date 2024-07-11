import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import { useTheme } from "@mui/material/styles";
import {
  Typography,
  Box,
  Button,
  IconButton,
  useMediaQuery,
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(fullName, workEmail, phone, venueName);
    const isFormValid = fullName && workEmail && phone && venueName;
    setButtonDisabled(!isFormValid);
  }, [fullName, workEmail, phone, venueName]);

  const handleRegister = () => {
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phonePattern = /^[0-9]{10,15}$/;

    const emailValid = emailPattern.test(workEmail);
    const phoneValid = phonePattern.test(phone);

    setIsError({ email: !emailValid, phone: !phoneValid });
    console.log({ email: !emailValid, phone: !phoneValid });

    if (emailValid && phoneValid) {
      // Proceed with form submission
      console.log("Form Submitted");
      setIsRegistered(true);
    }
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
                fontWeight: "500",
                fontSize: { xs: "1.7rem", sm: "2rem", md: "3rem" },
                ml: { md: -20 },
                px: { xs: 3, sm: 11, md: 0 },
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
                      ml: 1,
                      mt: 3,
                      fontWeight: "500",
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
                fontWeight: "500",
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
                          <Box sx={{ position: "relative" }}>
                            <div
                              class="tooltip"
                              title="Please enter a valid contact number"
                            >
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
                      <Box sx={{ display: "flex" }}>
                        <PhoneInput
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
            <RegistrationSuccessfulMessage></RegistrationSuccessfulMessage>
          )}
        </Box>
        <div className="marquee-container">
          <LandingPageMarquee />
        </div>
        <GradientBlob position="left"></GradientBlob>
        <GradientBlob position="right" top={70}></GradientBlob>
      </div>
    </>
  );
}

export default LandingPage;
