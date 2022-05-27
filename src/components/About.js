import React, { useState }  from 'react'

export default function About() {
  // let style =
  // {
  //   color : "white",
  //   backgroundColor : "black",
  // }
  const [style, setStyle] = useState({
       color : "black",
       backgroundColor : "white",
       border: "1px solid #25EFDA",
     });
  
  const [ftext, setFtext] = useState("Enable dark mode");  
  

   const toggleClick = () =>
   {
     if(style.color === 'black')
     {
      setStyle(
        {
          color : "white",
           backgroundColor : "black",
           border: "1px solid white",
        }   
      )
      setFtext("Enable white mode");
     }
     else
     {
      setStyle(
        {
          color : "black",
           backgroundColor : "white",
           border: "1px solid #25EFDA",
        }   
      )
      setFtext("Enable dark mode");
     }
     
   }  
  return (
    
    <div className="container my-4" style={style}>
          <h1>About Us</h1>
              <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={style}>
            <h2 className="accordion-header" id="headingOne">
              <button style={style} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={style}>
            <h2 className="accordion-header" id="headingTwo">
              <button style={style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collap
            seTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={style}>
            <h2 className="accordion-header" id="headingThree">
              <button style={style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        <div className="my-3">
          <button onClick={toggleClick} type="button" class="btn btn-dark" style={style}>{ftext}</button>
        </div>
    </div>
    
  )
}
