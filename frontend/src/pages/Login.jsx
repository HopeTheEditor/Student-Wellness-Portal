import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    const savedStudent = localStorage.getItem('student')

    if (!savedStudent) {
      alert('No account found. Please register first.')
      return
    }

    const student = JSON.parse(savedStudent)

    if (email === student.email && password === student.password) {
      localStorage.setItem('loggedIn', 'true')

      alert('Login successful!')

      navigate('/dashboard')
    } else {
      alert('Incorrect email or password.')
    }
  }

  return (
    <main>
      <h1>Login</h1>

      <p>Login to your student account.</p>

      <form onSubmit={handleSubmit}>
        <label>Email</label>

        <br />

        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <br />
        <br />

        <label>Password</label>

        <br />

        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <br />
        <br />

        <button type="submit">
          Login
        </button>
      </form>
    </main>
  )
}

export default Login