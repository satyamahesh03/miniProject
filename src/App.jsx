import React from 'react'

function App() {
  return (
    <>
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Pack & Go</a>
          </div>
          <ul class="nav navbar-nav">xs
            <li class="active"><a href="#">Home</a></li>
            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Top Destinations<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Top Destinations</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">profile</a></li>
              </ul>
            </li>


            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Categories<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Hill Stations</a></li>
                <li><a href="#">Spiritual Destinations</a></li>
                <li><a href="#">Desert and Landscapes</a></li>
                <li><a href="#">Beach</a></li>

              </ul>
            </li>

            <li><a href="#">Profile</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default App