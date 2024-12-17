import React from "react";
import "./ProfileHeader.css";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileHeader = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile"); // Điều hướng đến trang /profile
  };

  return (
    <Box
      className="profile-header"
      onClick={handleClick}
      style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
    >
      <Box className="avatar">N</Box>
      <Typography className="profile-title">Trang cá nhân</Typography>
    </Box>
  );
};

export default ProfileHeader;
