import React, { useEffect, useState } from "react";
import axios from "axios";

const CourseList = ({ userId }) => {
  const [courses, setCourses] = useState([]);
  console.log(userId);
  useEffect(() => {
    if (userId != null && userId !== "") {
      axios
        .get(`https://mark-be.onrender.com/courses?user_id=${userId}`)
        .then((response) => {
          setCourses(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [userId]);

  const handlePass = (userId, courseId) => {
    axios
      .post("https://mark-be.onrender.com/mark_course_passed", {
        user_id: userId,
        course_id: courseId,
      })
      .then((response) => {
        console.log(response.data.message);
        window.location.reload(false);
      })
      .catch(
        (error) => {
          console.error("Error arking a course passed.");
        },
        [userId]
      );
  };

  return (
    <div className="courses-container">
      <h2>Courses</h2>
      <sec>
        <div className="course">
          <h3 className="course-name">Name</h3>
          <h3 className="course-ects">ECTS</h3>
          <h3 className="course-status">STATUS</h3>
          <h3 className="course-action"></h3>
        </div>
        {courses.map((course) =>
          course.ects !== 0 ? (
            <div className="course" key={course.id}>
              <div className="course-name">{course.name}</div>
              <div className="course-ects">{course.ects}</div>
              <div className="course-status">
                {course.passed ? (
                  <span className="status-text">Done</span>
                ) : (
                  <span className="status-text">-</span>
                )}
              </div>
              <div className="course-action">
                {course.passed ? (
                  <button className="button-actual-clicked"></button>
                ) : (
                  <button
                    onClick={() => handlePass(userId, course.id)}
                    className="button-actual"
                  >
                    Pass
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div key={course.id}>{course.name}</div>
          )
        )}
      </sec>
    </div>
  );
};
export default CourseList;
