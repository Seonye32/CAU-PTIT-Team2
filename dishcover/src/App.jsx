import { useRef, useState } from 'react'
import {
  IconMap2,
  IconBuildingStore,
  IconRosette,
  IconUserStar,
  IconCamera,
} from '@tabler/icons-react'
import MapTab from './components/MapTab'
import DetailTab from './components/DetailTab'
import DetailTab2 from './components/DetailTab2'
import RestaurantTab from './components/RestaurantTab'
import StampsTab from './components/StampsTab'
import GuideTab from './components/GuideTab'
import VoucherTab from './components/VoucherTab'
import ProfileTab from './components/ProfileTab'
import SocialsTab from './components/SocialsTab'
import CameraTab from './components/CameraTab'


const TABS = [
  { id: 'map', label: 'Explore', Icon: IconMap2 },
  { id: 'detail', label: 'Restaurant', Icon: IconBuildingStore },
  { id: 'camera', label: 'Camera', Icon: IconCamera, isCenter: true },
  { id: 'stamps', label: 'Stamps', Icon: IconRosette },
  { id: 'guide', label: 'Local Guide', Icon: IconUserStar },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('map')
  const [capturedPhoto, setCapturedPhoto] = useState(null)
  const cameraInputRef = useRef(null)

  const openCamera = () => {
    cameraInputRef.current?.click()
  }

  const handleCameraChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    const imageUrl = URL.createObjectURL(file)
    setCapturedPhoto(imageUrl)
    setActiveTab('camera')
  }

  return (
    <div className="scene">
      <div className="phone">
        <div className="screen">
          <div className="status-bar">
            <span>9:41</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="white">
                <path d="M7 2C9.2 2 11.2 2.9 12.6 4.4L14 3C12.2 1.1 9.7 0 7 0S1.8 1.1 0 3l1.4 1.4C2.8 2.9 4.8 2 7 2zm0 3c1.2 0 2.3.5 3.1 1.3L11.5 5C10.3 3.8 8.7 3 7 3S3.7 3.8 2.5 5l1.4 1.3C4.7 5.5 5.8 5 7 5zm0 3c.6 0 1.1.2 1.5.6L7 11l-1.5-2.4C5.9 8.2 6.4 8 7 8z" />
              </svg>
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <rect x="0.5" y="0.5" width="13" height="9" rx="1.5" stroke="white" />
                <rect x="14" y="3" width="2" height="4" rx="1" fill="white" />
                <rect x="2" y="2" width="9" height="6" rx="0.5" fill="white" />
              </svg>
            </span>
          </div>

          <div className="content">
            <MapTab     active={activeTab === 'map'}     onNavigate={setActiveTab} />
            <RestaurantTab active={activeTab === 'detail'}  onNavigate={setActiveTab} />
            <DetailTab  active={activeTab === 'restaurant'}  onBack={() => setActiveTab('detail')} />
            <DetailTab2 active={activeTab === 'detail2'} onBack={() => setActiveTab('detail')} />
            <StampsTab active={activeTab === 'stamps'} />
            <GuideTab active={activeTab === 'guide'} onNavigate={setActiveTab} />
            <VoucherTab active={activeTab === 'voucher'} onBack={() => setActiveTab('guide')} />
            <ProfileTab active={activeTab === 'profile'} onBack={() => setActiveTab('map')} />
            <SocialsTab active={activeTab === 'socials'} onBack={() => setActiveTab('map')} />
          </div>

          <nav className="bottom-nav">
            {TABS.map(({ id, label, Icon, isCenter }) => (
              <button
                key={id}
                className={`nav-btn${activeTab === id ? ' active' : ''}${isCenter ? ' nav-btn-camera' : ''}`}
                onClick={() => {
                  if (id === 'camera') {
                    openCamera()
                  } else {
                    setActiveTab(id)
                  }
                }}
              >
                <Icon size={isCenter ? 24 : 22} stroke={1.5} />
                {!isCenter && <span>{label}</span>}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
