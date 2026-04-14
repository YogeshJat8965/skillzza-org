import React from 'react'

function ProductComingSoon() {
  return (
    <main
      style={{
        minHeight: '72vh',
        display: 'grid',
        placeItems: 'center',
        padding: '40px 20px',
        background: 'linear-gradient(135deg, #fff7ed 0%, #fef2f2 55%, #faf5ff 100%)',
      }}
    >
      <section
        style={{
          width: 'min(760px, 100%)',
          borderRadius: 20,
          background: '#ffffff',
          border: '1px solid rgba(189, 23, 35, 0.18)',
          boxShadow: '0 18px 48px rgba(15, 23, 42, 0.12)',
          overflow: 'hidden',
        }}
      >
        <div style={{ height: 4, background: 'linear-gradient(135deg, #BD1723, #8947B3)' }} />
        <div style={{ padding: '26px 24px 24px', textAlign: 'center' }}>
          <h1 style={{ margin: 0, fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#7f1d1d' }}>
            Coming Soon
          </h1>
          <p style={{ margin: '10px 0 0', fontSize: 17, color: '#334155', lineHeight: 1.6 }}>
            Product pages are currently under preparation and will be available soon.
          </p>
        </div>
      </section>
    </main>
  )
}

export default ProductComingSoon
