import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import styles from './CurrentmemberSlider.module.css'
import { useNavigate } from "react-router-dom";


 const data =[
  {
    name:`Mr. Kapil Dev`,
    url:"../Mr. Kapil Dev.jpg",
    about:`PhD Scholar`
  },
    {
    name:`Ms. Anupma Gadhwal`,
    url:"../Ms. Anupma Gadhwal.jpg",
    about:`PhD Scholar`
  },
    {
    name:`Mr. Saurabh Kumar`,
    url:"../Mr. Saurabh Kumar.jpg",
    about:`PhD Scholar`
  },
    {
    name:`Mrs. Pooja Tiwari`,
    url:"../Mrs. Pooja Tiwari.jpg",
    about:`PhD Scholar`
  },
    {
    name:`Mr. Sayantan Das`,
    url:"../Mr. Sayantan Das.jpg",
    about:`Research Associate`
  },
    {
    name:`Mr. Anil Kumar`,
    url:"../Mr. Anil Kumar.jpg",
    about:`PhD Scholar`
  }

]


function CurrentmemberSlider(){
   const navigate = useNavigate();
   
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1224, // tablets and below
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 800, // mobile landscape and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true, 
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }
  ]
  };
  return(
    <div className="w-[90%] m-auto h-auto">
      <h1 className="items-center justify-center flex pt-10 font-sans text-5xl text-[rgb(38,163,119)] [text-shadow:2px_2px_4px_rgba(57,225,65,0.7)]">Current Member</h1>
        <div className="mt-4 cursor-pointer mb-8 items-center justify-center">
          <Slider {...settings}>
          {data.map((d) => (
            <div className="bg-white h-112 text-black rounded-3xl max-w-95 shadow-lg justify-between border-2 border-blue-200 ml-6 transform-3d animate-[rotate_15s_linear_infinite]
                              hover:[box-shadow:10px_10px_10px_rgba(244,239,239,0.2)]">
              <div className="h-56 rounded-tl-2xl rounded-tr-2xl bg-teal-100  flex justify-center items-center perspective-dramatic"> 
                <img src={d.url} alt="image"  className="h-52 w-52 rounded-full hover:translate-z-3"/>
              </div>

              <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="text-xl font-bold pt-4 ">{d.name}</h1>
                <h2 className="font-medium mt-0 mx-4">{d.about}</h2>
                <button className="mt-2.5 bg-purple-300 text-white text-lg px-1 py-2.5 rounded-xl border-none hover:bg-purple-400 hover:scale-105 transition-transform"
                onClick={() =>
                    navigate(`/readmore/${encodeURIComponent(d.name)}`, {
                      state: { name: d.name, url: d.url, about: d.about },
                    })
                  }>Read More</button>
              </div>
            </div>
          ))}
          </Slider>
        </div>
    </div>
  )
}


export default CurrentmemberSlider;