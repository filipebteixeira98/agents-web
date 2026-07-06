import { Link } from 'react-router-dom'

export function CreateRoom() {
  return (
    <div>
      <div>Create Room</div>
      <Link className="underline" to="/room">
        Access Room
      </Link>
    </div>
  )
}
