import React from "react";

const Footer = () => {
    return(
        <div className="footer">
            <p>
                &copy; {new Date().getFullYear()} Effective Transit - All Rights Reserved
            </p>
            <div className="contacts">
                Contacts:<br /> +375(33)38-73-960<br /> @info.effectivetransit.com
            </div>
        </div>
    );
}

export default Footer;