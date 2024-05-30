import '../Portflio/Work.css';
const About=()=>{
    const url = "https://as2.ftcdn.net/v2/jpg/05/20/38/59/1000_F_520385947_a4B3J7lVWMTin4stqz6ItXBI8n2NdFps.jpg";
    return (<>

        <section id="about" className="about-section">
            <div className="container">
                <div className="section-heading">
                    <h2>About Me</h2>
                    <div className="separator"></div>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            {/* Your introduction and personal information */}
                            Hi, I'm Gopal Ji, a Software Engineer in Hashebit innovation. I have 1 years of experience in Front-end developer . My passion lies in Full stack developer.
                        </p>
                        <p>
                            {/* More about yourself */}
                            I enjoy Codeing, and I am constantly learning and exploring new technologies. I am proficient in HTML || CSS || JAVASCRIPT || REACT  and I'm always looking for opportunities to grow and expand my knowledge.
                        </p>
                        {/* <p>
                            {/* Your career goals or aspirations */}
                            {/* My goal is to [Your Career Goal or Aspiration], and I am committed to delivering high-quality work and exceeding expectations in every project I undertake. */}
                        {/* </p> */}
                    </div>
                    <div className="about-image">
                        {/* Your profile picture */}
                        <img src={url} alt="Profile" />
                    </div>
                </div>
            </div>
        </section>
</>)
 }
 export default About;