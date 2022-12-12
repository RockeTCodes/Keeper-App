import React from "react";



function Footer(){
    // const year = new Date.getYear();
    const year = new Date().getFullYear();
    return(
            <footer>
            <p>Made with ❤️ By <a href = "https://www.github.com/RockeTCodes">RockeTCodes</a></p>
            <p>Copyright ⓒ {year}</p>
            </footer>
       
    );
}

export default Footer;