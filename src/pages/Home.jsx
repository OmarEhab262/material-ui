import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../app/userSlice";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosUser from "../config/axiosUser";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DialogCompo from "../components/DialogCompo";
import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  console.log("selectedCard: ", selectedCard);

  const theme = useTheme(); // Access the theme to use custom colors
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.user?.id);
  const queryClient = useQueryClient(); // Initialize query client for refetching

  // Function to fetch user data
  const fetchUserData = async (userId) => {
    const response = await axiosUser.get(`/users/${userId}`);
    return response.data;
  };

  // Use React Query to fetch user data
  const { data, isLoading, isError } = useQuery(
    ["user", userId],
    () => fetchUserData(userId),
    {
      enabled: !!userId, // Fetch data only if userId is available
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  // Function to delete a card
  const deleteCardFromUser = async ({ userId, cardId }) => {
    // Fetch the current user data
    const userResponse = await axiosUser.get(`/users/${userId}`);
    const userData = userResponse.data;

    // Remove the card from the user's card array
    const updatedUserData = {
      ...userData,
      card: userData.card.filter((card) => card.id !== cardId),
    };

    // Send the updated user data back to the server
    const response = await axiosUser.put(`/users/${userId}`, updatedUserData);
    return response.data;
  };

  const mutation = useMutation(deleteCardFromUser, {
    onSuccess: () => {
      // Refetch user data to update UI
      queryClient.invalidateQueries(["user", userId]);
    },
    onError: (error) => {
      console.error("Error deleting card:", error);
    },
  });

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error loading data</Typography>;

  const handleDeleteCard = (cardId) => {
    mutation.mutate({ userId, cardId });
    dispatch(deleteCard(cardId));
  };

  const handleEdit = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  return (
    <Box>
      {data?.card?.map((card) => (
        <Paper
          key={card.id}
          elevation={3}
          className="flex w-[366px] justify-between px-5 m-2 pb-3 pt-1"
        >
          <div className="flex flex-col gap-2 justify-between">
            <ModeEditIcon
              className="mt-2 cursor-pointer"
              onClick={() => handleEdit(card)}
            />
            <Typography variant="h5">{card.name}</Typography>
          </div>
          <Box className="flex items-end gap-2 flex-col">
            <IconButton color="error" onClick={() => handleDeleteCard(card.id)}>
              <CloseIcon fontSize="small" />
            </IconButton>
            <Typography variant="h5" className="pr-2 text-gray-500">
              ${card.price}
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
      ))}
      {data?.card?.length === 0 && (
        <Typography className="text-center">No cards found</Typography>
      )}

      <DialogCompo
        open={open}
        handleClose={() => setOpen(false)}
        name={selectedCard?.name}
        price={selectedCard?.price}
        id={selectedCard?.id}
        userId={userId}
      />
    </Box>
  );
};

export default Home;
