import React from 'react'

function Toys() {
  return (
    <>
    <div className="container">
        <h1 className=' ' id='text'>Toys For everyone To enjoy</h1>
    <div class="row row-cols-1 row-cols-md-4 g-4 mt-5">
  <div class="col">
    <div class="card " id='product'>
      <img src="/asset/image.jpg" class="card-img-top" alt="..." id='product'/>
      <div class="card-body">
      <a href=""><h5 class="card-title text-center" id='text'>Product Name</h5></a>
      <p  class="card-title text-center" id='text'>$50.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" id='product'>
    <img src="/asset/image.jpg" class="card-img-top" alt="..." id='product'/>
      <div class="card-body">
      <a href=""><h5 class="card-title text-center" id='text'>Product Name</h5></a>
      <p  class="card-title text-center" id='text'>$50.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-0" >
    <img src="/asset/image.jpg" class="card-img-top" alt="..." id='product'/>
      <div class="card-body">
      <a href=""><h5 class="card-title text-center" id='text'>Product Name</h5></a>
      <p  class="card-title text-center" id='text'>$50.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card " id='product'>
    <img src="/asset/image.jpg" class="card-img-top" alt="..." id='product'/>
      <div class="card-body">
       <a href=""><h5 class="card-title text-center" id='text'>Product Name</h5></a> 
        <p  class="card-title text-center" id='text'>$50.</p>
      </div>
    </div>
  </div>

</div>
</div>
    </>
  )
}

export default Toys