export default function Banner(){
    return(
        <>
        <div className="carousel slide" id="carouselNaveg">
            <div className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img 
                        className="d-block w-100" 
                        src="https://fastly.picsum.photos/id/271/1117/300.jpg?hmac=8MsIiBXx9jTBnnJmkC0OARM5ad675PeWBmAIBnQMfKU"
                        alt="gutíssimo"
                        />
                    </div>
                    <div className="carousel-item active">
                        <img 
                        className="d-block w-100" 
                        src="https://fastly.picsum.photos/id/447/1117/300.jpg?hmac=eJZi7_1BqCtnMdJA4FRLXgba3CVngsumk7eeWrnw7F8"
                        alt="gutíssimo"
                        />
                    </div>
                </div>
            </div>
           
            <button className="carousel-control-prev" type="button" 
            data-bs-target="#carouselNaveg" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" 
            data-bs-target="#carouselNaveg" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
            </button>
        </div>

        </>
    )
}