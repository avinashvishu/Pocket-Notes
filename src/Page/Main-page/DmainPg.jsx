import React, { useState, useEffect, useRef } from "react";
import styles from "./Dpg.module.css";
import { MdLock } from "react-icons/md";
import bgImg from "../../assets/mainPgImg.png";
import LeftBody from "../../components/LeftBody";
import PopUp from '../../components/PopUp'
import { nanoid } from 'nanoid'
const DmainPg = () => {
  const [popUp, setpopUp] = useState(false);
  const [notes,setNotes]= useState([
    {
      'sd f': {
        color: "#FF79F2",
        details: []
      }
    },
    {
      'kj k j' : {
        color: "#6691FF",
        details: []
      }
    },
    {
      'j kh gh': {
        color: "#B38BFA",
        details: []
      }
    },
    {
      'klj lkj': {
        color: "#B38BFA",
        details: []
      }
    }
  ])
   
  
  



  let menuRef = useRef();
  useEffect(() => {
    const handleouterClick = (e) => {
      if (menuRef.current == e.target) {
        setpopUp(false);
      }
    };
    addEventListener("mousedown", handleouterClick);
    return () => {
      removeEventListener("mousedown", handleouterClick);
    };
  });
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.leftHead}>
            <h1>Pockect Notes</h1>
          </div>
          <LeftBody notes={notes} />
          <div
            className={styles.addBtn}
            onClick={() => {
              setpopUp(true);
            }}>
            +
          </div>
        </div>
        <Right/>
      </div>
      {popUp ? (
        <PopUp menuRef={menuRef} notes={notes} setNotes={setNotes}  setpopUp={setpopUp} />
      ) : (
        <></>
      )}
    </>
  );
};




 export const Right=()=>{
  return (
    <div className={styles.right}>
    <div className={styles.rightBody}>
      <img src={bgImg} alt="background image of working peoples" />
      <h1>Pocket Notes</h1>
      <p>
        Send and receive messages without keeping your phone online.
        <br />
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone
      </p>
    </div>
    <div className={styles.rightFooter}>
      <MdLock size={"2rem"} />
      <h2>end-to-end encrypted</h2>
    </div>
  </div>
  )
}


export default DmainPg;
