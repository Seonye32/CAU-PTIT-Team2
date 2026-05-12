import { useState } from 'react'
import { IconSearch, IconMapPin } from '@tabler/icons-react'
import phoThinImg from '../assets/images/pho-thin-bo-ho.jpg'

const RESTAURANTS = [
  {
    emoji: '🍚',
    name: 'Bún Chả Hương Liên',
    cuisine: 'Bun Cha · Hoan Kiem',
    rating: '4.8',
    reviews: 324,
    badges: ['👥 2 friends', '🎯 Must-eat'],
    badgeStyles: ['badge-friend', 'badge-stamp'],
    dest: 'restaurant',
  },
  {
    emoji: null,
    img: phoThinImg,
    name: 'Phở Thìn Bờ Hồ',
    cuisine: 'Pho · Hoan Kiem',
    rating: '4.6',
    reviews: 218,
    badges: ['👥 3 friends', '🎯 Must-eat'],
    badgeStyles: ['badge-friend', 'badge-stamp'],
    dest: 'detail2',
  },
  {
    emoji: '🥗',
    name: 'Bún Bò Nam Bộ',
    cuisine: 'Bun Bo · Ba Dinh',
    rating: '4.4',
    reviews: 143,
    badges: ['🏠 Local Pick'],
    badgeStyles: ['badge-friend'],
    dest: null,
  },
  {
    emoji: '☕',
    name: 'Cà Phê Trứng Giảng',
    cuisine: 'Egg Coffee · Old Quarter',
    rating: '4.7',
    reviews: 512,
    badges: ['👥 1 friend', '🎯 Must-try'],
    badgeStyles: ['badge-friend', 'badge-stamp'],
    dest: null,
  },
  {
    emoji: '🥐',
    name: 'Bánh Mì 25',
    cuisine: 'Banh Mi · Hoan Kiem',
    rating: '4.5',
    reviews: 389,
    badges: ['🏠 Local Pick'],
    badgeStyles: ['badge-friend'],
    dest: null,
  },
]

const FILTERS = ['All', 'Friends', 'Local Picks', 'Must-eat']

export default function RestaurantTab({ active, onNavigate }) {
  const [activeFilter, setActiveFilter] = useState(0)

  return (
    <div className={`tab-content${active ? '' : ' hidden'}`}>
      <div className="map-header">
        <div className="map-header-top">
          <span className="app-logo">Dishcover</span>
          <div className="search-bar">
            <IconSearch size={14} color="var(--gray400)" />
            <span>Search restaurants</span>
          </div>
        </div>
        <div className="filter-chips">
          {FILTERS.map((label, i) => (
            <div
              key={label}
              className={`chip${activeFilter === i ? ' active' : ''}`}
              onClick={() => setActiveFilter(i)}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="stamps-body">
        <div className="section-title" style={{ marginTop: 0 }}>Near You · Hanoi</div>
        {RESTAURANTS.map((r) => (
          <div
            key={r.name}
            className="rally-card"
            style={{ cursor: r.dest ? 'pointer' : 'default', marginBottom: 8 }}
            onClick={() => r.dest && onNavigate(r.dest)}
          >
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              {r.img
                ? <img src={r.img} alt={r.name} style={{ width: 44, height: 44, borderRadius: 10, objectFit: 'cover', flexShrink: 0 }} />
                : <div className="map-card-img" style={{ width: 44, height: 44, fontSize: 22, flexShrink: 0 }}>{r.emoji}</div>
              }
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="map-card-name">{r.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
                  <IconMapPin size={10} color="var(--gray400)" />
                  <span style={{ fontSize: 10, color: 'var(--gray400)' }}>{r.cuisine}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                  <div className="stars">
                    {'★★★★'.split('').map((s, i) => (
                      <span key={i} style={{ color: 'var(--amber200)' }}>{s}</span>
                    ))}
                    <span style={{ color: 'var(--gray600)', fontSize: 10 }}>{r.rating} ({r.reviews})</span>
                  </div>
                </div>
                <div className="map-card-badges" style={{ marginTop: 5 }}>
                  {r.badges.map((b, i) => (
                    <span key={i} className={`badge-sm ${r.badgeStyles[i]}`}>{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
