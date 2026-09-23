import { useState } from 'react'

function SupportRequest() {
  const [category, setCategory] = useState('')
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

        <label>Support Category</label>

        <br />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Select a category</option>
          <option value="academic">Academic</option>
          <option value="stress">Stress</option>
          <option value="mental-wellbeing">Mental Wellbeing</option>
          <option value="personal">Personal</option>
          <option value="other">Other</option>
        </select>

        <br />
        <br />

        <label>What do you need support with?</label>

        <br />

        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Describe your concern..."
          rows="6"
        />

        <br />
        <br />

        <button type="submit">
          Submit Request
        </button>

      </form>
    </main>
  )
}

export default SupportRequest