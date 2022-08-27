import React, { useState } from "react";


export const Header = () => {

    const [isCircle, setIsCircle] = useState(true);

    return (
        
        <header>
        <div className="flex">
            <div className="img_wow">
            </div>
            <div className="logo">
            </div>
        </div>
            <div className="align">
                    <span className="home button-style">HOME</span>
                <p className="blink">Bem vindo!</p>
                <div className="selection">
                    <span className="nacional-" onClick={() => setIsCircle(!isCircle)}>CADASTRO</span>
                </div>
            </div>
    </header>
    );
}