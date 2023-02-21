import style from "./searchExpandedUser.module.css"

import { Link } from "react-router-dom"

const SearchExpandedUser = ({ image, name, id, onClick }) => {
  return (
    <Link to={`/users/${id}`} onClick={onClick} className={style.link}>
      <div className={style.container}>
        <div className={style.imgContainer}>
          <img src={image} alt={`Imagen de usuario ${id}`} />
        </div>
        <div className={style.nameContainer}>
          <p>{name}</p>
        </div>
      </div>
    </Link>
  )
}

export default SearchExpandedUser