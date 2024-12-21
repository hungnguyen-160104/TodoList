import React, { useState } from "react";
import { Box, TextField, IconButton, Tooltip, Typography } from "@mui/material";
import { Edit, Save, Cancel } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const GridItem = ({ id, name, onUpdateName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const navigate = useNavigate(); // Sử dụng để điều hướng

  // Bắt đầu chỉnh sửa
  const handleEdit = () => setIsEditing(true);

  // Lưu tên mới
  const handleSave = () => {
    if (newName.trim()) {
      onUpdateName(id, newName.trim());
      setIsEditing(false);
    }
  };

  // Hủy chỉnh sửa
  const handleCancel = () => {
    setNewName(name);
    setIsEditing(false);
  };

  // Điều hướng đến trang mới
  const handleNavigate = () => {
    if (!isEditing) {
      navigate(`/todo/${id}`); // Điều hướng đến trang cụ thể
    }
  };

  return (
    <Box
      onClick={handleNavigate} // Gọi hàm điều hướng khi click vào ô
      sx={{
        width: "310px", // Chiều rộng ô
        height: "180px", // Chiều cao ô
        padding: "25px",
        margin: "30px", // Khoảng cách giữa các ô
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: isEditing ? "#fffbe6" : "#e8f4ff", // Đổi màu khi chỉnh sửa
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: isEditing ? "default" : "pointer", // Chỉ cho phép click nếu không chỉnh sửa
        "&:hover": {
          backgroundColor: isEditing ? "#fffbe6" : "#d3e9ff", // Hiệu ứng hover
        },
      }}
    >
      {isEditing ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            size="small"
            variant="outlined"
            placeholder="Nhập tên mới"
            autoFocus
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
          />
          <Tooltip title="Lưu">
            <IconButton color="primary" onClick={handleSave}>
              <Save />
            </IconButton>
          </Tooltip>
          <Tooltip title="Hủy">
            <IconButton color="secondary" onClick={handleCancel}>
              <Cancel />
            </IconButton>
          </Tooltip>
        </Box>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Typography
            variant="h6"
            color="primary"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            {name}
          </Typography>
          <Tooltip title="Chỉnh sửa">
            <IconButton color="primary" onClick={handleEdit} onClickCapture={(e) => e.stopPropagation()}>
              <Edit />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </Box>
  );
};

export default GridItem;
