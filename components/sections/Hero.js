import 'aos'
import style from "../../src/styles/module/common.module.css";
import Image from 'next/image'
import yearsImg from "../../src/assets/images/years.png"
import developmentImg from "../../src/assets/images/development.png"
import collaborationImg from "../../src/assets/images/collaboration.png"
import projectsImg from "../../src/assets/images/projects.png"

const Hero = () => {
  return (    
    <>
      <section className="">
        <div className={`${style.card_container}`} data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
          <div className={`${style.sumup_grid}`}>
            <div className={`${style.sumup_grid_items}`}>
              <Image alt='/' src={yearsImg} width={94} height={94}/>
              <p style={{ color: "black" }}>3+ Years in Industry</p>
            </div>
            <div className={`${style.sumup_grid_items}`}>
              <div className="icon-alignment">
                <Image alt='/' src={developmentImg} width={94} height={94}/>
                <p style={{ color: "black" }}>2x Growth Rate</p>
              </div>
            </div>
            <div className={`${style.sumup_grid_items}`}>
              <Image alt='/' src={collaborationImg} width={94} height={94}/>
              <p style={{ color: "black" }}>10+ Expert Professionals</p>
            </div>
            <div className={`${style.sumup_grid_items}`}>
              <Image alt='/' src={projectsImg} width={94} height={94}/>
              <p style={{ color: "black" }}>50+ Projects Delivered</p>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Hero;
