/**
 * Apple Touch Icon Generator
 * Next.js 13+ icon generation
 */

import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#C9A84C',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
          borderRadius: 40,
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
