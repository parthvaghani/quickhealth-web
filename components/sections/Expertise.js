import style from "../../src/styles/module/common.module.css";
import Image from 'next/image'  

const Expertise = () => {
  const sectionHeader = {
    title: "Our Services",
    paragraph:
      "We are a highly technological enthusiastic textile partner from Surat India Who mainly focuses on following categories to meet our client's expectations And We provide the best product at a good price point across the globe",
  };

  return (
    <div className="service-banner-one">
      <div className="md:flex pt-16">
        <div className="md:w-full">
          <div className="main-title1 relative" data-aos="fade-up"
            data-aos-duration="110" data-aos-once="true">
            <h1 className="text-[35px] pl-3 h1-text-color tracking-normal font-bold text-center">
              {/* <i class="brush-stroke-shap"></i> */}
              <span style={{ color: "#0c2e60" }} >{sectionHeader.title}</span>
            </h1>
          </div>
        </div>
      </div>

      <section className="pt-16 mb-5">
        <div style={{ width: "80%", margin: "auto" }}>
          <div className={`${style.service_listing_grid}`} data-aos="fade-up" data-aos-duration="100" data-aos-once="true">
            <div className={`${style.service_listing_grid_item}`} data-aos="fade-up" data-wow-delay="0.4s" data-aos-once="true">
              <div className="icon-alignment">
                <Image src="https://firebasestorage.googleapis.com/v0/b/ripplestacks.appspot.com/o/icons%2Fweb.png?alt=media" alt="media" width={64} height={64} />
              </div>
              <div className={`${style.service_text_align}`}>
                <h5 className="cursor-pointer font-size-20 tracking-normal font-medium text-black">
                  Web Design & Development
                </h5>
                <p style={{color:"black"}}>
                  We offer support in creating an outstanding website that is
                  optimized for both tablet and mobile devices, ensuring that
                  your brand is presented in its best light across all
                  platforms.
                </p>
              </div>
            </div>
            <div className={`${style.service_listing_grid_item}`} data-aos="fade-up" data-wow-delay="0.4s" data-aos-once="true">
              <div className="icon-alignment">
                <Image src="https://firebasestorage.googleapis.com/v0/b/ripplestacks.appspot.com/o/icons%2Fmobile.png?alt=media" alt="media" width={64} height={64}/>
              </div>
              <div className={`${style.service_text_align}`}>
                <h5 className="cursor-pointer font-size-20 tracking-normal font-medium text-black">
                  Mobile Applications
                </h5>
                <p style={{color:"black"}}>
                  Our expertise lies in creating user-friendly and interactive
                  mobile applications for Android, iOS, and cross-platform
                  devices that are highly appealing to businesses, consumers,
                  and enterprises.
                </p>
              </div>
            </div>
            <div className={`${style.service_listing_grid_item}`} data-aos="fade-up" data-wow-delay="0.4s" data-aos-once="true">
              <div className="icon-alignment">
                <Image src="https://firebasestorage.googleapis.com/v0/b/ripplestacks.appspot.com/o/icons%2Fui.png?alt=media" alt="media" width={64} height={64}/>
              </div>
              <div className={`${style.service_text_align}`}>
                <h5 className="cursor-pointer font-size-20 tracking-normal font-medium text-black">
                  UX/UI
                </h5>
                <p style={{color:"black"}}>
                  Our team delivers stunning user experiences, the
                  implementation of information architecture, the creation of a
                  visually appealing identity, and the design of intuitive
                  UI/UX.{" "}
                </p>
              </div>
            </div>
            <div className={`${style.service_listing_grid_item}`} data-aos="fade-up" data-wow-delay="0.4s" data-aos-once="true">
              <div className="icon-alignment">
                <Image src="https://firebasestorage.googleapis.com/v0/b/ripplestacks.appspot.com/o/icons%2Fcyber.png?alt=media" alt="media" width={64} height={64}/>
              </div>
              <div className={`${style.service_text_align}`}>
                <h5 className="cursor-pointer font-size-20 tracking-normal font-medium text-black">
                  Cyber Security
                </h5>
                <p style={{color:"black"}}>
                  Boost your online protection with our expert cyber security
                  and penetration testing services offered by our company. Trust
                  us to safeguard your digital assets.
                </p>
              </div>
            </div>
            <div className={`${style.service_listing_grid_item}`} data-aos="fade-up" data-wow-delay="0.4s" data-aos-once="true">
              <div className="icon-alignment">
                <Image src="https://firebasestorage.googleapis.com/v0/b/ripplestacks.appspot.com/o/icons%2Fqa.png?alt=media" alt="media" width={64} height={64}/>
              </div>
              <div className={`${style.service_text_align}`}>
                <h5 className="cursor-pointer font-size-20 tracking-normal font-medium text-black">
                  QA & Testing
                </h5>
                <p style={{color:"black"}}>
                  Quality Assurance and Testing services ensure software
                  products meet standards and requirements through thorough
                  testing and evaluation.
                </p>
              </div>
            </div>
            <div className={`${style.service_listing_grid_item}`} data-aos="fade-up" data-wow-delay="0.4s" data-aos-once="true">
              <div className="icon-alignment">
                <Image src="https://firebasestorage.googleapis.com/v0/b/ripplestacks.appspot.com/o/icons%2Fvr.png?alt=media" alt="media" width={64} height={64}/>
              </div>
              <div className={`${style.service_text_align}`}>
                <h5 className="cursor-pointer font-size-20 tracking-normal font-medium text-black">
                  AR/VR
                </h5>
                <p style={{color:"black"}}>
                  We provides an immersive experience that bridges the gap
                  between the digital and physical world and uses cutting-edge
                  technology to create interactive environments for various
                  industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
