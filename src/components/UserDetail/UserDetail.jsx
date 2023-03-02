//hooks
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserDetailById, cleanUserDetail } from "../../redux/action";
import { useParams } from "react-router-dom"
import NavBar from "../NavBar/NavBar";
import UserProfile from "../blueprints/UserProfile/UserProfile";

const UserDetail = () => {
  const token  = localStorage.getItem("token")
  
  const dispatch = useDispatch();
  const userDetail = useSelector(state => state.userDetail)
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserDetailById(id,token))
    return()=> dispatch(cleanUserDetail())
  }, [dispatch, id])

  return (
    <div>
      <NavBar />
      <UserProfile user={userDetail} />
    </div>
  )
}

export default UserDetail