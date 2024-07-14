import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

function LinearProgressBar({ value }) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey.border,
    },
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: theme.palette.green.text,
    },
  }));

  return (
    <>
      <BorderLinearProgress variant="determinate" value={value} />
    </>
  );
}

export default LinearProgressBar;
