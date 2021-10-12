import "./styles.css";
import React, { useState } from "react";
// import ReactDOM from "react-dom";

const buttons = ["Normal", "Sports", "Stunts"];

const car = {
  Normal: {
    variants: ["Hero Honda", " Pulser", "Honda Shine"],
    rating: ["5*", "4.98*", "4.75*", "4.9*"],
    description: [
      " Hero Honda is India's leading two wheeler company with over 100 million two wheelers sold till date. Find out more about what makes Hero Honda.",
      " The Bajaj Pulsar is an iconic Indian motorcycle. Since its inception, the Pulsar created a new segment called 'Sports Biking' in Indian motorcycling.",
      " Honda presents the all new Shine BS-VI with amazing eSP Technology and eco-friendly BS-VI Engine that keeps emission in check. And its 5-speed Transmission"
    ]
  },
  Sports: {
    variants: ["KTM Duke", "Suzuki Gixxer", "Yamaha YZF R15 V3 "],
    rating: ["4.8*", "4*", "4.9*"],
    description: [
      " The KTM Duke is a brand of bikes made by KTM two wheeler manufacturer in India. There are 4 Duke models on offer with price starting from Rs. 1,70,434 (.",
      "The Suzuki Gixxer (GSX-150) is a 154.9 cc (9.45 cu in) naked motorcycle from Suzuki. The bike was launched in September 2014.",
      "About YZF R15 V4. Yamaha YZF R15 V4 is a sports bike available at a starting price of Rs. 1,68,667 in India.."
    ]
  },
  Stunts: {
    variants: ["Harley-Davidson", "BMW M 1000 RR", " Ecosse ES1 Spirit"],
    rating: ["4.1*", "4.5*", "4.1*"],
    description: [
      "Harley-Davidson bikes price starts at Rs. 10.11 Lakh for Iron 883 and goes upto Rs. 34.99 Lakh for Road Glide Special..",
      "The BMW M 1000 RR · Pure will to win. The assembly of the M RR has been developed in sports racing and perfected for the road. · More pressure: the M Winglets..",
      "The Ecosse Spirit is all about low weight, low drag and superb handling. The unique frameless chassis design bolts on the fairing, fuel tank, seat and suspension to the engine.s."
    ]
  }
  // miniSuv: {
  //   variants: ["Tata Nexon", "hyundai Venue", "Mahindra xuv300", "Tata Punch"],
  //   rating: ["5*", "4.5*", "4.5*", "4.5*"],
  //   description: [
  //     "The Nexon is Tata’s swanky sub-four-metre compact SUV.",
  //     "The Tata Nexon holds the distinction of being the first Indian car to be rated 5 stars for safety by Global NCAP. 2020's update brings in revised styling and BS6-spec engines.",
  //     "The thrill of award-winning performance. The confidence of India's Safest vehicle. Navigate through the city traffic effortlessly with the AutoSHIFT. Now in Petrol & Diesel. Smart Steering System. Front Parking Sensors. 1.2 L Turbo Petrol Engine. AutoShift (AMT) All 4 Disc Brakes.",
  //     "Designed for the next generation users, the Tata Punch is a no-compromise SUV, offering an exciting mix of tough utility with sporting dynamics."
  //   ]
  // }
};
export default function App() {
  const [bikesTypes, setbikesTypes] = useState("Normal");
  return (
    <div className="Apps">
      <div className="topsItems">
        <span className="bikes">Types of Bikes</span>
        <p>
          <span className="first">SOME BIKES </span>
          <span className="middle"> are used in </span>{" "}
          <span className="first">INDIA</span>
        </p>
      </div>
      <hr></hr>

      <main>
        <div className="firstColm">
          {buttons.map((item, index) => {
            return (
              <button
                className="buttons"
                key={index}
                onClick={() => setbikesTypes(item)}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="listArrangement">
          <ul>
            {car[bikesTypes].variants.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <span> {car[bikesTypes].rating[index]} </span>
                  <hr></hr>
                  <p> {car[bikesTypes].description[index]}</p>
                  <hr></hr>
                </li>
              );
            })}
          </ul>
          <small>
            Note: *ratings are given under overall <strong>5.</strong>
          </small>
        </div>
      </main>
    </div>
  );
}
