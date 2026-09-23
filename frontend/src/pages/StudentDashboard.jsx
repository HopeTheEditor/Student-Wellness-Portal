import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function StudentDashboard() {
  const [request] = useState(() => {
    const savedRequest = localStorage.getItem('supportRequest')

    if (savedRequest) {
      return JSON.parse(savedRequest)
    }

    return null
  })

  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem('loggedIn')

    alert('You have been logged out.')

    navigate('/login')
  }

  return (
    <main>
      <h1>Student Dashboard</h1>

      <p>Welcome to your wellness dashboard.</p>

      <button onClick={handleLogout}>Logout</button>

      <section>
        <h2>Get Support</h2>

        <p>
          If you need someone to talk to, you can submit a support request.
        </p>

        <Link to="/support">
          Request Support
        </Link>
      </section>

      <section>
        <h2>Wellness Resources</h2>

        <p>
          Explore resources that can help with your wellbeing and student life.
        </p>

        <Link to="/resources">
          View Resources
        </Link>
      </section>

      <section>
        <h2>My Requests</h2>

        {request ? (
          <div>
            <h3>Support Request</h3>

            <p>
              <strong>Category:</strong> {request.category}
            </p>

            <p>
              <strong>Message:</strong> {request.message}
            </p>

            <p>
              <strong>Status:</strong> {request.status}
            </p>
          </div>
        ) : (
          <p>No support requests yet.</p>
        )}
      </section>
    </main>
  )
}

export default StudentDashboard