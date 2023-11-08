import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import img1 from  "../../../assets/home/01.jpg";
import img2 from  "../../../assets/home/02.jpg";
import img3 from  "../../../assets/home/03.png";
import img4 from  "../../../assets/home/04.jpg";
import img5 from  "../../../assets/home/05.png";
import img6 from  "../../../assets/home/06.png";

    const Banner = () => {
        return (
            <div className="App">
              <AwesomeSlider animation="cubeAnimation">
                <div className="bg-green-100">
                    <img src={img1} alt=""/></div>
                <div className="bg-green-100">
                    <img src={img2} alt=""  /></div>
                <div className="bg-green-100">
                    <img src={img3} alt=""  /></div>
                <div className="bg-green-100">
                    <img src={img4} alt=""  /></div>
                <div className="bg-green-100">
                    <img src={img5} alt=""  /></div>
                <div className="bg-green-100">
                    <img src={img6} alt=""  /></div>
              </AwesomeSlider>
            </div>
          );
    }
    export default Banner;