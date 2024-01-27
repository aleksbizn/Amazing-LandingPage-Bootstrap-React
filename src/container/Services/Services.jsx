import React from "react";
import { Headings } from "../../components";
import { data } from "../../constants";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

import "./Services.css";

const Services = () => {
  return (
    // <div id="services" className="d-block pt-md-4">
    //   {/* <Headings title="Projects" text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include" /> */}

    //   <div className="row">
    //     {data.ServicesData.map(
    //       ({ titleone, titletwo, link, itemclass, imgURL }, index) => (
    //         // <div className="col-lg-6 col-12" key={index}>
    //         // <div className={`row ${itemclass}`}>
    //         //     <div className="col-md-6 box">
    //         //    <div>  <span>{titleone} </span>
    //         //      <span>{titletwo}</span>
    //         //      </div>
    //         //       <a href={link} alt={titleone} className="readmore"> <BsFillArrowUpRightCircleFill /> More </a>
    //         //     </div>
    //         //     <div className="col-md-6 text-end"><img src={imgURL} alt={titleone} className="img-fluid img-services" /></div>
    //         //   </div>
    //         // </div>
    //         <div className={`col-lg-4 col-12`} key={index}>
    //         <div
    //           className={`row card-bg-img ${itemclass}`}
    //           style={{ backgroundImage: `url(${imgURL})` }}
    //         >
    //           <div className="col-md-6 box">
    //             <div>
    //               <span>{titleone} </span>
    //               <span>{titletwo}</span>
    //             </div>
    //             {/* <a href={link} alt={titleone} className="readmore">
    //               <BsFillArrowUpRightCircleFill /> More
    //             </a> */}
    //           </div>
    //         </div>
    //       </div>
    //       )
    //     )}
    //   </div>
    // </div>




<div id="services" className="d-block pt-md-4">
      <div className="row g-4">
        {data.ServicesData.map(({ titleone, titletwo, link, itemclass, imgURL }, index) => (
          <div className={`col-lg-4 col-12`} key={index}>
            <div
              className={`card card-bg-img h-100 rounded-4 ${itemclass}`}
              style={{ backgroundImage: `url(${imgURL})` }}
            >
              <div className="card-bg-img-content d-flex flex-column align-items-center justify-content-center h-100">
                <a href={link} className="card-bg-img-link text-center">
                  <span>{titleone} </span>
                  <span>{titletwo}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
