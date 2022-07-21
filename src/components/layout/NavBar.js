import {Link, NavLink} from "react-router-dom"

const NavBar = (props) => {
    return (
        <nav justify-content-end>
            <ul className="nav justify-content-end">

                <li className="nav-item">
                    <Link to='/home' className="nav-link" href="/home">Home</Link>
                </li>

                <li className="nav-item">
                    <NavLink to='/' className='nav-link' >Landing</NavLink>
                </li>
                {props.user && 
                <span> Hello , {props.user.username}</span>}
            </ul>
        </nav>
    )
}

export default NavBar