import {Link, NavLink} from "react-router-dom"

const NavBar = (props) => {
    return (
        <nav>
            <ul className="nav">

                <li className="nav-item">
                    <Link to='/home' className="nav-link">Home</Link>
                </li>

                <li className="nav-item">
                    <NavLink to='/' className='nav-link'>Landing</NavLink>
                </li>
                {props.user && <span>{}props.user.username</span>}
            </ul>
        </nav>
    )
}

export default NavBar