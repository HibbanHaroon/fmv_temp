import React from "react";
import chipLabels from "../../../constants/chipLabels";
import CustomIconChips from "./CustomIconChips";
import { Box, Typography, useTheme } from "@mui/material";

function MultiChipSelector({ onSelectedChipsChange }) {
  const theme = useTheme();

  const handleChipsChange = (selectedChips) => {
    const selectedChipLabels = chipLabels.filter(
      (_, index) => selectedChips[index]
    );
    onSelectedChipsChange(selectedChipLabels);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "95%" },
        mt: 4,
        p: 2,
        borderRadius: "8px",
        border: { md: `2px solid ${theme.palette.grey.border}` },
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        overflow: "hidden",
      }}
    >
      <Typography sx={{ textAlign: "left", pl: "7px", fontWeight: "550" }}>
        Select the type of venues you have
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          mt: 2,
        }}
      >
        <CustomIconChips
          chipLabels={chipLabels}
          onChipsChange={handleChipsChange}
        />
      </Box>
    </Box>
  );
}

export default MultiChipSelector;
