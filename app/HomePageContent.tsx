"use client";

import Link from "next/link";
import Image from "next/image";
import { LightboxProvider, LightboxTrigger, type LightboxImage } from "./Lightbox";

const GALERIE = "/galerie";

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: `${GALERIE}/370Z pro cold 1_1-5 copie.jpg`, alt: "Hero — Photo automobile forte" },
  { src: `${GALERIE}/volant.jpg`, alt: "Image auto 1" },
  { src: `${GALERIE}/142A5202.jpeg`, alt: "Image auto 2" },
  { src: `${GALERIE}/142A5220.jpeg`, alt: "Image auto 3" },
  { src: `${GALERIE}/CarreraS x Speedster-8 copie.jpg`, alt: "Image automobile plein largeur" },
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
              Photographie Automobile · Nantes
            </h1>
            <p className="hero__subtitle">
              Projets automobiles, documentation, collaborations
            </p>
            <Link href="/contact" className="btn btn--hero">
              Contact
            </Link>
          </div>
        </section>

        <section className="section" aria-labelledby="galerie-title">
          <div className="container">
            <h2 id="galerie-title" className="section__title">
              Galerie
            </h2>
            <div className="gallery-editorial gallery-editorial--three">
              <LightboxTrigger index={1} className="gallery-editorial__item">
                <Image
                  src={LIGHTBOX_IMAGES[1].src}
                  alt={LIGHTBOX_IMAGES[1].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </LightboxTrigger>
              <LightboxTrigger index={2} className="gallery-editorial__item">
                <Image
                  src={LIGHTBOX_IMAGES[2].src}
                  alt={LIGHTBOX_IMAGES[2].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </LightboxTrigger>
              <LightboxTrigger index={3} className="gallery-editorial__item">
                <Image
                  src={LIGHTBOX_IMAGES[3].src}
                  alt={LIGHTBOX_IMAGES[3].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </LightboxTrigger>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="projets-title">
          <div className="container">
            <h2 id="projets-title" className="section__title">
              Aperçu des projets
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
                    Repérages en ville, ambiances urbaines, modèles rares.
                  </p>
                </div>
              </Link>
              <Link href="/projets#serie-collabs" className="project-card project-card--link">
                <div className="project-card__image">
                  <Image
                    src={`${GALERIE}/led140i.jpg`}
                    alt="Shootings passionnés"
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <div className="project-card__content">
                  <h3 className="project-card__title">Shootings passionnés</h3>
                  <p className="project-card__text">
                    Séances dédiées, lumière naturelle.
                  </p>
                </div>
              </Link>
              <Link href="/projets#serie-video" className="project-card project-card--link">
                <div className="project-card__image">
                  <Image
                    src={`${GALERIE}/r8arrière-droit.jpg`}
                    alt="Vidéo automobile"
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <div className="project-card__content">
                  <h3 className="project-card__title">Vidéo automobile</h3>
                  <p className="project-card__text">
                    Captations dynamiques, montages courts, collaborations.
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
            Retombez amoureux de votre voiture.
          </p>
          <Link href="/contact" className="btn">
            Discuter d&apos;un projet
          </Link>
        </section>
      </main>
    </LightboxProvider>
  );
}
