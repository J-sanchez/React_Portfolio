import React from 'react';
import coverImage from "../../assets/cover/";

function About(props) {
    return (
        
            <div className="container aboutContainer" >
                <div className="row">
                    <div className="col-sm">
                        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
                    </div>
                    <div className="col-sm">
                        <h1 id="about">Jonathan C. Sanchez</h1>
                        <h4 className="text-muted">Student On The Run</h4>
                        <h4 className="text-muted"></h4>
                        <h4 className="text-muted">Family</h4>
                    </div>
                </div>
                <div className= "row">
                <p>Hello there. </p>

                    <p>
                        Hello, My name is Jonathan Sanchez. I am a student who is working to obtain a B.S in Mathematical Sciences majoring in Computer Science.</p>
                    <p>
                        When I was young my parents instilled in me that respect and education is key. 
                    </p>
                    <p>I love to spend time with my friends and especially my.</p>
                </div>
            </div>
      );
    
}

export default About;