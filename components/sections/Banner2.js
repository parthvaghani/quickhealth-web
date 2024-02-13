import React from "react";
import Link from "next/link";
import style from "../../src/styles/module/common.module.css";


export default function Banner2() {
  return (
    <div>
      <section>
        <section className="pt-12">
          <div className="repeat-banner flex items-center">
            <div className="md:container md:mx-auto m-container ">
              <div className="md:flex">
                <div className="md:w-full" style={{ marginLeft: "15px" }}>
                  <h1
                    className={`text-[35px] text-[#fff] font-bold tracking-normal mb-0 ${style.baloo_paaji}`}
                    style={{ textAlign: "start", lineHeight: "45px", fontSize:"38px" }}
                  >
                    How can we help you develop your project?
                  </h1>
                  <p className={`font-size-20 font-normal tracking-normal text-[#fff] mt-4 ${style.baloo_paaji} `}>
                    Let&apos;s innovate your technology requirements with
                    RIPPLESTACKS.
                  </p>
                  <div className="pt-8">
                    <Link href="/contact">
                      <button className={`contact-btn-style ${style.rounded_full} large-btn-white text-[16px] ${style.black_colour_text} font-medium tracking-normal text-center`}>
                        Contact Us
                        <i class="fas fa-arrow-right pl-3"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
