import React from "react"
import Ernane from "./smart/img/ernane.png"
import "./footerstyle.css"



function Footer1(){

return (


    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-md-2 item text-center">
                        <img className="img-responsive" width="100" alt="ernanefoto" height="100" src={Ernane}></img>
                        <h2>Ernane Mendes</h2>
                        <h3>Proprietário</h3>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>E-Burguer</h3>
                        <ul>
                            <li>Home</li>
                            <li>Planejamento</li>
                            <li>Logistica</li>
                            <li>Marketing</li>
                            <li>Equipamentos</li>
                            <li>Ingradientes</li>
                            <li>Acompanhamentos</li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text align-items-center ">
                        <h2>E-Burguer</h2>
                        <p> Ｅ！Ｂｕｒｇｅｒ’ｓ<br/>
                            Burger Restaurant<br/>
                            🍔Delivery de Burger’s Artesanais<br/>
                            📍Loja física - Av Tancredo Neves, 913 - Vista Alegre<br/>
                            ⏰Terça a Domingo de 19h às 23h<br/>
                            👉🏼Recuse Imitações<br/>
                            📱24 98845-2525 </p>
                            <a href="https://eburgersbm.grandchef.com.br/"target="parent" rel="noopener" >Site para pedidos E-Burguer</a>
                        <div className="m-3 d-flex align-items-center">
                            <div class=" m-3 d-flex align-items-center"><a href="https://www.facebook.com/E-Burgers-105759164386676" target="parent" rel="noopener"><i class=" fab fa-facebook-square fa-3x fa-bar"></i></a><br/></div>
                            <div class=" m-3 d-flex align-items-center"><a href="https://www.instagram.com/e_burgers_/" target="parent" rel="noopener"><i class="fab fa-instagram fa-3x fa-bar"></i></a></div>
                        </div>
                    </div>
                   
                </div>
                <p class="copyright">E-Burguer © 2020</p>
            </div>
        </footer>
    </div>

)
}

export default Footer1;