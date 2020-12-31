import React from 'react';

const Nav = (onRouteChange) => {
    return (
        < header  className= "bg-black-90 fijo w-100 ph3 pv3 pv4-ns ph4-m ph5-l" >
            < nav  className= "f6 fw6 ttu tracked" >
                <a  className= "link dim white dib mr3"  href = "#"  título = 'Home'> Inicio</a>
                <a  className= "link dim white dib mr3"  href = "#"  título = 'Episodes' >Episodes</a>
            </nav >
        </ header >
    );

}

export default Nav;