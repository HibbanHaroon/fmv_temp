// src/components/Message.js

import React from "react";
import { Card, Box, Typography, Button, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const MessageCard = ({
  loaderComponent,
  primaryText,
  secondaryText,
  buttonText,
  buttonHref,
  richText,
  richLinkText,
  richLinkHref,
}) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        width: { xs: "90%", md: "40%" },
        backgroundColor: theme.palette.common.white,
        borderRadius: "8px",
        p: 2,
        px: { xs: 2, md: 8 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: { xs: 10, md: 4 },
      }}
    >
      <Box>{loaderComponent}</Box>
      <Box
        sx={{
          width: { xs: "90%", md: "100%" },
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {primaryText && (
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              fontSize: { xs: "1.5rem", md: "1.9rem" },
            }}
          >
            {primaryText}
          </Typography>
        )}
        {secondaryText && (
          <Typography
            variant="body1"
            sx={{
              fontWeight: "400",
              color: theme.palette.grey.text,
              fontSize: "1.1rem",
              mb: 3,
            }}
          >
            {secondaryText}
          </Typography>
        )}
        {buttonText && buttonHref && (
          <Link href={buttonHref} sx={{ width: "90%", textDecoration: "none" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: "100%",
                borderRadius: "10px",
                height: "40px",
                textTransform: "none",
              }}
            >
              {buttonText}
            </Button>
          </Link>
        )}
        {richText && (
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.9rem",
              color: theme.palette.grey.text,
            }}
          >
            {richText}{" "}
            <Link
              href={richLinkHref}
              color="primary"
              sx={{ textDecoration: "none" }}
            >
              {richLinkText}
            </Link>
          </Typography>
        )}
      </Box>
    </Card>
  );
};

export default MessageCard;
