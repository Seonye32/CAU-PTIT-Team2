import { useState, useRef, useEffect } from 'react'
import { IconSearch, IconX } from '@tabler/icons-react'

export default function SearchDropdown({ restaurants, onSelect, placeholder = 'Search' }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const inputRef = useRef(null)
  const wrapRef = useRef(null)

  const filtered = restaurants.filter(r =>
    r.name.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    const handleClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false)
        setQuery('')
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={wrapRef} style={{ flex: 1 }}>
      <div
        className="search-bar"
        onClick={() => { setOpen(true); inputRef.current?.focus() }}
        style={{ cursor: 'text' }}
      >
        <IconSearch size={14} color="var(--gray400)" />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          style={{
            background: 'none', border: 'none', outline: 'none',
            fontSize: 12, color: 'var(--gray600)', width: '100%',
            fontFamily: 'Sora, sans-serif',
          }}
        />
        {query && (
          <IconX size={12} color="var(--gray400)" style={{ cursor: 'pointer', flexShrink: 0 }}
            onClick={(e) => { e.stopPropagation(); setQuery(''); inputRef.current?.focus() }}
          />
        )}
      </div>

      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 4px)',
          left: 8, right: 8,
          background: '#1e1e4a',
          borderRadius: 12,
          border: '.5px solid rgba(255,255,255,.1)',
          zIndex: 10,
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(0,0,0,.4)',
        }}>
          {filtered.length === 0 ? (
            <div style={{ padding: '12px 14px', fontSize: 11, color: 'var(--gray400)' }}>No results found</div>
          ) : filtered.map((r) => (
            <div
              key={r.name}
              onClick={() => { onSelect(r); setOpen(false); setQuery('') }}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '8px 12px', cursor: 'pointer',
                borderBottom: '.5px solid rgba(255,255,255,.06)',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.05)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              {r.img
                ? <img src={r.img} alt={r.name} style={{ width: 32, height: 32, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
                : <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--amber50)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{r.emoji}</div>
              }
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#e8e8f8' }}>{r.name}</div>
                <div style={{ fontSize: 10, color: 'var(--gray400)', marginTop: 1 }}>{r.cuisine}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
