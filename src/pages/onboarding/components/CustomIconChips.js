import React, { useState } from "react";
import { Chip, Box } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";

export default function CustomIconChips({
  chipLabels = [],
  onChipsChange,
  isSelectOneChip = false,
}) {
  const theme = useTheme();
  const [selectedChips, setSelectedChips] = useState(
    new Array(chipLabels.length).fill(false)
  );

  const handleClick = (index) => {
    let updatedSelectedChips;

    if (isSelectOneChip) {
      if (selectedChips[index]) {
        updatedSelectedChips = new Array(chipLabels.length).fill(false);
      } else {
        updatedSelectedChips = new Array(chipLabels.length).fill(false);
        updatedSelectedChips[index] = true;
      }
    } else {
      updatedSelectedChips = [...selectedChips];
      updatedSelectedChips[index] = !updatedSelectedChips[index];
    }

    if (
      isSelectOneChip &&
      updatedSelectedChips.filter((chip) => chip).length > 1
    ) {
      return;
    }

    setSelectedChips(updatedSelectedChips);
    onChipsChange(updatedSelectedChips);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "100%",
      }}
    >
      {chipLabels.map((label, index) => (
        <Chip
          key={index}
          label={label}
          onClick={() => handleClick(index)}
          deleteIcon={selectedChips[index] ? <DoneIcon /> : <AddIcon />}
          onDelete={() => handleClick(index)}
          sx={{
            borderRadius: "24px",
            border: `2px solid ${
              selectedChips[index]
                ? theme.palette.green.text
                : theme.palette.grey.border
            }`,
            color: selectedChips[index]
              ? theme.palette.green.text
              : theme.palette.grey.text,
            backgroundColor: theme.palette.common.white,
            height: { md: "38px" },
            margin: { xs: "3px", md: "6px" },
            "&.MuiChip-clickable:hover": {
              backgroundColor: theme.palette.common.white,
            },
            "& .MuiChip-deleteIcon": {
              color: selectedChips[index]
                ? theme.palette.green.text
                : theme.palette.grey.text,
              fontSize: { xs: "0.7rem", md: "1rem" },
            },
          }}
        />
      ))}
    </Box>
  );
}
