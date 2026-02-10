"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import Image from "next/image";

export type LightboxImage = { src: string; alt: string };

type LightboxContextValue = {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  open: (index: number) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}

export function LightboxProvider({
  images,
  children,
}: {
  images: LightboxImage[];
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const open = useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, images.length - 1)));
    setIsOpen(true);
  }, [images.length]);

  const close = useCallback(() => setIsOpen(false), []);
  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % images.length);
  }, [images.length]);
  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const value: LightboxContextValue = {
    images,
    currentIndex,
    isOpen,
    open,
    close,
    next,
    prev,
  };

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <LightboxModal />
    </LightboxContext.Provider>
  );
}

function LightboxModal() {
  const { images, currentIndex, isOpen, close, next, prev } = useLightbox();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, next, prev]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) close();
  };

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];
  const hasNext = images.length > 1;
  const hasPrev = images.length > 1;

  return (
    <div
      ref={modalRef}
      className="lightbox"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Vue agrandie"
    >
      <button
        type="button"
        className="lightbox__close"
        onClick={close}
        aria-label="Fermer"
      >
        <span aria-hidden>×</span>
      </button>

      {hasPrev ? (
        <button
          type="button"
          className="lightbox__arrow lightbox__arrow--prev"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Image précédente"
        >
          &#8249;
        </button>
      ) : null}

      <div className="lightbox__image-wrap" onClick={(e) => e.stopPropagation()}>
        <Image
          src={current.src}
          alt={current.alt}
          fill
          className="lightbox__image"
          sizes="100vw"
          unoptimized={current.src.startsWith("data:")}
        />
      </div>

      {hasNext ? (
        <button
          type="button"
          className="lightbox__arrow lightbox__arrow--next"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Image suivante"
        >
          &#8250;
        </button>
      ) : null}
    </div>
  );
}

export function LightboxTrigger({
  index,
  className,
  children,
}: {
  index: number;
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useLightbox();
  return (
    <div
      className={className}
      onClick={() => open(index)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open(index);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Agrandir l'image"
      style={{ cursor: "pointer" }}
    >
      {children}
    </div>
  );
}
