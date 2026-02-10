"use client";

import Image from "next/image";
import { LightboxProvider, LightboxTrigger, type LightboxImage } from "../Lightbox";

const GALERIE = "/galerie";

const carSpottingFiles = [
  "370Z%20pro%20cold%201_1-8%20copie.jpg",
  "370Z%20pro%20cold%201_1-9%20copie.jpg",
  "CarreraS%20x%20Speedster-1%20copie.jpg",
  "CarreraS%20x%20Speedster-2%20copie.jpg",
  "CarreraS%20x%20Speedster-3%20copie.jpg",
];

const collaborationFiles = [
  "CarreraS%20x%20Speedster-4%20copie.jpg",
  "CarreraS%20x%20Speedster-5%20copie.jpg",
  "CarreraS%20x%20Speedster-6%20copie.jpg",
  "CarreraS%20x%20Speedster-7%20copie.jpg",
  "CarreraS%20x%20Speedster-8%20copie.jpg",
];

const LIGHTBOX_IMAGES: LightboxImage[] = [
  ...carSpottingFiles.map((file, i) => ({
    src: `${GALERIE}/${file}`,
    alt: `Car spotting ${i + 1}`,
  })),
  ...collaborationFiles.map((file, i) => ({
    src: `${GALERIE}/${file}`,
    alt: `Collaboration ${i + 1}`,
  })),
];

export default function ProjetsPageContent() {
  return (
    <LightboxProvider images={LIGHTBOX_IMAGES}>
      <main>
        <section className="section" aria-labelledby="projets-page-title">
          <div className="container">
            <h1 id="projets-page-title" className="section__title">
              Projets
            </h1>
            <p className="section__intro">
              Sélection de projets personnels et collaborations : car spotting,
              shootings passionnés et vidéo automobile.
            </p>

            <section
              className="series"
              aria-labelledby="serie-spotting"
            >
              <h2 id="serie-spotting" className="series__title">
                Car spotting
              </h2>
              <div className="series__grid">
                {carSpottingFiles.map((src, i) => (
                  <LightboxTrigger key={src} index={i} className="series__grid-item">
                    <Image
                      src={`${GALERIE}/${src}`}
                      alt={LIGHTBOX_IMAGES[i].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 260px"
                    />
                  </LightboxTrigger>
                ))}
              </div>
            </section>

            <section
              className="series"
              aria-labelledby="serie-collabs"
            >
              <h2 id="serie-collabs" className="series__title">
                Collaborations · passionnés
              </h2>
              <div className="series__grid">
                {collaborationFiles.map((src, i) => (
                  <LightboxTrigger key={src} index={5 + i} className="series__grid-item">
                    <Image
                      src={`${GALERIE}/${src}`}
                      alt={LIGHTBOX_IMAGES[5 + i].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 260px"
                    />
                  </LightboxTrigger>
                ))}
              </div>
            </section>

            <section
              className="series series-video"
              aria-labelledby="serie-video"
            >
              <h2 id="serie-video" className="series__title">
                Vidéo
              </h2>
              <div className="series-video__grid">
                <video
                  className="series-video__player"
                  src={`${GALERIE}/videor8.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Vidéo R8"
                />
              </div>
            </section>
          </div>
        </section>
      </main>
    </LightboxProvider>
  );
}
