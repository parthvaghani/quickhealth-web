import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import firestore from "../../utils/firebase";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Banner from "../../../components/sections/Banner";
import CallOutlined from "@mui/icons-material//CallOutlined";
import EmailOutlined from "@mui/icons-material//EmailOutlined";
import LocationOnOutlined from "@mui/icons-material//LocationOnOutlined";
import style from "../../styles/module/common.module.css";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Swal from "sweetalert2";
import Head from "next/head";

export default function Career() {
  const [Form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    number: "",
    service: "",
    experience: "",
    startTime: "",
    coverLetter: "",
    expectedSalary: "",
  });
  const [loading, setLoading] = useState(false);

    useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const sweetalert = (icon, title, message) => {
    return Swal.fire({
      icon: icon,
      title: title,
      text: message,
      confirmButtonColor:'#0093ed'
    });
  };
  const sweetalertIcon = {
    success: "success",
    error: "error",
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      // Save form data to Firestore
      await addDoc(collection(firestore, "applications"), {
        email: Form.email,
        firstName: Form.firstName,
        lastName: Form.lastName,
        number: Form.number,
        service: Form.service,
        experience: Form.experience,
        startTime: Form.startTime,
        coverLetter: Form.coverLetter,
        expectedSalary: Form.expectedSalary,
      });
      // Clear form after submission
      setForm({
        email: "",
        firstName: "",
        lastName: "",
        number: "",
        service: "",
        experience: "",
        startTime: "",
        coverLetter: "",
        expectedSalary: "",
      });
      await sendEmail()

      setLoading(false);
      sweetalert(
        sweetalertIcon.success,
        "Success",
        "We've received your request! We will come back to you soon."
      );
    } catch (error) {
      console.error("Error submitting application:", error);
      setLoading(false);
      
    }
  };

  async function sendEmail() {
    let param = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      service: document.getElementById("service").value,
      expectedSalary: document.getElementById("expectedSalary").value,
      experience: document.getElementById("experience").value,
      startTime: document.getElementById("startTime").value,
      coverLetter: document.getElementById("coverLetter").value,
    };

    await emailjs
      .send("service_ztz5lgs", "template_jsb0e04", param, {
        publicKey: "mWb9eIC4mytQGCLrZ",
      })
  }

  return (
    <>
    <Head>
      <title>
        Career | RIPPLESTACKS :: We Are Hiring, Advancing Your Tech Career, Current Opportunities
      </title>
      <meta
          name="title"
          content="Career | RIPPLESTACKS :: We Are Hiring, Advancing Your Tech Career, Current Opportunities"
        />
        <meta
          name="description"
          content="Career | RIPPLESTACKS :: We Are Hiring, Advancing Your Tech Career, Current Opportunities"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ripplestacks.com" />
        <meta
          property="og:title"
          content="Career | RIPPLESTACKS :: We Are Hiring, Advancing Your Tech Career, Current Opportunities"
        />
        <meta
          property="og:description"
          content="Career | RIPPLESTACKS :: We Are Hiring, Advancing Your Tech Career, Current Opportunities"
        />
        <meta
          property="og:image"
          content="https://ripplestacks-next.vercel.app/career.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Ripplestacks",
          "url": "https://ripplestacks.com",
          "logo": "https://ripplestacks-next.vercel.app/logo.png",
        }
      `,
          }}
        />
    </Head>
      <Header />
      <Banner
        imgName="career.jpg"
        text1="Advancing Your Tech Career"
        text2="We are always looking for talented individuals to join our team.
        If you are passionate about technology and want to work with a dynamic
        team, we would love to hear from you. Experience the ‘Feel Good factor’
        and the value of ‘Work-life balance’ by working with us."
      />

      <section className="pt-16" style={{ width: "80%", margin: "auto" }}>
        <div
          className="md:flex"
          data-aos="fade-up"
          data-wow-delay="0.3s"
          data-aos-once="true"
        >
          <div className="md:w-full">
            <div className="main-title1">
              <h1
                style={{ fontSize: "38px" }}
                className={`text-[35px] ${style.baloo_paaji} ${style.black_colour_text} tracking-normal font-bold text-center`}
              >
                {/* <i class="brush-stroke-shap"></i> */}
                Current Opportunities
              </h1>
            </div>
            <p
              style={{ fontSize: "20px", marginBottom: "0px" }}
              className={`font-size-20 ${style.baloo_paaji} ${style.black_colour_text} font-size-20 tracking-normal font-normal text-center mt-4`}
            >
              At Ripplestacks, we offer a competitive salary, flexible work
              hours, and a great working environment. We also provide
              opportunities for professional growth and career advancement. Join
              us and reach new heights in your career!
            </p>
          </div>
        </div>
      </section>

      <section
        className={`pt-16 ${style.baloo_paaji}`}
        style={{ width: "80%", margin: "auto" }}
      >
        <div className="md:flex">
          <div className="md:w-full">
            {/* <Link to="/contact"> */}
            <div
              className={`${style.listing_box}`}
              data-aos="fade-right"
              data-wow-delay="0.4s"
              data-aos-once="true"
            >
              <div>
                <p>Jr Frontend Developer (ReactJs React Native)</p>
              </div>
              <div className="flex items-center">
                <p className="mr-3">3 Positions</p>
                {/* <i class="fas fa-arrow-right"></i> */}
              </div>
            </div>
            {/* </Link> */}
          </div>
        </div>
        <div className="md:flex pt-8">
          <div className="md:w-full">
            {/* <Link to="/contact"> */}
            <div
              className={`${style.listing_box}`}
              data-aos="fade-up"
              data-wow-delay="0.4s"
              data-aos-once="true"
            >
              <div>
                <p>Fullstack Developer (ReactJs React Native NodeJs)</p>
              </div>
              <div className="flex items-center">
                <p className="mr-3">2 Positions</p>
                {/* <i class="fas fa-arrow-right"></i> */}
              </div>
            </div>
            {/* </Link> */}
          </div>
        </div>
        <div className="md:flex pt-8">
          <div className="md:w-full">
            {/* <Link to="/contact"> */}
            <div
              className={`${style.listing_box}`}
              data-aos="fade-right"
              data-wow-delay="0.4s"
              data-aos-once="true"
            >
              <div>
                <p>Software Developer Intern (ReactJs)</p>
              </div>
              <div className="flex items-center">
                <p className="mr-3">2 Positions</p>
                {/* <i class="fas fa-arrow-right"></i> */}
              </div>
            </div>
            {/* </Link> */}
          </div>
        </div>
      </section>

      <section
        className={`pt-16 ${style.baloo_paaji}`}
        style={{ width: "80%", margin: "auto" }}
      >
        <div className="md:flex">
          <div
            className="md:w-full"
            data-aos="fade-up"
            data-wow-delay="0.3s"
            data-aos-once="true"
          >
            <div className="main-title1">
              <h1
                style={{ fontSize: "38px" }}
                className={`text-[35px] ${style.black_colour_text} tracking-normal font-bold text-center`}
              >
                {/* <i class="brush-stroke-shap"></i> */}
                Apply Now
              </h1>
            </div>
            <p
              style={{ fontSize: "20px", marginBottom: "0px" }}
              className={`font-size-20 ${style.black_colour_text} font-size-20 tracking-normal font-normal text-center mt-4`}
            >
              If you are interested in any of the above job openings, Fill up
              the below form. We will review your application and get back to
              you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className={`${style.baloo_paaji} mb-16 pt-16`}>
        <div
          className="m-container md:container md:mx-auto"
          data-aos="fade-right"
          data-wow-delay="0.3s"
          data-aos-once="true"
        >
          <div className="lg:flex">
            <div
              className="lg:w-1/2 px-2 m-pr-0"
              style={{ marginRight: "6px" }}
            >
              <div>
                {/* <p className="text-[30px] text-[#ff663b] font-bold  tracking-normal mb-5">
                  Contact Information
                </p> */}

                <div
                  style={{
                    backgroundColor: "#eff3f8",
                    paddingTop: "40px",
                    paddingBottom: "40px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <div className="pl-3 pr-3">
                    <a href="tel:+6353528830" target="_blank">
                      <div className="flex">
                        <CallOutlined
                          style={{
                            width: "45",
                            height: "45",
                            color: "black",
                            backgroundColor: "rgb(179 220 248)",
                            padding: "10px",
                            borderRadius: "50%",
                          }}
                        />
                        <div className="pl-5">
                          <p
                            style={{ fontSize: "20px" }}
                            className={`font-size-20 ${style.black_colour_text} font-medium tracking-normal mb-0 cursor-pointer`}
                          >
                            Phone
                          </p>
                          <p className="text-[20px] mt-1 gray-text-color font-medium tracking-normal mb-0">
                            +91 6353528830
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    className="pt-6 pl-3 pr-3"
                    style={{ overflowWrap: "anywhere" }}
                  >
                    <a href="mailto: contact@ripplestacks.com" target="_blank">
                      <div className="flex">
                        <EmailOutlined
                          style={{
                            width: "45",
                            height: "45",
                            color: "black",
                            backgroundColor: "rgb(179 220 248)",
                            padding: "10px",
                            borderRadius: "50%",
                          }}
                        />
                        <div className="pl-5">
                          <p
                            style={{ fontSize: "20px" }}
                            className={`font-size-20 ${style.black_colour_text} font-medium tracking-normal mb-0 cursor-pointer`}
                          >
                            Email
                          </p>
                          <p className="text-[20px] mt-1 gray-text-color font-medium tracking-normal mb-0">
                            contact@ripplestacks.com
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="pl-3 pr-3 pt-6">
                    <a href="https://g.page/ripplestacks?share" target="_blank">
                      <div className="flex pb-2">
                        <>
                          <LocationOnOutlined
                            style={{
                              width: "45",
                              height: "45",
                              color: "black",
                              backgroundColor: "rgb(179 220 248)",
                              padding: "10px",
                              borderRadius: "50%",
                            }}
                          />
                          <div className="pl-5">
                            <p
                              style={{ fontSize: "20px" }}
                              className={`font-size-18 ${style.black_colour_text} font-medium tracking-normal mb-0 cursor-pointer`}
                            >
                              Surat <span style={{ fontSize: "20px" }}>🇮🇳</span>
                            </p>
                            <p className="text-[20px] gray-text-color font-medium tracking-normal mb-0">
                              A-307, Ripplestacks, Atlanta Mall, Sudama Chowk,
                              Mota Varachha, Surat, Gujarat, India 394101.
                            </p>
                          </div>
                        </>
                      </div>
                      <div className="flex pt-2">
                        <>
                          {/* <LocationOnOutlined
                            style={{
                              width: "45",
                              height: "45",
                              color: "black",
                              backgroundColor: "rgb(179 220 248)",
                              padding: "10px",
                              borderRadius: "50%",
                            }}
                          /> */}
                          {/* <div className="pl-5">
                            <p
                              style={{ fontSize: "20px" }}
                              className={`font-size-16 ${style.black_colour_text} font-medium tracking-normal mb-0 cursor-pointer`}
                            >
                              Germany{" "}
                              <span style={{ fontSize: "21px" }}>🇩🇪</span>
                            </p>
                            <p className="text-[18px] gray-text-color font-medium tracking-normal mb-0">
                              Henckellweg 23 , 30459 hannover, Germany
                            </p>
                          </div> */}
                        </>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 t-mt-2 px-2 m-pl-0">
              <div className="contact-box">
                <form onSubmit={(e) => onSubmitForm(e)}>
                  <div className="md:flex">
                    <div className="md:w-full mb-1">
                      <span
                        style={{ fontSize: "18px" }}
                        className={`pl-3 text-[18px] ${style.black_colour_text} font-normal tracking-normal`}
                      >
                        Full Name{" "}
                      </span>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                  </div>
                  <div className="md:flex">
                    <div className="md:w-1/2 pl-3 pr-3 m-mb-1 mb-1">
                      <input
                        className={`${style.cus_form_control}`}
                        id="firstName"
                        type="name"
                        value={Form.firstName}
                        onChange={(e) =>
                          setForm({ ...Form, firstName: e.target.value })
                        }
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="md:w-1/2 pl-3 pr-3">
                      <input
                        className={`${style.cus_form_control}`}
                        id="lastName"
                        type="name"
                        value={Form.lastName}
                        onChange={(e) =>
                          setForm({ ...Form, lastName: e.target.value })
                        }
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="md:flex pt-3">
                    <div className="md:w-full mb-1">
                      <span
                        style={{ fontSize: "18px" }}
                        className={`pl-3 text-[18px] ${style.black_colour_text} font-normal tracking-normal`}
                      >
                        Email{" "}
                      </span>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                  </div>
                  <div className="md:flex">
                    <div className="md:w-full pl-3 pr-3">
                      <input
                        className={`${style.cus_form_control}`}
                        type="text"
                        id="email"
                        value={Form.email}
                        onChange={(e) =>
                          setForm({ ...Form, email: e.target.value })
                        }
                        placeholder="Enter Your Valid Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="md:flex pt-3">
                    <div className="md:w-full mb-1">
                      <span
                        style={{ fontSize: "18px" }}
                        className={`pl-3 text-[18px] ${style.black_colour_text} font-normal tracking-normal`}
                      >
                        Contact Number{" "}
                      </span>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                  </div>
                  <div className="md:flex">
                    <div className="md:w-full pl-3 pr-3">
                      {/* <input className={`${style.cus_form_control}`} type="number" value={Form.number} onChange={(e) =>setForm({...Form,  number: e.target.value })} placeholder=" 97233 14276" required /> */}
                      <input
                        className={`${style.cus_form_control}`}
                        type="number"
                        id="number"
                        value={Form.number}
                        onChange={(e) =>
                          setForm({ ...Form, number: e.target.value })
                        }
                        name="number"
                        required
                        title="Error Message"
                        pattern="[1-9]{1}[0-9]{9}"
                        placeholder="Mobile Number"
                      />
                    </div>
                  </div>
                  <div className="md:flex pt-3">
                    <div className="md:w-full mb-1">
                      <span
                        style={{ fontSize: "18px" }}
                        className={`pl-3 text-[18px] ${style.black_colour_text} font-normal tracking-normal`}
                      >
                        Salary Expectation Per Annum
                      </span>
                    </div>
                  </div>
                  <div className="md:flex">
                    <div className="md:w-full pl-3 pr-3">
                      {/* <input className={`${style.cus_form_control}`} type="number" value={Form.number} onChange={(e) =>setForm({...Form,  number: e.target.value })} placeholder=" 97233 14276" required /> */}
                      <input
                        className={`${style.cus_form_control}`}
                        type="number"
                        id="expectedSalary"
                        value={Form.expectedSalary}
                        onChange={(e) =>
                          setForm({ ...Form, expectedSalary: e.target.value })
                        }
                        name="expectedSalary"
                      />
                    </div>
                  </div>
                  <div className="md:flex pt-3">
                    <div className="md:w-full mb-1">
                      <span
                        style={{ fontSize: "18px" }}
                        className={`pl-3 text-[18px] ${style.black_colour_text} font-normal tracking-normal`}
                      >
                        I&apos;m Skilled in
                      </span>
                    </div>
                  </div>
                  <div className="md:flex">
                    <div className="md:w-full pl-3 pr-3">
                      <select
                        name="service"
                        id="service"
                        className={`${style.cus_form_control}`}
                        value={Form.service}
                        onChange={(e) =>
                          setForm({ ...Form, service: e.target.value })
                        }
                        required
                      >
                        <option selected>Select</option>
                        <option value="Mobile Application Development">
                          {" "}
                          Mobile Application Development{" "}
                        </option>
                        <option value="Website Development">
                          {" "}
                          Website Development{" "}
                        </option>
                        <option value="Game Development">
                          {" "}
                          Game Development{" "}
                        </option>
                        <option value="UI / UX Design"> UI / UX Design </option>
                        <option value="Web Design"> Web Design </option>
                        <option value="Logo Design"> Logo Design </option>
                        <option value="QA Service"> QA Service </option>
                        <option value="Other"> Other </option>
                      </select>
                    </div>
                  </div>
                  {/* <div className="md:flex pt-3"> */}
                  <div className="md:w-full pl-3 pr-3 pt-3">
                    <span
                      style={{ fontSize: "18px" }}
                      className={`text-[18px] ${style.black_colour_text} font-normal tracking-normal`}
                    >
                      Experience
                    </span>
                    <select
                      name="experience"
                      id="experience"
                      className={`${style.cus_form_control}`}
                      value={Form.experience}
                      onChange={(e) =>
                        setForm({ ...Form, experience: e.target.value })
                      }
                      required
                    >
                      <option selected>Select</option>
                      <option value="fresher"> Fresher </option>
                      <option value="one to three"> 1-3 Year </option>
                      <option value="three to five"> 3-5 Year </option>
                      <option value="more than five"> More than 5 Year </option>
                    </select>
                  </div>
                  <div className="md:w-full pl-3 pr-3 pt-3">
                    <span
                      style={{ fontSize: "18px" }}
                      className={`text-[18px] ${style.black_colour_text} font-normal tracking-normal`}
                    >
                      When will you join?{" "}
                    </span>
                    <span style={{ color: "red" }}>*</span>
                    <select
                      name="startTime"
                      id="startTime"
                      className={`${style.cus_form_control}`}
                      value={Form.startTime}
                      onChange={(e) =>
                        setForm({ ...Form, startTime: e.target.value })
                      }
                      required
                    >
                      <option value="" selected>
                        Select
                      </option>
                      <option value="Immediately"> Immediately</option>
                      <option value="In few Weeks"> In few Weeks </option>
                      <option value="In few Months"> In few Months </option>
                      <option value="Not sure"> Not sure </option>
                    </select>
                  </div>
                  <div className="md:flex pt-3">
                    <div className="md:w-full mb-1">
                      <span
                        style={{ fontSize: "18px" }}
                        className={`pl-3 text-[18px] ${style.black_colour_text} font-normal tracking-normal`}
                      >
                        Cover Letter
                      </span>
                    </div>
                  </div>
                  <div className="md:flex">
                    <div className="md:w-full pl-3 pr-3">
                      <textarea
                        id="coverLetter"
                        className={`${style.textarea_style}`}
                        name="w3review"
                        rows="4"
                        cols="50"
                        value={Form.coverLetter}
                        onChange={(e) =>
                          setForm({ ...Form, coverLetter: e.target.value })
                        }
                      ></textarea>
                    </div>
                  </div>
                  <div
                    className="md:flex pt-4 pl-3"
                    style={{ justifyContent: "center" }}
                  >
                    <Button
                      type="submit"
                      style={{
                        backgroundImage:
                          "linear-gradient(270deg,  #0093ed, #74B6E3, #0093ed)",
                        transition: "0.2s",
                        backgroundSize: "200% auto",
                        border: "1px solid transparent",
                        padding: "8px 40px",
                        boxShadow: "0 12px 20px 0 rgb(255 126 95 / 15%)",
                        borderRadius: "5px",
                        color: "white",
                        textTransform: "none",
                        fontWeight: "500",
                        marginTop: "-10px",
                        marginBottom: "-40px",
                      }}
                    >
                      Submit {"  "}
                      {loading && (
                        <CircularProgress
                          style={{'color': 'white'}}
                          size={"20px"}
                          className="ml-2"
                        />
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
