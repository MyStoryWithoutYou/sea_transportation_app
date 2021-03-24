import React from "react";

const Footer = () => {
    return(
        <div className="footer">
            <p>
                &copy; {new Date().getFullYear()} Sea Transportation App - All Rights Reserved
            </p>
            <div className="contacts">
                Contacts
            </div>
        </div>
    );
}

export default Footer;