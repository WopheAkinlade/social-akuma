import { Box, Paper } from "@mui/material";
import { useRouteError } from "react-router-dom";

const centred = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const paperStyle = {
  padding: "15px 60px 60px",
  ...centred,
};

const Error = () => {
  const err = useRouteError();
  console.error(err);

  return (
    <Box sx={centred} height={"90vh"}>
      <Paper elevation={10} sx={paperStyle}>
        <h1>Sorry!</h1>
        <p>An unexpected error has occured</p>
        <i>{err.statusText || err.message} </i>
      </Paper>
    </Box>
  );
};

export default Error;
