/**
 * App Icon Generator
 * Next.js 13+ icon generation
 */

import { ImageResponse } from 'next/og';

// Static export configuration
export const dynamic = 'force-static';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#C9A84C',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        AD
      </div>
    ),
    {
      ...size,
    }
  );
}
