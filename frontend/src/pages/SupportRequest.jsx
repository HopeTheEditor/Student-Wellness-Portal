import { useState } from 'react'

function SupportRequest() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    alert('Support request submitted!')
  }

  return (
    <main>
      <h1>Request Support</h1>

      <p>
        Tell us what you are going through and how we can support you.
      </p>

      <form onSubmit={handleSubmit}>
        <label>What do you need support with?</label>

        <br />

        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Describe your concern..."
          rows="6"
        />

        <br />

        <button type="submit">
          Submit Request
        </button>
      </form>
    </main>
  )
}

export default SupportRequest