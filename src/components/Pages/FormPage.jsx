import { useState } from "react";
import { FaWhatsapp, FaMailBulk, FaInstagram } from "react-icons/fa";
import EmailJs from '@emailjs/browser'
/*
Utilizando o FormSubmit, uma vesrão mais barata fica mais economica, porém menos profissional.
Como pretendo aumentar a qualidade do meu código, farei com o método mais eficaz e melhor.
Para este caso, é solicitado os campos de ID e NAME dentro das tags input.
name="email"
id="name"
<form className="flex flex-col space-y-4" action="https://formsubmit.co/tblima26@gmail.com" method="POST">
*/
export function FormPage() {
  const textoP = "pt-2 text-beige-dark text-lg font-bold playdisplay";
  const textoTitle =
    "pt-2 text-beige-dark text- font-semibold text-6xl font-poppins mb-5";
  const tagInfo = "inline-flex space-x-2 items-center flex items-center ";
  const tagFormInput =
    "outline-none border-b border-b-beige-dark bg-transparent h-14 w-full pl-3 placeholder:text-beige-dark ";
  const tagIcon = "text-beige-dark text-lg mt-3";

  //variaveis para Formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  /*Função para Envio de email*/
  function sendEmail(e) {
    e.preventDefault();
    
    if(name === '' || email === "" || message.length <5 )
      return alert("Deixe todos os campos Validos");
    
    const templateParams = {
      from_name: name,
      email: email,
      phone: fone,
      message:message
    }

    EmailJs.send('service_y2960gp','template_ism4yet', templateParams, 'sGLkB9dTPWvaCtgb-')
    .then((response)=>{
      alert("Email enviado", response.status, response.text)
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    },(err)=>{
      console.log("Erro: ", err)
    })
    
  }

  

  return (
    <>
      <div className="container2">
        <div className="flex flex-col justify-between">
          <p className={textoTitle}>Contato</p>
          <p className={textoP+" mb-8"}>
            Envie-nos uma mensagem ou ligue para mais informações
          </p>
          <div className="flex flex-col items-start space-y-4 ">
            <div className={tagInfo}>
              <FaWhatsapp className={tagIcon} />
              <span className={textoP}>(61)98277-4220</span>
            </div>
            <div className={tagInfo}>
              <FaMailBulk className={tagIcon} />
              <span className={textoP}>karolsalmona@gmail.com</span>
            </div>
            <div className={tagInfo}>
              <FaInstagram className={tagIcon} />
              <span className={textoP}>@fisiokarolsalmona</span>
            </div>
          </div>
        </div>
        <div className=" bg-white rounded-xl shadow-lg p-8 ml-6">
          <form className="flex flex-col space-y-4" onSubmit={sendEmail}>
            <div className="flex items-center justify-between">
              <input
                type="text"
                placeholder="Seu nome"
                id="nome"
                name="nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={tagFormInput}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <input
                type="email"
                placeholder="Seu e-mail..."
                className={tagFormInput}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Seu telefone..."
                className={tagFormInput}
                onChange={(e) => setPhone(e.target.value)}
                value={fone}
                required
              />
            </div>
            <div>
              <textarea
                type="message"
                placeholder="Sua mensagem..."
                className={tagFormInput}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              />
            </div>
            <div className=" flex justify-center w-auto">
              <button
                type="submit"
                className=" w-full m-auto bg-green-300 rounded-xl p-3 text-white text-xl hover:bg-green-600 transition "
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
