import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    Swal.fire({
      title: 'ต้องการกรอกข้อมูลส่วนตัวหรือไม่?',
      text: "คุณสามารถข้ามขั้นตอนนี้และกรอกภายหลังเมื่อยื่นสินเชื่อได้",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'กรอกข้อมูลเลย',
      cancelButtonText: 'ข้ามไปก่อน',
      confirmButtonColor: '#1d4ed8'
    }).then((result) => {
      // ไม่ว่าจะกรอกหรือข้าม ก็จะพาไปหน้า Dashboard (สมมติว่าถ้ากดกรอกข้อมูล จะมีฟอร์มขึ้นมาก่อน)
      navigate('/borrower');
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border-t-8 border-blue-900">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">e-LIS</h1>
          <p className="text-xl text-gray-500">ระบบสารสนเทศเพื่อการบริหารสินเชื่อ</p>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-lg">ชื่อผู้ใช้งาน</label>
            <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800" />
          </div>
          <div>
            <label className="block text-gray-700 text-lg">รหัสผ่าน</label>
            <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800" />
          </div>
          <button type="button" onClick={() => navigate('/borrower')} className="w-full bg-blue-900 text-white py-2 rounded-md text-xl hover:bg-blue-800 transition">
            เข้าสู่ระบบ
          </button>
        </form>

        <div className="mt-6">
          <button onClick={handleGoogleLogin} className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md text-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            <i className="fab fa-google text-red-500"></i> ลงทะเบียนด้วย Google
          </button>
        </div>

        <div className="mt-8 pt-4 border-t text-center">
          <button onClick={() => navigate('/staff')} className="text-blue-800 hover:underline text-lg">
            <i className="fas fa-user-tie mr-1"></i> สำหรับเจ้าหน้าที่
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
