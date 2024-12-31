import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import backgroundIcon from "../../assets/images/background_icon.svg";
import { useTheme } from "@mui/material/styles";
import MessageCard from "../onboarding/components/MessageCard";
import Email from "../../components/RegistrationSuccessfulMessage";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

function EmailVerificationSuccessful() {
  const theme = useTheme();

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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
          >
            {" "}
            <MessageCard
              loaderComponent={
                <MarkEmailReadIcon
                  sx={{
                    fontSize: 60,
                    mt: 4,
                    color: theme.palette.green.text,
                  }}
                />
              }
              primaryText={"Email Verification Successful!"}
              secondaryText={
                "Lets start the listing process and there should be a button which says start now."
              }
              buttonText={"Start Now"}
              buttonHref={"/onboarding"}
            />
          </Box>
        </Container>
      </div>
    </>
  );
}

export default EmailVerificationSuccessful;
