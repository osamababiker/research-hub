"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
export default function CourseCardTwo({ data, index }) {
  const [rating, setRating] = useState([]);
  useEffect(() => {
    for (let i = Math.round(data.rating); i >= 1; i--) {
      setRating((pre) => [...pre, "star"]);
    }
  }, []);
  return (
    <div className="col-lg-3 col-md-6">
      <div>
        <div className="coursesCard -type-1 -hover-shadow border-light rounded-8">
          <div className="relative">
            <div className="coursesCard__image overflow-hidden rounded-top-8">
              <Image
                width={600}
                height={420}
                className="w-1/1"
                src={data.imageSrc}
                alt="image"
              />
              <div className="coursesCard__image_overlay rounded-top-8"></div>
            </div>
            {data.popular && (
              <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                <div>
                  <div className="px-15 rounded-200 bg-purple-1">
                    <span className="text-11 lh-1 uppercase fw-500 text-white">
                      Popular
                    </span>
                  </div>
                </div>

                <div>
                  <div className="px-15 rounded-200 bg-green-1">
                    <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                      Best sellers
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="h-100 pt-15 pb-10 px-20">

            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
              <Link className="linkCustom" href={`/courses/${data.id}`}>
                {data.title}
              </Link>
            </div>

            <div className="d-flex x-gap-10 items-center pt-10">

              <div className="d-flex items-center">
                <div className="mr-8">
                  <div className="icon-calendar-2 text-16"></div>
                </div>
                <div className="text-14 lh-1">{data.date}</div>
              </div>

              <div className="d-flex items-center">
                <div className="mr-8">
                  <div className="icon-location text-16"></div>
                </div>
                <div className="text-14 lh-1">{data.location}</div>
              </div>


            </div>

            <div className="coursesCard-footer">
              <div className="coursesCard-footer__author">
                <Image
                  width={30}
                  height={30}
                  src={data.universityLogo}
                  alt="image"
                />
                <div>{data.universityName || "University name"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
