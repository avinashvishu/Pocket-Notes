import React, { useState, useEffect, useRef } from "react";
import styles from "./Dpg.module.css";
import { MdLock } from "react-icons/md";
import bgImg from "../../assets/mainPgImg.png";
import LeftBody from "../../components/LeftBody";
import PopUp from '../../components/PopUp'
import { nanoid } from 'nanoid'
import RightDetails from "../../components/RightDetails";
const DmainPg = () => {
  const [popUp, setpopUp] = useState(false);
  const [rightDetails,setRightDetails]=useState()
  const [notes,setNotes]= useState(localStorage.getItem('Notes')?JSON.parse(localStorage.getItem('Notes')):[])
  const [selectedKey,setKey]=useState()
  


  // let sel=newdata.filter((note)=>{return Object.keys(note)=='Aviansh Vishu'})
  // let id=Object.keys(sel[0])
  // selected[0][id].details.push({text:"Hello its avinash vishu",date:"01 sept 1998",time:"5:30pm"})


//  useEffect(()=>{
//   let value = [...notes]
//   console.log(value,"from value")
//   // localStorage.setItem('Notes',JSON.stringify(value))
//  },[])

// {text:"some dammy text",date:"01 sept 1998",time:"5:30pm"}

  // let selected= notes.filter((note)=>{return Object.keys(note)=='kj k j'})
  // let id=Object.keys(selected[0])
  // selected[0][id].details.push({text:"Some dummy text"})
  // selected[0][id].details.push({text:"Another dummy text"})
  // console.log(selected[0][id].details)
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
          <LeftBody notes={notes} setRightDetails={setRightDetails} setKey={setKey} />
          <div
            className={styles.addBtn}
            onClick={() => {
              setpopUp(true);
            }}>
            +
          </div>
        </div>
        {/* <Right/> */}
        {rightDetails?<RightDetails rightDetails={rightDetails} selectedKey={selectedKey} />:<Right/>}
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
