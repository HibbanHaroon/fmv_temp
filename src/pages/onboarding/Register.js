import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import backgroundIcon from "../../assets/images/background_icon.svg";

function Register() {
  const [fullName, setFullName] = useState("");
  const [workMail, setWorkMail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // osama ka part
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
        <Container>
          <Box sx={{ mt: 6 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ mt: 10, fontWeight: "bold" }}
            >
              Please fill in the details below to{" "}
              <span style={{ color: "primary.main" }}>Register</span>
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ mb: 10, color: "grey.text" }}
            >
              Ready to list your venue?
            </Typography>
          </Box>
        </Container>
        <Container maxWidth="sm">
          <Box sx={{ mt: 7 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                required
                fullWidth
                id="fullName"
                placeholder="Enter Full Name"
                margin="normal"
                variant="outlined"
                label="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                placeholder="Create a password"
                margin="normal"
                variant="outlined"
                type="password"
                label="Create Password"
                value={createPassword}
                onChange={(e) => setCreatePassword(e.target.value)}
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
                id="confirmPassword"
                placeholder="Re-enter your password"
                margin="normal"
                variant="outlined"
                type="password"
                label="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  style: {
                    borderRadius: "10px",
                  },
                }}
              />
              <Box sx={{ mb: 7 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                    />
                  }
                  label={
                    <Typography
                      variant="body1"
                      sx={{
                        color: "grey.text",
                        fontSize: "1.2rem",
                      }}
                    >
                      I agree to the{" "}
                      <Link href="#" color="primary">
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="#" color="primary">
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
                  mb: 3,
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
              sx={{ fontSize: "1.4rem", mt: 2, color: "grey.text" }}
            >
              Already have an account?{" "}
              <Link href="#" color="primary">
                Login.
              </Link>
            </Typography>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default Register;
