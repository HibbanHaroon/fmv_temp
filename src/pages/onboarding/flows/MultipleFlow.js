import React, { useState, useEffect } from "react";
import { Card, Box, Button } from "@mui/material";
import TitleDescriptionCoupon from "../components/TitleDescriptionCoupon";
import MultiChipSelector from "../components/MultiChipSelector";
import MessageCard from "../components/MessageCard";
import CircularProgressLoader from "../../../components/CircularProgressLoader";
import RestaurantCard from "../components/RestaurantCard";
import LabelledRadioGroup from "../components/LabelledRadioGroup";
import { useTheme } from "@mui/material";

function MultipleFlow({ activeStep, handleContinue, toggleBackButton }) {
  const theme = useTheme();
  const [partOfGroup, setPartOfGroup] = useState("no");
  const [sameLocation, setSameLocation] = useState("no");
  const [withAlcoholNumber, setWithAlcoholNumber] = useState(0);
  const [withoutAlcoholNumber, setWithoutAlcoholNumber] = useState(0);
  const [selectedChips, setSelectedChips] = useState([]);

  const handleWithAlcoholNumberChange = (event) => {
    setWithAlcoholNumber(event.target.value);
  };

  const handleWithoutAlcoholNumberChange = (event) => {
    setWithoutAlcoholNumber(event.target.value);
  };

  const handleSameLocationChange = (event) => {
    setSameLocation(event.target.value);
  };

  const handlePartOfGroupChange = (event) => {
    setPartOfGroup(event.target.value);
  };

  const handleSelectedChipsChange = (chips) => {
    setSelectedChips(chips);
  };

  //   For Restaurant Only flow
  const isOnlyRestaurantsSelected =
    selectedChips.length === 1 &&
    selectedChips[0] === "Restaurants, Cafe's & Bar";

  //   To hide the Back Button on the Message View
  useEffect(() => {
    if (activeStep === 5) {
      toggleBackButton(false);
    } else {
      toggleBackButton(true);
    }
  }, [activeStep, toggleBackButton]);

  return (
    <>
      {activeStep === 2 && (
        <Box sx={{ width: "100%" }}>
          <TitleDescriptionCoupon isCoupon={true} />
          <MultiChipSelector
            onSelectedChipsChange={handleSelectedChipsChange}
          />
        </Box>
      )}
      {activeStep === 3 && (
        <Box sx={{ width: "100%" }}>
          <TitleDescriptionCoupon isCoupon={true} />
          {/* Remove Same Location Radio Group if Restaurant is selected */}
          <RestaurantCard
            isSameLocation={isOnlyRestaurantsSelected ? true : false}
            sameLocation={isOnlyRestaurantsSelected ? sameLocation : null}
            handleSameLocationChange={
              isOnlyRestaurantsSelected ? handleSameLocationChange : null
            }
            description={"Cafes, bars, restaurants and food places."}
            withAlcoholNumber={withAlcoholNumber}
            withoutAlcoholNumber={withoutAlcoholNumber}
            handleWithAlcoholNumberChange={handleWithAlcoholNumberChange}
            handleWithoutAlcoholNumberChange={handleWithoutAlcoholNumberChange}
          />
        </Box>
      )}
      {activeStep === 4 && (
        <Box sx={{ width: "100%" }}>
          <TitleDescriptionCoupon isCoupon={true} />

          <Card
            style={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              backgroundColor: "white",
              width: { xs: "80%", md: "90%" },
              padding: "2rem",
              marginTop: "2rem",
              border: `2px solid ${theme.palette.grey.border}`,
              borderRadius: "12px",
              boxShadow: "none",
            }}
          >
            <LabelledRadioGroup
              label={"Are you part of a group?"}
              value={partOfGroup}
              handleChange={handlePartOfGroupChange}
            />
          </Card>
        </Box>
      )}
      {activeStep === 5 && (
        <MessageCard
          loaderComponent={<CircularProgressLoader color={"red"} />}
          primaryText={"Creating a plan suitable to your venue"}
          secondaryText={"Please wait for a moment..."}
        />
      )}
      {activeStep !== 5 && (
        <Box sx={{ width: "100%", mt: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              textTransform: "none",
              mt: "1rem",
              boxShadow: "none",
              width: { xs: "100%", md: "70%" },
            }}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </Box>
      )}
    </>
  );
}

export default MultipleFlow;
