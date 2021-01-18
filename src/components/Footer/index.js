import React from 'react';

function Footer(props) {
    return (
        <section className={"my-5 bg-secondary"}>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <a target="_blank" rel='noopener noreferrer' href="">GitHub</a> 
                    </div>
                    <div className="col-sm">
                      <a target="_blank" rel='noopener noreferrer' href="">LinkedIn</a>
                    </div>
                    <div className="col-sm">
                      <a target="_blank" rel='noopener noreferrer' href="">Instagram</a>
                    </div>
                </div>
            </div>
            
        </section>
        
      );
}

export default Footer;