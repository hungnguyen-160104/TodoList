import React from "react";
import "./ProfileHeader.css";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileHeader = () => {
  const navigate = useNavigate();

  // Điều hướng đến trang cá nhân
  const handleClick = () => {
    navigate("/user-profile"); // Chuyển đến đường dẫn /user-profile
  };

  return (
    <Box
      className="profile-header"
      onClick={handleClick} // Gọi handleClick khi click vào phần này
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* Avatar */}
      <Box
        className="avatar"
        style={{
          backgroundColor: "#f48fb1",
          color: "#fff",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "18px",
          marginRight: "10px",
        }}
      >
        N
      </Box>

      {/* Tên trang cá nhân */}
      <Typography
        className="profile-title"
        style={{
          fontSize: "16px",
          fontWeight: "500",
          color: "#333",
        }}
      >
        Trang cá nhân
      </Typography>
    </Box>
  );
};

export default ProfileHeader;
