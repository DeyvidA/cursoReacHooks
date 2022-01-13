import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/components/Information.css'

const Information = () => {
    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Informacion de Contacto</h2>
                </div>
                <div className="Information-form">
                    <form>
                        <input type='text' placeholder='Nombre completo' name='name' />
                        <input type='text' placeholder='Correo Electronico' name='email' />
                        <input type='text' placeholder='Direccion' name='address' />
                        <input type='text' placeholder='Apto' name='apto' />
                        <input type='text' placeholder='City' name='city' />
                        <input type='text' placeholder='Pais' name='country' />
                        <input type='text' placeholder='Estado' name='state' />
                        <input type='text' placeholder='Postal code' name='cp' />
                        <input type='text' placeholder='Phone Number' name='phone' />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        Regresar
                    </div>
                    <div className="Information-next">
                        <Link to="/checkout/payment">
                            Pay
                        </Link>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <div className="Information-element">
                    <h4>TIME name</h4>
                    <span>$10</span>
                </div>
            </div>
        </div>
    );
}

export default Information;