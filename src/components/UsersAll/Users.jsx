//estilos
import styles from "./users.module.css"
//hooks
import { Link } from "react-router-dom"
//componentes
import logo from "../../Media/logo-03.png"
const Users = ({ name, image, id }) => {
  return (
    <div>
      <Link to={`/users/${id}`}>
        <h1>{name}</h1>
        {image ?
          <img src={image} className={styles.img} />
          :
          <img src={logo} className={styles.img} />
        }
      </Link>
    </div>
  )
}

export default Users