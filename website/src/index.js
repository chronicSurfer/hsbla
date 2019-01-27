import React from 'react';
import ReactDOM from 'react-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#index.html">Huntington State Beach Lifeguard Association</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse pull-right" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Meet Your Board <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Sponsors</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Log In</a>
                    </li>
                  </ul>
                </div>
              </nav>
    );
}

ReactDOM.render(<Nav/>, document.querySelector('#root'));