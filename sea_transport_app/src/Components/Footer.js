import React from "react";

const Footer = () => {
    return(
        <footer className="footer">
            <p>
                &copy; {new Date().getFullYear()} Sea Transportation App - All Rights Reserved
            </p>
        </footer>
    );
}

export default Footer;