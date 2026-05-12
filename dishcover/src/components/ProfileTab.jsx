import { IconArrowLeft, IconMapPin, IconStar, IconBookmark } from '@tabler/icons-react'

const VISITED = [
  { emoji: '🍚', name: 'Bún Chả Hương Liên', sub: 'Bun Cha · Hoan Kiem', rating: '4.8', date: '2 days ago' },
  { emoji: '☕', name: 'Cà Phê Trứng Giảng', sub: 'Egg Coffee · Old Quarter', rating: '4.7', date: '1 week ago' },
  { emoji: '🍜', name: 'Phở Thìn Bờ Hồ', sub: 'Pho · Hoan Kiem', rating: '4.6', date: '2 weeks ago' },
]

const SAVED = [
  { emoji: '🥐', name: 'Bánh Mì 25', sub: 'Banh Mi · Hoan Kiem' },
  { emoji: '🥗', name: 'Bún Bò Nam Bộ', sub: 'Bun Bo · Ba Dinh' },
]

export default function ProfileTab({ active, onBack }) {
  return (
    <div className={`tab-content${active ? '' : ' hidden'}`}>
      <div className="guide-header" style={{ paddingTop: 14 }}>
        <button className="detail-back" style={{ position: 'relative', top: 'unset', left: 'unset', marginBottom: 12 }} onClick={onBack}>
          <IconArrowLeft size={14} color="#333" />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 52, height: 52, borderRadius: '50%',
            background: 'rgba(255,255,255,.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 24, flexShrink: 0,
          }}>🧑</div>
          <div>
            <div className="guide-name">Jisoo Kim</div>
            <div className="guide-sub" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <IconMapPin size={10} />
              Hanoi, Vietnam
            </div>
          </div>
        </div>
        <div className="guide-badges" style={{ marginTop: 10 }}>
          <span className="guide-badge-chip">🍜 Seoul Bibimbap Master</span>
          <span className="guide-badge-chip">⭐ Hanoi Foodie</span>
        </div>
      </div>

      <div className="guide-stats">
        {[['24', 'Visited'], ['8', 'Saved'], ['38', 'Reviews']].map(([val, label]) => (
          <div className="stat-card" key={label}>
            <div className="stat-val">{val}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>

      <div className="guide-body">
        <div className="leaderboard-title">
          <IconStar size={16} color="var(--amber200)" />
          Recently Visited
        </div>
        {VISITED.map((r) => (
          <div key={r.name} className="rally-card" style={{ marginBottom: 8, padding: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className="map-card-img" style={{ width: 40, height: 40, fontSize: 20, flexShrink: 0 }}>{r.emoji}</div>
              <div style={{ flex: 1 }}>
                <div className="map-card-name">{r.name}</div>
                <div style={{ fontSize: 10, color: 'var(--gray400)', marginTop: 1 }}>{r.sub}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 11, color: 'var(--amber200)', fontWeight: 600 }}>★ {r.rating}</div>
                <div style={{ fontSize: 9, color: 'var(--gray400)', marginTop: 2 }}>{r.date}</div>
              </div>
            </div>
          </div>
        ))}

        <div className="leaderboard-title" style={{ marginTop: 8 }}>
          <IconBookmark size={16} color="var(--amber200)" />
          Saved Places
        </div>
        {SAVED.map((r) => (
          <div key={r.name} className="rally-card" style={{ marginBottom: 8, padding: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className="map-card-img" style={{ width: 40, height: 40, fontSize: 20, flexShrink: 0 }}>{r.emoji}</div>
              <div style={{ flex: 1 }}>
                <div className="map-card-name">{r.name}</div>
                <div style={{ fontSize: 10, color: 'var(--gray400)', marginTop: 1 }}>{r.sub}</div>
              </div>
              <span className="badge-sm badge-stamp">Saved</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
