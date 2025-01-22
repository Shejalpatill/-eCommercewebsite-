// HomeContent.jsx
import React from 'react';
// import overimg1 from '../../assests/images/img1.jpg'; // Adjust path based on the actual image file
// import overimg2 from '../../assests/images/img2.jpg'; // Adjust path based on the actual image file
// import overimg3 from '../../assests/images/img3.jpg'; // Adjust path based on the actual image file

const HomeContent = () => {
    return (
        <div className='home container'>
            <div className="home1">
                <div className="home-content">
                    <h2>Let’s <span className="highlight">Travel</span> the World</h2>
                    <p className='pp'>Your Dream Vacation Starts Here ...</p>
                    <p>Discover stunning destinations and embark on unforgettable adventures with us. Whether you’re seeking relaxation, adventure, or cultural experiences, we have the perfect getaway for you.</p>
                </div>
            </div>
            {/* <div className='home2'>
                <div className="images-container">
                    <img src={overimg1} alt="Travel Image 1" />
                    <img src={overimg2} alt="Travel Image 2" />
                    <img src={overimg3} alt="Travel Image 3" />
                </div>
            </div> */}
        </div>
    );
};

export default HomeContent;




// import React from "react";
// import Slider from "react-slick";
// import bgHomeImg1 from '../../assests/images/i1.webp'; 
// import bgHomeImg2 from '../../assests/images/ss3.jpg'; 
// import bgHomeImg3 from '../../assests/images/ss5.jpg'; 
// import bgHomeImg7 from '../../assests/images/jj.jpg'; 
// import bgHomeImg8 from '../../assests/images/ss4.jpg'; 
// import bgHomeImg9 from '../../assests/images/ss6.jpg'; 
// import bgHomeImg10 from '../../assests/images/ss7.jpg'; 
// import bgHomeImg11 from '../../assests/images/ss8.jpg'; 
// const HomeSlider = () => {
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll:1,
//         arrows:true,
//         autoPlay:true
//     };
//     return (
//         <div className="homeMainContainer">
//             <Slider {...settings}>
//             <div className="slider-images">
//                 <img src={bgHomeImg1} alt="Background Home" className="w-100" />
//                 </div>
//                 <div className="slider-images">
//                 <img src={bgHomeImg2} alt="Background Home" className="w-100" />
//                 </div>
//                 <div className="slider-images">
//                 <img src={bgHomeImg3} alt="Background Home" className="w-100" />
//                 </div>
//                 <div className="slider-images">
//                 <img src={bgHomeImg7} alt="Background Home" className="w-100" />
//                 </div>
//                 <div className="slider-images">
//                 <img src={bgHomeImg8} alt="Background Home" className="w-100" />
//                 </div>
//                 <div className="slider-images">
//                 <img src={bgHomeImg9} alt="Background Home" className="w-100" />
//                 </div>
//                 <div className="slider-images">
//                 <img src={bgHomeImg10} alt="Background Home" className="w-100" />
//                 </div>
//                 <div className="slider-images">
//                 <img src={bgHomeImg11} alt="Background Home" className="w-100" />
//                 </div>
//             </Slider>
//             <div className="text-overlay">
//                 <h2>BEST TRAVEL AGENCY</h2>
//                 <h2><span className="highlight">EXPLORE</span>  the World</h2>
//                 <p>Your Dream Vacation Starts Here</p>
//                 <p>Discover stunning destinations and embark on unforgettable adventures with us. Whether you’re seeking relaxation, adventure, or cultural experiences, we have the perfect getaway for you.</p>
//             </div>
//         </div>
//     );
// };

// export default HomeSlider;
