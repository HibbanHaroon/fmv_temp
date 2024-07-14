import { Box, Typography, Card } from "@mui/material";
import TextfieldNumber from "./TextfieldNumber";
import { useTheme } from "@mui/material/styles";
import LabelledRadioGroup from "./LabelledRadioGroup";

function RestaurantCard({
  isSameLocation = false,
  sameLocation = null,
  handleSameLocationChange = null,
  description,
  withAlcoholNumber,
  withoutAlcoholNumber,
  handleWithAlcoholNumberChange,
  handleWithoutAlcoholNumberChange,
}) {
  const theme = useTheme();
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: sameLocation ? "column" : "row",
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
      {isSameLocation && (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            mb: 3,
          }}
        >
          <LabelledRadioGroup
            label={"Are your venues at the same location?"}
            value={sameLocation}
            handleChange={handleSameLocationChange}
          />
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          width: "100%",
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
            {description}
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
      </Box>
    </Card>
  );
}

export default RestaurantCard;
