import React from "react";
import "./style.css";
import Menuplan from "./Menuplanbase";

const Page2 = () => {
  return (
    <div className="fundo">
      
       <Menuplan />
      <div className="pagina1 text-center px-4 mt-4">
    
        <div className="text-center h4">
       
            <b>
              Deve seguir alguns passos fundamentais para o sucesso do Negócio
            </b>
        </div>
        <div className="texto text-justify" margin-left="10px">
          
          <br />
          <p>
            <b>Plano de Negócio:</b>
            <br /> Coloque tudo no papel e siga à risca. Conheça a sua demanda
            (clientes), investigue sua concorrência e calcule aproximadamente os
            gastos que irá precisar investir inicialmente. <br />
            <br />
          </p>
          <p>
            <b>Escolha do Local:</b>
            <br /> O local escolhido é muito importante, pois se está muito
            afastado ou o acesso é difícil as pessoas não frequentarão, hoje em
            dia o Delivery é uma ótima opção e sai mais em conta, pois você pode
            fazer na sua própria casa.{" "}
          </p>{" "}
          <br />
          <p>
            <b>Crie a sua Identidade:</b>
            <br /> Uma identidade para seu negócio é algo muito importante. O
            seu nome e a sua logo deve ser pensado com calma e muito bem
            estudado. As cores influenciam muito. O cliente deve olhar para a
            sua marca e lembrar o sabor do seu Hambúrguer!{" "}
          </p>{" "}
          <br />
        </div>
      </div>{" "}
    </div>
  );
};

export default Page2;
