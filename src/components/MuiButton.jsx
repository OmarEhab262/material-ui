import {
  Stack,
  Button,
  Typography,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import {
  FormatUnderlined,
  FormatItalic,
  FormatBold,
  Send,
} from "@mui/icons-material";
import { useState } from "react";

const MuiButton = () => {
  const [formats, setFormats] = useState([]);
  console.log("formats: ", formats);
  const handelFormatChange = (_envent, updatedFormats) => {
    setFormats(null);
    setFormats(updatedFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Typography variant="h6">variant</Typography>
        <Button variant="text">Text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Typography variant="h6">color</Typography>
        <Button variant="contained" color="primary">
          contained
        </Button>
        <Button variant="contained" color="error">
          contained
        </Button>
        <Button variant="contained" color="info">
          contained
        </Button>
        <Button variant="contained" color="inherit">
          contained
        </Button>
        <Button variant="contained" color="secondary">
          contained
        </Button>
        <Button variant="contained" color="success">
          contained
        </Button>
        <Button variant="contained" color="warning">
          contained
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Typography variant="h6">size</Typography>
        <Button variant="contained" color="primary" size="small">
          contained
        </Button>
        <Button variant="contained" color="primary" size="medium">
          contained
        </Button>
        <Button variant="contained" color="primary" size="large">
          contained
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Typography variant="h6">Icon</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Send />}
          size="small"
        >
          Send
        </Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<Send />}
          size="small"
        >
          Send
        </Button>
        <IconButton>
          <Send />
        </IconButton>
        <IconButton>
          <Send color="secondary" size="large" />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          value={formats}
          onChange={handelFormatChange}
          color="success"
          orientation="vertical"
        >
          <ToggleButton value="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
