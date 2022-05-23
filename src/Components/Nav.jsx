import styled from './Nav.module.css';


function Nav() {
    return (
        <nav className={styled.nav}>
            <ul className={styled.navList}>
                <a href="/">Home</a>
                <a href="/">Add a todo</a>
            </ul>
        </nav>
    )
}

export default Nav;