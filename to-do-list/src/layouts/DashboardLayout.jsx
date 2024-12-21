import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Sidebar from "../SideBarComponents/Sidebar";
import WeekdaysBar from "../componentDashboard/WeekdaysBar";
import SearchBar from "../componentDashboard/SearchBar";
import ActionButtons from "../componentDashboard/ActionButtons";
import GridContent from "../componentDashboard/GridContent";

const DashboardLayout = ({ boxes, onAddBox, onRemoveBox, onUpdateBoxName }) => {
  const navigate = useNavigate(); // Hook để điều hướng

  // Hàm xử lý khi click vào một ô
  const handleBoxClick = (id) => {
    navigate(`/todo/${id}`); // Điều hướng đến ToDoListPage tương ứng
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          p: 3,
          gap: 2,
          backgroundColor: "#fff",
          boxShadow: 1,
        }}
      >
        {/* Header cho Dashboard */}
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          TodoList
        </Typography>

        {/* Weekdays Bar */}
        <WeekdaysBar />

        {/* Search Bar */}
        <SearchBar />

        {/* Actions và Grid Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 2,
            backgroundColor: "#fafafa",
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          {/* Action Buttons */}
          <ActionButtons onAdd={onAddBox} onRemove={onRemoveBox} />

          {/* Grid Content */}
          <GridContent
            boxes={boxes}
            onUpdateBoxName={onUpdateBoxName}
            onBoxClick={handleBoxClick} // Truyền hàm click xuống GridContent
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
