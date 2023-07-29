import TitleSectionComponent from "../../components/title_section_component/TitleSectionComponent";
import Button from "../../components/buttons/Button";
import source1 from '../../assets/images/undraw_New_Year_2023_pfnc.png';
import source2 from '../../assets/images/undraw_writer_q06d.png';

import "./titleSection.css";

const TitleSection = () => {
  return (
    <div className="header-section container">
        <div  data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
        <h1 className="header-title">Your title here</h1>
        <p className="header-text">Lorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and 
            visual mockups
        </p>
        </div>

        <TitleSectionComponent source={source1}/>
        <TitleSectionComponent direction="row-reverse" source={source2}/>
        <TitleSectionComponent source={source1}/>

        <div className="get-started" data-aos="fade-up" data-aos-duration="800" >
          <div className="get-statred-text">
          <h3>Lorem ipsum is placeholder text commonly used in the graphic.</h3>
          <span className="get-statred-trial">Start Your Free Trial.</span>
          </div>
          <Button title={"Get Started"}  />

        </div>

    
    </div>
  )
}

export default TitleSection
