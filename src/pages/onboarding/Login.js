// src/pages/onboarding/Login.js

import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import OutlinedLabelledTextField from "../../components/OutlinedLabelledTextfield";
import backgroundIcon from "../../assets/images/background_icon.svg";
import { useTheme } from "@mui/material/styles";

function Login() {
  const theme = useTheme();
  const [workMail, setWorkMail] = useState("");
  const [createPassword, setCreatePassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // osama ka part
  };

  const isFormValid = () => {
    return workMail.trim() !== "" && createPassword.trim() !== "";
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
              Log in as{" "}
              <span style={{ color: theme.palette.primary.main }}>
                Venue Owner
              </span>
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ mb: { md: 4 }, color: "grey.text" }}
            >
              Welcome back! Log in and continue your journey.
            </Typography>
          </Box>
        </Container>
        <Container
          maxWidth="sm"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ mt: 7, width: { xs: "95%", md: "80%" } }}>
            <form onSubmit={handleSubmit}>
              <OutlinedLabelledTextField
                id="workMail"
                label="Work Email"
                placeholder="user@workapp.com"
                type="email"
                value={workMail}
                onChange={(e) => setWorkMail(e.target.value)}
              />

              <OutlinedLabelledTextField
                id="createPassword"
                label="Password"
                placeholder="Enter your password"
                type="password"
                value={createPassword}
                onChange={(e) => setCreatePassword(e.target.value)}
              />

              <Box sx={{ mb: 2, textAlign: "right" }}>
                <Link
                  href="#"
                  color="primary"
                  sx={{ textDecoration: "none", fontWeight: "500" }}
                >
                  Forgot Password?
                </Link>
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
                Log In
              </Button>
            </form>

            <Typography
              variant="body2"
              sx={{
                fontSize: "1rem",
                color: "grey.text",
              }}
            >
              Don't have an account?{" "}
              <Link
                href="#"
                color="primary"
                sx={{ textDecoration: "none", fontWeight: "500" }}
              >
                Register
              </Link>
            </Typography>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default Login;
