import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

const MuiTextField = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("name: ", name);
    if (name === "") {
      setError(true);
    } else {
      setError(false);
    }
  };
  const handelChange = (e) => {
    setName(e.target.value);
    if (name === "") {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="column">
        <TextField label="name" variant="outlined" color="error" />
        <TextField label="name" variant="filled" color="error" />
        <TextField label="name" variant="standard" color="error" />
        <TextField label="name" variant="standard" color="error" required />
        <TextField
          label="name"
          variant="standard"
          color="error"
          required
          helperText="not forget this input"
        />
      </Stack>
      <TextField
        type="password"
        label="password"
        variant="standard"
        color="error"
        required
        helperText="not forget this input"
      />
      <TextField
        type="text"
        label="read only"
        variant="standard"
        color="error"
        disabled
      />
      <Stack spacing={2}>
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
          variant="outlined" // or "filled" or "standard" based on your design needs
        />
        <TextField
          label="Amount"
          // placeholder
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </Stack>
      <Stack spacing={2}>
        <form onSubmit={handelSubmit}>
          <TextField
            label="name"
            variant="standard"
            error={error}
            helperText="not forget this input"
            onChange={handelChange}
            value={name}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
