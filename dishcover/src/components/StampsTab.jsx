import { IconAward } from '@tabler/icons-react'

const rallies = [
  {
    icon: '🍜',
    name: 'Hanoi Must-Eat 5',
    progress: '3/5 completed · 2 more to earn the badge',
    pct: 60,
    stamps: [
      { emoji: '🍜', done: true },
      { emoji: '🥗', done: true },
      { emoji: '☕',  done: true },
      { emoji: '🍚', done: false },
      { emoji: '🥐', done: false },
    ],
    reward: <><strong>Hanoi Foodie</strong> profile badge</>,
    completed: false,
    awardColor: 'var(--amber200)',
  },
  {
    icon: '🍚',
    name: 'Seoul Bibimbap Tour',
    progress: '5/5 completed',
    pct: 100,
    stamps: [
      { emoji: '🍚', done: true, doneStyle: { background: 'var(--green50)' } },
      { emoji: '🥘', done: true, doneStyle: { background: 'var(--green50)' } },
      { emoji: '🥗', done: true, doneStyle: { background: 'var(--green50)' } },
      { emoji: '🫕', done: true, doneStyle: { background: 'var(--green50)' } },
      { emoji: '🍳', done: true, doneStyle: { background: 'var(--green50)' } },
    ],
    reward: <><strong style={{ color: 'var(--green600)' }}>Seoul Bibimbap Master</strong> profile badge</>,
    completed: true,
    fillColor: 'var(--green400)',
    rewardStyle: { color: 'var(--green600)' },
    awardColor: 'var(--green400)',
  },
  {
    icon: '🥐',
    name: 'Vietnam Banh Mi Tour',
    progress: '0/6 completed · New rally!',
    pct: 0,
    stamps: Array(5).fill({ emoji: '🥐', done: false }),
    reward: <><strong>Banh Mi Hunter</strong> profile badge + 10,000P</>,
    completed: false,
    awardColor: 'var(--amber200)',
  },
]

export default function StampsTab({ active }) {
  return (
    <div className={`tab-content${active ? '' : ' hidden'}`}>
      <div className="stamps-header">
        <div className="stamps-title">Stamp Rally</div>
        <div className="stamps-sub">Complete special courses and earn badges</div>
      </div>
      <div className="stamps-body">
        {rallies.map((r) => (
          <div className="rally-card" key={r.name}>
            <div className="rally-header">
              <div className="rally-icon">{r.icon}</div>
              <div className="rally-info">
                <div className="rally-name">{r.name}</div>
                <div className="rally-progress-text">{r.progress}</div>
              </div>
              {r.completed && <span className="completed-badge">Completed ✓</span>}
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${r.pct}%`, background: r.fillColor }} />
            </div>
            <div className="stamp-grid">
              {r.stamps.map((s, i) => (
                <div
                  key={i}
                  className={`stamp-item ${s.done ? 'done' : 'todo'}`}
                  style={s.done ? s.doneStyle : undefined}
                >
                  {s.emoji}
                </div>
              ))}
            </div>
            <div className="reward-row">
              <IconAward size={16} color={r.awardColor} />
              <div className="reward-text" style={r.rewardStyle}>
                {r.completed ? 'Earned: ' : 'Completion Reward: '}{r.reward}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}