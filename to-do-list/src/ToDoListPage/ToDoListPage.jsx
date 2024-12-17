import React, { useState } from "react";
import { Box, TextField, Button, List, ListItem, IconButton, Typography } from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";

const ToDoListPage = () => {
  const { id } = useParams(); // Lấy id từ URL
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Thêm hoặc sửa công việc
  const handleAddOrEdit = () => {
    if (newTask.trim()) {
      if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = newTask;
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, newTask]);
      }
      setNewTask("");
    }
  };

  // Xóa công việc
  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Sửa công việc
  const handleEdit = (index) => {
    setNewTask(tasks[index]);
    setEditIndex(index);
  };

  return (
    <Box p={3} maxWidth="500px" margin="auto">
      <Button variant="outlined" onClick={() => navigate("/")}>
        Quay lại
      </Button>
      <Typography variant="h4" textAlign="center" mt={2} mb={2}>
        ToDoList - Ô {id}
      </Typography>

      {/* Ô nhập công việc */}
      <Box display="flex" gap={1} mb={2}>
        <TextField
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nhập công việc mới"
          fullWidth
          size="small"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddOrEdit}
          startIcon={<Add />}
        >
          {editIndex !== null ? "Sửa" : "Thêm"}
        </Button>
      </Box>

      {/* Danh sách công việc */}
      <List>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <>
                <IconButton color="primary" onClick={() => handleEdit(index)}>
                  <Edit />
                </IconButton>
                <IconButton color="secondary" onClick={() => handleDelete(index)}>
                  <Delete />
                </IconButton>
              </>
            }
          >
            {task}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ToDoListPage;
