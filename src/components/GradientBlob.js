import { Box } from "@mui/material";

function GradientBlob({ position, top = 0 }) {
  const getPositionStyle = () => {
    if (position === "left") {
      return { left: 0 };
    } else if (position === "right") {
      return { right: 0 };
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
        top: top,
        ...getPositionStyle(),
      }}
    ></Box>
  );
}

export default GradientBlob;
