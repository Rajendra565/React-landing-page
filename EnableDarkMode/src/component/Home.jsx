import React from "react";

function Home(props) {
  return (
    <>
      
        
        <div className= {`card bg-${props.bgc}`  }  style={{width:"18rem"}}>
          <img
            src={props.image}
            className="card-img-top"
            alt='image'
          />
          <div className="card-body">
            <h5 className={`ard-title text-${props.bgc==='dark'?'light':'dark'}`}>{props.title}</h5>
            <p className={`card-text text-${props.bgc==='dark'?'light':'dark'}`}>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>




       
      
    </>
  );
}

export default Home;
