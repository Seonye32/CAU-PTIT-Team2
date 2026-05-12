import { useRef, useState } from 'react'
import { IconCamera, IconPhoto, IconMapPin, IconRefresh } from '@tabler/icons-react'

export default function CameraTab({ active }) {
  const fileInputRef = useRef(null)
  const [photoUrl, setPhotoUrl] = useState(null)

  const openMobileCamera = () => {
    fileInputRef.current?.click()
  }

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0]

    if (!file) return

    const imageUrl = URL.createObjectURL(file)
    setPhotoUrl(imageUrl)
  }

  const retakePhoto = () => {
    setPhotoUrl(null)

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }

    setTimeout(() => {
      fileInputRef.current?.click()
    }, 0)
  }

  return (
    <div className={`tab-content${active ? '' : ' hidden'}`}>
      <div className="camera-screen">
        <div className="camera-top">
          <div className="camera-title">Food Camera</div>
          <div className="camera-sub">
            Take a food photo to verify your review
          </div>
        </div>

        <div className="camera-preview">
          {photoUrl ? (
            <img className="camera-photo-preview" src={photoUrl} alt="Captured food" />
          ) : (
            <div className="camera-frame">
              <IconCamera size={42} color="var(--amber400)" />
              <div className="camera-frame-text">Tap the button to open your camera</div>
            </div>
          )}
        </div>

        <div className="camera-info-card">
          <div className="camera-info-row">
            <IconMapPin size={16} color="var(--teal400)" />
            <span>Location verification will be added here</span>
          </div>
          <div className="camera-info-row">
            <IconPhoto size={16} color="var(--amber400)" />
            <span>A food photo is required before writing a review</span>
          </div>
        </div>

        <input
          ref={fileInputRef}
          className="camera-file-input"
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handlePhotoChange}
        />

        {photoUrl ? (
          <button className="camera-retake-btn" onClick={retakePhoto}>
            <IconRefresh size={16} />
            Retake Photo
          </button>
        ) : (
          <button className="camera-capture-btn" onClick={openMobileCamera}>
            <IconCamera size={24} />
          </button>
        )}
      </div>
    </div>
  )
}