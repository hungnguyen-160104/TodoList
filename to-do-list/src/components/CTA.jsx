import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate(); // Hook điều hướng trang

  const handleClick = () => {
    navigate('/login'); // Chuyển hướng đến trang đăng nhập
  };

  return (
    <section style={{
      backgroundColor: '#f9f9f9',  // Màu nền xám nhạt
      padding: '20px',            // Khoảng cách bên trong
      borderRadius: '8px',        // Bo tròn góc
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Bóng đổ nhẹ
      margin: '20px auto',        // Căn giữa phần này
      textAlign: 'center',        // Căn giữa nội dung
      maxWidth: '800px'           // Chiều rộng tối đa
    }}>
      <h2 style={{
        color: '#B71C1C',         // Màu chữ đỏ đậm
        marginBottom: '10px'      // Khoảng cách dưới tiêu đề
      }}>
        Bắt đầu hành trình của bạn
      </h2>
      <p style={{
        fontSize: '16px', 
        marginBottom: '20px',
        color: '#333'
      }}>
        Tạo danh sách công việc của bạn ngay hôm nay!
      </p>
      <button 
        onClick={handleClick} // Gọi hàm chuyển hướng khi click
        style={{
          backgroundColor: '#B71C1C', // Màu nền nút đỏ
          color: 'white',            // Màu chữ trắng
          padding: '10px 20px',      // Khoảng cách bên trong nút
          border: 'none',            // Loại bỏ viền
          borderRadius: '5px',       // Bo tròn góc nút
          cursor: 'pointer',         // Biểu tượng con trỏ
          fontSize: '16px',
          transition: 'background 0.3s' // Hiệu ứng hover
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#c71010'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#B71C1C'}
      >
        Bắt đầu
      </button>
    </section>
  );
};

export default CTA;
