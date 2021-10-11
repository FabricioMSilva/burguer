import React from "react";
import Vid1 from "./Video/VID-20210712-WA0029.mp4.mp4";
import "./style.css";
import Poster from "./imagens_pages/numeradas/1.png";
const Page1 = () => {
  return (
    <div className="fundo">
      <div className="pagina1">
        <div className="titulo">
          Bem-vindo (a) ao Curso de Hambúrguer Artesanal do E! Burger’s
        </div>

        <div className="texto">
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
        <div className="vid1">
          <video
            src={Vid1}
            autoplay
            poster={Poster}
            controls
            width="100%"
          ></video>
        </div>
      </div>{" "}
    </div>
  );
};

export default Page1;
