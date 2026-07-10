import React from 'react';

export default function StatusTimeline({ statusData }) {
  // สมมติ statusData = { step: 3, isTimeout: false, dueDate: '2026-07-15', note: 'รอเอกสารเพิ่มเติม' }
  
  const steps = [
    { id: 1, title: 'ส่งคำขอพิจารณาแล้ว', icon: 'fa-paper-plane' },
    { id: 2, title: 'กำลังตรวจสอบเอกสาร', icon: 'fa-search' },
    { id: 3, title: 'ตรวจสอบเอกสารเสร็จสิ้น', icon: 'fa-file-signature' },
    { id: 4, title: 'อนุมัติ / ไม่อนุมัติ', icon: 'fa-check-circle' },
  ];

  return (
    <div className="flex items-center justify-between w-full mt-4 relative">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
      
      {steps.map((step) => {
        const isActive = statusData.step >= step.id;
        const isCurrent = statusData.step === step.id;
        let iconClass = step.icon;
        let colorClass = isActive ? 'bg-blue-800 text-white' : 'bg-gray-300 text-gray-500';
        let borderColor = isActive ? 'border-blue-800' : 'border-gray-300';

        // กรณีหมดเวลา (Timeout) ในขั้นตอนที่ 3
        if (step.id === 3 && isCurrent) {
          if (statusData.isTimeout) {
            iconClass = 'fa-times-circle'; // กากบาท
            colorClass = 'bg-red-600 text-white';
            borderColor = 'border-red-600';
          } else {
            iconClass = 'fa-clock'; // นาฬิกากำลังตรวจสอบ
            colorClass = 'bg-yellow-500 text-white';
            borderColor = 'border-yellow-500';
          }
        }

        return (
          <div key={step.id} className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 ${borderColor} ${colorClass}`}>
              <i className={`fas ${iconClass}`}></i>
            </div>
            <p className="mt-2 text-sm font-bold text-gray-700">{step.title}</p>
            {step.id === 3 && isCurrent && !statusData.isTimeout && (
              <p className="text-xs text-red-500">ภายใน: {statusData.dueDate}</p>
            )}
            {step.id === 3 && isCurrent && statusData.isTimeout && (
              <p className="text-xs text-red-600 font-bold">รอเจ้าหน้าที่ตรวจสอบอีกครั้ง</p>
            )}
            {statusData.note && isCurrent && (
               <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded mt-1">หมายเหตุ: {statusData.note}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
