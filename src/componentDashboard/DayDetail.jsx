import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import styles from "./DayDetail.module.css";

const DayDetailPage = () => {
  const { date } = useParams(); // Lấy tham số từ URL
  const navigate = useNavigate(); // Hook để điều hướng

  // Định dạng ngày thành dd/mm/yy
  const formattedDate = format(new Date(date), "dd/MM/yyyy");

  return (
    <div className={styles.dayDetailContainer}>
      <h1 className={styles.title}>Chi tiết ngày</h1>
      <p className={styles.date}>Ngày được chọn: {formattedDate}</p>
      <div className={styles.content}>
        <p>Đây là trang hiển thị chi tiết các hoạt động trong ngày {formattedDate}.</p>
      </div>
      <button className={styles.exitButton} onClick={() => navigate("/dashboard")}>
        Thoát
      </button>
    </div>
  );
};

export default DayDetail;
