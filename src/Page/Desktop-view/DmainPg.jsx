import React from 'react'
import styles from './Dpg.module.css'
import { MdLock } from "react-icons/md";
import bgImg from '../../assets/mainPgImg.png'

const DmainPg = () => {
  return (
    <>
    <div className={styles.container} >
          <div className={styles.left} >
                <div className={styles.leftHead}>
                    <h1>Pockect Notes</h1>
                </div>
                <div className={styles.leftBody}>
                  
                    <div className={styles.notesSec} ><div className={styles.NotesDp} ><h1>NM</h1></div><h3 className={styles.NotesName}>Note 1 </h3>
</div>
                  
                    <div className={styles.notesSec} ><div className={styles.NotesDp} ><h1>NM</h1></div><h3 className={styles.NotesName}>Note 1 </h3>
</div>
                  
                    <div className={styles.notesSec} ><div className={styles.NotesDp} ><h1>NM</h1></div><h3 className={styles.NotesName}>Note 1 </h3>
</div>
                  
                    <div className={styles.notesSec} ><div className={styles.NotesDp} ><h1>NM</h1></div><h3 className={styles.NotesName}>Note 1 </h3>
</div>
                    <div className={styles.notesSec} ><div className={styles.NotesDp} ><h1>NM</h1></div><h3 className={styles.NotesName}>Note 1 </h3>
</div>
                    <div className={styles.notesSec} ><div className={styles.NotesDp} ><h1>NM</h1></div><h3 className={styles.NotesName}>Note 1 </h3>
</div>
<div className={styles.notesSec} ><div className={styles.NotesDp} ><h1>NM</h1></div><h3 className={styles.NotesName}>Note 1 </h3>
</div>
                  
                    <div className={styles.notesSec} ><div className={styles.NotesDp} ><h1>NM</h1></div><h3 className={styles.NotesName}>Note 1 </h3>
</div>
                  
                    <div className={styles.notesSec} ><div className={styles.NotesDp} ><h1>NM</h1></div><h3 className={styles.NotesName}>Note 1 </h3>
</div>
                  
                    <div className={styles.notesSec} ><div className={styles.NotesDp} ><h1>NM</h1></div><h3 className={styles.NotesName}>Note 1 </h3>
</div>
                    <div className={styles.notesSec} ><div className={styles.NotesDp} ><h1>NM</h1></div><h3 className={styles.NotesName}>Note 1 </h3>
</div>
                    <div className={styles.notesSec} ><div className={styles.NotesDp} ><h1>NM</h1></div><h3 className={styles.NotesName}>Note 1 </h3>
</div>
                    
                </div>
             <div className={styles.addBtn}>+</div>
          </div>
          <div className={styles.right} >
                  <div className={styles.rightBody} ><img src={bgImg} alt="background image of working peoples" /><h1>Pocket Notes</h1><p>Send and receive messages without keeping your phone online.<br/>
Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p></div>
                  <div className={styles.rightFooter} ><MdLock size={"2rem"}/><h2>end-to-end encrypted</h2></div>

          </div>
    </div>
    <div className={styles.popUp}>
                        
      
    </div>
    </>
  )
}

export default DmainPg