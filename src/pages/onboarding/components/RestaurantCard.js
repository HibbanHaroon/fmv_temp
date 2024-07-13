import { Container, Box, Button, Typography, Card } from "@mui/material";
import TextfieldNumber from "./TextfieldNumber";
import { useTheme } from "@mui/material/styles";

function RestaurantCard({
  withAlcoholNumber,
  withoutAlcoholNumber,
  handleWithAlcoholNumberChange,
  handleWithoutAlcoholNumberChange,
}) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        backgroundColor: "white",
        width: "90%",
        p: "2rem",
        mt: "2rem",
        border: `2px solid ${theme.palette.grey.border}`,
        borderRadius: 3,
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          gutterBottom
          fontWeight="600"
          align="left"
          sx={{
            fontSize: { xs: "subtitle2.fontSize", md: "body1.fontSize" },
          }}
        >
          Restaurants
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          fontWeight="400"
          align="left"
          sx={{
            fontSize: { xs: "subtitle2.fontSize", md: "body1.fontSize" },
            color: "grey.text",
          }}
        >
          Cafes, bars, restaurants and food places.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          width: { xs: "100%", md: "40%" },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Typography
            variant="body1"
            gutterBottom
            fontWeight="400"
            align="center"
            sx={{
              fontSize: {
                xs: "subtitle2.fontSize",
                md: "body1.fontSize",
              },
            }}
          >
            With Alcohol
          </Typography>
          <TextfieldNumber
            value={withAlcoholNumber}
            onChange={handleWithAlcoholNumberChange}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            ml: 5,
          }}
        >
          <Typography
            variant="body1"
            gutterBottom
            fontWeight="400"
            align="center"
            sx={{
              fontSize: {
                xs: "subtitle2.fontSize",
                md: "body1.fontSize",
              },
            }}
          >
            Without Alcohol
          </Typography>
          <TextfieldNumber
            value={withoutAlcoholNumber}
            onChange={handleWithoutAlcoholNumberChange}
          />
        </Box>
      </Box>
    </Card>
  );
}

export default RestaurantCard;
