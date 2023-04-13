import "./schedule.css";

const Schedule = () => {
  return (
    <div className="schedule_container">
      <div className="pie_title">
        <p className="title_name">Today's schedule</p>
        <p className="seeTag">See All &#62;</p>
      </div>
      <div>
        <div className="value0">
          <p className="textInfo">Meeting with suppliers from Kuta Bali</p>
          <p className="details">14.00-15.00</p>
          <p className="details">at Sunset Road, Kuta, Bali </p>
        </div>
        <div className="value1">
          <p className="textInfo">Check operation at Giga Factory 1</p>
          <p className="details">18.00-20.00</p>
          <p className="details">at Central Jakarta </p>
        </div>
      </div>
    </div>
  );
};
export default Schedule;
