import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { useEffect } from "react";
import { allUserAdmin } from "../../../redux/action";
import { useSelector,useDispatch } from "react-redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { width } from "@mui/system";
const Members = ({allusers}) => {
  // const dispatch = useDispatch()
  // const users = useSelector((state)=>state.alluser)
  //  useEffect(()=>{
  //    dispatch(allUserAdmin())
  //  },[dispatch])
  const columns = [
    { field: "id", headerName: "ID" ,width:300,},
    {
      field: "name",
      headerName: "Name",
      flex: 1
    },
    {
      field: "nickName",
      headerName: "Nombre de Usuario",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="60%"
            height="80%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status == "superadmin"
                ? "#7dcea0"
                : status == "admin"
                ? "#7dcea0"
                : "#7dcea0"
            }
            borderRadius="4px"
          >
            {status == "superadmin" && <AdminPanelSettingsOutlinedIcon />}
            {status == "admin" && <SecurityOutlinedIcon />}
            {status == "dev" && <AccountCircleIcon />}
            <Typography color={"black"} sx={{ ml: "5px", textTransform:"capitalize" }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="73vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            fontFamily:"Sen"
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "#94e2cd",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#1E8449",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#59AD7C",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#1E8449",
          },
          "& .MuiCheckbox-root": {
            color: `#b7ebde !important`,
          },
        }}
      >
        <DataGrid pageSize={11} checkboxSelection rows={allusers} columns={columns} fontFamily={"Sen"} />
      </Box>
    </Box>
  );
};

export default Members;
