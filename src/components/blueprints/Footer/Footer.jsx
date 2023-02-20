import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.contTextofoot}>
          <p>&copy; Copyright 2023. Todos los derechos reservados.</p>
          <ul>
            <li>
              <Link to="/about">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/terminos">Terminos y Condiciones</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </footer>
  )
}

export default Footer
