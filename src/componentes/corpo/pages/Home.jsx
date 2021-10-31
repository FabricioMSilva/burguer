import React from "react";
import Vid1 from "./Video/VID-20210712-WA0029.mp4.mp4";
import "./style.css";

const Home1 = () => {
  return (
    <div className="fundo">
      <div className="pagina1">
        <div className="h2 text-center px-4 mt-4">
          Bem-vindo (a) ao Curso de Hambúrguer <br/> Artesanal do E! Burger’s
        </div>

        <div className="texto text-center px-4 mt-4">
          Olá, Seja bem-vinda (o) a Família E! Burger’s - Curso de Hambúrguer
          Artesanal Sou Ernane Mendes, e a partir de agora, irei mostrar a você
          como tirar seu sonho do papel e transformar em realidade. Pois foi
          assim que eu comecei, com um sonho de ter minha liberdade financeira e
          minha própria Hamburgueria. E por isso resolvi prosperar com você. Com
          esse treinamento você abrirá sua mente , e com certeza irá fazer toda
          diferença . Prepare-se para aprender todos os detalhes e segredos para
          produzir o melhor Hambúrguer Artesanal de todos. Será um aprendizado à
          partir de HOJE, para SEMPRE, isso mesmo, VITALÍCIO que você nunca mais
          irá esquecer.
        </div>
        <div className="embed-responsive embed-responsive-16by9 text-center px-4 mt-4">
          <iframe  className="embed-responsive-item" title="video" src={Vid1} alt="video" allowfullscreen ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home1;
