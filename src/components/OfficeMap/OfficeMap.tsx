import { useState } from "react";
import type { Seat } from "../../types/office";
import s from "../../assets/seats.json"
import { UserAvatar } from "../ui/UserAvatar/UserAvatar";
import type { Employee } from "../../types/office";
import { View } from "lucide-react";

const ViewBoxSize = 800;

const EmpTooltipReact = ({seat}:{seat: Seat}) => {
  return (
    <div 
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      style={{ left: `${(seat.x / ViewBoxSize) * 100}%`, top: `${(seat.y / ViewBoxSize) * 100}%` }}
    >
      {seat.emp 
        && (
          <div>
            <SeatWithTooltip seat={seat} />
          </div>
        )
      }
    </div>
  );
};

const SeatTooltipContents = ({ employee }: { employee: Employee }) => {
  return (
    <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 z-50">
      <div className="bg-black text-white text-[11px] p-3 rounded-lg shadow-2xl min-w-[160px] relative flex flex-col gap-1.5 border border-gray-700">
        
        {/* ヘッダー：名前とID */}
        <div className="border-b border-gray-600 pb-1.5 mb-0.5">
          <div className="flex justify-between items-end">
            <p className="font-bold text-sm leading-none">{employee.name}</p>
            <p className="text-[9px] text-gray-500 font-mono">#{employee.id}</p>
          </div>
        </div>

        {/* ステータスと役職：バッジスタイルで視認性を向上 */}
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded bg-gray-800 text-[10px] font-semibold text-gray-200 border border-gray-600">
            {employee.status.toUpperCase()}
          </span>
          <p className="text-gray-300 font-medium">{employee.role}</p>
        </div>

        {/* 所属：階層構造を見やすく整理 */}
        <div className="text-gray-400 space-y-0.5">
          <p className="flex items-center gap-1.5">
            <span className="text-gray-500">🏢</span> {employee.department}
          </p>
          <p className="pl-4 border-l border-gray-700 ml-1.5 flex items-center gap-1.5">
            <span className="text-[10px]">└</span> {employee.group}
          </p>
          <p className="pl-8 border-l border-gray-700 ml-1.5 flex items-center gap-1.5">
            <span className="text-[10px]">└</span> {employee.team}
          </p>
        </div>

        {/* 連絡先：最下部に配置 */}
        <div className="mt-1 pt-1.5 border-t border-gray-800 flex items-center gap-1.5 text-gray-300">
          <span>📞</span>
          <p>内線番号: <span className="font-semibold text-white">{employee.internalNumber}</span></p>
        </div>

        {/* 吹き出しのしっぽ */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-black" />
      </div>
    </div>
  );
}


export const SeatWithTooltip = ({ seat }: { seat: Seat }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!seat.isExistedEmp || !seat.emp) return null;

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${(seat.x / ViewBoxSize) * 100}%`,
        top: `${(seat.y / ViewBoxSize) * 100}%`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ツールチップ本体：アイコンの左側に配置 */}
      {isHovered && (
        <SeatTooltipContents employee={seat.emp} />
      )}

      {/* 丸いアイコン */}
      <UserAvatar
        status={seat.emp.status}
        fallback={seat.emp.name}
      />
    </div>
  );
};

const DeskBySvg = ({seat}:{seat: Seat}) => {
  const rotationX = seat.vector.x ? 0 : 180;
  const rotationY = seat.vector.y ? 0 : 180;

  return (
    <g transform={`rotate(${rotationX}, ${seat.x}, ${seat.y})`}>
      <rect 
        x={seat.x-7} 
        y={seat.y-15} 
        width="20" 
        height="30" 
        fill="white" 
        stroke="black" 
        strokeWidth="1"  
      />
      <rect
        x={seat.x-13}
        y={seat.y-8}
        width="6"
        height="16"
        fill="white"
        stroke="black"
        strokeWidth="1"
      />
      {/* <circle cx={seat.x} cy={seat.y} r="3" fill="red"/> */}
    </g>
  );
};

export function OfficeMap() {
    // 座席データ（本来はAPIやJSONから取得）
  const seats: Seat[] = s;
  const [selectedSeat, setSelectedSeat] = useState<Seat[]>(seats);

  
  return (
    <div className='border flex flex-col'>
      <div>seat graph</div>
      <div className='relative w-full aspect-video bg-gray-100 border rounded'>
        <svg viewBox={`0 0 ${ViewBoxSize} ${ViewBoxSize}`}>
          <rect x="5" y="5" width={ViewBoxSize - 10} height={ViewBoxSize - 10} fill="#f0f0f0" />
          
          {selectedSeat.map((seat, index) =>(
            <DeskBySvg seat={seat} key={index}/>
          ))}
        </svg>
        
        {selectedSeat.map((seat, index) =>(
            seat.emp && (
              <EmpTooltipReact seat={seat} key={index}/>
            )
          ))}
      </div>
      
    </div>
  );
}