import { Outlet, Link } from "react-router-dom";

export default function header() {
    return (
        <div>
            {/* <!-- Header section --> */}

            <div className="header">

                {/* <div>
                    <div className="icon-wrapper">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div> */}

                <div className="nav-logo">
                    <Link to="/">
                        <img
                            className="brand-logo"
                            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                            alt="image"
                        />
                    </Link>
                </div>

                <div className="navbar-left">
                    <ul>
                        <li>
                            <Link to="/TV" className="nav-link">
                                <div>TV</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Movies" className="nav-link">
                                <div>Movies</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Sports" className="nav-link">
                                <div>Sports</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Disney" className="nav-link">
                                <div>Disney+</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Kids" className="nav-link">
                                <div>Kids</div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <div className="search-container">
                        <input
                            type="search"
                            placeholder="Search"
                            id=" SearchField"
                            autocomplete="off"
                        />
                        <div className="searchIcon ">
                            <i className="search-icon">🔍</i>
                        </div>
                    </div>

                    <div className="userpic">
                        <div className="dropdown-container">
                            <img
                                src="https://www.hotstar.com/assets/c724e71754181298e3f835e46ade0517.svg"
                                alt="image"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    );
}
