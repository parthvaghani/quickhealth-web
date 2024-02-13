import style from "../../src/styles/module/common.module.css";
import Image from 'next/image'

const FeaturesSplit = () => {
  return (
    <section className="pt-16">
      <div
        style={{
          maxWidth: "1180px",
          margin: "auto",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <div
          className={`${style.hiring_grid}`}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <div className={`${style.hiring_grid_items} ${style.baloo_paaji}`}>
            <h1 className={`${style.black_colour_text} tracking-normal font-bold`} style={{lineHeight:"50px"}}>
              Empower Your Business with Cutting-Edge Technology Solutions
            </h1>
            {/* <span> No matter the Technology or Services</span> */}
            <p>
              Technology is an essential component of any modern business, and
              staying ahead of the curve is crucial to success. At RIPPLESTACKS,
              we offer a comprehensive range of innovative technology solutions
              to help your business thrive
            </p>
            <p>
              Our team of experts has extensive experience in a mobile app
              development and web development related technologies. We work
              closely with our clients to understand their unique challenges and
              goals, and develop customized solutions that drive growth, improve
              efficiency, and enhance the customer experience.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/ripplestacks.appspot.com/o/services%2Fui.jpg?alt=media"
              alt="Features split 01"
              width={528}
              height={396}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSplit;
