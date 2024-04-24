import { Link, useParams } from "react-router-dom"

export const User = () => {
  const userId = useParams<{ userId: string }>();
  console.log(userId);
  return (<>
    <h1>User page {userId.userId} </h1>
    <Link to={`/`}>Home</Link>
  </>)
}
