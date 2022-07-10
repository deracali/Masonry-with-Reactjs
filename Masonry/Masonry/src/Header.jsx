import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className='Nav'>
                <a href='/'>Home</a>
                <a href='/'>Article</a>
                <h1>
                    <div>Express</div>
                    <div>Yourself</div>
                </h1>
                <a href="/">Guides</a>
                <a href="/">Contact</a>
            </nav>
        </header>
    );
}

export default Header;