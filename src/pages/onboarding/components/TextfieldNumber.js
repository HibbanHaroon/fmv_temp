import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./styles/TextfieldNumber.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function TextfieldNumber({ value, onChange }) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const handleIncrement = () => {
    onChange({ target: { value: Math.max(0, Number(value) + 1) } });
  };

  const handleDecrement = () => {
    onChange({ target: { value: Math.max(0, Number(value) - 1) } });
  };

  return (
    <div
      style={{
        display: "flex",
        paddingLeft: "1rem",
        border: `2px solid ${
          isFocused ? theme.palette.primary.main : theme.palette.primary.lighter
        }`,
        borderRadius: 12,
      }}
      onClick={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={-1} // To make div focusable
    >
      <input
        placeholder="00"
        min={0}
        value={value}
        onChange={onChange}
        type="number"
        style={{
          width: "100%",
          border: "none",
          outline: "none",
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <IconButton
          sx={{
            borderRadius: 0,
            padding: 0,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.lighter,
            borderTopRightRadius: 12,
          }}
          onClick={handleIncrement}
        >
          <ExpandLessIcon />
        </IconButton>
        <IconButton
          sx={{
            borderRadius: 0,
            padding: 0,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.lighter,
            borderBottomRightRadius: 12,
          }}
          onClick={handleDecrement}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>
    </div>
  );
}

TextfieldNumber.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextfieldNumber;
