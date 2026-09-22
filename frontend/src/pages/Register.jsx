function Register() {
  return (
    <main>
      <h1>Create an Account</h1>

      <p>Create your student account.</p>

      <form>
        <label>Full Name</label>
        <br />
        <input type="text" />

        <br />
        <br />

        <label>Email</label>
        <br />
        <input type="email" />

        <br />
        <br />

        <label>Password</label>
        <br />
        <input type="password" />

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