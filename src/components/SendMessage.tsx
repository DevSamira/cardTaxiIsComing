import phone from "../imgs/phone.png";
import plus from "../imgs/plus.png";

const SendMessage = () => {
  return (
    <div className="sendMessage">
      <input type="text" placeholder="Enviar mensagem para Fábio..." />
      <button>Publicar</button>
      <img src={phone} />
      <img src={plus} />
    </div>
  );
};

export default SendMessage;
