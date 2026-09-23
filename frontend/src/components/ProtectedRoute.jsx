import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const loggedIn = localStorage.getItem('loggedIn')

  if (loggedIn !== 'true') {
    return <Navigate to="/login" />
  }

  return children
}

export default ProtectedRoute