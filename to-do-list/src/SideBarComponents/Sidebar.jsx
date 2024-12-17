import React, { useState } from "react";
import "./Sidebar.css";
import { Box, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import ProfileHeader from "./ProfileHeader"; // Import ProfileHeader

const Sidebar = () => {
  const [items, setItems] = useState([{ name: "Công việc nhóm", editable: false }]);

  // Thêm mục mới
  const addNewItem = () => {
    const newItem = { name: `Mục mới ${items.length + 1}`, editable: false };
    setItems([...items, newItem]);
  };

  // Xóa mục
  const deleteItem = (index) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn xóa mục này không?");
    if (confirmDelete) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  // Bật chế độ chỉnh sửa
  const toggleEdit = (index) => {
    const newItems = [...items];
    newItems[index].editable = !newItems[index].editable;
    setItems(newItems);
  };

  // Cập nhật tên mục
  const updateItemName = (index, newName) => {
    const newItems = [...items];
    newItems[index].name = newName;
    setItems(newItems);
  };

  return (
    <Box className="sidebar">
      <ProfileHeader /> {/* Profile Header component */}

      <Box className="menu">
        {items.map((item, index) => (
          <Box key={index} className="menu-item">
            {item.editable ? (
              <input
                value={item.name}
                onChange={(e) => updateItemName(index, e.target.value)}
                onBlur={() => toggleEdit(index)}
                autoFocus
              />
            ) : (
              <Typography className="item-name" onClick={() => toggleEdit(index)}>
                {item.name}
              </Typography>
            )}

            {/* Icons */}
            {item.name !== "Công việc nhóm" && (
              <Box className="icon-group">
                <IconButton size="small" onClick={() => toggleEdit(index)}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={() => deleteItem(index)}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
            )}
          </Box>
        ))}

        {/* Nút thêm mới */}
        <Box className="add-button" onClick={addNewItem}>
          <AddIcon />
          <Typography>Thêm mới</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
