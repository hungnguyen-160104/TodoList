import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { format, addDays, startOfWeek } from "date-fns";

const WeekdaysBar = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState(
    startOfWeek(new Date(), { weekStartsOn: 0 })
  );
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Tính toán các ngày trong tuần
  const weekDays = [...Array(7)].map((_, index) =>
    addDays(currentWeekStart, index)
  );

  // Chuyển tuần (trước hoặc sau)
  const navigateWeek = (direction) => {
    setCurrentWeekStart((prev) => addDays(prev, direction * 7));
  };

  // Định dạng ngày
  const formatDate = (date) => format(date, "yyyy-MM-dd");

  return (
    <Box
      style={{
        maxWidth: "400px",
        margin: "auto",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
        borderRadius: "8px",
        padding: "10px",
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      {/* Nút chuyển tuần */}
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Button
          variant="outlined"
          onClick={() => navigateWeek(-1)}
          style={{ textTransform: "none" }}
        >
          Trước
        </Button>
        <Typography variant="h6">
          Tuần {format(currentWeekStart, "dd/MM/yyyy")} -{" "}
          {format(addDays(currentWeekStart, 6), "dd/MM/yyyy")}
        </Typography>
        <Button
          variant="outlined"
          onClick={() => navigateWeek(1)}
          style={{ textTransform: "none" }}
        >
          Sau
        </Button>
      </Box>

      {/* Lịch ngang */}
      <Box display="flex" justifyContent="space-around" mb={2}>
        {weekDays.map((day) => (
          <Box
            key={day}
            onClick={() => setSelectedDate(day)}
            sx={{
              textAlign: "center",
              cursor: "pointer",
              padding: "8px",
              borderRadius: "50%",
              backgroundColor:
                formatDate(selectedDate) === formatDate(day)
                  ? "#1976d2"
                  : "#e0e0e0",
              color:
                formatDate(selectedDate) === formatDate(day)
                  ? "#fff"
                  : "#000",
              transition: "background-color 0.3s",
            }}
          >
            <Typography variant="body2">
              {format(day, "E")} {/* Hiển thị Thứ (Sun, Mon...) */}
            </Typography>
            <Typography variant="h6">{format(day, "dd")}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WeekdaysBar;
