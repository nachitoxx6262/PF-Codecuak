//hooks
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserDetailById } from "../../redux/action";
import { useParams } from "react-router-dom"
import NavBar from "../NavBar/NavBar";
import UserProfile from "../blueprints/UserProfile/UserProfile";

const UserDetail = () => {

  const dispatch = useDispatch();
  const userDetail = useSelector(state => state.userDetail)

  const { id } = useParams();
  console.log(userDetail);
  useEffect(() => {
    dispatch(getUserDetailById(id))
  }, [dispatch])

  useEffect(() => {
    dispatch(getUserDetailById(id))
  }, [dispatch, userDetail])


  return (
    <div>
      <NavBar />
      <UserProfile userData={userDetail} />
    </div>
  )
}

export default UserDetail