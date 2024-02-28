import React from 'react'
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faFacebookMessenger} from "@fortawesome/free-brands-svg-icons/faFacebookMessenger";

const FooterComponent = () => {
    return (
        <div>
            {/*// <!-- Footer -->*/}
            <footer className="footer bg-primary text-center text-white fixed-bottom">
                {/*// <!-- Copyright -->*/}
                <div className="text-center p-3">
                    © 2024 Copyright:
                    <a className="text-white" href="#">Employee Management System</a>
                </div>
                {/*// <!-- Copyright -->*/}
            </footer>
            {/*// <!-- Footer -->*/}
        </div>
    )
}
export default FooterComponent