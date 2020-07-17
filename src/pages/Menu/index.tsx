import React, { useState } from 'react'
import { FiBook, FiUser, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom'

const Menu = () => {
    const [activeButton, setActiveButton] = useState<string>('padrão');

    function handleActiveButton(button: string){
				setActiveButton(button);
				console.log(button)
				console.log(activeButton)
    }

    return(
        <div id="menu">
            <h1>Portfólio</h1>
            <nav>
                <Link to="/" onClick={() => handleActiveButton('home')} className={activeButton === 'home' ? 'active' : ''}>
                  <span><FiHome /></span>
                	<strong>Home</strong>
                </Link>
                <Link to="/projects" onClick={() => handleActiveButton('projeto')} className={activeButton === 'projeto' ? 'active' : ''}>
                  <span><FiBook /></span>
                  <strong>Projetos</strong>
                </Link>
                <Link to="/blog" onClick={() => handleActiveButton('blog')} className={activeButton === 'blog' ? 'active' : ''}>
                  <span><FiUser /></span>
                  <strong>Blog</strong>
                </Link>
            </nav>
        </div>
    )
}

export default Menu