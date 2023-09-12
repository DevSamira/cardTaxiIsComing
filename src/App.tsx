import { useState } from "react";
import "./index.css";
import Titulo from "./components/Titulo";
import Driver from "./components/Driver";
import SendMessage from "./components/sendMessage";
import MessagesSent from "./components/MessagesSent";

import person1 from "./imgs/person1.png";
import person2 from "./imgs/driver.png";

function App() {
  const [comments, setComments] = useState([
    {
      id: 1,
      text: "Boris estou no local já lhe esperando. estou com camisa azul e calça jeans",
      profilePic: person1,
    },
    {
      id: 2,
      text: "Acabei de lhe ver. Vou estacionar o carro próximo.",
      profilePic: person2,
    },
  ]);

  return (
    <div className="card">
      <div className="superior"></div>
      <Titulo />
      <Driver />
      <SendMessage />
      {comments.map((comment) => (
        <MessagesSent key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default App;
