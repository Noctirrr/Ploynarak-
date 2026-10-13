import { useState } from 'react';
import { Check, Droplets, Utensils, Pill, Moon } from 'lucide-react';

interface ChecklistItem {
  id: string;
  label: string;
  sublabel: string;
  icon: typeof Droplets;
}

const CARE_ITEMS: ChecklistItem[] = [
  {
    id: 'water',
    label: 'ดื่มน้ำสะอาดบ่อยๆ',
    sublabel: 'จิบน้ำอุ่นหรือน้ำอุณหภูมิห้องทีละนิดนะ',
    icon: Droplets,
  },
  {
    id: 'food',
    label: 'กินข้าวให้ครบมื้อ',
    sublabel: 'ถ้าเบื่ออาหาร ลองทานข้าวต้มหรือซุปร้อนๆ ก็ได้นะ',
    icon: Utensils,
  },
  {
    id: 'medicine',
    label: 'ทานยาให้ตรงเวลา',
    sublabel: 'อย่าลืมทานยาตามที่คุณหมอบอกนะคนเก่ง',
    icon: Pill,
  },
  {
    id: 'rest',
    label: 'นอนหลับพักผ่อนให้เต็มอิ่ม',
    sublabel: 'วางโทรศัพท์ หลับตา และปล่อยใจให้สบายนะคะ',
    icon: Moon,
  },
];

export default function CareChecklist() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setCompleted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const count = Object.values(completed).filter(Boolean).length;
  const total = CARE_ITEMS.length;

  return (
    <div className="glass-panel mx-auto w-full max-w-2xl rounded-3xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F0E6E9] pb-5">
        <div>
          <span className="text-xs font-medium tracking-widest text-[#B57C89] uppercase">
            Care Checklist
          </span>
          <h3 className="mt-1 text-lg font-medium text-[#2C2426]">
            เช็กลิสต์ดูแลตัวเองของคนเก่ง
          </h3>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto rounded-full bg-[#FAF3F5] px-3.5 py-1.5 text-xs font-medium text-[#7D5A64]">
          <span>ทำแล้ว</span>
          <span className="font-semibold text-[#A8586C] tabular-nums">{count}</span>
          <span>จาก {total} ข้อ</span>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {CARE_ITEMS.map((item) => {
          const Icon = item.icon;
          const isDone = !!completed[item.id];

          return (
            <button
              key={item.id}
              onClick={() => toggleItem(item.id)}
              type="button"
              className={`group flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all duration-300 ${
                isDone
                  ? 'border-[#E8CDD4] bg-[#FFF8FA] shadow-xs'
                  : 'border-[#F2E8EB] bg-white/60 hover:border-[#DEC5CD] hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                    isDone
                      ? 'bg-[#A8586C] text-white'
                      : 'bg-[#F9ECEF] text-[#8C606C] group-hover:bg-[#F4DFE5]'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p
                    className={`text-sm font-medium transition-colors ${
                      isDone ? 'text-[#8C4A5A] line-through' : 'text-[#362C2E]'
                    }`}
                  >
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs text-[#87787C]">
                    {item.sublabel}
                  </p>
                </div>
              </div>

              <div
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                  isDone
                    ? 'border-[#A8586C] bg-[#A8586C] text-white'
                    : 'border-[#D9C4CA] bg-white group-hover:border-[#A8586C]'
                }`}
              >
                {isDone && <Check className="h-3.5 w-3.5 stroke-[2.5]" />}
              </div>
            </button>
          );
        })}
      </div>

      {count === total && (
        <div className="mt-6 rounded-2xl border border-[#EACCD4] bg-[#FFF6F8] p-4 text-center">
          <p className="text-sm font-medium text-[#8A4656]">
            คนเก่งทำครบทุกข้อแล้ว เค้าภูมิใจในตัวเธอมากๆ เลยนะ
          </p>
          <p className="mt-1 text-xs text-[#9B6E7B]">
            ตอนนี้พักผ่อนได้เต็มที่เลยนะคะ ฝันดีล่วงหน้านะ
          </p>
        </div>
      )}
    </div>
  );
}
