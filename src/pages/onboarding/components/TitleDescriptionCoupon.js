import { Button, Typography } from "@mui/material";
import { ReactComponent as CouponIcon } from "../../../assets/images/coupon_icon.svg";

function TitleDescriptionCoupon({ isCoupon = false }) {
  return (
    <>
      <Typography
        variant="h5"
        variantMapping={{
          xs: "h5",
          md: "h4",
        }}
        gutterBottom
        sx={{
          mt: { xs: 3, md: 3 },
          fontWeight: "600",
        }}
      >
        Tell us more about your venue
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          fontWeight: "500",
          textAlign: "center",
          color: "grey.text",
          mb: 5,
        }}
      >
        This will help us find a better plan for you
      </Typography>
      {isCoupon && (
        <Button
          variant="contained"
          startIcon={<CouponIcon />}
          sx={{
            py: 1,
            backgroundColor: "green.light",
            color: "green.text",
            textTransform: "none",
            mt: "1rem",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "rgba(3, 159, 141, 0.2)",
            },
          }}
          fullWidth
        >
          Start your Free 6 Month Trial
        </Button>
      )}
    </>
  );
}

export default TitleDescriptionCoupon;
