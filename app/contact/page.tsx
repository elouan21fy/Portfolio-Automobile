export const metadata = {
  title: "Portfolio automobile — Contact",
  description:
    "Contact pour un projet photo ou vidéo automobile, une collaboration ou une discussion.",
};

export default function ContactPage() {
  return (
    <main>
      <section
        className="section"
        aria-labelledby="contact-title"
      >
        <div className="container">
          <h1 id="contact-title" className="section__title">
            Contact
          </h1>
          <div className="contact-block">
            <p className="contact-block__text">
              Pour un projet photo ou vidéo automobile, une collaboration ou une
              simple discussion.
            </p>
            <ul className="contact-list">
              <li className="contact-list__item">
                <span className="contact-list__label">Téléphone</span>
                <a href="tel:+33752042867">07 52 04 28 67</a>
              </li>
              <li className="contact-list__item">
                <span className="contact-list__label">Email</span>
                <a href="mailto:elouanflory@icloud.com">elouanflory@icloud.com</a>
              </li>
              <li className="contact-list__item">
                <span className="contact-list__label">Instagram</span>
                <a
                  href="https://instagram.com/eniluap1904"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @eniluap1904
                </a>
              </li>
              <li className="contact-list__item">
                <span className="contact-list__label">TikTok</span>
                <a
                  href="https://www.tiktok.com/@eniluap1904?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @eniluap1904
                </a>
              </li>
              <li className="contact-list__item">
                <span className="contact-list__label">Localisation</span>
                <span>Nantes - Pays de la Loire  /  Cannes - 06</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
