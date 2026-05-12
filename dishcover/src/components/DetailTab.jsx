import {
  IconArrowLeft,
  IconMapPin,
  IconThumbUp,
  IconThumbDown,
} from '@tabler/icons-react'
import bunChaImg from '../assets/images/bun-cha-huong-lien.jpeg'
import bunChaImg2 from '../assets/images/bun-cha-huong-lien2.jpg'
import bunChaStoreImg from '../assets/images/bun-cha-store.jpg'


export default function DetailTab({ active, onBack }) {
  return (
    <div className={`tab-content${active ? '' : ' hidden'}`}>
      <div className="detail-hero">
        <img src={bunChaStoreImg} alt="Bún Chả Hương Liên" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div className="detail-hero-overlay" />
        <button className="detail-back" onClick={onBack}>
          <IconArrowLeft size={14} color="#333" />
        </button>
      </div>

      <div className="detail-body">
        <div className="detail-name">Bún Chả Hương Liên</div>
        <div className="detail-meta">
          <div className="stars">
            {'★★★★'.split('').map((s, i) => (
              <span key={i} style={{ color: 'var(--amber200)', fontSize: 11 }}>{s}</span>
            ))}
            <span>4.8 (324)</span>
          </div>
          <div className="local-badge">
            <IconMapPin size={12} />
            Local Verified
          </div>
        </div>

        <div className="friend-visited">
          <div className="friend-avatars">
            <div className="friend-avatar">JS</div>
            <div className="friend-avatar" style={{ background: 'var(--coral100)', color: 'var(--coral600)' }}>TL</div>
          </div>
          <div className="friend-visited-text">Jisoo and Thanh Lan visited · "Absolutely the best bún chả in Hanoi!"</div>
        </div>

        <div className="section-title">Photo Reviews</div>

        <div className="review-card">
          <div className="review-header">
            <div className="reviewer-dot">JS</div>
            <div className="reviewer-info">
              <div className="reviewer-name">Jisoo · Hanoi</div>
              <div className="reviewer-meta">📍 On-site Verified · 3 days ago</div>
            </div>
            <span className="verified-badge">✓ Verified</span>
          </div>
          <div className="review-photo" style={{ padding: 0, overflow: 'hidden' }}>
            <img src={bunChaImg2} alt="Bún Chả review" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="review-text">
            I waited in line from 11 a.m., and it was totally worth it. The grilled pork patties were incredibly smoky, and the dipping sauce was perfectly balanced. A must-visit spot if you come to Hanoi!
          </div>
          <div className="review-helpful">
            <button className="helpful-btn"><IconThumbUp size={12} /> Helpful (47)</button>
            <button className="helpful-btn"><IconThumbDown size={12} /> (2)</button>
          </div>
        </div>

        <div className="review-card">
          <div className="review-header">
            <div className="reviewer-dot" style={{ background: 'var(--green200)', color: 'var(--green600)' }}>TL</div>
            <div className="reviewer-info">
              <div className="reviewer-name">Thanh Lan · Hanoi Local</div>
              <div className="reviewer-meta">🏠 Local Guide · Lv.4</div>
            </div>
            <span className="verified-badge" style={{ background: 'var(--green50)', color: 'var(--green600)' }}>Local</span>
          </div>
          <div className="review-photo" style={{ padding: 0, overflow: 'hidden' }}>
            <img src={bunChaImg} alt="Bún Chả review" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="review-text">
            I come here almost every week! If you go early in the morning, you can enjoy the freshest ingredients. Make sure to ask for extra cilantro 🌿
          </div>
          <div className="review-helpful">
            <button className="helpful-btn"><IconThumbUp size={12} /> Helpful (118)</button>
          </div>
        </div>
      </div>
    </div>
  )
}