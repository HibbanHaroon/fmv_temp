import { Box } from "@mui/material";

function GradientBlob({
  positionHorizontal = "left",
  positionVertical = "top",
}) {
  const getPositionHorizontalStyle = () => {
    if (positionHorizontal === "left") {
      return { left: 0 };
    } else if (positionHorizontal === "right") {
      return { right: 0 };
    }
    return {};
  };

  const getPositionVerticalStyle = () => {
    if (positionVertical === "top") {
      return { top: 0 };
    } else if (positionVertical === "bottom") {
      return { bottom: 0 };
    }
    return {};
  };

  return (
    <Box
      sx={{
        background: "radial-gradient(50% 50% at 50% 50%, #ff385c80, #f3afbc80)",
        borderRadius: "50%",
        filter: "blur(110px)",
        width: "200px",
        height: "200px",
        position: "absolute",
        ...getPositionHorizontalStyle(),
        ...getPositionVerticalStyle(),
      }}
    ></Box>
  );
}

export default GradientBlob;
