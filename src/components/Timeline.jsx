import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  
  const WorkIcon = () => <></>;
  
  export default function App() {
    return (
      <div className="App">
       
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2025"
            iconStyle={{
              background: "rgb(21,21,21)",
              color: "rgba(255, 0, 0, 0.5)",
            }}
            contentStyle={{
              background: "rgba(255, 255, 255, 0)", // Fully transparent background
              border: "2px solid white", // White border
              color: "white", // White text
            }}
            contentArrowStyle={{ borderRight: "7px solid white" }} // White arrow
          >
            <h3 className="vertical-timeline-element-title">
              Indian Institute of Information Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Kalyani</h4>
            <p>BTech (Computer Science & Engineering)</p>
          </VerticalTimelineElement>
  
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 - 2020"
            iconStyle={{
              background: "rgb(21,21,21)",
              color: "rgba(255, 0, 0, 0.5)",
            }}
            contentStyle={{
              background: "rgba(255, 255, 255, 0)", // Fully transparent background
              border: "2px solid white", // White border
              color: "white", // White text
            }}
            contentArrowStyle={{ borderRight: "7px solid white" }} // White arrow
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">SKP Vidya Vihar</h3>
            <h4 className="vertical-timeline-element-subtitle">Bhagalpur</h4>
            <p>Junior College</p>
          </VerticalTimelineElement>
  
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2008 - 2018"
            iconStyle={{
              background: "rgb(21,21,21)",
              color: "rgba(255, 0, 0, 0.5)",
            }}
            contentStyle={{
              background: "rgba(255, 255, 255, 0)", // Fully transparent background
              border: "2px solid white", // White border
              color: "white", // White text
            }}
            contentArrowStyle={{ borderRight: "7px solid white" }} // White arrow
          >
            <h3 className="vertical-timeline-element-title">
              Holy Family School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Bhagalpur</h4>
            <p>Primary & Secondary</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
  