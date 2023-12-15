import { nanoid } from 'nanoid'
import styles from './leftBody.module.css'


export default function LeftBody({notes,setRightDetails,setKey}){

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
    function showRight(e,note){
      setKey(e.target.id)
        setRightDetails(note)
       
        
    }

    return(
      <div className={styles.leftBody}>

        {notes?notes.map((note)=>{ 
         
            let key = Object.keys(note);
           
            let shortForm = toShort(key[0].split(" "));
            return (  <div key={nanoid()} id={Object.keys(note)}  className={styles.notesSec} onClick={(e)=>{showRight(e,note)}} >
                <div style={{backgroundColor:note[key].color}} className={styles.NotesDp}>
                  <h1>{shortForm}</h1>
                </div>
                <h3 className={styles.NotesName}>{key}</h3>
              </div>)
         }):null}                                                      
    </div>
    )
  }