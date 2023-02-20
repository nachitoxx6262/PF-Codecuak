import style from "./CardUser.module.css"

const Card=({ userData })=>{
    return(
       
        <div className={style.container}>
            <div className={style.containerImg}>
                <img src={userData.image} alt="Foto de perfil" />
            </div>
            <div className={style.containerData}>
                <div className={style.name}>
                    <h2>{`${userData.name}`}</h2>
                    <h3>{` (${userData.nickName})`}</h3>
                </div>
                <div className={style.contacts}>
                    <h4>{userData.email}</h4>
                    <h4>{`GitHub: ${userData.gitHub}`}</h4>
                </div>
            </div>
        </div>
       
    )

}

export default Card