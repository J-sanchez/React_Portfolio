import React from 'react';
import coverImage from "../../images/JCS.JPEG";

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
                        <h4 className="text-muted">Home</h4>
                        <h4 className="text-muted">Family</h4>
                    </div>
                </div>
                <div className= "row">
                <p>Hello there. </p>

                <p>Hello, 
            My name is Jonathan C. Sanchez. I am currently in my 3rd year of college on route to obtaining a BS in Computer Science. I like to play baseball and enjoy the outdoors. From a young age my parents instilled in me that education is key. My father used to tell me not to work the "pala" (shovel) my whole life and isntead allow my brain to do the work. Now that I am older I understand and am grateful that he instilled this in me. I also love spending time with my family and friends. I love to laugh, share stories, and make others laugh.</p>
                </div>
            </div>
      );
    
}

export default About;