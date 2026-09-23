import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    const student = {
      fullName: fullName,
      email: email,
      password: password
    }

    localStorage.setItem('student', JSON.stringify(student))

    alert('Account created successfully!')

    navigate('/login')
  }

  return (
    <main>
      <h1>Create an Account</h1>

      <p>Create your student account.</p>

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>

        <br />

        <input
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          required
        />

        <br />
        <br />

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
          Register
        </button>
      </form>
    </main>
  )
}

export default Register