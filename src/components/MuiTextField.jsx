import { Stack, TextField, InputAdornment } from "@mui/material";

const MuiTextField = () => {
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
      <Stack spacing={2}></Stack>
    </Stack>
  );
};

export default MuiTextField;
