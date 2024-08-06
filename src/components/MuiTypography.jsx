import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <>
      <h1>MuiTypography</h1>
      <Typography variant="h1">h1 Typography</Typography>
      <Typography variant="h2">h2 Typography</Typography>
      <Typography variant="h3">h3 Typography</Typography>
      <Typography variant="h4">h4 Typography</Typography>
      <Typography variant="h5">h5 Typography</Typography>
      <Typography variant="h6">h6 Typography</Typography>
      <Typography variant="h6" component="h1" gutterBottom>
        h6 Typography but i h1 , gutterBottom give me padding bottom
      </Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, fugiat
        quas tempora exercitationem ullam eligendi vitae ducimus inventore id
        vero unde! Culpa iste ea accusamus pariatur ad. Laboriosam, eos
        adipisci!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, fugiat
        quas tempora exercitationem ullam eligendi vitae ducimus inventore id
        vero unde! Culpa iste ea accusamus pariatur ad. Laboriosam, eos
        adipisci!
      </Typography>
    </>
  );
};

export default MuiTypography;
