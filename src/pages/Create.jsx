import SendIcon from "@mui/icons-material/Send";
import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import { purple } from "@mui/material/colors";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[900]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[500],
  },
}));
const Create = () => {
  return (
    <Box
      component={"form"}
      className="md:w-[500px] w-full flex flex-col gap-10 items-center justify-center"
    >
      <TextField
        fullWidth
        label="Transaction Title"
        id="filled-start-adornment"
        variant="filled"
      />
      <TextField
        fullWidth
        label="Amount"
        id="filled-start-adornment"
        variant="filled"
        type="number"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <ColorButton variant="contained">
        Create <SendIcon sx={{ ml: 2 }} fontSize="small" />
      </ColorButton>
    </Box>
  );
};

export default Create;
