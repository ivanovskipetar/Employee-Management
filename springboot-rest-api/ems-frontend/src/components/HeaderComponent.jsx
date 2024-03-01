import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        {/* <!-- Navbar brand -->*/}
                        <a className="navbar-brand mt-2 mt-lg-0" href="/home">
                            <h5 className="pt-1">EMS</h5>
                        </a>
                        {/*// <!-- Toggle button -->*/}
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                                data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>

                        {/* <!-- Collapsible wrapper -->*/}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/*// <!-- Left links -->*/}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/employees">Employees</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/departments">Departments</a>
                                </li>
                            </ul>
                            {/*// <!-- Left links -->*/}

                            {/*// <!-- Right elements -->*/}
                            <div className="d-flex align-items-center justify-content-start">
                                {/*// <!-- Icon -->*/}
                                <a className="text-reset me-3" href="#">
                                    <i className="fas fa-shopping-cart text-white"></i>
                                </a>

                                {/*// <!-- Notifications -->*/}
                                <div className="dropdown">
                                    <a className="text-reset me-3 dropdown-toggle hidden-arrow" href="#"
                                       id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown"
                                       aria-expanded="false">
                                        <i className="fas fa-bell text-white"></i>
                                        <span className="badge rounded-pill badge-notification bg-danger">1</span>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <a className="dropdown-item" href="#">Some news</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Another news</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </li>
                                    </ul>
                                </div>
                                {/*// <!-- Avatar -->*/}
                                <div className="dropdown">
                                    <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#"
                                       id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown"
                                       aria-expanded="false">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                             className="rounded-circle" height="25"
                                             alt="Black and White Portrait of a Man" loading="lazy"/>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="navbarDropdownMenuAvatar">
                                        <li>
                                            <a className="dropdown-item" href="#">My profile</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Settings</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*// <!-- Right elements -->*/}
                        </div>
                        {/*// <!-- Collapsible wrapper -->*/}
                    </div>
                    {/*// <!-- Container wrapper -->*/}
                </nav>
            </header>
        </div>
    )
}
export default HeaderComponent