import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Box, Typography, Button, Avatar, Divider } from "@mui/material";

const UserProfile = () => {
  const user = {
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0123-456-789",
    address: "123 Đường ABC, Thành phố XYZ",
    bio: "Lập trình viên React với hơn 3 năm kinh nghiệm xây dựng ứng dụng web.",
  };

  const navigate = useNavigate(); // Hook điều hướng

  const handleBackToDashboard = () => {
    navigate("/dashboard"); // Điều hướng về Dashboard
  };

  const handleEditProfile = () => {
    navigate("/edit-profile"); // Điều hướng tới trang chỉnh sửa thông tin (giả sử có trang này)
  };

  return (
    <Box
      sx={{
        padding: "30px",
        maxWidth: "600px",
        margin: "50px auto",
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
        boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Avatar và Tiêu đề */}
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Avatar
          sx={{
            bgcolor: "#3f51b5",
            width: "80px",
            height: "80px",
            fontSize: "36px",
            marginRight: "20px",
          }}
        >
          N
        </Avatar>
        <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
          Thông tin cá nhân
        </Typography>
      </Box>

      <Divider sx={{ marginBottom: "20px" }} />

      {/* Thông tin cá nhân */}
      <Box sx={{ lineHeight: "1.8" }}>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          <strong>Tên:</strong> {user.name}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          <strong>Email:</strong> {user.email}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          <strong>Điện thoại:</strong> {user.phone}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          <strong>Địa chỉ:</strong> {user.address}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          <strong>Giới thiệu:</strong> {user.bio}
        </Typography>
      </Box>

      {/* Các nút điều hướng */}
      <Box
        sx={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleBackToDashboard}
        >
          Quay về Dashboard
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          onClick={handleEditProfile}
        >
          Chỉnh sửa thông tin
        </Button>
      </Box>
    </Box>
  );
};

export default UserProfile;
