import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedinIn  } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="mt-5">
            <div className="d-flex justify-content-center text-dark"> 
                <span>
                <h6> 
                    By Aldo Bizarro
                </h6>
                <a href="https://github.com/albizarro">
                    <FontAwesomeIcon className="m-2 text-dark" icon={faGithubAlt} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/aldomorua/">
                    <FontAwesomeIcon className="m-2 text-dark" icon={faLinkedinIn} size="2x" />
                </a>

                </span>
            </div>
            <hr/>
            <div className="d-flex justify-content-center text-dark">
                <p> 
                    <span>
                    Credits to: 
                    </span>
                    <a className="m-2 text-dark" href="https://pokeapi.co/" >pokeapi.co</a>
                    <a className="m-2 text-dark" href="https://bulbapedia.bulbagarden.net/wiki/Main_Page">Bulbapedia.net</a> 

                </p>
            </div> 

        </footer>
    )
}

export default Footer
