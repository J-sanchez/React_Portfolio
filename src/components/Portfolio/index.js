import React from 'react';
import NOTB from "../../images/JCS.JPEG";
// import newsOnTheBalance from "../../assets/cover/newsOnTheBalance.jpg";
// import workDayScheduler from "../../assets/cover/workDayScheduler.jpg";
// import runBuddy from "../../assets/cover/runBuddy.jpg";
// import privateReserve from "../../assets/cover/privateReserve.jpg";
// import photoPort from "../../assets/cover/photoPort.jpg";
// import bookSearch from "../../assets/cover/bookSearchImg.png"

function Porfolio() {
    return (
        <section className={"my-5"}>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <a href="https://jesusmanteca.github.io/News-On-The-Balance/#" target="_blank" rel="noreferrer">
                        <img src={NOTB} className="my-2" style={{ width: "100%" }} alt="" />
                        </a>
                    </div>
                    {/* <div className="col-sm">
                        <a href="https://j-sanchez.github.io/HTML.CSS-Git.Challenge/" target="_blank" rel="noreferrer">
                        <img src={} className="my-2" style={{ width: "100%" }} alt="" />
                        </a>
                    </div>
                    <div className="col-sm">
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                        <img src={} className="my-2" style={{ width: "100%" }} alt="" />
                        </a>
                    </div>
                    <div className="col-sm">
                        <a href="https://j-sanchez.github.io/Run-Buddy/" target="_blank" rel="noreferrer">
                        <img src={} className="my-2" style={{ width: "100%" }} alt="" />
                        </a>
                    </div>  
                </div>
                <div className="row">
                    <div className="col-sm">
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                        <img src={} className="my-2" style={{ width: "100%" }} alt="Work Day Scheduler" />
                        </a>
                    </div>
                    <div className="col-sm">
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                        <img src={} className="my-2" style={{ width: "100%" }} alt="Run Buddy" />
                        </a>
                    </div>
                    <div className="col-sm">
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                        <img src={} className="my-2" style={{ width: "100%" }} alt="portfolio" />
                        </a>
                    </div> */}
                </div>
            </div>
            
        </section>
        
      );
}

export default Porfolio;
