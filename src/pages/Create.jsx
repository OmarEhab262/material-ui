import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  styled,
  TextField,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import { useMutation } from "react-query";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab"; // Import LoadingButton
import { addCard } from "../app/userSlice";

const ColorButton = styled(
  Button,
  LoadingButton
)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[900]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[500],
  },
}));

const Create = () => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.user?.id); // Get the user ID from Redux state

  const updateUserCard = async (data) => {
    // Fetch the current user data
    const userResponse = await axios.get(
      `http://localhost:4000/users/${userId}`
    );
    const userData = userResponse.data;

    // Create the new card object with a unique ID
    const newCard = {
      id: uuidv4(), // Generate a new unique ID
      name: data.card.name,
      price: data.card.price,
    };

    // Add the new card to the existing card array
    const updatedUserData = {
      ...userData,
      card: [...(userData.card || []), newCard],
    };

    // Send the updated user data back to the server
    const response = await axios.put(
      `http://localhost:4000/users/${userId}`,
      updatedUserData
    );
    return response.data;
  };

  const mutation = useMutation(updateUserCard, {
    onSuccess: () => {
      // Handle success, e.g., show a success message
      console.log("Card added successfully!");
      navigate("/");
    },
    onError: (error) => {
      // Handle error, e.g., show an error message
      console.error("Error adding card:", error);
    },
  });
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const transactionData = {
      card: {
        name: formData.get("title"),
        price: formData.get("amount"),
      },
    };
    dispatch(addCard(transactionData));
    // Call the mutation function
    mutation.mutate(transactionData);
  };

  const userIddasfd = useSelector((state) => state.user.card); // Get the user ID from Redux state
  const handleo = () => {
    console.log("userIddasfd: ", userIddasfd);
    const dfadfa = localStorage.getItem("user");
    console.log("dfadfa: ", JSON.parse(dfadfa));
    console.log("dfadfa: ", JSON.parse(dfadfa).card);
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
      className="md:w-[500px] w-full flex flex-col gap-10 items-center justify-center"
    >
      <Button variant="contained" onClick={handleo}>
        gaadfsfds
      </Button>
      <TextField
        name="title"
        fullWidth
        label="Transaction Title"
        id="filled-start-adornment"
        variant="filled"
      />
      <TextField
        name="amount"
        fullWidth
        label="Amount"
        id="filled-start-adornment"
        variant="filled"
        type="number"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      {mutation.isLoading ? (
        <ColorButton variant="contained" disabled={mutation.isLoading}>
          <CircularProgress size={24} sx={{ color: "white" }} />
        </ColorButton>
      ) : (
        <ColorButton
          type="submit"
          variant="contained"
          disabled={mutation.isLoading}
        >
          Create <SendIcon sx={{ ml: 2 }} fontSize="small" />
        </ColorButton>
      )}
    </Box>
  );
};

export default Create;
