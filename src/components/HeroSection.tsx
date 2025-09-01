"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/HeroSection.module.css";

type HeroSectionProps = {
  title: string;
  description: string;
  backgroundImages: string[]; // multiple images now
  typingSpeed?: number; // ms per char (optional)
  cycleInterval?: number; // ms per image (optional)
};

export default function HeroSection({
  title,
  description,
  backgroundImages,
  typingSpeed = 80,
  cycleInterval = 5000, // default: 5s per image
}: HeroSectionProps) {
  const [displayedDesc, setDisplayedDesc] = useState("");
  const [bgIndex, setBgIndex] = useState(0);

  const indexRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);

  // Typewriter effect for description
  useEffect(() => {
    indexRef.current = 0;
    setDisplayedDesc("");

    const tick = () => {
      const i = indexRef.current;
      if (i <= description.length) {
        setDisplayedDesc(description.slice(0, i));
        indexRef.current = i + 1;
        timeoutRef.current = window.setTimeout(tick, typingSpeed);
      } else {
        timeoutRef.current = null;
      }
    };

    timeoutRef.current = window.setTimeout(tick, 120);

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [description, typingSpeed]);

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
        <h1 className={`bellota ${styles.title}`}>{title}</h1>

        {/* Animated description */}
        <p
          className={styles.description}
          aria-live="polite"
          aria-atomic="true"
        >
          <span>{displayedDesc}</span>
          <span className={styles.cursor} aria-hidden="true">
            |
          </span>
        </p>
      </div>
    </section>
  );
}
