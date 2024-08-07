import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import backgroundIcon from "../../assets/images/background_icon.svg";

function Login() {
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
              sx={{ mt: 10, fontWeight: "bold" }}
            >
              Log in as{" "}
              <span style={{ color: "primary.main" }}>Venue Owner</span>
            </Typography>
            <Typography
              // variant="h6"
              gutterBottom
              sx={{ mb: 5, color: "black.text" }}
            >
              Welcome back! Log in and continue your journey.
            </Typography>
          </Box>
        </Container>
        <Container maxWidth="sm">
          <Box sx={{ mt: 7 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                required
                fullWidth
                id="workMail"
                placeholder="user@workapp.com"
                margin="normal"
                variant="outlined"
                type="email"
                label="Work Mail"
                value={workMail}
                onChange={(e) => setWorkMail(e.target.value)}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  style: {
                    borderRadius: "10px",
                  },
                }}
              />

              <TextField
                required
                fullWidth
                id="createPassword"
                placeholder="Enter your password"
                margin="normal"
                variant="outlined"
                type="password"
                label="Password"
                value={createPassword}
                onChange={(e) => setCreatePassword(e.target.value)}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  style: {
                    borderRadius: "10px",
                  },
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: 1,
                  mb: 6,
                }}
              >
                <Link href="#" color="primary" variant="body2">
                  Forgot Password?
                </Link>
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  borderRadius: "8px",
                  mt: 2,
                  backgroundColor: isFormValid()
                    ? "primary.main"
                    : "grey.border",
                  color: isFormValid() ? "white" : "grey.text",
                }}
                disabled={!isFormValid()}
              >
                Log in
              </Button>
            </form>

            <Typography
              variant="body2"
              sx={{ fontSize: "1.4rem", mt: 2, color: "grey.text " }}
            >
              Don't have an account?{" "}
              <Link href="#" color="primary">
                Register.
              </Link>
            </Typography>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default Login;
