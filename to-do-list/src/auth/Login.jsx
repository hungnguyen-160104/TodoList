import React, { useState } from 'react';
import './Login.css';
import hinhNen from './hust1.png';

const Login = () => {
  // isLogin: đang ở trang Login hay Register
  // isReset: đang ở trang Quên mật khẩu
  const [isLogin, setIsLogin] = useState(true);
  const [isReset, setIsReset] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const resetForm = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleToggle = () => {
    // Chuyển giữa Login và Register
    setIsLogin(!isLogin);
    setIsReset(false); // trở về false để không ở chế độ quên password
    resetForm();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isReset) {
      // Xử lý quên mật khẩu
      console.log('Quên mật khẩu:', formData.email);
      alert('Email reset link has been sent (demo).');
      setIsReset(false);
      setIsLogin(true);
      resetForm();
      return;
    }

    if (isLogin) {
      // Xử lý đăng nhập
      console.log('Đăng nhập:', formData.email, formData.password);
    } else {
      // Xử lý đăng ký
      if (formData.password !== formData.confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
      }
      console.log('Đăng ký:', formData.username, formData.email, formData.password);
    }
  };

  const handleForgotPassword = () => {
    setIsReset(true);
    resetForm();
  };

  const handleCancelForgot = () => {
    setIsReset(false);
    setIsLogin(true);
    resetForm();
  };

  let title = 'Đăng nhập';
  let buttonText = 'Đăng nhập';
  let bottomText = (
    <p className="register-text">
      Bạn có tài khoản chưa ? <a href="#" onClick={handleToggle}>Đăng ký</a>
    </p>
  );

  if (!isLogin && !isReset) {
    // Register mode
    title = 'Đăng ký';
    buttonText = 'Đăng ký';
    bottomText = (
      <p className="register-text">
        Bạn có tài khoản rồi à ? <a href="#" onClick={handleToggle}>Đăng nhập</a>
      </p>
    );
  } else if (isReset) {
    // Forgot Password mode
    title = 'Quên mật khẩu';
    buttonText = 'Đặt lại mật khẩu';
    bottomText = (
      <p className="register-text">
        <a href="#" onClick={handleCancelForgot}>Thoát</a>
      </p>
    );
  }

  return (
    <div 
      className="login-bg" 
      style={{ 
        backgroundImage: `url(${hinhNen})`, 
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat' 
      }}
    >
      <div className="login-container">
        <h2>{title}</h2>
        <form onSubmit={handleSubmit}>
          {/* Register mode: thêm trường username */}
          {!isLogin && !isReset && (
            <div className="input-group">
              
              <input
                type="text"
                name="username"
                placeholder="Tên người dùng"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Forgot Password mode: chỉ cần email */}
          {(isReset || !isLogin) && (
            <div className="input-group">
              
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Login mode: hiển thị email */}
          {isLogin && !isReset && (
            <div className="input-group">
              
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Nếu không phải reset thì có password */}
          {!isReset && (
            <div className="input-group">
              
              <input
                type="password"
                name="password"
                placeholder="Mật khẩu"
                value={formData.password}
                onChange={handleChange}
                required={!isReset}
              />
            </div>
          )}

          {/* Register mode: confirm password */}
          {!isLogin && !isReset && (
            <div className="input-group">
              
              <input
                type="password"
                name="confirmPassword"
                placeholder="Xác nhận mật khẩu"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Chỉ hiển thị Remember me và Forgot password khi ở chế độ Login */}
          {isLogin && !isReset && (
            <div className="options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Nhớ</span>
              </label>
              <a href="#" className="forgot-password" onClick={handleForgotPassword}>
                Quên mật khẩu à ?
              </a>
            </div>
          )}

          <button type="submit" className="login-button">
            {buttonText}
          </button>
        </form>
        {bottomText}
      </div>
    </div>
  );
};

export default Login;
