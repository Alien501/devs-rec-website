import React from "react";

import './LinkButton.css';

export default function LinkButton({btnTitle, btnTo}) {
    return(
        <a href="#" className="link-button">
            {btnTitle}
        </a>
    )
}