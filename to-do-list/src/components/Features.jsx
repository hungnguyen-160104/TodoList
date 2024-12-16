import React from 'react';

const Features = () => {
  return (
    <section style={{
      backgroundColor: '#f9f9f9',  // Màu nền xám nhạt
      padding: '20px',            // Khoảng cách bên trong
      borderRadius: '8px',        // Bo tròn góc
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Hiệu ứng bóng đổ nhẹ
      margin: '20px auto',        // Căn giữa trên màn hình
      maxWidth: '800px'           // Giới hạn chiều rộng
    }}>
      <h2 style={{
        color: '#B71C1C',         // Màu chữ đỏ đậm
        marginBottom: '10px'      // Khoảng cách dưới tiêu đề
      }}>
        Tính năng nổi bật
      </h2>
      <ul style={{
        listStyleType: 'disc',    // Kiểu gạch đầu dòng
        paddingLeft: '20px',      // Khoảng cách lề trái
        lineHeight: '1.8',        // Tăng khoảng cách dòng
        fontSize: '16px',         // Cỡ chữ
        color: '#333'             // Màu chữ xám đậm
      }}>
        <li>Ghi chú nhanh: Thêm ghi chú kèm checklist.</li>
        <li>Đặt nhắc nhở.</li>
        <li>Chia sẻ công việc: Mời người khác cùng cộng tác.</li>
        <li>Quản lí hiệu quả các công việc.</li>
      </ul>
    </section>
  );
};

export default Features;
