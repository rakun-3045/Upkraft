import React from 'react';
import '../styles/UpcomingLessons.css';

const UpcomingLessons = () => {
  const lessons = [
    {
      date: '21 July',
      time: '2:00 - 3:00 Pm',
      course: 'Introduction to Piano',
      student: 'Eunice Sobel & Arnold Hayes'
    },
    {
      date: '22 July',
      time: '4:00 - 5:00 Pm',
      course: 'Finger Warmups',
      student: 'Eunice Sobel & Arnold Hayes'
    },
    {
      date: '23 July',
      time: '3:00 - 4:00 Pm',
      course: 'Simple Chords',
      student: 'Eunice Sobel & Arnold Hayes'
    },
    {
      date: '24 July',
      time: '5:00 - 6:00 Pm',
      course: 'Rhythm Basics',
      student: 'Eunice Sobel & Arnold Hayes'
    },
    {
      date: '25 July',
      time: '2:00 - 3:00 Pm',
      course: 'Simple Melodies',
      student: 'Eunice Sobel & Arnold Hayes'
    },
    {
      date: '26 July',
      time: '7:00 - 8:00 Pm',
      course: 'Treble & Bass Clef',
      student: 'Eunice Sobel & Arnold Hayes'
    },
    {
      date: '24 July',
      time: '5:00 - 6:00 Pm',
      course: 'Rhythm Basics',
      student: 'Eunice Sobel & Arnold Hayes'
    },
    {
      date: '22 July',
      time: '4:00 - 5:00 Pm',
      course: 'Finger Warmups',
      student: 'Eunice Sobel & Arnold Hayes'
    }
  ];

  const handleViewAll = () => {
    console.log('Viewing all lessons...');
  };

  return (
    <div className="upcoming-lessons">
      <div className="lessons-header">
        <h3>Upcoming Lessons</h3>
        <button className="view-all-btn" onClick={handleViewAll}>
          View All
        </button>
      </div>
      
      <div className="lessons-table">
        <div className="table-header">
          <div className="header-cell">Date</div>
          <div className="header-cell">Time</div>
          <div className="header-cell">Course</div>
          <div className="header-cell">Student Name</div>
        </div>
        
        <div className="table-body">
          {lessons.map((lesson, index) => (
            <div key={index} className="table-row">
              <div className="table-cell">{lesson.date}</div>
              <div className="table-cell">{lesson.time}</div>
              <div className="table-cell">{lesson.course}</div>
              <div className="table-cell">{lesson.student}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingLessons;
