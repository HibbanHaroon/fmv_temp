import chipLabels from "../../../constants/chipLabels";
import CustomIconChips from "./CustomIconChips";
import { Box, Typography, useTheme } from "@mui/material";

function MultiChipSelector() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", md: "90%" },
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
            gap: "1rem", // Add spacing between chips
            mt: 2,
          }}
        >
          <CustomIconChips chipLabels={chipLabels} />
        </Box>
      </Box>
    </>
  );
}

export default MultiChipSelector;
