import React from 'react'

const Nabar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">Navbar</a> */}
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="/">Men's clothing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Women's clothing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Jewelery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/"  >Electronics</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nabar
