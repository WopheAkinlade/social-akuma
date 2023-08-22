import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
    
      <Box display={"flex"} justifyContent={"space-between"}>
        <div>
          <Sidebar />
        </div>

        <div className="main">
          <Outlet />
        </div>
      </Box>
    </>
  );
};

export default Root;
