import { Link } from "react-router-dom"

export const HomePage = () => {
  const userId = [1, 2, 3, 4]

  return (<>
    <h1>Home Page</h1>
    <div>
      {userId.map((profile) => (
        <Link key={profile} to={`profiles/${profile}`}>Profile {profile}</Link>
      ))}
    </div>

  </>)
}
