import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function StaffDashboard() {
  const [customFields, setCustomFields] = useState([]);

  const addCustomField = () => {
    setCustomFields([...customFields, { type: 'text', question: '' }]);
  };

  const handleCreateLoan = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'ยืนยันการสร้างสินเชื่อ?',
      text: "ระบบจะเปิดให้ยื่นกู้ตามวันและเวลาที่กำหนด",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1d4ed8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'สร้างสินเชื่อ',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('สำเร็จ!', 'เพิ่มสินเชื่อลงในระบบ e-LIS เรียบร้อยแล้ว', 'success');
        // Logic ส่งข้อมูลไป API (Node.js/GAS)
      }
    });
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-900">
        <h2 className="text-2xl font-bold mb-6 text-blue-900"><i className="fas fa-plus-circle"></i> สร้างสินเชื่อใหม่</h2>
        
        <form onSubmit={handleCreateLoan} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-bold">ชื่อสินเชื่อ</label>
              <input type="text" className="w-full border p-2 rounded" required />
            </div>
            <div>
              <label className="block font-bold">รหัสสินเชื่อ (Auto-Run)</label>
              <input type="text" defaultValue="LN-2026-0001" className="w-full border p-2 rounded bg-gray-100" readOnly />
            </div>
          </div>

          <div>
            <label className="block font-bold">วงเงินสูงสุด (บาท)</label>
            <input type="number" className="w-full border p-2 rounded" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-bold">วันที่เปิดรับยื่นสินเชื่อ</label>
              <input type="datetime-local" className="w-full border p-2 rounded" required />
            </div>
            <div>
              <label className="block font-bold">วันหมดเขตยื่นสินเชื่อ</label>
              <input type="datetime-local" className="w-full border p-2 rounded" required />
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded border border-blue-200">
            <label className="block font-bold text-blue-900">หนังสือขออนุญาตการเพิ่มรายการสินเชื่อ</label>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://drive.google.com/file/d/13mCe6T6Q4pNbd3vrX6t3aYcYlAS6QrxC/view?usp=drivesdk" 
                 target="_blank" rel="noreferrer"
                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                <i className="fas fa-download"></i> ดาวน์โหลดแบบฟอร์ม
              </a>
              <input type="file" accept=".pdf" className="border p-1 rounded w-full" required />
            </div>
          </div>

          <hr className="my-6" />

          {/* ส่วน Dynamic Fields สไตล์ Google Form */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold"><i className="fas fa-list"></i> ข้อมูลที่ต้องการเพิ่มเติมจากผู้กู้</h3>
              <button type="button" onClick={addCustomField} className="bg-blue-100 text-blue-800 px-3 py-1 rounded hover:bg-blue-200">
                + เพิ่มคำถาม
              </button>
            </div>

            {/* Checkbox มาตรฐาน */}
            <div className="mb-4 flex items-center gap-2">
              <input type="checkbox" id="requireGPS" className="w-5 h-5" />
              <label htmlFor="requireGPS" className="font-bold">ต้องการพิกัด GPS ปัจจุบัน (บังคับขออนุญาตตำแหน่ง)</label>
            </div>

            {/* คำถามที่เพิ่มเอง */}
            {customFields.map((field, index) => (
              <div key={index} className="flex gap-2 items-center mb-2 bg-gray-50 p-3 rounded border">
                <input type="text" placeholder="ระบุคำถาม..." className="flex-1 border p-2 rounded" />
                <select className="border p-2 rounded bg-white">
                  <option value="text">กรอกข้อความสั้น</option>
                  <option value="textarea">กรอกข้อความยาว</option>
                  <option value="dropdown">ดรอปดาวน์</option>
                  <option value="upload">อัพโหลดรูปภาพ</option>
                </select>
                <button type="button" onClick={() => setCustomFields(customFields.filter((_, i) => i !== index))} className="text-red-500 px-2">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}
          </div>

          <button type="submit" className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold text-xl hover:bg-blue-800 transition shadow-lg mt-6">
            สร้างสินเชื่อ
          </button>
        </form>
      </div>
    </div>
  );
}
