import { useState } from 'react'
import { IconArrowLeft, IconGift, IconShoppingCart, IconBuildingStore, IconX } from '@tabler/icons-react'
import qrCodeImg from '../assets/images/qrcode-example.jpg'

const voucherCategories = [
  {
    id: 'convenience',
    icon: <IconBuildingStore size={20} />,
    title: 'Convenience Store',
    desc: 'Use your points for convenience store vouchers.',
    vouchers: [
      { name: '5,000 KRW Voucher', points: 5000 },
      { name: '10,000 KRW Voucher', points: 10000 },
    ],
  },
  {
    id: 'mart',
    icon: <IconShoppingCart size={20} />,
    title: 'Mart',
    desc: 'Redeem points for grocery and mart vouchers.',
    vouchers: [
      { name: '5,000 KRW Voucher', points: 5000 },
      { name: '10,000 KRW Voucher', points: 10000 },
    ],
  },
]

export default function VoucherTab({ active, onBack }) {
  const [popup, setPopup] = useState(null)
  const [points, setPoints] = useState(6240)

  const handleRedeem = (voucher) => {
    if (voucher.points <= points) {
      setPoints(p => p - voucher.points)
      setPopup(voucher.name)
    }
  }

  return (
    <div className={`tab-content${active ? '' : ' hidden'}`}>
      <div className="voucher-header">
        <button className="voucher-back" onClick={onBack}>
          <IconArrowLeft size={16} />
        </button>
        <div>
          <div className="voucher-title">Points Store</div>
          <div className="voucher-sub">Redeem your points for vouchers</div>
        </div>
      </div>

      <div className="voucher-balance-card">
        <div className="voucher-balance-label">Available Points</div>
        <div className="voucher-balance-value">{points.toLocaleString()}P</div>
        <div className="voucher-balance-desc">{points >= 5000 ? 'You have enough points to redeem vouchers!' : 'Not enough points to redeem.'}</div>
      </div>

      <div className="voucher-body">
        {voucherCategories.map((category) => (
          <div className="voucher-category-card" key={category.id}>
            <div className="voucher-category-header">
              <div className="voucher-category-icon">{category.icon}</div>
              <div>
                <div className="voucher-category-title">{category.title}</div>
                <div className="voucher-category-desc">{category.desc}</div>
              </div>
            </div>

            <div className="voucher-list">
              {category.vouchers.map((voucher) => (
                <div className="voucher-item" key={voucher.name}>
                  <div className="voucher-item-left">
                    <IconGift size={18} color="var(--amber400)" />
                    <div>
                      <div className="voucher-item-name">{voucher.name}</div>
                      <div className="voucher-item-points">{voucher.points.toLocaleString()}P required</div>
                    </div>
                  </div>
                  <button
                    className="voucher-redeem-btn"
                    disabled={voucher.points > points}
                    style={voucher.points <= points ? { background: 'var(--amber400)', color: '#fff', cursor: 'pointer' } : undefined}
                    onClick={() => handleRedeem(voucher)}
                  >
                    {voucher.points <= points ? 'Redeem' : 'Not enough'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {popup && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,.6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 10,
        }} onClick={() => setPopup(null)}>
          <div style={{
            background: '#1e1e4a',
            borderRadius: 16,
            padding: 20,
            width: 220,
            textAlign: 'center',
            border: '.5px solid rgba(255,255,255,.1)',
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#e8e8f8' }}>{popup}</div>
              <button onClick={() => setPopup(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gray400)' }}>
                <IconX size={16} />
              </button>
            </div>
            <img src={qrCodeImg} alt="QR Code" style={{ width: '100%', borderRadius: 10 }} />
            <div style={{ fontSize: 10, color: 'var(--gray400)', marginTop: 10 }}>Show this QR code at the store</div>
          </div>
        </div>
      )}
    </div>
  )
}
