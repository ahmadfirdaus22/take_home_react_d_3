import React from "react";

import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav 
        style={{
            backgroundColor : 'grey',
            padding : '10px',
            color : 'White',
            display: 'flex',
            gap: '30px',
            paddingLeft: '50px',
        }}
        >
            <NavLink
            to="/"
            style={({ isActive }) => (isActive ? { color : 'white',textDecoration:'none' , backgroundColor: 'black', padding:'10px', borderRadius:'10px'} : {textDecoration:'none', padding:'10px',  color:'black'})}
            >
                Post
            </NavLink>
            <NavLink
            to="/todos"
            style={({ isActive }) => (isActive ? { color : 'white',textDecoration:'none' , backgroundColor: 'black', padding:'10px', borderRadius:'10px'} : {textDecoration:'none',padding:'10px', color:'black' })}>
                Todos
            </NavLink>
            <NavLink
            to="/users"
            style={({ isActive }) => (isActive ? {color : 'white',textDecoration:'none' , backgroundColor: 'black', padding:'10px', borderRadius:'10px'} : {textDecoration:'none',padding:'10px', color:'black'})}
            >
                User
            </NavLink>
        </nav>
    );
}

export default Navbar;