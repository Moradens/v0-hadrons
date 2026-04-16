import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Hadrons - Stavební práce a rekonstrukce Praha'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          backgroundColor: '#1a1a18',
          padding: '60px 80px',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50%',
            height: '100%',
            background: 'radial-gradient(circle at 70% 30%, rgba(184, 90, 48, 0.15), transparent 60%)',
          }}
        />
        
        {/* Logo */}
        <div
          style={{
            position: 'absolute',
            top: 60,
            left: 80,
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: '4px',
            color: '#B85A30',
          }}
        >
          HADRONS
        </div>

        {/* Tag */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 24px',
            borderRadius: 30,
            background: 'rgba(184, 90, 48, 0.2)',
            border: '1px solid rgba(184, 90, 48, 0.4)',
            marginBottom: 24,
          }}
        >
          <span style={{ fontSize: 18, color: '#F0997B' }}>Praha & okolí</span>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#F0997B' }} />
          <span style={{ fontSize: 18, color: '#F0997B' }}>od 2020</span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            color: '#f5f4f0',
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Rekonstrukce,
          <br />
          <span>
            která{' '}
            <span style={{ color: '#B85A30' }}>vydrží</span>
          </span>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 24,
            color: '#9a9890',
            maxWidth: 600,
            lineHeight: 1.5,
          }}
        >
          Kompletní stavební a elektromontážní práce. Od prvotní konzultace po předání hotového díla.
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
