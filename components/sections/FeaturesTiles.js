import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import Brush from "@mui/icons-material/Brush";

import  style from "../../src/styles/module/common.module.css";


const FeaturesTiles = () => {
  const sectionHeader = {
    title: "How We Work",
    paragraph:
      "We believe in divide and utilize rules this way we break down all the phases in levels and start executing the process.",
  };

  return (
    <div className={`${style.card_container}`} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <div className="md:flex pt-16" >
        <div className="md:w-full">
          <div className="main-title relative">
            <h1 className="text-center pl-3 h1-text-color tracking-normal font-bold">
              {/* <i class="brush-stroke-shap"></i> */}
              <span className={`${style.baloo_paaji}`} style={{ color: "#0c2e60", fontSize: "38px" }}>{sectionHeader.title}</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="pt-16" style={{ marginBottom: "50px" }}>
        <div className="lg:flex md:flex md:flex-wrap" >
          <div className="lg:w-1/3 md:w-1/2 pl-3 pr-3 t-mb-2" data-aos="zoom-in" data-aos-delay="100" data-aos-once="true">
            <div className={`${style.box_processing}  ${style.baloo_paaji} relative`}>
              <div className="icon-box1 flex items-center mobile-icon-justify">
                <div className="features-tiles-item-image">
                  <AssignmentOutlinedIcon
                    style={{
                      width: "35",
                      height: "35",
                      color: "white",
                      backgroundColor: "#FF851B",
                      margin: "10px",
                    }}
                  />
                </div>
                <div className="icon-after"></div>

              </div>
              <h1 className={`${style.black_colour_text} font-bold tracking-normal max-md:mt-3 m-center ${style.mt_12px}`}>
                Understanding Requirements
              </h1> 
              <p style={{color:"black"}} className={`text-[18px] tracking-normal font-normal text-black max-md:mt-3 m-center ${style.mt_12px}`}>
                This step helps us see things from the client&apos;s point of view
                and know what they want to achieve.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 pl-3 pr-3 t-mb-2" data-aos="zoom-in" data-aos-delay="100" data-aos-once="true">
            <div className={`${style.box_processing}  ${style.baloo_paaji} relative`}>
              <div className="icon-box1 flex items-center mobile-icon-justify">
                <div className="features-tiles-item-image">
                  <SettingsApplicationsOutlinedIcon
                    style={{
                      width: "35",
                      height: "35",
                      color: "white",
                      margin: "10px",
                    }}
                  />
                </div>
                <div className="icon-after"></div>
              </div>
              <h1 className={`${style.black_colour_text} font-bold tracking-normal max-md:mt-3 m-center ${style.mt_12px}`}>
                Creating Strategies
              </h1>
              <p style={{color:"black"}} className={`text-[18px] tracking-normal font-normal text-black max-md:mt-3 m-center ${style.mt_12px}`}>
                Strategies have been devised to ensure the completion and timely
                delivery of the project.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 pl-3 pr-3 t-mb-2" data-aos="zoom-in" data-aos-delay="100" data-aos-once="true">
            <div className={`${style.box_processing}  ${style.baloo_paaji} relative`}>
              <div className="icon-box1 flex items-center mobile-icon-justify">
                <div className="features-tiles-item-image">
                  <CloudDoneOutlinedIcon
                    style={{
                      width: "35",
                      height: "35",
                      color: "white",
                      margin: "10px",
                    }}
                  />
                </div>
                <div className="icon-after"></div>
              </div>
              <h1 className={`${style.black_colour_text} font-bold tracking-normal max-md:mt-3 m-center ${style.mt_12px}`}>
                Using Right Technology
              </h1>
              <p style={{color:"black"}} className={`text-[18px] tracking-normal font-normal text-black max-md:mt-3 m-center ${style.mt_12px}`}>
                Next, we select technology to use for software development which
                depends on the type of software.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 pl-3 pr-3 t-mb-2" data-aos="zoom-in" data-aos-delay="100" data-aos-once="true">
            <div className={`${style.box_processing}  ${style.baloo_paaji} relative`}>
              <div className="icon-box1 flex items-center mobile-icon-justify">
                <div className="features-tiles-item-image">
                  <TrendingUpIcon
                    style={{
                      width: "35",
                      height: "35",
                      color: "white",
                      margin: "10px",
                    }}
                  />
                </div>
                <div className="icon-after"></div>
              </div>
              <h1 className={`${style.black_colour_text} font-bold tracking-normal max-md:mt-3 m-center ${style.mt_12px}`}>
                Planning
              </h1>
              <p style={{color:"black"}} className={`text-[18px] tracking-normal font-normal text-black max-md:mt-3 m-center ${style.mt_12px}`}>
                Upon compilation of all relevant information, the project is
                broken down into manageable stages and a schedule is
                established.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 pl-3 pr-3 t-mb-2" data-aos="zoom-in" data-aos-delay="100" data-aos-once="true">
            <div className={`${style.box_processing}  ${style.baloo_paaji} relative`}>
              <div className="icon-box1 flex items-center mobile-icon-justify">
                <div className="features-tiles-item-image">
                  <Brush
                    style={{
                      width: "35",
                      height: "35",
                      color: "white",
                      margin: "10px",
                    }}
                  />
                </div>
                <div className="icon-after"></div>
              </div>
              <h1 className={`${style.black_colour_text} font-bold tracking-normal max-md:mt-3 m-center ${style.mt_12px}`}>
                Design
              </h1>
              <p style={{color:"black"}} className={`text-[18px] tracking-normal font-normal text-black max-md:mt-3 m-center ${style.mt_12px}`}>
                The appearance and user experience of the software are crafted
                by our UI and UX designers.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 pl-3 pr-3 t-mb-2" data-aos="zoom-in" data-aos-delay="100" data-aos-once="true">
            <div className={`${style.box_processing}  ${style.baloo_paaji} relative`}>
              <div className="icon-box1 flex items-center mobile-icon-justify">
                <div className="features-tiles-item-image">
                  <ComputerOutlinedIcon
                    style={{
                      width: "35",
                      height: "35",
                      color: "white",
                      margin: "10px",
                    }}
                  />
                </div>
                <div className="icon-after"></div>
              </div>
              <h1 className={`${style.black_colour_text} font-bold tracking-normal max-md:mt-3 m-center ${style.mt_12px}`}>
                Development
              </h1>
              <p style={{color:"black"}} className={`text-[18px] tracking-normal font-normal text-black max-md:mt-3 m-center ${style.mt_12px}`}>
                The development of the web app&apos;s, back-end and front-end are
                being worked on simultaneously by a team of developers.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 pl-3 pr-3 t-mb-2" data-aos="zoom-in" data-aos-delay="100" data-aos-once="true">
            <div className={`${style.box_processing}  ${style.baloo_paaji} relative`}>
              <div className="icon-box1 flex items-center mobile-icon-justify">
                <div className="features-tiles-item-image">
                  <FindReplaceIcon
                    style={{
                      width: "35",
                      height: "35",
                      color: "white",
                      margin: "10px",
                    }}
                  />
                </div>
                <div className="icon-after"></div>
              </div>
              <h1 className={`${style.black_colour_text} font-bold tracking-normal max-md:mt-3 m-center ${style.mt_12px}`}>
                Testing
              </h1>
              <p style={{color:"black"}} className={`text-[18px] tracking-normal font-normal text-black max-md:mt-3 m-center ${style.mt_12px}`}>
                Once the website is developed, it goes through a thorough
                testing process for bugs and errors.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 pl-3 pr-3 t-mb-2" data-aos="zoom-in" data-aos-delay="100" data-aos-once="true">
            <div className={`${style.box_processing}  ${style.baloo_paaji} relative`}>
              <div className="icon-box1 flex items-center mobile-icon-justify">
                <div className="features-tiles-item-image">
                  <FlightTakeoffOutlinedIcon
                    style={{
                      width: "35",
                      height: "35",
                      color: "white",
                      margin: "10px",
                    }}
                  />
                </div>
                <div className="icon-after"></div>
              </div>
              <h1 className={`${style.black_colour_text} font-bold tracking-normal max-md:mt-3 m-center ${style.mt_12px}`}>
                Launching Project
              </h1>
              <p style={{color:"black"}} className={`text-[18px] tracking-normal font-normal text-black max-md:mt-3 m-center ${style.mt_12px}`}>
                After successful testing, the website or application was
                launched for its users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTiles;
