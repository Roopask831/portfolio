import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Crafted with care by <strong>Roopa S Kalled</strong> &middot;{" "}
        {new Date().getFullYear()}
      </p>
      <p className="footer__sub">
        Software Engineer &middot; Montclair State University &middot; Piscataway, NJ
      </p>
    </footer>
  );
}