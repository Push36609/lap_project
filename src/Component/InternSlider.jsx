import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import styles from './InternSlider.module.css'



function InternSlider() {
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
      <h1 className="items-center justify-center flex pt-10 font-sans text-5xl text-green-700 text-shadow-[2px 2px 4px rgba(57 ,225 ,65 ,0.7)]">Interns</h1>
      <div className="mt-4 cursor-pointer mb-8">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="bg-white h-112 text-black rounded-3xl max-w-95 shadow-lg justify-between ml-6 transform-3d animate-[rotate_15s_infinite_linear] hover:shadow-[10px_10px_10px_rgb(244,_239,_239)]">
              <div className="h-56 rounded-tl-2xl rounded-tr-2xl bg-teal-100 flex justify-center items-center perspective-dramatic">
                <img src={d.url} alt="image" className="h-52 w-52 rounded-full hover:translate-z-3" />
              </div>

              <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="text-xl font-extrabold">{d.name}</h1>
                <h2 className="font-medium mt-0 ml-5">{d.about}</h2>
                <button className="bg-purple-300 text-white text-lg border-none rounded-md px-2 py-2 cursor-pointer">Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

const data = [
  {
    name: `Ms. Shivangi `,
    url: `../Ms.Shivangi.jpg`,
    about: ` `
  },
  {
    name: `Ms. Priyanka`,
    url: `../Ms. Priyanka.jpg`,
    about: ` `
  },
  {
    name: `Mr. Ajay Gupta`,
    url: `../Mr. Ajay Gupta.jpg`,
    about: `BCA(AI) from LLDIMS`
  },
  {
    name: `Ms. Shruti`,
    url: `../ Ms. Shruti.jpg`,
    about: `BCA(AI) from LLDIMS `
  },
  {
    name: `Mr. Sahil Pant`,
    url: `../Mr. Sahil Pant.jpg`,
    about: ` `
  },
  {
    name: `Mr. Ankush Rawat`,
    url: `../Mr. Ankush Rawat.jpg`,
    about: ` `
  },
  {
    name: `Mr. Rashid Reyaz`,
    url: `../Mr. Rashid Reyaz.jpg`,
    about: ``
  },
  {
    name: `Mr. Pushpendra`,
    url: `../Mr. Pushpendra.jpg`,
    about: `BAC(AI) from LLDIMS`
  },
  {
    name: `Ms. Shravani Maity`,
    url: `../Ms. Shravani Maity.jpg`,
    about: `BCA(AI) from LLDIMS`
  },
]

export default InternSlider;