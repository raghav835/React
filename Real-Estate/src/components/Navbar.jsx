import './navbar.scss'

function Navbar() {
    return(
        <nav>
            <div className="left">
                <a href="/" className='logo'>
                    <img src="./logo.png" alt="logo" />
                    <span>NammaBengaluru</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                <a href="/">Sign Up</a>
                <a href="/" className='login'>Sign In</a>
            </div>
        </nav>
    )
}

export default Navbar;