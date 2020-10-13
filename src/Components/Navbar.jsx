import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import pokeball from '../images/pokeball.png';
import GHIcon from '../images/GitHub-Mark-Light-32px.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars  } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

    const [drop, setDrop] = React.useState(false);

    return (
        <>
            <div className="navbar" style={{backgroundColor: 'red'}}>
                <button className="navbar-toggler d-xl-none" onClick={()=>setDrop(!drop)}>
                        <FontAwesomeIcon className="m-2 text-white" icon={faBars} size="lg"/>
                </button>
                <span className="navbar-brand text-white">
                    <img src={pokeball} alt="N/A" style={{height: '32px', width: '32px'}}/> POKEDEX
                </span>

            
                <div>
                    <Link className="btn btn-dark mr-2 d-none d-xl-inline" to="/">
                        First Gen
                    </Link>

                    <Link className="btn btn-dark mr-2 d-none d-xl-inline" to="/2">
                        Second Gen
                    </Link>

                    <Link className="btn btn-dark mr-2 d-none d-xl-inline" to="/3">
                        Thirth Gen
                    </Link>

                    <Link className="btn btn-dark mr-2 d-none d-xl-inline" to="/4">
                         Fourth Gen
                    </Link>

                    <Link className="btn btn-dark mr-2 d-none d-xl-inline" to="/5">
                        Fifth Gen
                    </Link>

                    <Link className="btn btn-dark mr-2 d-none d-xl-inline" to="/6">
                        Sixth Gen
                    </Link>

                    <Link className="btn btn-dark mr-2 d-none d-xl-inline" to="/7">
                        Seventh Gen
                    </Link>

                    <a href="https://github.com/albizarro/PokeReact" className="mr-2 d-none d-xl-inline" data-toggle="tooltip" data-placement="bottom" title="GitHub repo">
                        <img src={GHIcon} alt=""/>
                    </a>
                </div>

                
            </div>  

            {
                drop && 
                <div className="card d-xl-none">
                     <Link className="btn-dark text-center" to="/">
                         First Gen
                     </Link>

                     <Link className="btn-dark text-center" to="/2">
                         Second Gen
                     </Link>

                     <Link className="btn-dark text-center" to="/3">
                         Thirth Gen
                     </Link>

                     <Link className="btn-dark text-center" to="/4">
                          Fourth Gen
                     </Link>

                     <Link className="btn-dark text-center" to="/5">
                         Fifth Gen
                     </Link>

                     <Link className="btn-dark text-center" to="/6">
                         Sixth Gen
                     </Link>

                     <Link className="btn-dark text-center" to="/7">
                         Seventh Gen
                     </Link>

                     <a className="btn-danger text-center" href="https://github.com/albizarro/PokeReact">
                         Chek my GitHub Repo!
                     </a>
            </div>
            }

            
                   
            
    </>
        
    )
};

export default withRouter (Navbar)
