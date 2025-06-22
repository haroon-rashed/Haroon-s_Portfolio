"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

export default function BlobCursor({
  fillColor = "rgba(255, 215, 0, 0.8)", // gold with transparency
  trailCount = 5,
  sizes = [30, 50, 70, 90, 110], // graduated sizes
  innerSizes = [8, 12, 16, 20, 24], // graduated inner dots
  innerColor = "rgba(255, 255, 255, 0.9)", // white with slight transparency
  opacities = [0.9, 0.7, 0.5, 0.3, 0.1], // fading trail
  zIndex = 100,
  scaleFactor = 1.2, // hover scale effect
  hoverColor = "rgba(255, 105, 180, 0.8)", // pink on hover
}) {
  const containerRef = useRef(null);
  const blobsRef = useRef([]);
  const innerDotsRef = useRef([]);
  const isHovering = useRef(false);

  const updateOffset = useCallback(() => {
    if (!containerRef.current) return { left: 0, top: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { left: rect.left, top: rect.top };
  }, []);

  const handleMove = useCallback(
    (e) => {
      const { left, top } = updateOffset();
      const x = e.clientX;
      const y = e.clientY;

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        const delay = isLead ? 0 : i * 0.05;

        gsap.to(el, {
          x: x - left - sizes[i] / 2,
          y: y - top - sizes[i] / 2,
          duration: isLead ? 0.1 : 0.3 + i * 0.05,
          ease: isLead ? "power2.out" : "sine.out",
          delay,
        });
      });
    },
    [updateOffset, sizes]
  );

  const handleHover = useCallback(() => {
    isHovering.current = true;
    blobsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        scale: scaleFactor,
        backgroundColor: hoverColor,
        duration: 0.3,
      });
    });
  }, [scaleFactor, hoverColor]);

  const handleHoverEnd = useCallback(() => {
    isHovering.current = false;
    blobsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        scale: 1,
        backgroundColor: fillColor,
        duration: 0.3,
      });
    });
  }, [fillColor]);

  useEffect(() => {
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, [role='button'], [data-hover]"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [handleHover, handleHoverEnd]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [handleMove]);

  return (
    <div ref={containerRef} className="blob-container" style={{ zIndex }}>
      <div className="blob-main">
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (blobsRef.current[i] = el)}
            className="blob"
            style={{
              width: sizes[i],
              height: sizes[i],
              borderRadius: "50%",
              backgroundColor: fillColor,
              opacity: opacities[i],
              position: "absolute",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              mixBlendMode: "overlay",
              filter: "blur(1px)",
              willChange: "transform",
            }}
          >
            <div
              ref={(el) => (innerDotsRef.current[i] = el)}
              className="inner-dot"
              style={{
                width: innerSizes[i],
                height: innerSizes[i],
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: innerColor,
                borderRadius: "50%",
                filter: "blur(0.5px)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
