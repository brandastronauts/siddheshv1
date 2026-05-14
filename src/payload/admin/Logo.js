'use client'

export default function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0' }}>
      <img
        src="/logo-88.webp"
        alt="Blue Blocks"
        style={{ width: 36, height: 36, objectFit: 'contain' }}
      />
      <div style={{ lineHeight: 1.15 }}>
        <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--theme-text)', letterSpacing: '-0.01em' }}>
          Blue Blocks
        </div>
        <div style={{ fontSize: '10px', color: 'var(--theme-elevation-400)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          CMS
        </div>
      </div>
    </div>
  )
}
