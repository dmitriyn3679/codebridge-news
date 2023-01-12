import {Alert} from "@mui/material";
import {customize} from "./customize";

export const LoadingError = () => (
  <Alert severity="error" sx={customize.alert}>Something went wrong!</Alert>
);