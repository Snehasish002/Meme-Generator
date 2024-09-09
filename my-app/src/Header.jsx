import image from './Troll Face.png'


function Header () {
    return(
        <div className="navbar">
            <img className='nav-logo' src={image} alt="" />
            <h2 className='nav-title'>Meme Generator</h2>
            <h4 className='project-text'>React Course - Project 3</h4>
        </div>
    )
}


export default Header;