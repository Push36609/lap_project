import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import styles from './AlumniSlider.module.css';
import { useNavigate } from "react-router-dom";



function AlumniSlider() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
    {
      breakpoint: 1224, // tablets and below
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
      }
    },
    {
      breakpoint: 800, // mobile landscape and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }
  ]
  };
  return (
    <div className="w-[90%] m-auto h-auto">
      <h1 className="items-center justify-center flex pt-10 font-sans font-bolder text-5xl text-[rgb(38,163,119)] [text-shadow:2px_2px_4px_rgba(57,225,65,0.7)]">Alumni</h1>
      <div className="mt-4 cursor-pointer mb-8">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="bg-white h-112 text-black rounded-3xl max-w-90 shadow-lg justify-between ml-6 [transform-style:preserve-3d] animate-[rotate_15s_linear_infinite]
                              hover:[box-shadow:10px_10px_10px_rgba(244,239,239,0.2)]">
              <div className="h-56 rounded-tl-2xl rounded-tr-2xl bg-teal-100 flex justify-center items-center perspective-dramatic">
                <img src={d.url} alt="image" className="h-52 w-52 rounded-full hover:translate-z-3"/>
              </div>

              <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="text-xl font-bold pt-4 ">{d.name}</h1>
                <h2 className="font-medium mt-0 mx-4">{d.about}</h2>
                <button className="mt-2.5 bg-purple-300 text-white text-lg px-1 py-2.5 rounded-xl border-none hover:bg-purple-400 hover:scale-105 transition-transform"
                onClick={() =>
                    navigate(`/ReadMore/${encodeURIComponent(d.name)}`, {
                      state: { name: d.name, url: d.url },
                      }) }>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}


export default AlumniSlider;

const data = [
  {
    "name": "Dr. Muniraj Gupta",
    "url": "../Dr.Muniraj Gupta.jpg",
    "about": "PhD Computer Science, JNU. M.Tech., NSUT, New Delhi"
  },
  {
    "name": "Dr. Naveen Kumar Singh",
    "url": "../Dr. Naveen Kumar Singh.jpg",
    "about": "PhD Computer Science, JNU. MCA, JNU"
  },
  {
    "name": "Ms. Goldy Pandey",
    "url": "../Ms. Goldy Pandey.jpg",
    "about": "PhD Computer Science, JNU. M.Tech CS&T, JNU"
  },
  {
    "name": "Ms. Mankirat Kaur",
    "url": "../Ms. Mankirat Kaur.jpg",
    "about": "M.Tech Computer Science & Technology, JNU"
  },
  {
    "name": "Mr. Jamaluddin",
    "url": "../Mr. Jamaluddin.jpg",
    "about": "PhD(CS) at AMU, Aligarh. M.Tech(CS) JNU. MCA & BSc(CS) from AMU"
  },
  {
    "name": "Mr. Tirandij Pradhan",
    "url": "../Mr. Tirandij Pradhan.jpg",
    "about": "PhD(CS) at AMU, Aligarh. M.Tech(CS) JNU. MCA & BSc(CS) from AMU"
  },
  {
    "name": "Mr. Raja Babu",
    "url": "../Mr. Raja Babu.jpg",
    "about": ""
  },
  {
    "name": "Mr. Gulam Mazid",
    "url": "../Mr. Gulam Mazid.jpg",
    "about": ""
  },
  {
    "name": "Mr. Saquib Warsi",
    "url": "../Mr. Saquib Warsi.jpg",
    "about": ""
  },
  {
    "name": "Mr. Mritunjay Raj",
    "url": "../Mr. Mritunjay Raj.jpg",
    "about": ""
  }
]
