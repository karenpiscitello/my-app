import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import './Footer.css'


function Footer() {
    return (
        <div className="container-fluid fondo-footer">
        <div className="row">
            <div className="col-lg-12 d-flex flex-row justify-content-center mt-2">
            <div className="redes">
            <a href='https://www.instagram.com/lateralmood/'target="_blank">
                <AiOutlineInstagram />
                </a>
            </div>
            <div className="redes">
            
            <a href='https://api.whatsapp.com/message/OIUSMCH7YZUKM1?autoload=1&app_absent=0'target="_blank">
                <FaWhatsapp />
            </a>
            </div>
            </div>
            <div className="col-lg-12 d-flex flex-row justify-content-center mt-4">
            <div className="info">
                <h6 className="text-center">
                Córdoba,Argentina - Atención de Lunes a Viernes de 10:00
                a 18:00hs y Sábados de 9:00 a 14:00hs.
                </h6>
            </div>
            </div>
            <div className="col-lg-12 d-flex flex-row justify-content-center mt-4 copy">
            <div className="">
                <h6 className="text-center karen mt-2 mb-2">
                Design by Karen Piscitello
                </h6>
            </div>
            </div>
        </div>
        </div>
  )
}

export default Footer
