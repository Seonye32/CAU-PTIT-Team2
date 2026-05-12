import { IconArrowLeft, IconUsers, IconMapPin } from '@tabler/icons-react'
import bunChaImg from '../assets/images/bun-cha-huong-lien.jpeg'
import phoThinImg from '../assets/images/pho-thin-bo-ho.jpg'
import cafeGiangImg from '../assets/images/cafe-giang.jpeg'

const FRIENDS = [
  {
    initials: 'JH', name: 'Jihyun Park', meta: 'Seoul · 14 reviews',
    dotStyle: { background: 'var(--teal100)', color: 'var(--teal800)' },
    recent: 'Visited Bún Chả Hương Liên',
    when: '2 days ago',
  },
  {
    initials: 'SY', name: 'Soyeon Lee', meta: 'Busan · 9 reviews',
    dotStyle: { background: 'var(--coral100)', color: 'var(--coral600)' },
    recent: 'Visited Phở Thìn Bờ Hồ',
    when: '5 days ago',
  },
  {
    initials: 'MK', name: 'Minkyu Choi', meta: 'Hanoi · 22 reviews',
    dotStyle: { background: 'var(--blue200)', color: 'var(--blue600)' },
    recent: 'Saved Bánh Mì 25',
    when: '1 week ago',
  },
  {
    initials: 'YJ', name: 'Yujin Han', meta: 'Seoul · 5 reviews',
    dotStyle: { background: 'var(--green200)', color: 'var(--green600)' },
    recent: 'Visited Cà Phê Trứng Giảng',
    when: '1 week ago',
  },
]

const FRIEND_PICKS = [
  { img: phoThinImg,   name: 'Phở Thìn Bờ Hồ',     sub: 'Pho · Hoan Kiem',          friends: '👥 3 friends visited' },
  { img: bunChaImg,    name: 'Bún Chả Hương Liên',   sub: 'Bun Cha · Hoan Kiem',      friends: '👥 2 friends visited' },
  { img: cafeGiangImg, name: 'Cà Phê Trứng Giảng',  sub: 'Egg Coffee · Old Quarter', friends: '👥 1 friend visited' },
]

export default function SocialsTab({ active, onBack }) {
  return (
    <div className={`tab-content${active ? '' : ' hidden'}`}>
      <div className="guide-header" style={{ paddingTop: 14 }}>
        <button className="detail-back" style={{ position: 'relative', top: 'unset', left: 'unset', marginBottom: 12 }} onClick={onBack}>
          <IconArrowLeft size={14} color="#333" />
        </button>
        <div className="guide-name">Friends</div>
        <div className="guide-sub">See where your friends have been</div>
        <div className="guide-badges" style={{ marginTop: 10 }}>
          <span className="guide-badge-chip">👥 4 Friends</span>
          <span className="guide-badge-chip">📍 Hanoi</span>
        </div>
      </div>

      <div className="guide-body" style={{ paddingTop: 12 }}>
        <div className="leaderboard-title">
          <IconUsers size={16} color="var(--amber200)" />
          Recent Activity
        </div>
        {FRIENDS.map((f) => (
          <div key={f.name} className="leader-row">
            <div className="leader-dot" style={f.dotStyle}>{f.initials}</div>
            <div className="leader-info">
              <div className="leader-name">{f.name}</div>
              <div className="leader-meta">{f.recent} · {f.when}</div>
            </div>
          </div>
        ))}

        <div className="leaderboard-title" style={{ marginTop: 8 }}>
          <IconMapPin size={16} color="var(--amber200)" />
          Friend Picks Near You
        </div>
        {FRIEND_PICKS.map((r) => (
          <div key={r.name} className="rally-card" style={{ marginBottom: 8, padding: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src={r.img} alt={r.name} style={{ width: 40, height: 40, borderRadius: 10, objectFit: 'cover', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div className="map-card-name">{r.name}</div>
                <div style={{ fontSize: 10, color: 'var(--gray400)', marginTop: 1 }}>{r.sub}</div>
              </div>
              <span className="badge-sm badge-friend">{r.friends}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
