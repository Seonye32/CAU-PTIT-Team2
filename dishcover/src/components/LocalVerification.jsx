import { useState } from 'react'
import { IconArrowLeft, IconMapPin, IconPhone, IconCheck, IconChevronRight } from '@tabler/icons-react'

export default function LocalVerification({ active, onBack, onVerified }) {
  const [step, setStep] = useState(1)
  const [locationStatus, setLocationStatus] = useState('idle') // idle | loading | success | fail
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [codeSent, setCodeSent] = useState(false)
  const [codeStatus, setCodeStatus] = useState('idle') // idle | success | fail

  const handleDetectLocation = () => {
    setLocationStatus('loading')
    setTimeout(() => setLocationStatus('success'), 1800)
  }

  const handleSendCode = () => {
    if (phone.length >= 9) setCodeSent(true)
  }

  const handleVerifyCode = () => {
    if (code === '1234') {
      setCodeStatus('success')
      onVerified()
    } else {
      setCodeStatus('fail')
    }
  }

  const reset = () => {
    setStep(1)
    setLocationStatus('idle')
    setPhone('')
    setCode('')
    setCodeSent(false)
    setCodeStatus('idle')
  }

  return (
    <div className={`tab-content${active ? '' : ' hidden'}`}>
      <div className="guide-header" style={{ paddingTop: 14 }}>
        <button
          className="detail-back"
          style={{ position: 'relative', top: 'unset', left: 'unset', marginBottom: 12 }}
          onClick={() => { reset(); onBack() }}
        >
          <IconArrowLeft size={14} color="#333" />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'var(--amber400)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            {step === 1 ? <IconMapPin size={20} color="#fff" /> : <IconPhone size={20} color="#fff" />}
          </div>
          <div>
            <div className="guide-name" style={{ fontSize: 15 }}>Local Verification</div>
            <div className="guide-sub">Step {step} of 2 · {step === 1 ? 'Location' : 'Phone'}</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 6, marginTop: 14 }}>
          {[1, 2].map((s) => (
            <div key={s} style={{
              flex: 1, height: 3, borderRadius: 4,
              background: s <= step ? 'rgba(255,255,255,.9)' : 'rgba(255,255,255,.2)',
              transition: 'background .3s',
            }} />
          ))}
        </div>
      </div>

      <div className="guide-body" style={{ paddingTop: 16 }}>

        {/* ── STEP 1: Location ── */}
        {step === 1 && (
          <>
            <div className="rally-card" style={{ marginBottom: 14, padding: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#e8e8f8', marginBottom: 6 }}>
                Step 1 · Location-based Verification
              </div>
              <div style={{ fontSize: 11, color: 'var(--gray400)', lineHeight: 1.7 }}>
                We'll check that your current location is within Hanoi. Make sure location access is enabled on your device.
              </div>
            </div>

            <div style={{
              padding: 16, borderRadius: 12, marginBottom: 14, textAlign: 'center',
              background: locationStatus === 'success'
                ? 'rgba(91,79,207,.15)'
                : 'rgba(255,255,255,.04)',
              border: locationStatus === 'success'
                ? '.5px solid var(--amber400)'
                : '.5px solid rgba(255,255,255,.1)',
            }}>
              {locationStatus === 'idle' && (
                <>
                  <IconMapPin size={28} color="var(--gray400)" style={{ marginBottom: 8 }} />
                  <div style={{ fontSize: 11, color: 'var(--gray400)' }}>Location not detected yet</div>
                </>
              )}
              {locationStatus === 'loading' && (
                <>
                  <div style={{ fontSize: 22, marginBottom: 6 }}>📡</div>
                  <div style={{ fontSize: 11, color: 'var(--gray400)' }}>Detecting your location…</div>
                </>
              )}
              {locationStatus === 'success' && (
                <>
                  <IconCheck size={28} color="var(--amber400)" style={{ marginBottom: 8 }} />
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--amber400)' }}>Hanoi detected</div>
                  <div style={{ fontSize: 10, color: 'var(--gray400)', marginTop: 4 }}>
                    📍 Hoàn Kiếm District, Hanoi
                  </div>
                </>
              )}
              {locationStatus === 'fail' && (
                <>
                  <div style={{ fontSize: 22, marginBottom: 6 }}>❌</div>
                  <div style={{ fontSize: 11, color: '#e05c5c' }}>Could not verify location. Please try again.</div>
                </>
              )}
            </div>

            {locationStatus !== 'success' && (
              <button
                onClick={handleDetectLocation}
                disabled={locationStatus === 'loading'}
                style={{
                  width: '100%', padding: '12px 0', marginBottom: 10,
                  background: locationStatus === 'loading' ? 'rgba(255,255,255,.08)' : 'var(--amber400)',
                  border: 'none', borderRadius: 12,
                  cursor: locationStatus === 'loading' ? 'not-allowed' : 'pointer',
                  fontSize: 13, fontWeight: 600,
                  color: locationStatus === 'loading' ? 'var(--gray400)' : '#fff',
                  fontFamily: 'Sora, sans-serif',
                }}
              >
                {locationStatus === 'loading' ? 'Detecting…' : 'Detect My Location'}
              </button>
            )}

            {locationStatus === 'success' && (
              <button
                onClick={() => setStep(2)}
                style={{
                  width: '100%', padding: '12px 0',
                  background: 'var(--amber400)',
                  border: 'none', borderRadius: 12, cursor: 'pointer',
                  fontSize: 13, fontWeight: 600, color: '#fff',
                  fontFamily: 'Sora, sans-serif',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                }}
              >
                Next <IconChevronRight size={15} />
              </button>
            )}
          </>
        )}

        {/* ── STEP 2: Phone ── */}
        {step === 2 && codeStatus !== 'success' && (
          <>
            <div className="rally-card" style={{ marginBottom: 14, padding: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#e8e8f8', marginBottom: 6 }}>
                Step 2 · Phone Number Verification
              </div>
              <div style={{ fontSize: 11, color: 'var(--gray400)', lineHeight: 1.7 }}>
                Enter your Vietnamese phone number. We'll send a 4-digit verification code via SMS.
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 11, color: 'var(--gray400)', marginBottom: 6 }}>Phone Number</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <div style={{
                  padding: '10px 12px', borderRadius: 10, fontSize: 12, color: '#e8e8f8',
                  background: 'rgba(255,255,255,.06)', border: '.5px solid rgba(255,255,255,.1)',
                  flexShrink: 0,
                }}>
                  🇻🇳 +84
                </div>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="90 000 0000"
                  maxLength={10}
                  style={{
                    flex: 1, padding: '10px 12px',
                    background: 'rgba(255,255,255,.06)', border: '.5px solid rgba(255,255,255,.1)',
                    borderRadius: 10, fontSize: 12, color: '#e8e8f8',
                    fontFamily: 'Sora, sans-serif', outline: 'none',
                  }}
                />
              </div>
            </div>

            <button
              onClick={handleSendCode}
              disabled={phone.length < 9 || codeSent}
              style={{
                width: '100%', padding: '11px 0', marginBottom: 16,
                background: phone.length >= 9 && !codeSent ? 'var(--amber400)' : 'rgba(255,255,255,.08)',
                border: 'none', borderRadius: 12,
                cursor: phone.length >= 9 && !codeSent ? 'pointer' : 'not-allowed',
                fontSize: 13, fontWeight: 600,
                color: phone.length >= 9 && !codeSent ? '#fff' : 'var(--gray400)',
                fontFamily: 'Sora, sans-serif',
              }}
            >
              {codeSent ? 'Code Sent ✓' : 'Send Code'}
            </button>

            {codeSent && (
              <>
                <div style={{ fontSize: 11, color: 'var(--gray400)', marginBottom: 6 }}>Verification Code</div>
                <input
                  value={code}
                  onChange={(e) => { setCode(e.target.value.replace(/\D/g, '')); setCodeStatus('idle') }}
                  placeholder="Enter 4-digit code"
                  maxLength={4}
                  style={{
                    width: '100%', padding: '10px 12px', marginBottom: 8, boxSizing: 'border-box',
                    background: 'rgba(255,255,255,.06)',
                    border: codeStatus === 'fail' ? '.5px solid #e05c5c' : '.5px solid rgba(255,255,255,.1)',
                    borderRadius: 10, fontSize: 14, color: '#e8e8f8', letterSpacing: 6,
                    fontFamily: 'Sora, sans-serif', outline: 'none', textAlign: 'center',
                  }}
                />
                {codeStatus === 'fail' && (
                  <div style={{ fontSize: 11, color: '#e05c5c', marginBottom: 8 }}>
                    Incorrect code. Please try again.
                  </div>
                )}
                <button
                  onClick={handleVerifyCode}
                  disabled={code.length < 4}
                  style={{
                    width: '100%', padding: '12px 0',
                    background: code.length === 4 ? 'var(--amber400)' : 'rgba(255,255,255,.08)',
                    border: 'none', borderRadius: 12,
                    cursor: code.length === 4 ? 'pointer' : 'not-allowed',
                    fontSize: 13, fontWeight: 600,
                    color: code.length === 4 ? '#fff' : 'var(--gray400)',
                    fontFamily: 'Sora, sans-serif',
                  }}
                >
                  Verify
                </button>
              </>
            )}

            <button
              onClick={() => setStep(1)}
              style={{
                marginTop: 10, width: '100%', padding: '10px 0',
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 12, color: 'var(--gray400)', fontFamily: 'Sora, sans-serif',
              }}
            >
              ← Back to Location
            </button>
          </>
        )}

        {/* ── DONE ── */}
        {codeStatus === 'success' && (
          <div style={{ textAlign: 'center', padding: '40px 16px' }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              background: 'var(--amber400)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px',
            }}>
              <IconCheck size={32} color="#fff" />
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#e8e8f8', marginBottom: 8 }}>
              Verification Complete!
            </div>
            <div style={{ fontSize: 11, color: 'var(--gray400)', lineHeight: 1.7, marginBottom: 24 }}>
              You're now a Local Verified user.<br />
              Your reviews will show a Local badge.
            </div>
            <button
              onClick={() => { reset(); onBack() }}
              style={{
                padding: '10px 28px',
                background: 'var(--amber400)',
                border: 'none', borderRadius: 10, cursor: 'pointer',
                fontSize: 12, fontWeight: 600, color: '#fff',
                fontFamily: 'Sora, sans-serif',
              }}
            >
              Back to Profile
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
