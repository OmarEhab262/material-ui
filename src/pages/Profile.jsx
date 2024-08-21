import { Alert, Button, Snackbar, TextField, Typography } from "@mui/material";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const userId = useSelector((state) => state.user.user?.id);
  const queryClient = useQueryClient(); // For invalidating and refetching queries
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleClose = () => {
    setOpen(false);
  };
  // Fetch user data
  const { data, error, isLoading } = useQuery(
    ["users", userId],
    () =>
      axios
        .get(`http://localhost:4000/users/${userId}`)
        .then((res) => res.data),
    {
      enabled: !!userId, // Only run the query if userId is truthy
    }
  );

  // Mutation for updating user data
  const mutation = useMutation(
    (updatedUser) =>
      axios
        .put(`http://localhost:4000/users/${userId}`, updatedUser)
        .then((res) => res.data),
    {
      onSuccess: () => {
        // Invalidate and refetch the user query to get the latest data
        queryClient.invalidateQueries(["users", userId]);
        console.log("Profile updated successfully");
        setOpen(true);
        setAlertSeverity("success");
        setAlertMessage("Profile updated successfully");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      },
      onError: (error) => {
        console.error("Error updating user:", error);
        setOpen(true);
        setAlertSeverity("error");
        setAlertMessage("Error updating profile");
      },
    }
  );

  // Initialize form with default values
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      id: "",
      name: "",
      email: "",
      password: "",
      img: "",
    },
  });

  // Update form values when data is fetched
  useEffect(() => {
    if (data) {
      reset({
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        img: data.img,
      });
    }
  }, [data, reset]);

  // Handle form submission
  const onSubmit = (formData) => {
    mutation.mutate(formData);
  };

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error loading profile.</Typography>;

  return (
    <div className="w-full flex flex-col gap-5 p-5 px-10">
      <Typography variant="h3" className="text-center mb-10">
        Profile
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid md:grid-cols-2 grid-cols-1 gap-6"
      >
        <TextField
          className="w-full self-start"
          fullWidth
          id="id"
          label="ID"
          disabled
          {...register("id")}
          variant="filled"
        />
        <TextField
          className="w-full self-start"
          fullWidth
          id="email"
          label="Email"
          variant="filled"
          {...register("email")}
        />
        <TextField
          className="w-full self-start"
          fullWidth
          id="name"
          label="Name"
          variant="filled"
          {...register("name")}
        />
        <TextField
          className="w-full self-start"
          fullWidth
          id="password"
          label="Password"
          variant="filled"
          {...register("password")}
        />
        <TextField
          className="md:col-span-2 col-span-1 w-full self-start"
          fullWidth
          id="img"
          label="ImgUrl"
          variant="filled"
          {...register("img")}
        />
        <div className="md:col-span-2 col-span-1 md:w-[20%] w-full mx-auto">
          <Button type="submit" variant="contained" color="inherit" fullWidth>
            Save
          </Button>
        </div>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={1000} // 1 second
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={alertSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Profile;
