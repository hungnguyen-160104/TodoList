import React from 'react';

const Contact = () => {
  return (
    <section style={{ 
      padding: '20px', 
      backgroundColor: '#f9f9f9', 
      borderRadius: '8px', 
      maxWidth: '800px', // Tăng chiều rộng khung
      margin: '20px auto', 
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
    }}>
      <h2 style={{ color: '#B71C1C', marginBottom: '10px' }}>Hỗ trợ và Liên hệ</h2>
      <p style={{ marginBottom: '20px', fontSize: '16px', lineHeight: '1.5' }}>
        Nếu bạn cần hỗ trợ hoặc có thắc mắc, hãy liên hệ với chúng tôi qua các phương thức sau:
      </p>
      <div style={{ fontSize: '16px', lineHeight: '2' }}>
        <p><strong>Tên:</strong> Phạm Nguyễn Hùng Nguyên</p>
        <p><strong>Email:</strong> 
          <a href="mailto:hungnguyen16012004@gmail.com" style={{ color: '#c71010', textDecoration: 'none' }}>
            hungnguyen16012004@gmail.com
          </a>
        </p>
        <p><strong>Số điện thoại:</strong> 
          <a href="tel:0852980899" style={{ color: '#c71010', textDecoration: 'none' }}>
            0852980899
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
