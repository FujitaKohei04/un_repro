import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/office-map-by-svg')({
  component: RouteComponent,
})

interface Seat {
  id: string;
  user: string;
  department: string;
  x: number;
  y: number;
}

const EmpTooltip = ({seat}:{seat: Seat}) => {
  return (
    <g>
          {/* 背景の吹き出し */}
          <rect 
            x={seat.x + 10} y={seat.y - 64} 
            width="80" height="50" 
            fill="black" rx="4" opacity="0.8" 
          />
          {/* テキスト */}
          <text 
            x={seat.x + 50} y={seat.y - 44} 
            fill="white" fontSize="12" textAnchor="middle"
          >
            {seat.user}
          </text>
          <text 
            x={seat.x + 50} y={seat.y - 25} 
            fill="white" fontSize="12" textAnchor="middle"
          >
            {seat.department}
          </text>
          <line x1={seat.x + 20} y1={seat.y - 68} x2={seat.x + 90} y2={seat.y - 68} stroke="black" strokeWidth="2"/>
        </g>
  );
};

const DeskBySvg = ({seat}:{seat: Seat}) => {
  const [showTooltip, setShowTooltip] = useState(false);


  return (
    <g 
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{ cursor: 'pointer' }}
    >
      <rect 
        x={seat.x+5} 
        y={seat.y} 
        width="15" 
        height="20" 
        fill="white" 
        stroke="black" 
        strokeWidth="1"  
      />
      <rect
        x={seat.x}
        y={seat.y+5}
        width="5"
        height="10"
        fill="white"
        stroke="black"
        strokeWidth="1"
      />
      {showTooltip && <EmpTooltip seat={seat} />}
    </g>
  );
};

function RouteComponent() {
  

  // 座席データ（本来はAPIやJSONから取得）
  const seats = [
    { id: "seat-1", user: "田中さん", department: "開発部", x: 50, y: 50},
    { id: "seat-2", user: "佐藤さん", department: "営業部", x: 100, y: 100},
  ];
  const [selectedSeat, setSelectedSeat] = useState<Seat[]>(seats);


  return <div className='border flex flex-col'>
    <div>seat graph</div>
    <div className='border rounded'>
      <svg viewBox='0 0 800 600'>
        <rect x="5" y="5" width="790" height="590" fill="#f0f0f0" />
        
        {selectedSeat.map((seat) =>(
          <DeskBySvg seat={seat} key={seat.id}/>
        ))}
      </svg>
    </div>
    
  </div>
}
