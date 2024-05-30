import React from "react";

export const Consulting = (props) => {
    return (
        <div id="consulting">

            <div className="intro-bg">
                <div className="consulting-banner">
                    <div className="overlay">
                        
                                <div className="consulting-banner-text">
                                        <h1>
                                        Technology Consulting Services
                                        </h1>
                                        <p id="consulting-para">Discover how forward-thinking IT companies are using Technology consulting to manage IT autonomously </p>
                                        
                                    </div>
                            </div>
                            </div>
                    
            </div>

            <div className="content-wrapper">
        <aside className="sidebar">
          <ul>
            <li><a href="#overview" className="page-scroll">Overview</a></li>
            <li><a href="#working" className="page-scroll">Capabilities</a></li> 
            <li><a href="#clients" className="page-scroll">Next Steps</a></li>
          </ul>
        </aside>

        <main>
          <section id="overview">
            <h2>Overview</h2>
            <p>
              “STRATEGYZ Consulting delivers high-quality and innovative IT solutions to meet our client’s business needs, including hybrid cloud management services with technology solutions that enable their business objectives and accelerate the cloud journey, unleashing the full potential of their technology investments.”
            </p>
          </section>

          <section id="working">
            <h2>Capabilities</h2>
            <p>
              We bring together all the necessary technology and services to help our clients solve their business problems. Bringing together a diverse set of voices with new technology, we collaborate closely, ideate freely and swiftly apply breakthrough innovations that drive big impact.
            </p>
            

            
          </section>

          <section id="clients">
            <h2>Next Steps</h2>
            <div className="flex-container">
              <div className="box">
                <img src="img/StrategyzInfo_logo/ibm.png" alt="IBM logo" />
                <p>IBM</p>
              </div>
              <div className="box">
                <img src="img/StrategyzInfo_logo/hexawareT logo.jpeg" alt="Hexaware logo" />
                <p>Hexaware Technologies</p>
              </div>
              <div className="box">
                <img src="img/StrategyzInfo_logo/RangT logo.png" alt="Rang Technologies logo" />
                <p>Rang Technologies</p>
              </div>
              <div className="box">
                <img src="img/StrategyzInfo_logo/HarjaiC logo.png" alt="Harjai Computers logo" />
                <p>Harjai Computers</p>
              </div>
              <div className="box">
                <img src="img/StrategyzInfo_logo/fabH logo.png" alt="Fab Hotels logo" />
                <p>FabHotels</p>
              </div>
            </div>
          </section>
        </main>
      </div>
        </div>
    );
};