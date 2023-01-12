import {Box, CircularProgress} from "@mui/material";
import {customize} from "./customize";

export const Loader = () => (
  <Box sx={customize.loaderContainer}>
    <CircularProgress />
  </Box>
);