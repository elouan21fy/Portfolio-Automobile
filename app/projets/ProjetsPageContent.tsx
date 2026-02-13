"use client";

import Image from "next/image";
import { LightboxProvider, LightboxTrigger, type LightboxImage } from "../Lightbox";

const GALERIE = "/galerie";

const carSpottingFiles = [
  "carspot1.jpg",
  { file: "carspot2.jpg", objectPosition: "50% 90%" },
  { file: "carspot3.jpg", objectPosition: "50% 90%" },
  "carspot4.jpg",
  "carspot5.jpg",
  "carspot6.jpg",
];

const collaborationFiles = [
  { file: "collaborations1.jpg", objectPosition: "50% 90%" },
  { file: "collaborations2.jpg", objectPosition: "50% 80%" },
  { file: "collaborations3.jpg", objectPosition: "50% 55%" },
  "collaborations4.jpg",
  "collaborations5.jpg",
  "collaborations6.jpg",
];

type GalleryItem = string | { file: string; objectPosition?: string };

const getFile = (item: GalleryItem) => (typeof item === "string" ? item : item.file);

const LIGHTBOX_IMAGES: LightboxImage[] = [
  ...carSpottingFiles.map((item, i) => ({
    src: `${GALERIE}/${getFile(item)}`,
    alt: `Car spotting ${i + 1}`,
    objectPosition: typeof item === "object" ? item.objectPosition : undefined,
  })),
  ...collaborationFiles.map((item, i) => ({
    src: `${GALERIE}/${getFile(item)}`,
    alt: `Collaboration ${i + 1}`,
    objectPosition: typeof item === "object" ? item.objectPosition : undefined,
  })),
];

export default function ProjetsPageContent() {
  return (
    <LightboxProvider images={LIGHTBOX_IMAGES}>
      <main>
        <section className="section" aria-labelledby="projets-page-title">
          <div className="container">
            <h1 id="projets-page-title" className="section__title">
              Projects
            </h1>
            <p className="section__intro">
              Selection of personal projects and collaborations: car spotting,
              passion shoots and automotive video.
            </p>

            <section
              className="series"
              aria-labelledby="serie-spotting"
            >
              <h2 id="serie-spotting" className="series__title">
                Car spotting
              </h2>
              <div className="series__grid">
                {carSpottingFiles.map((item, i) => (
                  <LightboxTrigger key={getFile(item)} index={i} className="series__grid-item">
                    <Image
                      src={`${GALERIE}/${getFile(item)}`}
                      alt={LIGHTBOX_IMAGES[i].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 260px"
                      style={typeof item === "object" && item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
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
                Collaborations · passion
              </h2>
              <div className="series__grid">
                {collaborationFiles.map((item, i) => (
                  <LightboxTrigger key={getFile(item)} index={6 + i} className="series__grid-item">
                    <Image
                      src={`${GALERIE}/${getFile(item)}`}
                      alt={LIGHTBOX_IMAGES[6 + i].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 260px"
                      style={typeof item === "object" && item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
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
                Video
              </h2>
              <div className="series-video__grid">
                <video
                  className="series-video__player"
                  src={`${GALERIE}/videor8.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="R8 video"
                />
              </div>
            </section>
          </div>
        </section>
      </main>
    </LightboxProvider>
  );
}
