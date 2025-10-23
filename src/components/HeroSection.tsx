"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link for the CTA
import styles from "@/styles/HeroSection.module.css";

// Make props optional so they don't cause type errors if not passed
type HeroSectionProps = {
  title?: string;
  description?: string;
  backgroundImages?: string[];
  typingSpeed?: number;
  cycleInterval?: number;
  ctaText?: string; // <-- Added CTA text prop
  ctaLink?: string;  // <-- Added CTA link prop
};

export default function HeroSection({
  // Provide default values to use when props are not provided
  title = "",
  description = "",
  backgroundImages = [], // Use an empty array as default
  // typingSpeed = 80,
  cycleInterval = 5000,
  ctaText, // No default needed, we'll check if it exists
  ctaLink, // No default needed, we'll check if it exists
}: HeroSectionProps) {
  const [bgIndex, setBgIndex] = useState(0);

  // Background image cycle
  useEffect(() => {
    if (backgroundImages.length <= 1) return; // nothing to cycle

    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, cycleInterval);

    return () => clearInterval(interval);
  }, [backgroundImages, cycleInterval]);

  return (
    <section className={styles.hero}>
      {/* Background slideshow layers */}
      {backgroundImages.map((img, i) => (
        <div
          key={i}
          className={`${styles.bgImage} ${
            i === bgIndex ? styles.active : ""
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className={styles.overlay}>
        {/* Title static */}
        <h1 className={`cooper ${styles.title}`}>{title}</h1>
        {/* Description static */}
        <p className={`cooper ${styles.description}`}>{description}</p>

        {/* --- Conditionally Rendered CTA Button --- */}
        {ctaText && ctaLink && (
          <Link href={ctaLink} className={styles.ctaButton}>
            {ctaText}
          </Link>
        )}
        {/* ------------------------------------------ */}

      </div>
    </section>
  );
}