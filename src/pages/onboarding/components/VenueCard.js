import { Card, Box, Typography } from "@mui/material";
import Tooltip from "../../../components/Tooltip";
import TextfieldNumber from "./TextfieldNumber";
import { useTheme } from "@mui/material/styles";
import LabelledRadioGroup from "./LabelledRadioGroup";

function VenueCard({
  isLocation = false,
  sameLocation = null,
  handleSameLocationChange = null,
  isOtherText = false,
  otherText = null,
  quantityNumber,
  handleQuantityNumberChange,
  title,
  description,
}) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        width: "90%",
        p: "2rem",
        mt: "2rem",
        border: `2px solid ${theme.palette.grey.border}`,
        borderRadius: 3,
        boxShadow: "none",
      }}
    >
      {isLocation && (
        <LabelledRadioGroup
          label={"Are your venues at the same location?"}
          value={sameLocation}
          handleChange={handleSameLocationChange}
        />
      )}

      {isOtherText && (
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Typography
            variant="body1"
            gutterBottom
            fontWeight="500"
            align="left"
            sx={{
              fontSize: {
                xs: "subtitle2.fontSize",
                md: "body1.fontSize",
              },
            }}
          >
            {otherText}
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="body1"
              gutterBottom
              fontWeight="600"
              align="left"
              sx={{
                fontSize: {
                  xs: "subtitle2.fontSize",
                  md: "body1.fontSize",
                },
              }}
            >
              {title}
            </Typography>
            <Tooltip text={"Hello"} />
          </Box>
          <Typography
            variant="body1"
            gutterBottom
            fontWeight="400"
            align="left"
            sx={{
              fontSize: {
                xs: "subtitle2.fontSize",
                md: "body1.fontSize",
              },
              color: "grey.text",
            }}
          >
            {description}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            width: { xs: "100%", md: "40%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "43%",
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
              Quantity
            </Typography>
            <TextfieldNumber
              value={quantityNumber}
              onChange={handleQuantityNumberChange}
            />
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default VenueCard;
