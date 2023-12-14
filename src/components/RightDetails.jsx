import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './RightDetails.module.css'
import { nanoid } from 'nanoid';
const RightDetails = ({rightDetails}) => {
    let key = Object.keys(rightDetails);
    const [details]=useState(rightDetails[key].details)
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
      console.log(details)

  return (
    <div className={styles.container} >
            <div className={styles.nav} >
                <div style={{backgroundColor:rightDetails[key].color}} className={styles.NotesDp}>
                  <h1>{shortForm}</h1>
                </div>
                <h3 className={styles.NotesName}>{key}</h3>
                </div>
            <div className={styles.noteArea} >
                {details.map((data)=>{
                    return(<div key={nanoid()} className={styles.notesText}>
                               {data.text}
                        </div>)
                })}
                
            </div>
            <div className={styles.TextArea} ></div>
    </div>
  )
}

export default RightDetails