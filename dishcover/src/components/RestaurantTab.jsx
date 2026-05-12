import { useState } from 'react'
import { IconMapPin } from '@tabler/icons-react'
import logoImg from '../assets/images/dishcover-text-logo.png'
import { RESTAURANTS } from '../data/restaurants'
import SearchDropdown from './SearchDropdown'

const FILTERS = ['All', 'Friends', 'Local Picks', 'Must-eat']
const filterKey = { 'Friends': 'friends', 'Local Picks': 'local', 'Must-eat': 'must-eat' }

export default function RestaurantTab({ active, onNavigate }) {
  const [activeFilter, setActiveFilter] = useState(0)

  const filtered = FILTERS[activeFilter] === 'All'
    ? RESTAURANTS
    : RESTAURANTS.filter(r => r.categories.includes(filterKey[FILTERS[activeFilter]]))

  return (
    <div className={`tab-content${active ? '' : ' hidden'}`}>
      <div className="map-header">
        <div className="map-header-top">
          <img src={logoImg} alt="Dishcover" style={{ height: 18, objectFit: 'contain' }} />
          <SearchDropdown
            restaurants={RESTAURANTS}
            placeholder="Search restaurants"
            onSelect={(r) => r.dest && onNavigate(r.dest)}
          />
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
        {filtered.map((r) => (
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
