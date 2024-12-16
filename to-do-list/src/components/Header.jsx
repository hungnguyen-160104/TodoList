import React from 'react';

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: '#B71C1C', // Màu nền đỏ đậm
        color: 'white', // Màu chữ trắng
        display: 'flex',
        alignItems: 'center', // Căn giữa các phần tử theo chiều dọc
        justifyContent: 'space-between', // Phân chia khoảng cách hai bên
        padding: '10px 20px', // Khoảng cách nội dung bên trong
        
      }}
    >
      {/* Logo và text bên trái */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Logo */}
        <img
          src="/images/logo-dhbk-1-02_130_191.png" // Đường dẫn ảnh logo
          alt="Logo Đại học Bách Khoa Hà Nội"
          style={{ width: '80px', height: 'auto', marginRight: '15px' }}
        />
        {/* Text bên cạnh logo */}
        <div>
          <h2
            style={{
              margin: '0',
              fontSize: '18px',
              fontWeight: 'bold',
              lineHeight: '1.3',
              
            }}
          >
            <span style={{ color: 'white' }}>ĐẠI HỌC <br />
            BÁCH KHOA HÀ NỘI</span> <br />
          </h2>
          <p style={{ margin: '0', fontSize: '12px', lineHeight: '1.5' }}>
            HANOI UNIVERSITY <br /> OF SCIENCE AND TECHNOLOGY
          </p>
        </div>
      </div>

      {/* Phần tiêu đề chính ở giữa */}
      <div style={{ textAlign: 'center', flex: '1' }}>
        <h1
          style={{
            margin: '0',
            fontSize: '28px',
            fontWeight: 'bold',
            textTransform: 'uppercase', 
            marginRight: '220px', // Tạo khoảng cách từ lề trái         
          }}
        >
          Lên kế hoạch. Hoàn thành mục tiêu.
        </h1>
        <p style={{ margin: '0', fontSize: '14px', marginRight: '220px', }}>
          One Task. One Step. One Goal.
        </p>
      </div>
    </header>
  );
};

export default Header;
