import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const DialogCompo = ({ open, handleClose, name, price, id, userId }) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name, price },
  });

  const mutation = useMutation(
    (updatedCard) => {
      return axios
        .get(`http://localhost:4000/users/${userId}`)
        .then((response) => {
          const user = response.data;
          const updatedCards = user.card.map((card) =>
            card.id === id ? { ...card, ...updatedCard } : card
          );
          return axios.put(`http://localhost:4000/users/${userId}`, {
            ...user,
            card: updatedCards,
          });
        });
    },
    {
      onSuccess: () => {
        console.log("Card updated successfully!");
        handleClose();
        queryClient.invalidateQueries("user");
      },
      onError: (error) => {
        console.error("Error updating card:", error);
      },
    }
  );

  const onSubmit = (data) => {
    // Handle form submission here
    mutation.mutate(data);
  };

  // Reset form values when dialog opens
  useEffect(() => {
    reset({ name, price });
  }, [name, price, reset]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Card</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Change Name"
            type="text"
            fullWidth
            variant="standard"
            {...register("name")}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="price"
            name="price"
            label="Change Price"
            type="number"
            fullWidth
            variant="standard"
            {...register("price")}
          />
        </DialogContent>
        <DialogActions
          sx={{ justifyContent: "space-between", padding: "0 24px 24px 24px" }}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default DialogCompo;
