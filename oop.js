class Show{
    static    showNote(el){
       
    const note = document.createElement("div");
    note.className = "note";
    note.innerHTML =  ` <div class="bg-dark-subtle p-2 text-end">
            <button class="edit border border-0  bg-dark-subtle fs-4 text-white"><i class="bi bi-pencil-square"></i></button>
            <button class="delete border border-0 bg-dark-subtle text-white fs-4"><i class="bi bi-trash3"></i></button>
        </div>
        <textarea class="txt bg-light border border-0 " style="width: 350px; height: 350px;  " >
             
         </textarea> 
        ` ;
        document.querySelector(".container").appendChild(note)
    
        const textarea = note.querySelector(".txt");
        if(el){
            textarea.value = el
        }
        textarea.addEventListener("input", ()=>{
         
    Store.storeAllvalue()
        })
        
        Show.toolsFunc()
       
      }
    
     
    
     
    static toolsFunc(){

        const notes = document.querySelectorAll(".note");

notes.forEach((note )=>{

note.addEventListener("click", (e)=>{

if(e.target.parentElement.classList.contains("edit")){
  
  Show.editFunc(note)
}
if(e.target.parentElement.classList.contains("delete")){
   Show.deleteFunc(note)
}

})
})

    }
    static editFunc(note){
        note.querySelector(".txt").focus();  
    }
    
static deleteFunc(note){
    let listnotes  =  Store.getAllnotes();
    listnotes = listnotes.filter((el)=> el !== note.querySelector(".txt").value)
localStorage.setItem("notes" , JSON.stringify(listnotes))

note.remove()


}


}
    
    
    

class Store{

static getAllnotes(){
    let listnotes  = JSON.parse(localStorage.getItem("notes"))||[];

   
    return listnotes;
}

static displayAllnotes(){
    const listnotes  =  Store.getAllnotes();
    if(listnotes){
        
        listnotes.forEach(el=>{
           
     Show.showNote(el)
         })
      }

}

static storeAllvalue(){
    
    const alltextArea = document.querySelectorAll(".txt")
   
  const listnotes  =  Store.getAllnotes();
  
 
  alltextArea.forEach((txt, idx)=>{
        
    
        listnotes[idx] = txt.value;
    
   
})

localStorage.setItem("notes" , JSON.stringify(listnotes))

}


}



Store.getAllnotes()
Store.displayAllnotes()

document.querySelector(".addbtn").addEventListener("click", ()=>{

Show.showNote()
    
}) 
 