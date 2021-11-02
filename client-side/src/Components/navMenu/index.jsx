import './styless.css'
import { Component } from 'react'
import logo from '../../Img/Logos/logo.png'
export class navMenu extends Component{
    render(){
        return(
            <div className="navMenu">
                <div className="navMenuContainer">
                    <ul>
                        <li>Quem Somos</li>
                        <li>Portfolio</li>
                        <li><img src={logo} alt="Logo Max Tattoo" /></li>
                        <li>Tatuadores</li>
                        <li>Contato</li>
                    </ul>
                </div>
            </div>
        )
    }
}