import React from 'react';

const Testimonials = () => {
  return (
    <section style={{
      backgroundColor: '#f9f9f9',  // Màu nền xám nhạt
      padding: '20px',            // Tạo khoảng cách bên trong
      borderRadius: '8px',        // Bo tròn góc
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Hiệu ứng bóng đổ nhẹ
      margin: '20px auto',        // Căn giữa trên màn hình
      maxWidth: '800px'           // Giới hạn chiều rộng
    }}>
      <h2 style={{
        color: '#B71C1C',         // Màu chữ đỏ đậm
        marginBottom: '10px'      // Tạo khoảng cách dưới tiêu đề
      }}>
        Người dùng nói gì về chúng tôi?
      </h2>
      <div style={{ fontSize: '16px', lineHeight: '1.5' }}>
        <p>"Trang Todolist này giúp tôi quản lý công việc hiệu quả hơn!" - Hùng Nguyên</p>
        <p>"Giao diện rất dễ sử dụng và thông báo rất tiện lợi." - Vẫn là Hùng Nguyên</p>
      </div>
    </section>
  );
};

export default Testimonials;
