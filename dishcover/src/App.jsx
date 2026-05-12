import { useState } from 'react'
import {
  IconMap2,
  IconBuildingStore,
  IconRosette,
  IconUserStar,
} from '@tabler/icons-react'
import MapTab from './components/MapTab'
import DetailTab from './components/DetailTab'
import StampsTab from './components/StampsTab'
import GuideTab from './components/GuideTab'

const TABS = [
  { id: 'map',    label: '탐색',     Icon: IconMap2 },
  { id: 'detail', label: '식당',     Icon: IconBuildingStore },
  { id: 'stamps', label: '스탬프',   Icon: IconRosette },
  { id: 'guide',  label: '로컬가이드', Icon: IconUserStar },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('map')

  return (
    <div className="scene">
      <div className="phone">
        <div className="screen">
          <div className="status-bar">
            <span>9:41</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="white"><path d="M7 2C9.2 2 11.2 2.9 12.6 4.4L14 3C12.2 1.1 9.7 0 7 0S1.8 1.1 0 3l1.4 1.4C2.8 2.9 4.8 2 7 2zm0 3c1.2 0 2.3.5 3.1 1.3L11.5 5C10.3 3.8 8.7 3 7 3S3.7 3.8 2.5 5l1.4 1.3C4.7 5.5 5.8 5 7 5zm0 3c.6 0 1.1.2 1.5.6L7 11l-1.5-2.4C5.9 8.2 6.4 8 7 8z"/></svg>
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><rect x="0.5" y="0.5" width="13" height="9" rx="1.5" stroke="white"/><rect x="14" y="3" width="2" height="4" rx="1" fill="white"/><rect x="2" y="2" width="9" height="6" rx="0.5" fill="white"/></svg>
            </span>
          </div>

          <div className="content">
            <MapTab    active={activeTab === 'map'}    onNavigate={setActiveTab} />
            <DetailTab active={activeTab === 'detail'} onBack={() => setActiveTab('map')} />
            <StampsTab active={activeTab === 'stamps'} />
            <GuideTab  active={activeTab === 'guide'}  />
          </div>

          <nav className="bottom-nav">
            {TABS.map(({ id, label, Icon }) => (
              <button
                key={id}
                className={`nav-btn${activeTab === id ? ' active' : ''}`}
                onClick={() => setActiveTab(id)}
              >
                <Icon size={22} stroke={1.5} />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="sidebar">
        <div className="sidebar-logo">Dishcover</div>
        <div className="sidebar-desc">지도 기반 음식 소셜 앱 — 여행자와 현지인을 잇다</div>

        <div className="sidebar-menu">
          {[
            { id: 'map',    Icon: IconMap2,          title: '탐색 화면',       desc: '지도에서 식당 핀 확인, 친구 방문·현지인 추천·주의 구분' },
            { id: 'detail', Icon: IconBuildingStore, title: '식당 상세 화면',   desc: 'Tourist trap 경고, 친구 방문, 사진 인증 리뷰, 현지인 추천' },
            { id: 'stamps', Icon: IconRosette,       title: '스탬프 랠리',      desc: '코스 완성 시 프로필 뱃지·포인트 보상, 진행 현황 추적' },
            { id: 'guide',  Icon: IconUserStar,      title: '로컬 가이드 화면', desc: '포인트 경쟁 리더보드, 레벨업 보상, 획득 뱃지 관리' },
          ].map(({ id, Icon, title, desc }) => (
            <div
              key={id}
              className={`menu-item${activeTab === id ? ' menu-item--active' : ''}`}
              onClick={() => setActiveTab(id)}
            >
              <div className="menu-item-title">
                <Icon size={16} color="var(--amber200)" />
                {title}
              </div>
              <div className="menu-item-desc">{desc}</div>
            </div>
          ))}
        </div>

        <div className="trust-box">
          <div className="trust-box-title">부정 리뷰 방지</div>
          <div className="trust-box-body">
            📸 앱 내 촬영 사진 필수<br />
            📍 위치 기반 현지인 인증<br />
            ☎️ 현지 전화번호 인증<br />
            👍 리뷰 유용성 평점 시스템
          </div>
        </div>
      </div>
    </div>
  )
}
