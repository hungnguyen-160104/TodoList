import React from 'react';

const AboutUs = () => {
  return (
    <section style={{
      backgroundColor: '#f9f9f9', // Nền trắng giống phần dưới
      padding: '20px',         // Khoảng cách nội dung
      borderRadius: '10px',    // Bo tròn góc
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Hiệu ứng bóng đổ
      margin: '20px auto',     // Căn giữa trên màn hình
      maxWidth: '800px'        // Giới hạn chiều rộng
    }}>
      <h2 style={{
        color: '#B71C1C',      // Màu chữ đỏ giống phần dưới
        marginBottom: '10px'
      }}>
        Câu chuyện của chúng tôi
      </h2>
      <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
      Todolist giúp bạn quản lý thời gian hiệu quả, tổ chức công việc rõ ràng, ưu tiên nhiệm vụ quan trọng. 
      Nó giảm căng thẳng, tăng năng suất, giúp bạn đạt được mục tiêu nhanh chóng và duy trì sự tập trung trong mọi công việc.
      </p>
    </section>
  );
};

export default AboutUs;
