import React from 'react'

function AboutUs() {
  return (
    <>
    <div id='about'>
    <div class="card mb-3 p-5 border-0" style={{maxWidth: "90px;"}} id=''>
   <div class="row g-0">
     <div class="col-md-4 ">
       <img src="/asset/about1.jpg" class="img-fluid rounded-start " alt="..."/>
     </div>
     <div class="col-md-8">
       <div class="card-body">
         <h1 class="card-title text-danger fst-italic">ABOUT US</h1>
             <p className='mb-4 fw-bold' style={{fontFamily:"sans-serif"}}>
             The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more:
              https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs
             </p>
        
       </div>
     </div>
   </div>
 </div>
 </div>
   </>
  )
}

export default AboutUs