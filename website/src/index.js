import React from 'react';
import ReactDOM from 'react-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <div>
              <img src="hsblabear.png" alt="hsbla-bear"/>
            </div> */}
            <div className="nav justify-content-center">
                <a className="navbar-brand">Huntington State Beach Lifeguard Association</a>
            </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Meet Your Board <span className="sr-only">(current)</span></a>
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