import React from 'react';

const StatusTimeline = ({ currentStatus, deadlineDate, notes }) => {
  const steps = [
    { step: 1, label: 'ส่งคำขอพิจารณาแล้ว', icon: 'fa-paper-plane' },
    { step: 2, label: 'กำลังตรวจสอบเอกสาร', icon: 'fa-search' },
    { step: 3, label: 'ตรวจสอบเอกสารเสร็จสิ้น', icon: 'fa-file-signature' },
    { step: 4, label: 'อนุมัติ/ไม่อนุมัติ', icon: 'fa-check-circle' }
  ];

  const now = new Date();
  const deadline = new Date(deadlineDate);
  const isDelayed = currentStatus === 3 && now > deadline;

  return (
    <div className="flex items-center justify-between mt-4 relative">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
      
      {steps.map((s, index) => {
        let statusClass = "bg-gray-200 text-gray-500";
        let icon = s.icon;
        
        if (currentStatus >= s.step) {
          statusClass = "bg-blue-800 text-white";
        }
        
        // เงื่อนไขกำลังตรวจสอบ
        if (s.step === 2 && currentStatus === 2) {
          statusClass = "bg-yellow-500 text-white";
          icon = "fa-clock"; // ไอคอนนาฬิกา
        }

        // เงื่อนไขเกินกำหนดเวลาในขั้นที่ 3
        if (s.step === 3 && isDelayed) {
          statusClass = "bg-red-500 text-white";
          icon = "fa-times"; // กากบาทสีแดง
        }

        return (
          <div key={s.step} className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${statusClass}`}>
              <i className={`fas ${icon}`}></i>
            </div>
            <p className="text-sm mt-2 font-semibold text-center w-24 leading-tight">{s.label}</p>
            {s.step === 3 && isDelayed && (
              <span className="text-red-500 text-xs">รอตรวจสอบอีกครั้ง</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StatusTimeline;
