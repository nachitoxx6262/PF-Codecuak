//estilos
import Style from "./UsersAll.module.css";
//hooks
import { useEffect, useState } from "react";
import { getAllUsers } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { getPage } from "../../redux/action";
import { getUsersAlpha } from "./../../redux/action";
//componentes
import NavBar from "../NavBar/NavBar";
import Users from "./Users";

const UsersAll = () => {
  
  const dispatch = useDispatch();
  const [pages, setPages] = useState("1");
  const data = useSelector((state) => state.users);
  const pageCount = data.pages;
  const buttons = [];
  
  const handleClick = (event) => {
    const page = event.target.value;
    setPages(page);
    dispatch(getPage(page));
  };

  for (let i = 1; i <= pageCount; i++) {
    buttons.push(
      <button
        key={i}
        className={pages == i ? Style.button : Style.buttonNone}
        value={i}
        onClick={handleClick}
      >
        {i}
      </button>
    );
  }
  
  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.name
    value == "asc" ? dispatch(getUsersAlpha("asc")) : [];
    value == "desc" ? dispatch(getUsersAlpha("desc")) : [];
  };

  
  return (
    <div>
      <NavBar />
      {data.results?.map((user) => {

        return <Users 
          key={user.id}
          name={user.name} 
          image={user.image} 
          id={user.id}

        />;

      })}
      {buttons}
      <button name="asc" className={Style.asc} onClick={handleChange} >
        ASC
      </button>
      <button name="desc" className={Style.asc} onClick={handleChange}>
        DESC
      </button>
    </div>
  );
};

export default UsersAll;
