import '../Portflio/Home.css';


const Home = () => {
  const url="https://as2.ftcdn.net/v2/jpg/05/20/38/59/1000_F_520385947_a4B3J7lVWMTin4stqz6ItXBI8n2NdFps.jpg";
  const html = "https://cdn.educba.com/academy/wp-content/uploads/2018/09/Top-Uses-Of-HTML.jpg";
  const css ="https://cdn.educba.com/academy/wp-content/uploads/2019/04/What-is-CSS.jpg";
  const js = "https://cdn.educba.com/academy/wp-content/uploads/2019/03/What-is-JavaScript-1.jpg";
  return (<>
    <header className="header">
      <div className="header-left">
        <h1 className="header-heading">Hi</h1>
        <h1 className="header-heading">i'am Gopal </h1>
        <h1 className="header-heading">Web developer </h1>
        <button type="button" class="btn btn-light">Contact</button>
        <ul className="social-icons">
          <li><a href="https://github.com/gopal-codeing#"><i className="fab fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/gopal-ji-gupta-518115228/"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>

      </div>
      <div className="header-right">
        <img src={url} alt="Your Image" className="header-image" />
      </div>
    </header>
    
  {/*  this is card section  */}

    <div style={{paddingLeft:"90px"}}>
  <div class="row">
    <div class="col">
    <div className="card" style={{width: "18rem"}}>
            <img src={html} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" style={{textAlign :"center"}}>HTML</h5>
                <p className="card-text"> Hypertext Markup Language, is a standard markup language for creating web pages and other information.</p>
                <a href="#" className="btn btn-primary"  style={{textAlign :"center"}}>Go somewhere</a>
            </div>
        </div>
    </div>
    <div class="col">
    <div className="card" style={{width: "18rem"}}>
            <img src={css}className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"  style={{textAlign :"center"}}>CSS</h5>
                <p className="card-text">Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media.</p>
                <a href="#" className="btn btn-primary"  style={{textAlign :"center"}}>Go somewhere</a>
            </div>
        </div>
    </div>
    <div class="col">
    <div className="card" style={{width: "18rem"}}>
            <img src={js} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"  style={{textAlign :"center"}}>Java script</h5>
                <p className="card-text">a scripting or programming language that allows you to implement complex features on web pages.</p>
                <a href="#" className="btn btn-primary"  style={{textAlign :"center"}}>Go somewhere</a>
            </div>
        </div>
    </div>
  </div>

        </div>
  </>);
}

export default Home;