import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import './practice.js'
import CourseCard from './components/CourseCard'

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const [enrolledCourse, setEnrolledCourse] = useState(null)

  const [enrollName, setEnrollName] = useState('')
  const [enrollEmail, setEnrollEmail] = useState('')
  const [enrollPhone, setEnrollPhone] = useState('')
  const [enrollmentSubmitted, setEnrollmentSubmitted] = useState(false)

  const courses = [
    {
      title: 'English Beginner',
      level: 'A1 • Beginner',
      duration: '3 Months',
      description:
        'Start learning English from the basics and build your confidence step by step.',
      icon: '📘',
    },
    {
      title: 'English Intermediate',
      level: 'B1 • Intermediate',
      duration: '4 Months',
      description:
        'Improve your speaking, grammar, vocabulary, and communication skills.',
      icon: '🎓',
    },
    {
      title: 'Computer Skills',
      level: 'Basic • Computer',
      duration: '3 Months',
      description:
        'Learn essential computer skills, Microsoft Office, internet, and digital tools.',
      icon: '💻',
    },
    {
      title: 'Web Development',
      level: 'Basic',
      duration: '6 Months',
      description:
        'Learn HTML, CSS, JavaScript, and React to build modern websites.',
      icon: '🌐',
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !email || !message) {
      alert('Please fill in all fields.')
      return
    }

    setSubmitted(true)

    setName('')
    setEmail('')
    setMessage('')
  }

 const handleEnrollment = (e) => {
  e.preventDefault()

  // Check empty fields
  if (!enrollName || !enrollEmail || !enrollPhone) {
    alert('Please fill in all fields.')
    return
  }

  // Check name
  if (enrollName.length < 3) {
    alert('Name must be at least 3 characters.')
    return
  }

  // Check email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailPattern.test(enrollEmail)) {
    alert('Please enter a valid email address.')
    return
  }

  // Check phone number
  const phonePattern = /^[0-9]{10,15}$/

  if (!phonePattern.test(enrollPhone)) {
    alert('Please enter a valid phone number.')
    return
  }

  // If everything is valid
  setEnrollmentSubmitted(true)

  setEnrollName('')
  setEnrollEmail('')
  setEnrollPhone('')
}

  return (
    <>
      <Navbar />

      {/* ==================== HERO ==================== */}

      <section className="hero" id="home">
        <div className="hero-content">

          <span className="hero-badge">
            Welcome to Gulistan Learning Center
          </span>

          <h1>
            Learn English.
            <br />
            Build Your Future.
          </h1>

          <p>
            Improve your English and computer skills
            with simple, practical, and effective lessons.
          </p>

          <div className="hero-buttons">

            <a
              href="#courses"
              className="hero-btn primary-btn"
            >
              Start Learning
            </a>

            <a
              href="#about"
              className="hero-btn secondary-btn"
            >
              Learn More
            </a>

          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
            alt="Students learning"
          />
        </div>
      </section>


      {/* ==================== COURSES ==================== */}

      <section className="courses" id="courses">

        <h2>Our Courses</h2>

        <div className="course-container">

          {courses.map((course) => (
            <CourseCard
              key={course.title}
              course={course}
              onSelect={setSelectedCourse}
              onEnroll={setEnrolledCourse}
            />
          ))}

        </div>

      </section>


      {/* ==================== ENROLLMENT MODAL ==================== */}

      {enrolledCourse && (

        <div
          className="modal-overlay"
          onClick={() => {
            setEnrolledCourse(null)
            setEnrollmentSubmitted(false)
          }}
        >

          <div
            className="course-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-button"
              onClick={() => {
                setEnrolledCourse(null)
                setEnrollmentSubmitted(false)
              }}
            >
              ×
            </button>

            {!enrollmentSubmitted ? (

              <>
                <h3>
                  Enroll in {enrolledCourse.title}
                </h3>

                <form onSubmit={handleEnrollment}>

                  <input
                    type="text"
                    placeholder="Full Name"
                    value={enrollName}
                    onChange={(e) =>
                      setEnrollName(e.target.value)
                    }
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    value={enrollEmail}
                    onChange={(e) =>
                      setEnrollEmail(e.target.value)
                    }
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={enrollPhone}
                    onChange={(e) =>
                      setEnrollPhone(e.target.value)
                    }
                  />

                  <button
                    type="submit"
                    className="modal-button"
                  >
                    Submit Enrollment
                  </button>

                </form>
              </>

            ) : (

              <div className="success-message">

                <h3>
                  Enrollment Successful!
                </h3>

                <p>
                  You have successfully enrolled in{' '}
                  <strong>
                    {enrolledCourse.title}
                  </strong>.
                </p>

                <button
                  className="modal-button"
                  onClick={() => {
                    setEnrollmentSubmitted(false)
                    setEnrolledCourse(null)
                  }}
                >
                  Done
                </button>

              </div>

            )}

          </div>

        </div>
      )}


      {/* ==================== COURSE MODAL ==================== */}

      {selectedCourse && (

        <div
          className="modal-overlay"
          onClick={() => setSelectedCourse(null)}
        >

          <div
            className="course-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-button"
              onClick={() => setSelectedCourse(null)}
            >
              ×
            </button>

            <div className="course-icon">
              {selectedCourse.icon}
            </div>

            <h3>
              {selectedCourse.title}
            </h3>

            <p>
              {selectedCourse.description}
            </p>

            <p>
              <strong>Level:</strong>{' '}
              {selectedCourse.level}
            </p>

            <p>
              <strong>Duration:</strong>{' '}
              {selectedCourse.duration}
            </p>

            <button
              className="modal-button"
              onClick={() => setSelectedCourse(null)}
            >
              Close
            </button>

          </div>

        </div>
      )}


      {/* ==================== ABOUT ==================== */}

      <section className="about" id="about">

        <div className="about-content">

          <div className="about-text">

            <span className="section-badge">
              About Us
            </span>

            <h2>
              About Gulistan Learning Center
            </h2>

            <p>
              Gulistan Learning Center is dedicated
              to helping students develop their English
              and computer skills.
            </p>

            <p>
              Our goal is to provide simple, practical,
              and effective education for everyone.
            </p>

          </div>

          <div className="about-features">

            <div className="feature-card">

              <div className="feature-icon">
                👨‍🏫
              </div>

              <h3>
                Experienced Teachers
              </h3>

              <p>
                Learn from dedicated and
                supportive teachers.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                📚
              </div>

              <h3>
                Practical Learning
              </h3>

              <p>
                Focus on useful skills for
                real-life situations.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                🎯
              </div>

              <h3>
                Student Support
              </h3>

              <p>
                We help students stay focused
                and reach their goals.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================== STATISTICS ==================== */}

      <section className="stats">

        <div className="stats-container">

          <div className="stat-card">
            <h3>500+</h3>
            <p>Students</p>
          </div>

          <div className="stat-card">
            <h3>10+</h3>
            <p>Courses</p>
          </div>

          <div className="stat-card">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h3>95%</h3>
            <p>Student Satisfaction</p>
          </div>

        </div>

      </section>


      {/* ==================== CONTACT ==================== */}

      <section className="contact" id="contact">

        <div className="contact-content">

          <h2>
            Contact Us
          </h2>

          <p>
            Have a question? Get in touch
            with Gulistan Learning Center.
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
            />

            <button type="submit">
              Send Message
            </button>

          </form>

          {submitted && (
            <p className="success-message">
              Your message has been sent successfully!
            </p>
          )}

        </div>

      </section>


      {/* ==================== FOOTER ==================== */}

      <footer>

        <p>
          © 2026 Gulistan Learning Center.
          All rights reserved.
        </p>

      </footer>

    </>
  )
}

export default App