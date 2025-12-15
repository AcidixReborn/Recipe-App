import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Recipe App. All rights reserved.</p>
        <p className="footer-tagline">Discover delicious recipes for every occasion</p>
      </div>
    </footer>
  );
}

export default Footer;
