'use client';

import { CSSProperties, useMemo } from 'react';
import Image from 'next/image';
import styles from '@/styles/LogoCarousel.module.css';

export interface Logo {
  src: string;
  alt?: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  /** Total duration of one loop in milliseconds */
  loopDurationMs?: number;
}

interface TrackStyle extends CSSProperties {
    '--duration'?: string;
  }

export function LogoCarousel({
  logos,
  loopDurationMs = 20000, // 20s per loop
}: LogoCarouselProps) {
  // Now typed without any `any`
  const trackStyle = useMemo<TrackStyle>(
    () => ({ '--duration': `${loopDurationMs}ms` }),
    [loopDurationMs]
  );
  return (
    <div className={styles.carousel}>
      <div className={styles.track} style={trackStyle}>
        {/** First copy of logos */}
        {logos.map((logo, idx) => (
          <div className={styles.item} key={`1-${idx}`}>
            <Image width={300} height={300} src={logo.src} alt={logo.alt ?? `Logo ${idx + 1}`} />
          </div>
        ))}
        {/** Second copy for seamless looping */}
        {logos.map((logo, idx) => (
          <div className={styles.item} key={`2-${idx}`}>
            <Image width={300} height={300} src={logo.src} alt={logo.alt ?? `Logo ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
