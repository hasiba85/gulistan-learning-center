function CourseCard({ course, onSelect, onEnroll }) {
  return (
    <div className="course-card">

      <div className="course-icon">
        {course.icon}
      </div>

      <h3>
        {course.title}
      </h3>

      <span className="course-level">
        {course.level}
      </span>

      <p>
        {course.description}
      </p>

      <div className="course-duration">

        <button onClick={() => onSelect(course)}>
          Learn More
        </button>

        <button onClick={() => onEnroll(course)}>
          Enroll Now
        </button>

      </div>

    </div>
  )
}

export default CourseCard