import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SupportRequest() {
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    const request = {
      category: category,
      message: message,
      status: 'Pending'
    }

    localStorage.setItem('supportRequest', JSON.stringify(request))

    alert('Support request submitted!')

    navigate('/dashboard')
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
          required
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
          required
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