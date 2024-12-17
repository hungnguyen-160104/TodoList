import React from "react";
import { Box, Typography } from "@mui/material";

const UserProfile = () => {
  const user = {
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0123-456-789",
    address: "123 Đường ABC, Thành phố XYZ",
    bio: "Lập trình viên React với hơn 3 năm kinh nghiệm xây dựng ứng dụng web.",
  };

  return (
    <Box
      sx={{
        padding: "20px",
        maxWidth: "600px",
        margin: "50px auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Thông tin cá nhân
      </Typography>
      <Typography variant="body1">
        <strong>Tên:</strong> {user.name}
      </Typography>
      <Typography variant="body1">
        <strong>Email:</strong> {user.email}
      </Typography>
      <Typography variant="body1">
        <strong>Điện thoại:</strong> {user.phone}
      </Typography>
      <Typography variant="body1">
        <strong>Địa chỉ:</strong> {user.address}
      </Typography>
      <Typography variant="body1">
        <strong>Giới thiệu:</strong> {user.bio}
      </Typography>
    </Box>
  );
};

export default UserProfile;
