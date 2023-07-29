import './titleSectionComponent.css';


const TitleSectionComponent = ({direction,source}) => {
  return (
    <div className='section-content' style={{flexDirection:direction}}>
        <div className='section-left' data-aos="fade-right"  data-aos-duration="800">
        <h2 className="header-title">Your title here</h2>
        <p className="header-text" style={{width:"75%"}}>Lorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and 
            visual mockups
        </p>
        </div>

        <div className='section-right' data-aos="fade-left"  data-aos-duration="800">
            <img src={source} alt='section_image' />
        </div>
      
    </div>
  )
}

export default TitleSectionComponent
