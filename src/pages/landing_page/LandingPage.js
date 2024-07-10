import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import { Typography, Box, Button } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./LandingPage.css";
import StandardLabeledTextfield from "../../components/StandardLabelledTextfield";
import CustomDivider from "../../components/CustomDivider";
import LandingPageMarquee from "../../components/LandingPageMarquee";
import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
import "react-phone-input-2/lib/bootstrap.css";
import GradientBlob from "../../components/GradientBlob";

const words = ["Venue", "Ballroom", "Auditorium", "Hotel", "Restaurant"];

function LandingPage() {
  const [index, setIndex] = useState(0);
  const [phone, setPhone] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isError, setIsError] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
                mt: 6,
                fontWeight: "500",
                fontSize: { xs: "1.7rem", sm: "2rem", md: "3rem" },
                ml: { md: -20 },
                pl: { xs: 10, md: 0 },
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
                      mt: 6,
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
                px: { xs: 10, md: 0 },
                textAlign: "center",
              }}
            >
              for a profitable opportunity!
            </Typography>
          </Box>
          <Box style={{ display: "flex" }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "300",
                fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
                px: { xs: 10, md: 0 },
                textAlign: "left",
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
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: { xs: "center", md: "space-evenly" },
                gap: { xs: 2, md: 0 },
              }}
            >
              <StandardLabeledTextfield
                id="fullName"
                label="Full Name"
                placeholder="Enter your full name"
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
                error={isError}
                errorMessage="Please enter a valid email address"
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
                <Typography
                  variant="body1"
                  gutterBottom
                  fontWeight="400"
                  align="left"
                >
                  Contact Number
                </Typography>
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
                    inputStyle={{ border: "none", boxShadow: "none" }}
                  />
                </Box>
              </Box>
              <CustomDivider
                orientation="vertical"
                flexItem
                sx={{ display: { xs: "none", md: "block" } }}
              />
              <StandardLabeledTextfield
                id="venueName"
                label="Venue Name"
                placeholder="Enter venue name"
              />
              {/* Register Button */}
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
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Box>
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
