import React from 'react';
import Swal from 'sweetalert2';

export default function Login() {
  const handleGoogleLogin = () => {
    Swal.fire({
      title: 'กำลังเชื่อมต่อบัญชี Google',
      text: 'กรุณารอสักครู่...',
      icon: 'info',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      Swal.fire({
        title: 'เชื่อมต่อสำเร็จ!',
        text: 'คุณต้องการกรอกข้อมูลประวัติส่วนตัวเลยหรือไม่? (หากข้ามต้องกรอกก่อนยื่นสินเชื่อ)',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'กรอกข้อมูลเลย',
        cancelButtonText: 'ข้ามไปก่อน',
        confirmButtonColor: '#1d4ed8',
        cancelButtonColor: '#6b7280'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/profile-setup';
        } else {
          window.location.href = '/borrower-dashboard';
        }
      });
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border-t-4 border-blue-800">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-900">e-LIS</h1>
          <p className="text-gray-500">ระบบสารสนเทศเพื่อการบริหารสินเชื่อ</p>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">ชื่อผู้ใช้งาน</label>
            <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700">รหัสผ่าน</label>
            <input type="password" className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          
          <button type="button" className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition">
            เข้าสู่ระบบ
          </button>
        </form>

        <div className="mt-6 flex flex-col space-y-3">
          <button onClick={handleGoogleLogin} className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition flex items-center justify-center gap-2">
            <i className="fab fa-google"></i> ลงทะเบียน / เข้าสู่ระบบด้วย Google
          </button>
          
          <hr className="my-4" />
          
          <button onClick={() => window.location.href='/staff-login'} className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition">
            <i className="fas fa-user-shield"></i> สำหรับเจ้าหน้าที่
          </button>
        </div>
      </div>
    </div>
  );
}
