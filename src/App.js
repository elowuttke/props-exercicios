import React from "react";
import "./styles.css";
import { CardVideo } from "./Components/CardVideo";

export default function App() {

  const video1 = {
    image: "https://picsum.photos/400/400?a=1 ",
    titulo: "Tomates Verdes Fritos"
  }
  const video2 = {
    image: "https://picsum.photos/400/400?a=2 ",
    titulo: "Jurassic Park"
  }
  const video3 = {
    image: "https://picsum.photos/400/400?a=3 ",
    titulo: "Os Batutinhas"
  }
  const video4 = {
    image: "https://picsum.photos/400/400?a=4 ",
    titulo: "A Noviça Rebelde"
  }
  const video5 = {
    image: "https://picsum.photos/400/400?a=5 ",
    titulo: "Convenção das Bruxas"
  }
  const video6 = {
    image: "https://picsum.photos/400/400?a=6 ",
    titulo: "Amor Além da Vida"
  }
  const video7 = {
    image: "https://picsum.photos/400/400?a=7 ",
    titulo: "As Férias de Mr. Bean"
  }
  const video8 = {
    image: "https://picsum.photos/400/400?a=8 ",
    titulo: "A Princesinha"
  }

  const user1 = {
    name: "Felipe",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
  const user2 = {
    name: "Eloísa",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
  const user3 = {
    name: "Guilherme",
    avatar: "https://i.pravatar.cc/150?img=4"
  }
  const user4 = {
    name: "Francisco",
    avatar: "https://i.pravatar.cc/150?img=2"
  }
  const user5 = {
    name: "Rita",
    avatar: "https://i.pravatar.cc/150?img=1"
  }
  const user6 = {
    name: "Paulo",
    avatar: "https://i.pravatar.cc/150?img=6"
  }


  return (
    <div className="tela-inteira">
      <header>
        <h1>LabeTube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
      </header>

      <main>
        <nav className="menu-vertical">
          <ul>
            <li className="botoes-meunu-vertical">Início</li>
            <li className="botoes-meunu-vertical">Em alta</li>
            <li className="botoes-meunu-vertical">Inscrições</li>
            <hr />
            <li className="botoes-meunu-vertical">Originais</li>
            <li className="botoes-meunu-vertical">Histórico</li>
          </ul>
        </nav>

        <section className="painel-de-videos">
          <CardVideo video={video1} user={user1}/>
          <CardVideo video={video2} user={user2}/>
          <CardVideo video={video3} user={user3}/>
          <CardVideo video={video4} user={user1}/>
          <CardVideo video={video5} user={user4}/>
          <CardVideo video={video6} user={user3}/>
          <CardVideo video={video7} user={user5}/>
          <CardVideo video={video8} user={user6}/>
        </section>
      </main>

      <footer>
        <h4>Oi! Eu moro no footer!</h4>
      </footer>
    </div>
  );
}
