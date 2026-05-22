import React from 'react'

function ProductComingSoon() {
  return (
    <main
      style={{
        background: 'linear-gradient(135deg, #fff7ed 0%, #fef2f2 55%, #faf5ff 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '75vh',
        width: '100%',
        padding: '40px 16px',
        boxSizing: 'border-box'
      }}
    >
      <section
        style={{
          width: '100%',
          maxWidth: '500px',
          height: 'auto',
          minHeight: 'auto',
          borderRadius: '24px',
          background: '#ffffff',
          border: '1px solid rgba(189, 23, 35, 0.12)',
          boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 24px',
          textAlign: 'center',
          boxSizing: 'border-box',
          position: 'relative'
        }}
      >
        {/* Top Decorative Color Accent */}
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px', 
            background: 'linear-gradient(90deg, #BD1723, #8947B3)' 
          }} 
        />

        {/* Heading */}
        <h1 
          style={{ 
            margin: '0 0 16px 0', 
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '32px', 
            fontWeight: '800', 
            background: 'linear-gradient(135deg, #BD1723 0%, #8947B3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-1px',
            lineHeight: '1.2'
          }}
        >
          Coming Soon
        </h1>

        {/* Description */}
        <p 
          style={{ 
            margin: 0, 
            fontFamily: 'Lato, sans-serif',
            fontSize: '16px', 
            color: '#475569', 
            lineHeight: '1.6',
            maxWidth: '380px'
          }}
        >
          Product pages are currently under preparation and will be available soon.
        </p>
      </section>
    </main>
  )
}

export default ProductComingSoon
