import React, { useState } from 'react';
import Swal from 'sweetalert2';

const StaffDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleCreateLoan = (e) => {
    e.preventDefault();
    Swal.fire('สำเร็จ', 'สร้างรายการสินเชื่อใหม่เรียบร้อยแล้ว', 'success');
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 text-center text-3xl font-bold border-b border-blue-800">e-LIS Staff</div>
        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab('dashboard')} className={`w-full text-left px-4 py-2 rounded text-xl ${activeTab === 'dashboard' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}>
            <i className="fas fa-chart-line w-6"></i> ภาพรวมระบบ
          </button>
          <button onClick={() => setActiveTab('add')} className={`w-full text-left px-4 py-2 rounded text-xl ${activeTab === 'add' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}>
            <i className="fas fa-plus-circle w-6"></i> เพิ่มสินเชื่อ
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {activeTab === 'dashboard' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">แดชบอร์ดเจ้าหน้าที่</h2>
              <button className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700">
                <i className="fas fa-file-export mr-2"></i> ส่งออก PDF/Word
              </button>
            </div>
            {/* ตารางแสดงรายการที่รอตรวจสอบ/อนุมัติ (Mockup) */}
            <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-xl text-gray-500">ตารางแสดงรายการยื่นขอสินเชื่อ (รอตรวจสอบอีกครั้ง, กำลังตรวจสอบ, อนุมัติ...)</p>
            </div>
          </div>
        )}

        {activeTab === 'add' && (
          <div className="bg-white p-8 rounded-lg shadow max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">สร้างรายการสินเชื่อใหม่</h2>
            <form onSubmit={handleCreateLoan} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-lg">ชื่อสินเชื่อ</label>
                  <input type="text" required className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label className="block text-gray-700 text-lg">รหัสสินเชื่อ</label>
                  <input type="text" placeholder="เว้นว่างเพื่อรันอัตโนมัติ" className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label className="block text-gray-700 text-lg">วงเงิน (บาท)</label>
                  <input type="number" required className="w-full border p-2 rounded" />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 text-lg">รายละเอียดสินเชื่อ</label>
                <textarea className="w-full border p-2 rounded" rows="3"></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-lg">วันที่เริ่มยื่นสินเชื่อได้</label>
                  <input type="datetime-local" className="w-full border p-2 rounded" />
                </div>
                <div>
                  <label className="block text-gray-700 text-lg">วันที่หมดเขตยื่นสินเชื่อ</label>
                  <input type="datetime-local" className="w-full border p-2 rounded" />
                </div>
              </div>

              <div className="border border-blue-100 bg-blue-50 p-4 rounded-lg">
                <label className="block text-gray-800 font-bold text-xl mb-2">เอกสารขออนุญาต</label>
                <p className="text-gray-600 mb-2">อัพโหลด PDF หนังสือขออนุญาตการเพิ่มรายการสินเชื่อลงในระบบ e-LIS</p>
                <input type="file" accept="application/pdf" className="mb-2 w-full" />
                <a href="https://drive.google.com/file/d/13mCe6T6Q4pNbd3vrX6t3aYcYlAS6QrxC/view?usp=drivesdk" target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  <i className="fas fa-download mr-1"></i> ดาวน์โหลดแบบฟอร์ม
                </a>
              </div>

              <div className="border border-gray-200 p-4 rounded-lg">
                <label className="block text-gray-800 font-bold text-xl mb-2">ข้อมูลที่ต้องการเพิ่มเติมจากผู้กู้</label>
                <div className="flex items-center gap-2 mb-2">
                  <input type="checkbox" id="gps" />
                  <label htmlFor="gps" className="text-lg">พิกัด GPS ปัจจุบัน</label>
                </div>
                <button type="button" className="text-blue-600 hover:underline">
                  <i className="fas fa-plus mr-1"></i> เพิ่มคำถามแบบกำหนดเอง (Dropdown, อัพโหลดรูป, ข้อความ)
                </button>
              </div>

              <div className="pt-4 text-right">
                <button type="submit" className="bg-blue-900 text-white px-8 py-3 rounded-lg text-xl hover:bg-blue-800 transition">
                  สร้างสินเชื่อ
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffDashboard;
