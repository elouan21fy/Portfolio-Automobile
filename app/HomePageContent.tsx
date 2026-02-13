"use client";

import Link from "next/link";
import Image from "next/image";
import { LightboxProvider, LightboxTrigger, type LightboxImage } from "./Lightbox";

const GALERIE = "/galerie";

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: `${GALERIE}/370Z pro cold 1_1-5 copie.jpg`, alt: "Hero — Strong automotive photo" },
  { src: `${GALERIE}/volant.jpg`, alt: "Auto image 1" },
  { src: `${GALERIE}/spidster.jpg`, alt: "Auto image 2", objectPosition: "50% 65%" },
  { src: `${GALERIE}/phareporsche.jpg`, alt: "Auto image 3" },
  { src: `${GALERIE}/CarreraS x Speedster-8 copie.jpg`, alt: "Full-width automotive image" },
];

export default function HomePageContent() {
  return (
    <LightboxProvider images={LIGHTBOX_IMAGES}>
      <main>
        <section className="hero">
          <LightboxTrigger index={0} className="hero__bg">
            <Image
              src={LIGHTBOX_IMAGES[0].src}
              alt={LIGHTBOX_IMAGES[0].alt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
              style={{ objectPosition: "50% 100%" }}
            />
          </LightboxTrigger>
          <div className="hero__overlay" aria-hidden />
          <div className="hero__content">
            <h1 className="hero__title">
              Automotive & Premium Event Photography · Nantes/Ouest
            </h1>
            <p className="hero__subtitle">
              Visual storytelling for high-end automotive brands, private events and performance culture.
            </p>
            <Link href="/contact" className="btn btn--hero">
              Contact
            </Link>
          </div>
        </section>

        <section className="section" aria-labelledby="galerie-title">
          <div className="container">
            <h2 id="galerie-title" className="section__title">
              Gallery Preview
            </h2>
            <div className="gallery-editorial gallery-editorial--three">
              <LightboxTrigger index={1} className="gallery-editorial__item">
                <Image
                  src={LIGHTBOX_IMAGES[1].src}
                  alt={LIGHTBOX_IMAGES[1].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={LIGHTBOX_IMAGES[1].objectPosition ? { objectPosition: LIGHTBOX_IMAGES[1].objectPosition } : undefined}
                />
              </LightboxTrigger>
              <LightboxTrigger index={2} className="gallery-editorial__item">
                <Image
                  src={LIGHTBOX_IMAGES[2].src}
                  alt={LIGHTBOX_IMAGES[2].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={LIGHTBOX_IMAGES[2].objectPosition ? { objectPosition: LIGHTBOX_IMAGES[2].objectPosition } : undefined}
                />
              </LightboxTrigger>
              <LightboxTrigger index={3} className="gallery-editorial__item">
                <Image
                  src={LIGHTBOX_IMAGES[3].src}
                  alt={LIGHTBOX_IMAGES[3].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={LIGHTBOX_IMAGES[3].objectPosition ? { objectPosition: LIGHTBOX_IMAGES[3].objectPosition } : undefined}
                />
              </LightboxTrigger>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="projets-title">
          <div className="container">
            <h2 id="projets-title" className="section__title">
              Projects overview
            </h2>
            <div className="projects-preview">
              <Link href="/projets#serie-spotting" className="project-card project-card--link">
                <div className="project-card__image">
                  <Image
                    src={`${GALERIE}/f8spider.jpg`}
                    alt="Car spotting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <div className="project-card__content">
                  <h3 className="project-card__title">Car spotting</h3>
                  <p className="project-card__text">
                    City spotting, urban vibes, rare models.
                  </p>
                </div>
              </Link>
              <Link href="/projets#serie-collabs" className="project-card project-card--link">
                <div className="project-card__image">
                  <Image
                    src={`${GALERIE}/led140i.jpg`}
                    alt="Passion shoots"
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <div className="project-card__content">
                  <h3 className="project-card__title">Passion shoots</h3>
                  <p className="project-card__text">
                    Dedicated sessions, natural light.
                  </p>
                </div>
              </Link>
              <Link href="/projets#serie-video" className="project-card project-card--link">
                <div className="project-card__image">
                  <Image
                    src={`${GALERIE}/r8arrière-droit.jpg`}
                    alt="Automotive video"
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <div className="project-card__content">
                  <h3 className="project-card__title">Automotive video</h3>
                  <p className="project-card__text">
                    Dynamic captures, short edits, collaborations.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="single-image">
            <Image
              src={LIGHTBOX_IMAGES[4].src}
              alt={LIGHTBOX_IMAGES[4].alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </section>

        <section className="cta-block">
          <p className="cta-block__text">
            Fall in love with your car again.
          </p>
          <Link href="/contact" className="btn">
            Discuss a project
          </Link>
        </section>
      </main>
    </LightboxProvider>
  );
}
