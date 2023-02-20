//hooks
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserById } from "../../redux/action";
import {useParams} from "react-router-dom"
import NavBar from "../NavBar/NavBar";
import UserProfile from "../blueprints/UserProfile/UserProfile";

const UserDetail = () => {

    const dispatch = useDispatch();
    const userDetail = useSelector(state => state.userDetail)
    
    const {id} = useParams();
    console.log(userDetail);
    useEffect(() => {
      dispatch(getUserById(id))
    }, [dispatch])
    

  return (
    <div>
        <NavBar/>
        <UserProfile userData={userDetail}/>
    </div>
  )
}

export default UserDetail