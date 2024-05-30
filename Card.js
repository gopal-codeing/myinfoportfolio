
const Card = () => {
    const url="https://as2.ftcdn.net/v2/jpg/05/20/38/59/1000_F_520385947_a4B3J7lVWMTin4stqz6ItXBI8n2NdFps.jpg";
    return (<>
    <div style={{paddingLeft:"90px"}}>
  <div class="row">
    <div class="col">
    <div className="card" style={{width: "18rem"}}>
            <img src={url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" style={{textAlign :"center"}}>Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary"  style={{textAlign :"center"}}>Go somewhere</a>
            </div>
        </div>
    </div>
    <div class="col">
    <div className="card" style={{width: "18rem"}}>
            <img src={url}className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"  style={{textAlign :"center"}}>Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary"  style={{textAlign :"center"}}>Go somewhere</a>
            </div>
        </div>
    </div>
    <div class="col">
    <div className="card" style={{width: "18rem"}}>
            <img src={url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"  style={{textAlign :"center"}}>Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary"  style={{textAlign :"center"}}>Go somewhere</a>
            </div>
        </div>
    </div>
  </div>

        </div>
    </>)
}

export default Card;