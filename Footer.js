import '../Portflio/Footer.css';

const Footer = ()=>{
    return (<>
  <footer className="footer" style={{marginTop :"80px",paddingLeft :"130px" }}>
  <div className="container">
    <div className="footer-content">
      <div className="footer-column">
        <h3>About Us</h3>
        <p>Hy i am Gopal full Stack developer</p>
        <p> you can contact.</p>
      </div>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <ul>
          <li>Email: gopalgupta29444@gmai.com</li>
          <li>Phone: up91- 9532446145 </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Follow Us</h3>
        <ul className="social-icons">
          <li><a href="#"><i className="fab fa-github"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    
    </>);
}

export default Footer;