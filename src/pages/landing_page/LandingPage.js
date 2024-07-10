import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import {
  Typography,
  Box,
  Card,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./LandingPage.css";
import StandardLabeledTextfield from "../../components/StandardLabelledTextfield";
import CustomDivider from "../../components/CustomDivider";
import LandingPageMarquee from "../../components/LandingPageMarquee";

const words = ["Venue", "Ballroom", "Auditorium", "Hotel", "Restaurant"];

function LandingPage() {
  const [index, setIndex] = useState(0);
  const [countryCode, setCountryCode] = React.useState("");

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

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
            alignItems: "center",
          }}
        >
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h3"
              sx={{
                mt: 6,
                fontWeight: "500",
                fontSize: { xs: "2rem", md: "3rem" },
                ml: -20,
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
                      fontSize: { xs: "2rem", md: "3rem" },
                    }}
                  >
                    {words[index]}
                  </Typography>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </Box>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: "500", fontSize: { xs: "2rem", md: "3rem" } }}
            >
              for a profitable opportunity!
            </Typography>
          </Box>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "300",
                fontSize: { xs: "1rem", md: "1.2rem" },
                px: { xs: 2, md: 0 },
              }}
            >
              Join thousands of hosts renting their space for events on{" "}
              <b>Find my venue.</b>
            </Typography>
          </Box>
          <Card sx={{ p: 3, width: "75%", m: "auto" }}>
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
                  <FormControl sx={{ minWidth: 20, mr: 2 }} size="small">
                    <Select
                      value={countryCode}
                      onChange={handleCountryCodeChange}
                      displayEmpty
                    >
                      <MenuItem disabled value="">
                        <em>+92</em>
                      </MenuItem>
                      <MenuItem value={+91}>+91</MenuItem>
                      <MenuItem value={+92}>+92</MenuItem>
                      <MenuItem value={+93}>+93</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="contactNumber"
                    variant="standard"
                    placeholder="Enter your contact no."
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
                }}
              >
                <Button
                  variant="contained"
                  size="medium"
                  sx={{ height: 40, textTransform: "none", borderRadius: 2 }}
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>
        <div className="marquee-container">
          <LandingPageMarquee />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
