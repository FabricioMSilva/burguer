import React from "react";
import imagen15 from "./imagens_pages/numeradas/15.png";
import imagen16 from "./imagens_pages/numeradas/16.png";
import Menuingradientesbase from "./menuingradientesbase";

const Page7 = () => {
  return (
    <div className="fundo">
      <Menuingradientesbase />
      <div class="pagina1">
        <div class="h1 text-center">Tipos de carnes</div>

        <div class="texto">
          <br />
          Veja abaixo destacado os principais cortes bovinos para composição do
          seu Blend. Lembrando que caso sua escolha seja uma carne com pouca ou
          sem gordura é importante que você complete com gordura ou faça a
          mistura entre cortes com mais e menos gordura.
          <br />
          <div class="img1">
            <img alt="imgburguer" src={imagen15} width="100%"></img>
          </div>
          <br />
          <div class="titulo">Peso do Hambúrguer</div>
          <br />
          <br />
          O peso do Hambúrguer pode variar entre 70 e 200 Gramas e algumas
          Hamburgueria na linha de Burger "low cost" (Hambúrguer Barato) fazem
          sua produção com Hambúrguer à 100 Gramas. <br />
          <br />
          Lembrando que o diâmetro do pão deve ser um pouco menor que o tamanho
          do Burger que por sua vez pode ser baixo ou alto também.
          <br />
          <br />
          <div class="img1">
            <img alt="imgburguer" src={imagen16} width="100%"></img>
          </div>
          <div class="titulo">
            Tipos de Blends mais usados nas Hamburgueirias
          </div>
          <br />
          <br />
          Essa equação busca, entre outros fatores, o equilíbrio da gordura e
          sabor. <br />
          <br />
          <b>"A gente busca pegar em uma carne, o que a outra não tem"</b>
          <br />
          <br />
          Uma mistura clássica para o hambúrguer é a do peito e o acém. São dois
          cortes da parte dianteira do boi. O acém dá o volume, é um corte
          saboroso, mas com menos gordura. <br />
          <br />
          <b>
            “Já o peito tem gordura, que também é responsável por dar sabor”.{" "}
          </b>
          <br />
          <br />
          Hoje são consumidos mais os discos de carne mais finos, os smash
          burgueres, que entraram no lugar nos exemplares gigantescos de anos
          atrás.
          <br />
          <br />
          <b>
            “Algo que remete a uma memória do passado, mas com uma carne de
            qualidade, ele é prensado, cria uma crosta, provoca a reação
            Maillard, deixar ele caramelizado e cria um sabor particular. É uma
            carne sempre bem passada”.
          </b>
          <br />
          <br />
          <b>Nota:</b>
          <br />
          <br />
          o ideal é que o disco de carne tenha entre 20 e 25% de gordura, porque
          ela deve perder parte da massa ao ser aquecida.
          <br />
          <br />
          Entre os blends sugeridos aparecem:
          <br />
          <br />
          Peito e acém, em uma proporção de 50% a 50% para cada corte.
          <br />
          <br />
          Costela (70%) com acém (30%).
          <br />
          <br />
          Costela(33%), acém (33%) e peito (33%).
          <br />
          <br />
          Fraldinha (80%) e costela (20%).
          <br />
          <br />
          Fraldinha (100%) o que uso hoje.
          <br />
          <br />
          Costela (100%) um Burger específico.
          <br />
          <br />
          Para moldar os hambúrgueres, nada de farinhas.
          <br />
          <br />
          <b>“O que dá a liga é exatamente a gordura”</b>.<br />
          <br />
          <b>
            {" "}
            “Para que ele não fique derretendo, é importante que esteja gelado.
            Portanto, quando fizer o hambúrguer caseiro, coloque a carne um
            pouco na geladeira, para firmar”.
          </b>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Page7;
