import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './RightDetails.module.css'
import { nanoid } from 'nanoid';
import { IoSendSharp } from "react-icons/io5";
const RightDetails = ({rightDetails,selectedKey}) => {
    const [innerText,setText]=useState('')
    let key = Object.keys(rightDetails);
    let data=rightDetails[key].details
    console.log(data,'is data')
  
   function checktext(e){
       setText(e.target.value)
   }

   function AddText(){
       let addText=JSON.parse(localStorage.getItem('Notes'));
        console.log(addText)
      addText.map((data)=>{console.log(Object.keys(data).map((key)=>{
        if(key==selectedKey){ 
          data[key].details.push({text:innerText,date:"01 sept 1998",time:"5:30pm"})
          console.log(addText)
          localStorage.setItem('Notes',JSON.stringify(addText))
        }
      })) })
     
   }

   useEffect(()=>{console.log(innerText) })
    function toShort (key){
        if(Object.keys(key).length==1){
             let letter = key[0];    
             let capWord =letter.charAt(letter.slice(0,1)).toUpperCase();  
             return capWord;
           }else{
             let letter1 = key[0];    
             let letter2 = key[1];    
             let capWord = letter1.charAt(letter1.slice(0,1)).toUpperCase()+letter2.charAt(letter1.slice(0,1)).toUpperCase();
             return capWord;
         }
        }
       
    
       let shortForm = toShort(key[0].split(" "));
    //   console.log(rightDetails[key].details[0].date)
      console.log(rightDetails,'from right')


  return (
    <div className={styles.container} >
            <div className={styles.nav} >
                <div style={{backgroundColor:rightDetails[key].color}} className={styles.NotesDp}>
                  <h1>{shortForm}</h1>
                </div>
                <h3 className={styles.NotesName}>{key}</h3>
                </div>
            <div className={styles.noteArea} >
                {data.map((data)=>{
                    return(<div key={nanoid()} className={styles.notesText}>
                               {data.text}
                        </div>)
                })}
                
            </div>
            <div className={styles.TextArea} >
              <textarea name="UserNotes" id="TextNotes" value={innerText} placeholder='Enter your text here...........'  onChange={checktext}  rows="8"></textarea>
             
            </div> 
           {innerText.trim(" ").length==0? <IoSendSharp size={"2rem"} className={styles.SendBtn} fill="#ABABAB"  />:<IoSendSharp size={"2rem"} className={styles.SendBtn} fill="#001F8B" onClick={AddText} />}
    </div>
  )
}

export default RightDetails