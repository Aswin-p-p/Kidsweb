import React from 'react'

function Navbar2() {
  return (
    <>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand fs-1 " id='text' >tinkletots</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavDropdown" style={{marginLeft:'250px'}}>
      <ul class="navbar-nav ms-5" >
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id='text' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Bath&BabyCare
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id='text' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Bed&Nursery
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id='text' role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Toys
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" id='text' href="#">Pricing</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar2