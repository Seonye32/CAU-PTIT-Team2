import { IconArrowLeft, IconGift, IconShoppingCart, IconBuildingStore } from '@tabler/icons-react'

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
        <div className="voucher-balance-value">1,240P</div>
        <div className="voucher-balance-desc">Earn 3,760P more to redeem a 5,000 KRW voucher.</div>
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
                  <button className="voucher-redeem-btn" disabled>
                    Not enough
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}