import React, { useState } from "react";



export const Main = () => {


    const [isCircle, setIsCircle] = useState(true);


    return (
    <main className={isCircle ? "next" : "previous"}>
        <div className="sections">
            <section className="info">
                
                <div className="img"></div>
                <div className="info-area">
                    <div className="info1"></div>
                    <div className="info2"></div>
                </div>
            </section>
            <section className="nacional">
                <section className="left-side">

                </section>
                <section className="right-side">
                        <form method="POST" action="cadastro.php" className="b7validator">
                            <label>
                                Seu nome:<br/>
                                <input type="text" name="name" data-rules="required|min=2" />
                            </label>
                            <label>
                                Seu e-mail:<br/>
                                <input type="text" name="email" data-rules="required|email" />
                            </label>
                            <label>
                                Sua senha:<br/>
                                <input type="password" name="password" data-rules="min=4" />
                            </label>
                            <label>
                                <input type="submit" value="Cadastrar" />
                            </label>
                        </form>
                </section>
            </section>
        </div>
    </main>
    );
}