import React, { useEffect, useState } from "react";
import image1 from "./img23.jpg";
import image2 from "./brain25.png";
import brain1 from "./brain1.jpeg";
import brain2 from "./brain2.jpeg";
import brain3 from "./brain3.jpeg";
import brain4 from "./brain4.jpeg";
import Modal from 'react-responsive-modal';

import "react-responsive-modal/styles.css";

import "./Home.css";


import Footer from "./Footer";
const Home = () => {
  const[state,setState] = useState(false);
  const onOpenModal = () => {
    setState(true);
  };

  const onCloseModal = () => {
    setState( false );
  };

  useEffect(()=>{

setTimeout(()=>{
  onOpenModal();
},2000)
  },[])
  
  return (
    
    
    <div>
    <div>
        {/* <button onClick={onOpenModal}>Open modal</button> */}
        <Modal open={state} onClose={onCloseModal} little>
          <h2>Simple centered modal</h2>
          <img className="" style={{width:"780px",height:"400px"}} src={brain2} />
        </Modal>
      </div>
      <img className="main_image" src={brain3} />
      <div className="row_1">
        <img src={image1} className="image_Brain" alt="Image_Brain" />
        <p className="image_Brain_Text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
      <div className="row_1">
        <p className="image_Brain_Text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <img src={image2} className="image_Brain" alt="Image_Brain" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
