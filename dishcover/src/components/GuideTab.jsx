import { IconTrophy, IconAward } from '@tabler/icons-react'

const leaders = [
  { rank: 1,  top: true,  initials: 'TN',   name: 'Tran Ngoc',    meta: '리뷰 124개 · 4,210명 도움', pts: '4,210P', dotStyle: { background: 'var(--amber100)', color: 'var(--amber600)' } },
  { rank: 2,  top: true,  initials: 'MA',   name: 'Minh Anh',     meta: '리뷰 97개 · 3,580명 도움',  pts: '3,580P', dotStyle: { background: 'var(--blue200)',  color: 'var(--blue600)'  } },
  { rank: 3,  top: false, initials: 'HL',   name: 'Hoang Long',   meta: '리뷰 82개 · 2,930명 도움',  pts: '2,930P', dotStyle: { background: 'var(--coral100)',color: 'var(--coral600)' } },
  { rank: 14, top: true,  initials: '지수', name: '김지수 (나)',   meta: '리뷰 38개 · 847명 도움',    pts: '1,240P', me: true },
]

const earnedBadges = [
  { icon: '🍚', label: '서울 비빔밥 마스터' },
  { icon: '⭐', label: '하노이 미식가' },
  { icon: '🥐', label: '반미 헌터 (진행중)', style: { background: 'var(--gray50)', color: 'var(--gray400)', borderColor: 'var(--gray100)' } },
]

export default function GuideTab({ active }) {
  return (
    <div className={`tab-content${active ? '' : ' hidden'}`}>
      <div className="guide-header">
        <div className="guide-name">김지수님의 가이드</div>
        <div className="guide-sub">로컬 가이드 Lv.4 · 하노이</div>
        <div className="guide-badges">
          <span className="guide-badge-chip">🍜 서울 비빔밥 마스터</span>
          <span className="guide-badge-chip">⭐ 하노이 미식가</span>
        </div>
      </div>

      <div className="guide-stats">
        {[['1,240', '포인트'], ['38', '리뷰 작성'], ['847', '여행자 도움']].map(([val, label]) => (
          <div className="stat-card" key={label}>
            <div className="stat-val">{val}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>

      <div className="guide-body">
        <div className="points-bar-wrap">
          <div className="points-bar-label">
            <span>Lv.4 · 1,240P</span>
            <span style={{ color: 'var(--amber400)' }}>Lv.5 · 1,800P</span>
          </div>
          <div className="points-bar"><div className="points-fill" /></div>
          <div className="points-next">560P 더 모으면 Lv.5 달성 · 스타벅스 상품권 5,000원</div>
        </div>

        <div className="leaderboard-title">
          <IconTrophy size={16} color="var(--amber200)" />
          하노이 로컬 가이드 순위
        </div>

        {leaders.map((l) => (
          <div key={l.rank} className={`leader-row${l.me ? ' me' : ''}`}>
            <div className={`leader-rank${l.top ? ' top' : ''}`}>{l.rank}</div>
            <div className="leader-dot" style={l.dotStyle}>{l.initials}</div>
            <div className="leader-info">
              <div className="leader-name">{l.name}</div>
              <div className="leader-meta">{l.meta}</div>
            </div>
            <div className="leader-pts">{l.pts}</div>
          </div>
        ))}

        <div className="leaderboard-title" style={{ marginTop: 8 }}>
          <IconAward size={16} color="var(--amber200)" />
          획득 뱃지
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
