import { useState } from 'react'
import {
  IconCamera,
  IconPhoto,
  IconMapPin,
  IconRefresh,
  IconStar,
  IconUser,
  IconHome,
} from '@tabler/icons-react'

export default function CameraTab({ active, photoUrl, onRetake, onNavigate }) {
  const [step, setStep] = useState('preview')
  const [reviewerType, setReviewerType] = useState(null)
  const [rating, setRating] = useState(0)

  const handleWriteReview = () => {
    setStep('chooseType')
  }

  const handleSelectTourist = () => {
    setReviewerType('tourist')
    setStep('reviewForm')
  }

  const handleSelectLocal = () => {
    setReviewerType('local')
    setStep('reviewForm')
  }

  const handleBackToPreview = () => {
    setStep('preview')
    setReviewerType(null)
    setRating(0)
  }
      
  const handleSubmitReview = () => {
    setStep('preview')
    setReviewerType(null)
    setRating(0)
    onNavigate('restaurant')
  }

  return (
    <div className={`tab-content${active ? '' : ' hidden'}`}>
      <div className="camera-screen">
        {step === 'preview' && (
          <>
            <div className="camera-top">
              <div className="camera-title">Capture Your Food</div>
              <div className="camera-sub">
                Take a photo to verify your food experience
              </div>
            </div>

            <div className="camera-preview">
              {photoUrl ? (
                <img className="camera-photo-preview" src={photoUrl} alt="Captured food" />
              ) : (
                <div className="camera-frame">
                  <IconCamera size={42} color="var(--amber400)" />
                  <div className="camera-frame-text">Tap the camera button to take a photo</div>
                </div>
              )}
            </div>

            <div className="camera-info-card">
              <div className="camera-info-row">
                <IconMapPin size={16} color="var(--teal400)" />
                <span>Local status is verified during sign-up</span>
              </div>
              <div className="camera-info-row">
                <IconPhoto size={16} color="var(--amber400)" />
                <span>A food photo is required before writing a review</span>
              </div>
            </div>

            <div className="camera-action-row">
              <button
                className="camera-secondary-btn"
                onClick={() => {
                    handleBackToPreview()
                    onRetake()
                }}
                >
                <IconRefresh size={16} />
                Retake
              </button>

              <button
                className="camera-primary-btn"
                onClick={handleWriteReview}
                disabled={!photoUrl}
              >
                Write Review
              </button>
            </div>
          </>
        )}

        {step === 'chooseType' && (
          <>
            <div className="camera-top">
              <div className="camera-title">Who are you?</div>
              <div className="camera-sub">
                Choose your reviewer type before writing a review
              </div>
            </div>

            <div className="review-type-body">
              <button className="review-type-card" onClick={handleSelectTourist}>
                <div className="review-type-icon">
                  <IconUser size={24} />
                </div>
                <div>
                  <div className="review-type-title">Tourist</div>
                  <div className="review-type-desc">
                    I am visiting this area and want to share my food experience.
                  </div>
                </div>
              </button>

              <button className="review-type-card" onClick={handleSelectLocal}>
                <div className="review-type-icon local">
                  <IconHome size={24} />
                </div>
                <div>
                  <div className="review-type-title">Local</div>
                  <div className="review-type-desc">
                    I live here or know this area well. Local status is verified during sign-up.
                  </div>
                </div>
              </button>
            </div>

            <button className="camera-text-btn" onClick={handleBackToPreview}>
              Back to Photo
            </button>
          </>
        )}

        {step === 'reviewForm' && (
          <>
            <div className="camera-top">
              <div className="camera-title">
                {reviewerType === 'local' ? 'Local Review' : 'Tourist Review'}
              </div>
              <div className="camera-sub">
                Rate the food and leave a short comment
              </div>
            </div>

            <div className="review-form-card">
              {photoUrl && (
                <img className="review-form-photo" src={photoUrl} alt="Captured food" />
              )}

              <div className={`reviewer-badge ${reviewerType === 'local' ? 'local' : ''}`}>
                {reviewerType === 'local' ? 'Local' : 'Tourist'}
              </div>

              <div className="review-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="review-star-btn"
                    onClick={() => setRating(star)}
                  >
                    <IconStar
                      size={24}
                      fill={star <= rating ? 'var(--amber200)' : 'none'}
                      color={star <= rating ? 'var(--amber200)' : 'var(--gray200)'}
                    />
                  </button>
                ))}

                <span className="review-rating-text">
                  {rating > 0 ? `${rating}.0` : 'Select'}
                </span>
              </div>

              <div className="review-form-label">Comment</div>
              <textarea
                className="review-textarea"
                placeholder="Write your review here..."
              />

              <button className="camera-primary-btn full" onClick={handleSubmitReview}>
               Submit Review
              </button>
            </div>

            <button className="camera-text-btn" onClick={handleBackToPreview}>
              Back to Photo
            </button>
          </>
        )}
      </div>
    </div>
  )
}