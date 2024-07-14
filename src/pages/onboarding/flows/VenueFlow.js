import React, { useState } from "react";
import { Box } from "@mui/material";
import TypeOfVenue from "../components/TypeOfVenue";
import IndividualFlow from "./IndividualFlow";
import MultipleFlow from "./MultipleFlow";

function VenueFlow({ activeStep, handleContinue, toggleBackButton }) {
  const [selectedButton, setSelectedButton] = useState(null);

  // For Venue Flows
  const [displayIndividualFlow, setDisplayIndividualFlow] = useState(false);
  const [displayMultipleFlow, setDisplayMultipleFlow] = useState(false);

  // For Individual Flow
  const handleButton1Click = () => {
    setSelectedButton(1);
    setDisplayIndividualFlow(true);
    handleContinue();
  };

  // For Multiple Flow
  const handleButton2Click = () => {
    setSelectedButton(2);
    setDisplayMultipleFlow(true);
    handleContinue();
  };

  return (
    <>
      {activeStep === 1 && (
        <Box sx={{ width: { xs: "100%", md: "45%" } }}>
          <TypeOfVenue
            title={"Type of Venue"}
            description={
              "Choose the type of Venue you would want to list, this will help us find a suitable plan for your needs"
            }
            buttonLabel1={"Individual Venue"}
            buttonLabel2={"Multiple Venue"}
            handleButton1Click={handleButton1Click}
            handleButton2Click={handleButton2Click}
            selectedButton={selectedButton}
          />
        </Box>
      )}

      {displayIndividualFlow && <IndividualFlow />}
      {displayMultipleFlow && (
        <MultipleFlow
          activeStep={activeStep}
          handleContinue={handleContinue}
          toggleBackButton={toggleBackButton}
        />
      )}
    </>
  );
}

export default VenueFlow;
