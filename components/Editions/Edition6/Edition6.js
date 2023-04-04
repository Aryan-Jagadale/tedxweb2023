import React from "react";
import styles from "../../../styles/edition6.module.scss";

const Edition6 = (dark) => {
  const pageStyle = {
    backgroundColor: dark ? "black" : "white",
  };
  return (
    <div className={styles.container6}>
      <div className={styles.imgBackground}>
        <img
          className={styles.imgUp}
          src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651488361/Website%20Content/Endevaour/Edition6/edition_6_c3iltc.png"
          alt="background"
        />
        <div className={styles.heading}>
          <h2>Reemergence | 2021</h2>
        </div>
      </div>

      <p>
        Shift the perspective. Reemerge in a better, stronger, and altogether
        different way, keeping in mind the roots that helped us get to where we
        are today. Reemergence is about celebrating the human spirit that rises
        through darkness and disseminates hope.
      </p>
      <p>
        The celerity with which the modern world is moving and evolving is
        unprecedented and change seems to be the sole option. And accepting
        change is accepting a new beginning. There's a desire to rise and start
        again with a new perspective, with a stronger will and an arsenal of
        ideas. That's how we leave behind these prevalent dark times. Because
        hope gives way to change.
      </p>

      <div className={styles.speakersClass}>
        <h2>Speakers and Performers:</h2>
        <img
          src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651520019/Website%20Content/Endevaour/Edition6/underline_jmvs1l.png"
          alt="underline"
        />

        <div className={styles.edition6Wrapper}>
          <div className={styles.edition6WrapperLeft}>
            <div className="performers">
              <h3>Jishnu Chatterjee</h3>
              <p>Animator. Motion Designer. Visual Artist.</p>
            </div>

            <div className="performers">
              <h3>Vivek Eluri</h3>
              <p>Healthcare Consultant. Tech Analyst. Leader.</p>
            </div>

            <div className="performers">
              <h3>Mark Hannant</h3>
              <p>Adventurer. Author. Entrepreneur.</p>
            </div>

            <div className="performers">
              <h3>Amira Gill</h3>
              <p>Music Therapist. Songwriter. Vocalist.</p>
            </div>

            <div className="performers">
              <h3>Prabhtoj Singh</h3>
              <p>Music Producer. Singer. Songwriter.</p>
            </div>

            <div className="performers">
              <h3>Debanshu Roy</h3>
              <p>Health Economist. Health-Tech Consultant. Ideator.</p>
            </div>

            <div className="performers">
              <h3>Avinash Ramanathan</h3>
              <p>Venture Capitalist. Strategist. Associate.</p>
            </div>
          </div>
        </div>

        <div className="performers_title">
          <h2>Team</h2>
          <img
            src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651520334/Website%20Content/Endevaour/Edition6/small_line_go5d3y.png"
            alt="underline"
          />
        </div>

        <div className="performers-flex">
          <div className="performers-flex-left">
            <h3>Organiser</h3>
            <p>Vikrant Bhalerao</p>
          </div>
          <div className="performers-flex-right">
            <h3>Co-Organiser</h3>
            <p>Shreya Singh</p>
          </div>
        </div>
      </div>

      <div className="titleee">
        <h2>The stage where it unfolded!</h2>
      </div>

      <div className="edition6-img">
        <img
          src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651516314/Website%20Content/Endevaour/Edition6/51372637914_9b27346304_o_ycwwtr.jpg"
          alt="imgggg"
        />
      </div>
    </div>
  );
};

export default Edition6;