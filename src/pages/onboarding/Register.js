import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Link from "@mui/material/Link";
import backgroundIcon from "../../assets/images/background_icon.svg";

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // osama ka part
  };

  const theme = useTheme();

  return (
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
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Please fill in the details below to{" "}
            <span style={{ color: theme.palette.primary.main }}>Register</span>
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: theme.palette.grey.text }}
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
              InputLabelProps={{ shrink: true }}
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
            />

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.grey.text, fontSize: "1.2rem" }}
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

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large" // Adjust size as needed (small, medium, large)
              sx={{ mt: 2 }}
            >
              Register
            </Button>
          </form>

          <Typography
            variant="body2"
            sx={{ fontSize: "1.4rem", mt: 2, color: theme.palette.grey.text }}
          >
            Already have an account?{" "}
            <Link href="#" color="primary">
              Login.
            </Link>
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default Register;
