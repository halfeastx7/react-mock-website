// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import AddToDriveIcon from '@mui/icons-material/AddToDrive';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { NavLink } from 'react-bootstrap';
// function Navbar_0() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <div>
//           <AddToDriveIcon />
//           <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#link">User Data</Nav.Link>
//               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//       </div>
//     </Navbar>
//   );
// }

// export default Navbar_0;

import React from 'react'
import {Link} from 'react-router-dom'
import'./style.css'
function Navbar_0() {
    return (
        <div>
              <nav class="navbar navbar-expand-lg navbar-warning bg-warning ">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="home">Home</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to="userdata">Review</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to="todo">To do</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navbar_0