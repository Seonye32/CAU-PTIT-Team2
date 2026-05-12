import { IconArrowLeft, IconMapPin, IconAlertTriangle, IconThumbUp, IconThumbDown } from '@tabler/icons-react'

export default function DetailTab({ active, onBack }) {
  return (
    <div className={`tab-content${active ? '' : ' hidden'}`}>
      <div className="detail-hero">
        🍜
        <div className="detail-hero-overlay" />
        <button className="detail-back" onClick={onBack}>
          <IconArrowLeft size={14} color="#333" />
        </button>
      </div>

      <div className="detail-body">
        <div className="detail-name">Phở Thìn Bờ Hồ</div>
        <div className="detail-meta">
          <div className="stars">
            {'★★★★★'.split('').map((s, i) => (
              <span key={i} style={{ color: 'var(--amber200)', fontSize: 11 }}>{s}</span>
            ))}
            <span>5.0</span>
          </div>
          <div className="local-badge">
            <IconMapPin size={12} />
            현지인 인증
          </div>
        </div>

        <div className="trap-warning">
          <IconAlertTriangle size={16} color="var(--red400)" style={{ flexShrink: 0, marginTop: 1 }} />
          <div className="trap-warning-text">
            <strong>주의:</strong> 이 근처 "Pho Thin" 간판 식당들은 여행자 트랩일 수 있습니다. 정확한 위치를 확인하세요.
          </div>
        </div>

        <div className="friend-visited">
          <div className="friend-avatars">
            <div className="friend-avatar">JH</div>
            <div className="friend-avatar" style={{ background: 'var(--coral100)', color: 'var(--coral600)' }}>SY</div>
          </div>
          <div className="friend-visited-text">지현, 소연이가 방문했어요 · "진짜 맛있다고"</div>
        </div>

        <div className="section-title">사진 리뷰</div>

        <div className="review-card">
          <div className="review-header">
            <div className="reviewer-dot">MJ</div>
            <div className="reviewer-info">
              <div className="reviewer-name">민준 · 서울</div>
              <div className="reviewer-meta">📍 현장 인증 · 3일 전</div>
            </div>
            <span className="verified-badge">✓ 인증</span>
          </div>
          <div className="review-photo">🍜</div>
          <div className="review-text">
            아침 7시부터 줄 서서 먹었는데 진짜 그만한 가치가 있어요. 국물이 정말 깊고 면도 탱탱해요. 하노이 오면 무조건 필수!
          </div>
          <div className="review-helpful">
            <button className="helpful-btn"><IconThumbUp size={12} /> 도움돼요 (47)</button>
            <button className="helpful-btn"><IconThumbDown size={12} /> (2)</button>
          </div>
        </div>

        <div className="review-card">
          <div className="review-header">
            <div className="reviewer-dot" style={{ background: 'var(--green200)', color: 'var(--green600)' }}>HA</div>
            <div className="reviewer-info">
              <div className="reviewer-name">하노이 현지인 Minh Anh</div>
              <div className="reviewer-meta">🏠 현지인 가이드 · Lv.4</div>
            </div>
            <span className="verified-badge" style={{ background: 'var(--green50)', color: 'var(--green600)' }}>로컬</span>
          </div>
          <div className="review-photo" style={{ background: 'var(--teal50)' }}>🥣</div>
          <div className="review-text">
            저도 매주 오는 단골이에요! 아침 일찍 갈수록 신선한 재료로 만든 걸 드실 수 있어요. 추가 고수는 꼭 요청하세요 🌿
          </div>
          <div className="review-helpful">
            <button className="helpful-btn"><IconThumbUp size={12} /> 도움돼요 (118)</button>
          </div>
        </div>
      </div>
    </div>
  )
}
