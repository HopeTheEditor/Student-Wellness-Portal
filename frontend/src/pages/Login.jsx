function Login() {
  return (
    <main>
      <h1>Login</h1>

      <p>Login to your student account.</p>

      <form>
        <label>Email</label>
        <input type="email" />

        <br />

        <label>Password</label>
        <input type="password" />

        <br />

        <button type="submit">
          Login
        </button>
      </form>
    </main>
  )
}

export default Login