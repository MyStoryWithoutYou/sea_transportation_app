import React from "react";

export default  function Footer() {
    return(
        <footer className="footer">
            <p>
                &copy; {new Date().getFullYear()} Sea Transportation App - All Rights Reserved
            </p>
        </footer>
    );
}