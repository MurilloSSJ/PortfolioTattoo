import './styless.css'
import { Component } from 'react'
import imageHeader from '../../Img/header/img-header.png'
export class HomePage extends Component{
    render(){
        return(
            <div className="HeaderContent">
                <div className="HeaderContainer">
                    <h1>Venha Tatuar Conosco</h1>
                    <button className="callActionButton">Entrar em contato</button>
                </div>
                <div className="imageHeader">
                    <img src={imageHeader} alt="" />
                </div>
            </div>
        )
    }
}