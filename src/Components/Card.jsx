export default function Card(){
    return(
        <>
            <div className="d-md-flex mt-4 justify-content-around">
                <div className="card col-md-5">
                    <img className="card-img-top w-100" src="https://fastly.picsum.photos/id/356/330/170.jpg?hmac=IYyDLVygxBGLIvFKpjRjG7vn-Rzbq5CsMIaCw2k-NIU"
                    alt="cardimg"/>

                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                
                <div className="card col-md-5">
                    <img className="card-img-top w-100" src="https://fastly.picsum.photos/id/356/330/170.jpg?hmac=IYyDLVygxBGLIvFKpjRjG7vn-Rzbq5CsMIaCw2k-NIU"
                    alt="cardimg"/>

                    <p className="card-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                    
                
            </div>
        </>
    );
}