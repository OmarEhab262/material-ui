import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const [open, setOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    try {
      console.log("data: ", data);

      // Fetch all users from the database
      const response = await axios.get("http://localhost:4000/users");
      const users = response.data;

      // Find the user by email
      const user = users.find((user) => user.email === data.email);

      if (user) {
        // Check if the password matches
        if (user.password === data.password) {
          console.log("Email and password match, logging in...");
          setAlertSeverity("success");
          setAlertMessage("Login successful!");
          localStorage.setItem("user", JSON.stringify(user));
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          // Perform login logic here (e.g., redirecting to another page)
        } else {
          console.log("Password is incorrect.");
          setAlertSeverity("error");
          setAlertMessage("Incorrect password.");
        }
      } else {
        console.log("Email does not exist.");
        setAlertSeverity("error");
        setAlertMessage("Email does not exist.");
      }

      setOpen(true); // Open Snackbar with message
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
      setAlertSeverity("error");
      setAlertMessage("An error occurred. Please try again.");
      setOpen(true); // Open Snackbar with error message
    }
  };

  return (
    <Box className="flex flex-col justify-center items-center p-5">
      <Typography variant="h3">Welcome to our app! Please log in.</Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col w-full mt-[50px] md:w-[450px] border-[3px] p-5 rounded-lg"
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: "20px", textAlign: "center" }}
        >
          Log In
        </Typography>
        <TextField
          required={!!errors.email}
          error={!!errors.email}
          fullWidth
          {...register("email", { required: "This field is required" })}
          label="Email"
          id="email"
          variant="standard"
          sx={{ marginBottom: "10px" }}
          helperText={
            <Typography color="error" component="span">
              {errors.email?.message}
            </Typography>
          }
        />
        <TextField
          required={!!errors.password}
          error={!!errors.password}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 5,
              message: "Password must be at least 5 characters long",
            },
          })}
          fullWidth
          label="Password"
          type="password"
          id="password"
          variant="standard"
          sx={{ marginBottom: "20px" }}
          helperText={
            <Typography color="error" component="span">
              {errors.password?.message}
            </Typography>
          }
        />

        <Box sx={{ marginTop: "20px" }}>
          <Typography variant="body2" className="flex gap-1">
            Don&apos;t have an account?
            <Typography
              component={Link}
              to="/signup"
              variant="body2"
              color="primary"
              sx={{ textDecoration: "none" }}
            >
              Sign up here.
            </Typography>
          </Typography>
        </Box>

        <Box
          sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "30%", mr: "auto", ml: "auto" }}
            color="primary"
          >
            Log In
          </Button>
        </Box>
      </Box>

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
    </Box>
  );
};

export default Login;
