import style from  "../../src/styles/module/common.module.css";
import Image from 'next/image'

const Webtechnologies = () => {
  const technologies = ([
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ripplestacks.appspot.com/o/webtech%2Fnext.png?alt=media",
      name: "NextJs",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ripplestacks.appspot.com/o/webtech%2Frect.png?alt=media",
      name: "ReactJs",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ripplestacks.appspot.com/o/webtech%2FvueJs.png?alt=media",
      name: "VueJs",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ripplestacks.appspot.com/o/webtech%2Frect.png?alt=media",
      name: "ReactNative",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ripplestacks.appspot.com/o/webtech%2Faws1.png?alt=media",
      name: "AWS",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ripplestacks.appspot.com/o/webtech%2FnodeJs.png?alt=media",
      name: "NodeJs",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ripplestacks.appspot.com/o/webtech%2Fnest.png?alt=media",
      name: "NestJs",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/ripplestacks.appspot.com/o/webtech%2Funity.png?alt=media",
      name: "Unity",
    },
    {
      url: "https://cdnlogo.com/logos/m/30/mongodb-icon.svg",
      name: "mongoDB",
    },
  ]);

  const sectionHeader = {
    title: "Technologies We Work With",
    paragraph:
      "Our engineers at RIPPLESTACKS utilize cutting-edge web technologies for front-end stacks.",
  };

  return (
    <div className={`${style.card_container}`} data-aos="fade-up" data-aos-duration="100" data-aos-once="true" data-aos-anchor=".other-element" data-aos-offset="300">

      <div className="md:flex" data-aos="zoom-in" data-aos-duration="100" data-aos-once="true">
        <div className="md:w-full">
          <div className="main-title1">
            <h1 className={` ${style.black_colour_text} ${style.baloo_paaji} font-bold tracking-normal text-center`} 
            style={{fontSize:"38px"}}>
              {/* <i class="brush-stroke-shap"></i> */}
              {sectionHeader.title}
              &nbsp;
            </h1>
          </div>
          {/* <p className="text-[18px] ${style.black_colour_text} font-normal text-center tracking-normal mt-5">
            {sectionHeader.paragraph}
          </p> */}
        </div>
      </div>
      <div
        className={`lg:flex md:flex md:flex-wrap lg:flex-wrap pt-16 ${style.baloo_paaji}`} 
        style={{ width: "90%" , margin: "auto" }}
        data-aos="zoom-in" data-aos-duration="100" data-aos-once="true"
      >
        {technologies?.map((item, index) => {
          return (
            <div className="lg:w-1/4 md:w-1/4 pl-3 pr-3 mb-5" key={index}  data-aos="fade-right"  data-aos-duration="100" data-aos-once="true" data-aos-offset="200">
              <div className={`${style.technology_box}`} data-aos="fade-left"  data-aos-duration="100" data-aos-once="true">
                <div  data-aos="fade-left"  data-aos-duration="100" data-aos-once="true">
                  <Image alt="icon" src={item.url} width={70} height={70} data-aos="zoom-in" data-aos-anchor=".other-element" data-aos-duration="1000" data-aos-once="true"/>
                </div>
                <p style={{color:"black"}} className={` ${style.black_colour_text} font-medium trakcing-normal mt-3 `} data-aos-anchor=".other-element" data-aos="fade-right"  data-aos-duration="100" data-aos-once="true" data-aos-offset="200" >
                  {item.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Webtechnologies;
