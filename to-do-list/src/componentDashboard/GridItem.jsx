import React, { useState } from "react";
import { Box, TextField, IconButton, Tooltip, Typography } from "@mui/material";
import { Edit, Save, Cancel } from "@mui/icons-material";

const GridItem = ({ id, name, onUpdateName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    if (newName.trim()) {
      onUpdateName(id, newName.trim());
      setIsEditing(false);
    }
  };
  const handleCancel = () => {
    setNewName(name);
    setIsEditing(false);
  };

  return (
    <Box
  sx={{
    width: "310px", // Chiều rộng ô (có thể thay đổi)
    height: "180px", // Chiều cao ô (có thể thay đổi)
    padding: "25px",
    margin: "30px", // Tạo khoảng cách xung quanh từng ô
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#e8f4ff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // Căn giữa nội dung ô
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" color="primary" sx={{ flexGrow: 1 }}>
            {name}
          </Typography>
          <Tooltip title="Chỉnh sửa">
            <IconButton color="primary" onClick={handleEdit}>
              <Edit />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </Box>
  );
};

export default GridItem;
