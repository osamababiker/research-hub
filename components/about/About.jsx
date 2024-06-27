import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">About Us</h1>
                </div>

                <div>
                  <p className="page-header__text">
                  Lorem ipsum is placeholder text
commonly used in the graphic, print, and publishing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-50 justify-between items-center">
            <div className="col-lg-6 pr-50 sm:pr-15">
              <div className="composition -type-8">
                <div className="-el-1">
                  <Image
                    width={300}
                    height={400}
                    src="/assets/img/about-1/1.png"
                    alt="image"
                  />
                </div>
                <div className="-el-2">
                  <Image
                    width={200}
                    height={200}
                    src="/assets/img/about-1/2.png"
                    alt="image"
                  />
                </div>
                <div className="-el-3">
                  <Image
                    width={255}
                    height={250}
                    src="/assets/img/about-1/3.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <h2 className="text-30 lh-16">
              Lorem ipsum is placeholder text commonly used 
              </h2>
              <p className="text-dark-1 mt-30">
              Lorem ipsum is placeholder text
              commonly used in the graphic, print, and publishing
              </p>
              <p className="pr-50 lg:pr-0 mt-25">
              Lorem ipsum is placeholder text
              commonly used in the graphic, print, and publishing
              Lorem ipsum is placeholder text
              commonly used in the graphic, print, and publishing 
              Lorem ipsum is placeholder text
              commonly used in the graphic, print, and publishing
              </p>
              <div className="d-inline-block">
                <Link
                  href="/signup"
                  className="button -md -purple-1 text-white mt-30"
                >
                  Apply for scholarship now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
