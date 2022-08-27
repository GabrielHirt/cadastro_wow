import React, { useState } from "react";
import {Header} from './components/Header';
import {Main} from './components/Main';
import {Modal} from './components/Modal';
import './App.css';




function App() {

  

  const [isModalVisible, setModalVisible] = useState(false);
  
  

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        nick: ''
      });
    
      const [status, setStatus] = useState({
        type: '',
        mensagem: ''
      });
    
      //Receber os dados do formulário
      const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });
    
      //Enviar os dados para o back-end
      const addUser = async e => {
        e.preventDefault();
    
        if(!validate()) return;
    
        const saveDataForm = true;
    
        if (saveDataForm) {
          setStatus({
            type: 'success',
            mensagem: "Usuário cadastrado com sucesso!"
          });
          setUser({
            name: '',
            email: '',
            password: '',
            nick: ''
          });
        } else {
          setStatus({
            type: 'error',
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
          });
        }
      }
    
      function validate(){
        if(!user.name) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo nome!'});
        if(!user.nick) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo nickname!'});
        if(!user.email) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo e-mail!'});
        if(!user.password) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo senha!'});
        if(user.password.length < 6) return setStatus({type: 'error', mensagem: 'Erro: A senha precisa ter pelo menos seis caracteres!'});
    
        return true;
      }





    const [isCircle, setIsCircle] = useState(true);

  return (

    /*
        <div>
            <Header/>
            <Main/>
        </div>
    */


    <div>
        <header>
        <div className="flex">
            <div className="img_wow">
                
            </div>
            <div className="logo">
            </div>
        </div>
            <div className="align">
                    <span className="home button-style" onClick={() => setIsCircle(!isCircle)}>HOME</span>
                <p className="blink">Bem vindo!</p>
                <div className="selection">
                    <span className="nacional-" onClick={() => setIsCircle(!isCircle)}>CADASTRO</span>
                </div>
            </div>
    </header>
    <main className={isCircle ? "previous" : "next"}>
        <div className="sections">
            <section className="info">           
                <div className="img"></div>
                <div className="info-area">
                    <div className="info1">
                      <div id="root">
              
                      </div>
                    </div>
                    <div className="info2">
                    <form method="POST" action="cadastro.php" className="b7validator">
                            <label>
                                Seu e-mail:<br/>
                                <input type="text" name="email" data-rules="required|email" />
                            </label>
                            <label>
                                Sua senha:<br/>
                                <input type="password" name="password" data-rules="min=4" />
                            </label>
                            <label>
                                <input type="submit" value="Login" />
                            </label>
                            <a href="">Não possui uma conta?</a><br />
                            <br />
                            <span className="create-account" onClick={() => setIsCircle(!isCircle)}>INCREVA-SE</span>
                        </form>
                    </div>
                </div>
            </section>
            <section className="nacional">
                <section className="left-side">

                </section>
                <section className="right-side">
                <h1>Cadastrar Usuário</h1>
                                <form action="/cad" method="post" onSubmit={addUser} className="b7validator">
                                    <label>Nome*: </label>
                                    <input type="text" name="name" placeholder="Nome completo do usuário" onChange={valueInput} value={user.name} /><br /><br />

                                    <label>Nickname*: </label>
                                    <input type="text" name="nick" placeholder="Nome completo do nickname" onChange={valueInput} value={user.nick} /><br /><br />

                                    <label>E-mail*: </label>
                                    <input type="email" name="email" placeholder="Melhor e-mail do usuário" onChange={valueInput}  value={user.email} /><br /><br />

                                    <label>Senha*: </label>
                                    <input type="password" name="password" placeholder="Senha para acessar o sistema" autoComplete="on" onChange={valueInput} value={user.password} /><br /><br />

                                    * Campo obrigatório<br /><br />

                                    <button type="submit">Cadastrar</button>

                                    <div className="App">

                                    <button onClick={() => setModalVisible(true)}>Open</button>
                                    {isModalVisible ? (
                                    <Modal onClose = {() => setModalVisible(false)}>
                                      <h2> Informações do Jogador</h2>
                                      <p>NOME:</p><br />
                                      <p>NICKNAME:</p><br />
                                      <p>SENHA:</p><br />
                                      <p>E-MAIL:</p><br />
                                    </Modal>
                                     ) : null}

                                    </div>


                                </form>

                                {status.type === 'success' ? <p className="noerror" style={{ color: "#00FF00"}}>{status.mensagem}</p> : ""}
                                {status.type === 'error' ? <p className="error" style={{ color: "#FFFF00" }}>{status.mensagem}</p> : ""}
            
                </section>
            </section>
        </div>
    </main>
    </div>
  );
}

export default App;
