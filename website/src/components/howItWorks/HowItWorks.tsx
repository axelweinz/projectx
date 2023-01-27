import "./HowItWorks.css";
import pen from "../../assets/pen.png";
import printer from "../../assets/printer.png";
import truck from "../../assets/truck.png";

const HowItWorks = () => {
  return (
    <div className="howItWorks">
      <div className="howItWorksRow howItWorksImgRow">
        <img className="howItWorksImg" src={pen} alt="Pen" />
        <img className="howItWorksImg" src={printer} alt="Printer" />
        <img className="howItWorksImg" src={truck} alt="Truck" />
      </div>
      <div className="howItWorksRow">
        <h3 className="howItWorksText">
          Efter önskad poster är genererad, klicka köp för att gå vidare med
          betalning. Postern kommer i önskad storlek upp till XX.
        </h3>
        <h3 className="howItWorksText">
          Postern trycks med högkvalitativt bläck på FSC-certifierat 200g/m2
          premiumpapper med en matt slät ytfinish.
        </h3>
        <h3 className="howItWorksText">
          När postern är tryckt skickas den till ditt närmaste postombud. Normal
          leveranstid är XX dagar.
        </h3>
      </div>
    </div>
  );
};

export default HowItWorks;
