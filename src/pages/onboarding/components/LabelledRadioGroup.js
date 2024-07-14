import {
  Box,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import RadioButton from "../../../components/RadioButton";

function LabelledRadioGroup({ label, value, handleChange }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
      }}
    >
      <Typography
        variant="body1"
        gutterBottom
        fontWeight="600"
        align="left"
        sx={{
          fontSize: {
            xs: "subtitle2.fontSize",
            md: "body1.fontSize",
          },
          mt: 1,
        }}
      >
        {label}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          width: { xs: "100%", md: "40%" },
        }}
      >
        {/* Radio Buttons here */}
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="yes"
              control={<RadioButton />}
              label="Yes"
            />
            <FormControlLabel value="no" control={<RadioButton />} label="No" />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default LabelledRadioGroup;
