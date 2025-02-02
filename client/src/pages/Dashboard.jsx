import { useContext } from "react";
import { UserContext } from "../../context/userContext";


export default function Dashboard() {
    const {user} = useContext(UserContext)
  return (
    <div>
        <h4>Dashboard</h4>
        {!!user && (<h3>Hi {user.name}, Welcome Back</h3>)}
    </div>
  )
}
