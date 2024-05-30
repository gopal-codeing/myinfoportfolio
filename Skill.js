import ReactStars from "react-rating-stars-component";
import '../Portflio/Skill.css';

const Skill = () => {
    const url = "https://as2.ftcdn.net/v2/jpg/05/20/38/59/1000_F_520385947_a4B3J7lVWMTin4stqz6ItXBI8n2NdFps.jpg";
    const html ="https://cdn.educba.com/academy/wp-content/uploads/2018/09/Top-Uses-Of-HTML.jpg"
    const css ="https://cdn.educba.com/academy/wp-content/uploads/2019/04/What-is-CSS.jpg"
    const js ="https://cdn.educba.com/academy/wp-content/uploads/2019/03/What-is-JavaScript-1.jpg";
    const react ="https://cdn.educba.com/academy/wp-content/uploads/2020/03/React-Components.jpg";
    const  Mongodb ="https://cdn.educba.com/academy/wp-content/uploads/2019/03/How-To-Install-MongoDB.jpg";
    const Node="https://cdn.educba.com/academy/wp-content/uploads/2019/06/How-Node.JS-Works.jpg";
    const express="https://cdn.educba.com/academy/wp-content/uploads/2021/01/Express.js-Alternatives.jpg";
    const git ="https://cdn.educba.com/academy/wp-content/uploads/2019/04/What-is-Git-1.jpg";
    const leetcode ="https://assets.leetcode.com/static_assets/public/images/LeetCode_Sharing.png";
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };



    return (<>
       <div style={{ padding: "80px 80px" }}>
    <div className="row">
        {/* {arr.map((item) => ( */}
            <div class="col" style={{ paddingBottom: "40px" }}>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={html} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{ textAlign: "center" }}>HTML</h5>
                        <p className="card-text"> Hypertext Markup Language, is a standard markup language for creating web pages and other information.</p>
                        <a href="https://www.w3schools.com/" className="btn btn-primary" style={{ textAlign: "center" }}>Teach me</a>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
            </div>
        {/* ))} */}
              <div class="col" style={{ paddingBottom: "40px" }}>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={css} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{ textAlign: "center" }}>CSS</h5>
                        <p className="card-text">Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media.</p>
                        <a href="https://www.w3schools.com/" className="btn btn-primary" style={{ textAlign: "center" }}>Teach me</a>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
            </div>


            <div class="col" style={{ paddingBottom: "40px" }}>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={js} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{ textAlign: "center" }}>Java Script</h5>
                        <p className="card-text">a scripting or programming language that allows you to implement complex features on web pages.</p>
                        <a href="https://www.w3schools.com/" className="btn btn-primary" style={{ textAlign: "center" }}>Teach me</a>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
            </div>


            <div class="col" style={{ paddingBottom: "40px" }}>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={react} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{ textAlign: "center" }}>React.js</h5>
                        <p className="card-text">react-point gives you fast touch events for your React applications. A normalizes click "point" event.</p>
                        <a href="https://www.w3schools.com/" className="btn btn-primary" style={{ textAlign: "center" }}>Teach me</a>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
            </div>



            <div class="col" style={{ paddingBottom: "40px" }}>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={express} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{ textAlign: "center" }}>Express.js</h5>
                        <p className="card-text"> web application framework that provides broad features for building web and mobile applications. </p>
                        <a href="https://www.w3schools.com/" className="btn btn-primary" style={{ textAlign: "center" }}>Teach me</a>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
            </div>


            <div class="col" style={{ paddingBottom: "40px" }}>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Node} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{ textAlign: "center" }}>Node.js</h5>
                        <p className="card-text">cross-platform runtime environment for building fast and scalable server-side networking applications.</p>
                        <a href="https://www.w3schools.com/" className="btn btn-primary" style={{ textAlign: "center" }}>Teach me</a>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
            </div>


            <div class="col" style={{ paddingBottom: "40px" }}>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Mongodb} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{ textAlign: "center" }}>Mongodb</h5>
                        <p className="card-text">document database  that you want with the querying and indexing that you need.</p>
                       <a href="https://www.w3schools.com/" className="btn btn-primary" style={{ textAlign: "center" }}>Teach me</a>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
            </div>


            <div class="col" style={{ paddingBottom: "40px" }}>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={git} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{ textAlign: "center" }}>Git</h5>
                        <p className="card-text">Git is a version control system that allows software engineers to work together on projects.</p>
                        <a href="https://www.w3schools.com/" className="btn btn-primary" style={{ textAlign: "center" }}>Teach me</a>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
            </div>


            <div class="col" style={{ paddingBottom: "40px" }}>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={leetcode} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{ textAlign: "center" }}>LeetCode</h5>
                        <p className="card-text">LeetCode is a site that posts thousands of coding problems at varying difficulties,</p>
                        <a href="https://leetcode.com/u/gopalgupta29444/" className="btn btn-primary" style={{ textAlign: "center" }}>Teach me</a>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
            </div>







            </div>
    </div>

    </>);
}
export default Skill;