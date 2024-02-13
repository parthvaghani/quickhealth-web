import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import firestore from "../../utils/firebase";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import CallOutlined from "@mui/icons-material/CallOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import style from "../../styles/module/common.module.css";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Swal from "sweetalert2";
import Head from "next/head";

const Contact = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [Form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    number: "",
    service: "",
    requirement: "",
    customReq: "",
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
        requirement: Form.requirement,
        customReq: Form.customReq,
      });
      setForm({
        email: "",
        firstName: "",
        lastName: "",
        number: "",
        service: "",
        requirement: "",
        customReq: "",
      });
      await sendEmail()
      setLoading(false);
      sweetalert(
        sweetalertIcon.success,
        "Success",
        "We've got your back! We will come back to you soon."
      );
    }
    catch (error) {
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
      customReq: document.getElementById("customReq").value,
    };

    await emailjs
      .send("service_ztz5lgs", "template_rqyikuh", param, {
        publicKey: "mWb9eIC4mytQGCLrZ",
      })
  }

  return (
    <>
    <Head>
      <title>
        Contact | RIPPLESTACKS :: We’re here to listen and help. Connect with Ripplestacks. 
      </title>
      <meta
          name="title"
          content="Contact | RIPPLESTACKS :: We’re here to listen and help. Connect with Ripplestacks."
        />
        <meta
          name="description"
          content="Contact | RIPPLESTACKS :: We’re here to listen and help. Connect with Ripplestacks."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ripplestacks.com" />
        <meta
          property="og:title"
          content="Contact | RIPPLESTACKS :: We’re here to listen and help. Connect with Ripplestacks."
        />
        <meta
          property="og:description"
          content="Contact | RIPPLESTACKS :: We’re here to listen and help. Connect with Ripplestacks."
        />
        <meta
          property="og:image"
          content="https://ripplestacks-next.vercel.app/contact.png"
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
      <Header navPosition="right" />
      <div
        className="mb-5 pt-[100px]"
        data-aos="fade-up"
        data-aos-duration="100"
        data-aos-once="true"
      >
        <div
          style={{
            backgroundColor: "#eff3f8",
            height: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-once="true"
        >
          <p
            style={{ fontSize: "38px" }}
            class={`text-[35px] ${style.baloo_paaji} ${style.black_colour_text} text-center font-bold  tracking-normal mb-0 mt-3`}
          >
            Contact Us
          </p>
          <p
            style={{ fontSize: "20px", marginBottom: "0px" }}
            class={`text-[20px] ${style.baloo_paaji} ${style.black_colour_text} text-center font-medium  tracking-normal mt-3 mx-2`}
          >
            We’re here to listen and help. Connect with Ripplestacks. Fill up
            the form and our Team will get back to you within 24 hours.
          </p>
        </div>

        <div className="m-container md:container md:mx-auto">
          <div className={`lg:flex pt-10 ${style.baloo_paaji}`}>
            <div
              className="lg:w-1/2 px-2 m-pr-0"
              style={{ marginRight: "6px" }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div>
                <div
                  style={{
                    backgroundColor: "#eff3f8",
                    paddingTop: "40px",
                    paddingBottom: "40px",
                    paddingLeft: "20px",
                    marginBottom: "20px",
                    paddingRight: "20px",
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
                            className={`font-size-16 ${style.black_colour_text} font-medium tracking-normal mb-0 cursor-pointer`}
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
                              className={`font-size-20 ${style.black_colour_text} font-medium tracking-normal mb-0 cursor-pointer`}
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
            <div className="lg:w-1/2 px-2 m-pl-0">
              <div
                className="contact-box"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <form
                  // ref={form}
                  onSubmit={(e) => onSubmitForm(e)}
                >
                  <div className="md:flex">
                    <div className="md:w-full mb-1">
                      <span
                        style={{ fontSize: "18px" }}
                        className={`pl-3 text-[18px] ${style.black_colour_text} font-normal tracking-normal`}
                      >
                        Name{" "}
                      </span>
                      <span style={{ color: "red" }}>*</span>
                    </div>
                  </div>
                  <div className="md:flex">
                    <div className="md:w-1/2 pl-3 pr-3 m-mb-1 mb-1">
                      <input
                        className={`${style.cus_form_control}`}
                        type="name"
                        id="firstName"
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
                        type="name"
                        id="lastName"
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
                        name="country_code"
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
                        Select Service
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
                  {/* <div className="md:flex pt-3"></div>
                <div className="md:flex">
                  <div className="md:w-full mb-1">
                    <span className={`pl-3 text-[18px] ${style.black_colour_text} font-normal tracking-normal`}>
                      Requirement
                    </span>
                  </div>
                </div>
                <div className="md:flex">
                  <div className="md:w-full pl-3 pr-3">
                    <select
                      name="requirement"
                      id="requirement"
                      className={`${style.cus_form_control}`}
                      value={Form.requirement}
                      onChange={(e) =>
                        setForm({ ...Form, requirement: e.target.value })
                      }
                    >
                      <option value="" selected>
                        Select
                      </option>
                      <option value="Hire Dedicated Team">
                        {" "}
                        Hire Dedicated Team{" "}
                      </option>
                      <option value="New Project"> New Project </option>
                      <option value="Existing Project">
                        {" "}
                        Existing Project{" "}
                      </option>
                      <option value="Support - Maintenance">
                        {" "}
                        Support - Maintenance{" "}
                      </option>
                    </select>
                  </div>
                </div> */}
                  <div className="md:flex pt-3">
                    <div className="md:w-full mb-1">
                      <span
                        style={{ fontSize: "18px" }}
                        className={`pl-3 text-[18px] ${style.black_colour_text} font-normal tracking-normal`}
                      >
                        Message
                      </span>
                    </div>
                  </div>
                  <div className="md:flex">
                    <div className="md:w-full pl-3 pr-3">
                      <textarea
                        id="customReq"
                        className={`${style.textarea_style}`}
                        name="w3review"
                        rows="4"
                        cols="50"
                        value={Form.customReq}
                        onChange={(e) =>
                          setForm({ ...Form, customReq: e.target.value })
                        }
                      ></textarea>
                    </div>
                  </div>
                  <div className="md:flex pt-4 pl-3">
                    <div className="md:w-full" style={{ textAlign: "center" }}>
                      <Button
                        type="submit"
                        value="Send"
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
                          marginBottom: "10px",
                        }}
                      >
                        Submit {"  "}
                        {loading && (
                          <CircularProgress
                            style={{ 'color': 'white' }}
                            size={"20px"}
                            className="ml-2"
                          />
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
