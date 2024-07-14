import React, { useState, useEffect } from "react";
import { Card, Box, Button } from "@mui/material";
import TitleDescriptionCoupon from "../components/TitleDescriptionCoupon";
import MultiChipSelector from "../components/MultiChipSelector";
import MessageCard from "../components/MessageCard";
import CircularProgressLoader from "../../../components/CircularProgressLoader";
import RestaurantCard from "../components/RestaurantCard";
import LabelledRadioGroup from "../components/LabelledRadioGroup";
import { useTheme } from "@mui/material";
import VenueCard from "../components/VenueCard";

function MultipleFlow({ activeStep, handleContinue, toggleBackButton }) {
  const theme = useTheme();
  const [partOfGroup, setPartOfGroup] = useState("no");
  const [sameLocation, setSameLocation] = useState("no");
  const [venueType, setVenueType] = useState("no");
  const [withAlcoholNumber, setWithAlcoholNumber] = useState(0);
  const [withoutAlcoholNumber, setWithoutAlcoholNumber] = useState(0);
  const [quantityNumber, setQuantityNumber] = useState(0);
  const [selectedChips, setSelectedChips] = useState([]);

  //   States for Rendering different Views for Multiple Flow
  const [restaurantsView, setRestaurantsView] = useState(false);
  const [restaurantsVenueView, setRestaurantVenueView] = useState(false);
  const [venueView, setVenueView] = useState(false);
  const [kidsVenueView, setKidsVenueView] = useState(false);

  // Need this to display another component between activeStep === 3 and 4 of the normal flow
  const [showAdditionalStep, setShowAdditionalStep] = useState(true);

  let isRestaurantsSelected = false;
  let hasOtherSelections = false;
  let isOnlyOneSelection = false;
  let isKidsPlayAreaSelected = false;

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

  const handleQuantityNumberChange = (event) => {
    setQuantityNumber(event.target.value);
  };

  const handleVenueTypeChange = (event) => {
    setVenueType(event.target.value);
  };

  useEffect(() => {
    isRestaurantsSelected = selectedChips.includes("Restaurants, Cafe's & Bar");
    isOnlyOneSelection = selectedChips.length == 1;
    hasOtherSelections = selectedChips.length >= 1;
    isKidsPlayAreaSelected = selectedChips.includes("Kids Play Area");

    // Using these setFunctions as radio buttons, only one true at a time.
    if (isRestaurantsSelected && isOnlyOneSelection) {
      setRestaurantsView(true);
      setRestaurantVenueView(false);
      setVenueView(false);
      setKidsVenueView(false);

      //   Don't need to display the additional step for restaurants view
      setShowAdditionalStep(false);
    } else if (
      isRestaurantsSelected &&
      hasOtherSelections &&
      !isKidsPlayAreaSelected
    ) {
      setRestaurantsView(false);
      setRestaurantVenueView(true);
      setVenueView(false);
      setKidsVenueView(false);

      //   Must display the additional step for restaurants view
      setShowAdditionalStep(true);
    } else if (
      !isRestaurantsSelected &&
      !isKidsPlayAreaSelected &&
      hasOtherSelections
    ) {
      setRestaurantsView(false);
      setRestaurantVenueView(false);
      setVenueView(true);
      setKidsVenueView(false);
    } else if (isKidsPlayAreaSelected && !isRestaurantsSelected) {
      setRestaurantsView(false);
      setRestaurantVenueView(false);
      setVenueView(false);
      setKidsVenueView(true);
    } else {
      setRestaurantsView(false);
      setRestaurantVenueView(false);
      setVenueView(false);
      setKidsVenueView(false);
    }
  }, [selectedChips]);

  //   To hide the Back Button on the Message View
  useEffect(() => {
    if (activeStep === 5) {
      toggleBackButton(false);
    } else {
      toggleBackButton(true);
    }
  }, [activeStep, toggleBackButton]);

  const toggleAdditionalStep = () => {
    setShowAdditionalStep(!showAdditionalStep);
  };

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
          {/* Remove Same Location Radio Group if Only Restaurant is selected */}
          {/* Display Restaurant View only if Restaurants View or Restaurants Venue View */}
          {(restaurantsView || restaurantsVenueView) && (
            <RestaurantCard
              isSameLocation={restaurantsView ? true : false}
              sameLocation={restaurantsView ? sameLocation : null}
              handleSameLocationChange={
                restaurantsView ? handleSameLocationChange : null
              }
              description={"Cafes, bars, restaurants and food places."}
              withAlcoholNumber={withAlcoholNumber}
              withoutAlcoholNumber={withoutAlcoholNumber}
              handleWithAlcoholNumberChange={handleWithAlcoholNumberChange}
              handleWithoutAlcoholNumberChange={
                handleWithoutAlcoholNumberChange
              }
            />
          )}

          {/* Display Venue Card for Restaurant & Venue View */}
          {(restaurantsVenueView || venueView) && (
            <VenueCard
              isLocation={true}
              labelText={"Are your venues at the same location?"}
              sameLocation={sameLocation}
              handleSameLocationChange={handleSameLocationChange}
              isOtherText={"true"}
              otherText={
                "Choose the total no. of venue available in your property"
              }
              toolTipText={
                "A multi-venue is a complex or facility that houses multiple event spaces within the same location, excluding any areas designated for restaurant services."
              }
              quantityNumber={quantityNumber}
              handleQuantityNumberChange={handleQuantityNumberChange}
              title={"Venues"}
              description={"Ballroom, Dance Studio +4"}
            />
          )}
        </Box>
      )}
      {activeStep === 4 && (
        <Box sx={{ width: "100%" }}>
          <TitleDescriptionCoupon isCoupon={true} />
          {!restaurantsView && showAdditionalStep && (
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
                label={"Are the venues part establishment complex or building?"}
                value={venueType}
                handleChange={handleVenueTypeChange}
              />
            </Card>
          )}
          {!showAdditionalStep && (
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
          )}
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
            onClick={() => {
              if (activeStep === 4 && showAdditionalStep) {
                toggleAdditionalStep();
              } else {
                handleContinue();
              }
            }}
          >
            Continue
          </Button>
        </Box>
      )}
    </>
  );
}

export default MultipleFlow;
