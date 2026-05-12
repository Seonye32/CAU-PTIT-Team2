import { IconAward } from '@tabler/icons-react'

const rallies = [
  {
    icon: '🍜',
    name: '하노이 Must-Eat 5',
    progress: '3/5 완료 · 뱃지까지 2개 남았어요',
    pct: 60,
    stamps: [
      { emoji: '🍜', done: true },
      { emoji: '🥗', done: true },
      { emoji: '☕',  done: true },
      { emoji: '🍚', done: false },
      { emoji: '🥐', done: false },
    ],
    reward: <><strong>하노이 미식가</strong> 프로필 뱃지</>,
    completed: false,
    awardColor: 'var(--amber200)',
  },
  {
    icon: '🍚',
    name: '서울 비빔밥 투어',
    progress: '5/5 완료',
    pct: 100,
    stamps: [
      { emoji: '🍚', done: true, doneStyle: { background: 'var(--green50)' } },
      { emoji: '🥘', done: true, doneStyle: { background: 'var(--green50)' } },
      { emoji: '🥗', done: true, doneStyle: { background: 'var(--green50)' } },
      { emoji: '🫕', done: true, doneStyle: { background: 'var(--green50)' } },
      { emoji: '🍳', done: true, doneStyle: { background: 'var(--green50)' } },
    ],
    reward: <><strong style={{ color: 'var(--green600)' }}>서울 비빔밥 마스터</strong> 프로필 뱃지</>,
    completed: true,
    fillColor: 'var(--green400)',
    rewardStyle: { color: 'var(--green600)' },
    awardColor: 'var(--green400)',
  },
  {
    icon: '🥐',
    name: '베트남 반미 투어',
    progress: '0/6 완료 · 새 랠리!',
    pct: 0,
    stamps: Array(5).fill({ emoji: '🥐', done: false }),
    reward: <><strong>반미 헌터</strong> 프로필 뱃지 + 10,000P</>,
    completed: false,
    awardColor: 'var(--amber200)',
  },
]

export default function StampsTab({ active }) {
  return (
    <div className={`tab-content${active ? '' : ' hidden'}`}>
      <div className="stamps-header">
        <div className="stamps-title">스탬프 랠리</div>
        <div className="stamps-sub">특별 코스를 완성하고 뱃지를 획득하세요</div>
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
              {r.completed && <span className="completed-badge">완료 ✓</span>}
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
                {r.completed ? '획득: ' : '완성 보상: '}{r.reward}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
