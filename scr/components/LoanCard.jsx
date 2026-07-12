import React from 'react';
import Swal from 'sweetalert2';

const LoanCard = ({ loan }) => {
  const now = new Date();
  const startDate = new Date(loan.startDate);
  const endDate = new Date(loan.endDate);
  
  const isBeforeStart = now < startDate;
  const isExpired = now > endDate;

  const handleApply = () => {
    Swal.fire({
      title: 'รายละเอียดสินเชื่อ',
      html: `
        <div class="text-left text-lg">
          <p><strong>เลขที่สินเชื่อ:</strong> ${loan.id}</p>
          <p><strong>วงเงิน:</strong> ${loan.limit.toLocaleString()} บาท</p>
          <p><strong>รายละเอียด:</strong> ${loan.description}</p>
          <p><strong>เงื่อนไข:</strong> ${loan.conditions}</p>
          <p><strong>หมดเขตยื่น:</strong> ${endDate.toLocaleDateString('th-TH')}</p>
          <p class="text-sm text-gray-500 mt-2">หมายเหตุ: ${loan.notes || '-'}</p>
        </div>
      `,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'ยื่นสินเชื่อ',
      cancelButtonText: 'ปิด',
      confirmButtonColor: '#1d4ed8'
    }).then((result) => {
      if (result.isConfirmed) {
        if (loan.requireGPS) {
            // ระบบขอสิทธิ์ GPS
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    Swal.fire('สำเร็จ', 'ยื่นสินเชื่อและแนบพิกัด GPS เรียบร้อยแล้ว', 'success');
                },
                (err) => {
                    Swal.fire('ข้อผิดพลาด', 'ต้องอนุญาตการเข้าถึงตำแหน่งที่ตั้งเพื่อยื่นสินเชื่อนี้', 'error');
                }
            );
        } else {
            Swal.fire('สำเร็จ', 'ยื่นคำขอสินเชื่อเรียบร้อยแล้ว', 'success');
        }
      }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-800 cursor-pointer hover:shadow-lg transition">
      <h3 className="text-2xl font-bold text-gray-800">{loan.name}</h3>
      <p className="text-gray-600 text-xl mt-2">วงเงินสูงสุด: ฿{loan.limit.toLocaleString()}</p>
      <div className="mt-4">
        {isBeforeStart ? (
          <button disabled className="w-full bg-gray-300 text-gray-600 py-2 rounded text-xl cursor-not-allowed">
            ยังไม่ถึงระยะเวลา
          </button>
        ) : isExpired ? (
          <button disabled className="w-full bg-gray-300 text-gray-600 py-2 rounded text-xl cursor-not-allowed">
            หมดเขตการยื่นสินเชื่อ
          </button>
        ) : (
          <button onClick={handleApply} className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2 rounded text-xl transition">
            ยื่นสินเชื่อ
          </button>
        )}
      </div>
    </div>
  );
};

export default LoanCard;
