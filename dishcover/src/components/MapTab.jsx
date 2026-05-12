import { useState } from 'react'
import { IconSearch } from '@tabler/icons-react'

const PINS = {
  noodle: {
    emoji: '🍜',
    name: 'Phở Thìn Bờ Hồ',
    sub: 'Pho · Hoan Kiem District',
    rating: '4.6',
    reviews: '218',
    color: '#1D9E75',
    badges: ['👥 3 friends visited', '🎯 Hanoi must-eat'],
  },
  rice: {
    emoji: '🍚',
    name: 'Bún Chả Hương Liên',
    sub: 'Bun Cha · Hoan Kiem District',
    rating: '4.8',
    reviews: '324',
    color: '#BA7517',
    badges: ['👥 2 friends visited', '🎯 Hanoi must-eat'],
  },
}

export default function MapTab({ active, onNavigate }) {
  const [selected, setSelected] = useState('rice')
  const pin = PINS[selected]

  return (
    <div className={`tab-content${active ? '' : ' hidden'}`}>
      <div className="map-header">
        <div className="map-header-top">
          <span className="app-logo">Dishcover</span>
          <div className="search-bar">
            <IconSearch size={14} color="var(--gray400)" />
            <span>Search in Hanoi</span>
          </div>
        </div>
        <div className="filter-chips">
          {['All', 'Visited by Friends', 'Local Picks'].map((label, i) => (
            <div key={label} className={`chip${i === 0 ? ' active' : ''}`}>{label}</div>
          ))}
        </div>
      </div>

      <div className="map-area">
        <svg className="map-svg" viewBox="0 0 296 320" xmlns="http://www.w3.org/2000/svg">
          <rect width="296" height="320" fill="#e8e4d8"/>
          {/* Roads */}
          <line x1="0" y1="100" x2="296" y2="100" stroke="#d4cfc0" strokeWidth="8"/>
          <line x1="0" y1="200" x2="296" y2="200" stroke="#d4cfc0" strokeWidth="6"/>
          <line x1="80" y1="0" x2="80" y2="320" stroke="#d4cfc0" strokeWidth="6"/>
          <line x1="200" y1="0" x2="200" y2="320" stroke="#d4cfc0" strokeWidth="8"/>
          <line x1="0" y1="155" x2="296" y2="155" stroke="#d4cfc0" strokeWidth="4"/>
          <line x1="140" y1="0" x2="140" y2="320" stroke="#d4cfc0" strokeWidth="4"/>
          {/* Blocks */}
          {[
            [84,104,52,46],[144,104,50,46],[84,159,52,36],[144,159,50,36],
            [8,104,66,46],[204,104,84,46],[204,159,84,36],[8,159,66,36],
            [8,30,66,60],[84,30,110,60],[204,30,84,60],
            [8,210,66,60],[84,210,110,60],[204,210,84,60],
          ].map(([x,y,w,h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="3" fill="#ddd8ca"/>
          ))}
          <ellipse cx="140" cy="265" rx="28" ry="16" fill="#b8d4c0" opacity="0.6"/>

          {/* Pin: tourist trap */}
          <g transform="translate(100,88)">
            <circle r="13" fill="#E24B4A" opacity="0.15"/>
            <circle r="9" fill="#E24B4A"/>
            <text x="0" y="4" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">!</text>
          </g>
          {/* Pin: friend visited (noodle) */}
          <g transform="translate(165,130)" style={{ cursor: 'pointer' }} onClick={() => selected === 'noodle' ? onNavigate('detail2') : setSelected('noodle')}>
            <circle r={selected === 'noodle' ? 16 : 13} fill="#1D9E75" opacity="0.2"/>
            <circle r={selected === 'noodle' ? 11 : 9} fill="#1D9E75"/>
            <text x="0" y="4" textAnchor="middle" fontSize="10" fill="white">🍜</text>
            {selected === 'noodle' && <g>
              <rect x="-18" y="-28" width="36" height="16" rx="6" fill="#1D9E75"/>
              <text x="0" y="-17" textAnchor="middle" fontSize="8" fill="white" fontWeight="600">4.6★</text>
            </g>}
          </g>
          {/* Pin: stamp rally (rice) */}
          <g transform="translate(220,80)" style={{ cursor: 'pointer' }} onClick={() => selected === 'rice' ? onNavigate('detail') : setSelected('rice')}>
            <circle r={selected === 'rice' ? 16 : 13} fill="#BA7517" opacity="0.2"/>
            <circle r={selected === 'rice' ? 11 : 9} fill="#BA7517"/>
            <text x="0" y="4" textAnchor="middle" fontSize="11" fill="white">🍚</text>
            {selected === 'rice' && <g>
              <rect x="-18" y="-28" width="36" height="16" rx="6" fill="#BA7517"/>
              <text x="0" y="-17" textAnchor="middle" fontSize="8" fill="white" fontWeight="600">4.8★</text>
            </g>}
          </g>
          {/* Pin: local */}
          <g transform="translate(55,170)">
            <circle r="13" fill="#639922" opacity="0.15"/>
            <circle r="9" fill="#639922"/>
            <text x="0" y="4" textAnchor="middle" fontSize="10" fill="white">🥗</text>
          </g>
          {/* Pin: coffee */}
          <g transform="translate(160,240)">
            <circle r="13" fill="#BA7517" opacity="0.15"/>
            <circle r="9" fill="#BA7517"/>
            <text x="0" y="4" textAnchor="middle" fontSize="10" fill="white">☕</text>
          </g>
          {/* User location */}
          <circle cx="140" cy="155" r="7" fill="#378ADD" opacity="0.3"/>
          <circle cx="140" cy="155" r="4" fill="#378ADD"/>
          <circle cx="140" cy="155" r="2" fill="white"/>
        </svg>

        <div className="map-card" onClick={() => onNavigate(selected === 'noodle' ? 'detail2' : 'detail')} style={{ cursor: 'pointer' }}>
          <div className="map-card-inner">
            <div className="map-card-img">{pin.emoji}</div>
            <div className="map-card-info">
              <div className="map-card-name">{pin.name}</div>
              <div className="map-card-sub">{pin.sub}</div>
              <div className="map-card-badges">
                <div className="stars">
                  {'★★★★'.split('').map((s, i) => <span key={i} style={{ color: 'var(--amber200)' }}>{s}</span>)}
                  <span style={{ color: 'var(--gray600)', fontSize: 10 }}>{pin.rating} ({pin.reviews})</span>
                </div>
              </div>
              <div className="map-card-badges">
                {pin.badges.map((b, i) => (
                  <span key={i} className={`badge-sm ${i === 0 ? 'badge-friend' : 'badge-stamp'}`}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}