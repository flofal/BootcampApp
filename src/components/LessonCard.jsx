import "./LessonCard.css";

function LessonCard() {
  return (
    <div className="card">
      <img className="lesson-img" src="card-img.png" alt="" />
      <div className="card-content">
        <div>
          <div className="card-title">
            <h2>Title</h2>
            <span className="date">Date</span>
          </div>
          <div className="description">Description jhsdjhsdkj hksdh gjmsdhg jdhgj dgj gdjg djs hsdjkhf sdk hfjd hjksdh jksh sdh s</div>
        </div>
        <small className="topic">Topic</small>
      </div>
    </div>
  );
}

export default LessonCard;
