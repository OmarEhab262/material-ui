import { Box, IconButton, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const Home = () => {
  return (
    <Box className="">
      <Paper
        elevation={3}
        className="flex w-[366px] items-end justify-between gap-10 px-5 m-2 pb-3 pt-1 "
      >
        <Typography variant="h5" component={"h5"}>
          GYM
        </Typography>
        <Box className="flex items-end gap-2 flex-col ">
          <IconButton color="error">
            <CloseIcon fontSize="small" />
          </IconButton>
          <Typography
            variant="h5"
            component={"h1"}
            className="pr-2 text-gray-500"
          >
            $100
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Home;
