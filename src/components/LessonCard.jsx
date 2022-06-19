import "./LessonCard.css";

function LessonCard({ lesson }) {
  return (
    <div className="card">
      <img className="lesson-img" src="card-img.png" alt="" />
      <div className="card-content">
        <div>
          <div className="card-title">
            <h2>{lesson.title}</h2>
            <span className="date">{lesson.date}</span>
          </div>
          <div className="description">{lesson.description}</div>
        </div>
        <div className="category-container">
          {lesson.category.map(function (category) {
            return (
              <small className="topic" key={category}>
                {category}
              </small>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LessonCard;
