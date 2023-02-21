//estilos
import styles from "./users.module.css"
//hooks
import { Link } from "react-router-dom"
//componentes
import logo from "../../Media/logo-03.png"
const Users = ({ name, image, id }) => {
  return (
    <div className={styles.container}>
      <Link to={`/users/${id}`} className={styles.link}>
        {image ?
          <img src={image} className={styles.img} />
          :
          <img src={logo} className={styles.img} />
        }
        <h1>{name}</h1>
      </Link>
    </div>
  )
}

export default Users