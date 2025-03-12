import AboutImage1 from "../assets/AboutPic1.png"
import AboutImage2 from "../assets/AboutPic2.png"

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="flex flex-col items-center justify-center">
        <img src={AboutImage1} alt="" />
        <img src={AboutImage2} alt="" />
      </div>
    </div>
  );
};

export default About;
