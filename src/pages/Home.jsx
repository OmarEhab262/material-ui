import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

const Home = () => {
  const theme = useTheme(); // Access the theme to use custom colors
  console.log("theme: ", theme.palette.omar);

  return (
    <Box>
      <Paper
        elevation={3}
        className="flex w-[366px] items-end justify-between gap-10 px-5 m-2 pb-3 pt-1"
      >
        <Typography variant="h5">GYM</Typography>
        <Box className="flex items-end gap-2 flex-col">
          <IconButton color="error">
            <CloseIcon fontSize="small" />
          </IconButton>
          <Typography variant="h5" className="pr-2 text-gray-500">
            $100
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.palette.omar.main,
              color: theme.palette.omar.text.primary,
              "&:hover": {
                bgcolor: theme.palette.omar.text.secondary,
              },
            }}
          >
            Buy Now
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Home;
