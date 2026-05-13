import { IconTrophy, IconAward } from '@tabler/icons-react'
import profileImg from '../assets/images/sticker 2.png'

const leaders = [
  { rank: 1,  top: true,  initials: 'TN',   name: 'Tran Ngoc',    meta: '124 reviews · helped 4,210 people', pts: '10,210P', dotStyle: { background: 'var(--amber100)', color: 'var(--amber600)' } },
  { rank: 2,  top: true,  initials: 'MA',   name: 'Minh Anh',     meta: '97 reviews · helped 3,580 people',  pts: '9,580P', dotStyle: { background: 'var(--blue200)',  color: 'var(--blue600)'  } },
  { rank: 3,  top: false, initials: 'HL',   name: 'Hoang Long',   meta: '82 reviews · helped 2,930 people',  pts: '8,930P', dotStyle: { background: 'var(--coral100)',color: 'var(--coral600)' } },
  { rank: 14, top: true,  initials: 'JS',   name: 'Jisoo Kim (Me)', meta: '38 reviews · helped 847 people',   pts: '6,240P', me: true, img: profileImg }
]

const earnedBadges = [
  { icon: '🍚', label: 'Seoul Bibimbap Master' },
  { icon: '⭐', label: 'Hanoi Foodie' },
  { icon: '🥐', label: 'Banh Mi Hunter (In Progress)', style: { background: 'var(--gray50)', color: 'var(--gray400)', borderColor: 'var(--gray100)' } },
]

export default function GuideTab({ active, onNavigate }) {
  return (
    <div className={`tab-content${active ? '' : ' hidden'}`}>
      <div className="guide-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img
              src={profileImg}
              alt="Jisoo Kim"
              style={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                objectFit: 'cover',
                flexShrink: 0,
                border: '2px solid rgba(255,255,255,.45)',
              }}
            />

            <div>
              <div className="guide-name">Jisoo Kim's Guide</div>
              <div className="guide-sub">Local Guide Lv.4 · Hanoi</div>
            </div>
          </div>
        <div className="guide-badges">
          <span className="guide-badge-chip">🍜 Seoul Bibimbap Master</span>
          <span className="guide-badge-chip">⭐ Hanoi Foodie</span>
        </div>
      </div>

      <div className="guide-stats">
        {[['6,240', 'Points'], ['38', 'Reviews'], ['847', 'Travelers Helped']].map(([val, label]) => (
          <div className="stat-card" key={label}>
            <div className="stat-val">{val}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>

      <div className="guide-body">
        <div className="points-bar-wrap">
          <div className="points-bar-label">
            <span>Lv.4 · 6,240P</span>
            <span style={{ color: 'var(--amber400)' }}>Lv.5 · 1,800P</span>
          </div>
          <div className="points-bar"><div className="points-fill" /></div>
          <div className="points-next">Earn 560P more to reach Lv.5 · Starbucks 5,000 KRW Voucher</div>
        </div>

        <button className="points-store-btn" onClick={() => onNavigate('voucher')}>
        Open Points Store
        </button>

        <div className="leaderboard-title">
          <IconTrophy size={16} color="var(--amber200)" />
          Hanoi Local Guide Rankings
        </div>

        {leaders.map((l) => (
          <div key={l.rank} className={`leader-row${l.me ? ' me' : ''}`}>
            <div className={`leader-rank${l.top ? ' top' : ''}`}>{l.rank}</div>
            {l.img ? (
              <img
                className="leader-dot"
                src={l.img}
                alt={l.name}
                style={{
                  ...l.dotStyle,
                  objectFit: 'cover',
                }}
              />
            ) : (
              <div className="leader-dot" style={l.dotStyle}>{l.initials}</div>
            )}
            <div className="leader-info">
              <div className="leader-name">{l.name}</div>
              <div className="leader-meta">{l.meta}</div>
            </div>
            <div className="leader-pts">{l.pts}</div>
          </div>
        ))}

        <div className="leaderboard-title" style={{ marginTop: 8 }}>
          <IconAward size={16} color="var(--amber200)" />
          Earned Badges
        </div>
        <div className="badges-grid">
          {earnedBadges.map(({ icon, label, style }) => (
            <div className="earned-badge" key={label} style={style}>
              <span className="earned-badge-icon">{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}