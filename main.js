const addBtn = document.querySelector(".addbtn");

const container = document.querySelector(".container")
 let listnotes  = JSON.parse(localStorage.getItem("notes"))||[];

 if(listnotes){
   // console.log(listnotes)
    listnotes.forEach(el=>{
showNote(el)
    })
 }

addBtn.addEventListener("click", ()=>{

showNote()

}) 


function showNote(el){

const note = document.createElement("div");
note.className = "note";
note.innerHTML =  ` <div class="bg-dark-subtle p-2 text-end">
        <button class="edit border border-0  bg-dark-subtle fs-4 text-white"><i class="bi bi-pencil-square"></i></button>
        <button class="delete border border-0 bg-dark-subtle text-white fs-4"><i class="bi bi-trash3"></i></button>
    </div>
    <textarea class="txt bg-light border border-0 " style="width: 350px; height: 350px;  " >
         
     </textarea> 
    ` ;
container.appendChild(note)

    const textarea = note.querySelector(".txt");
    if(el){
        textarea.value = el
    }
    textarea.addEventListener("input", ()=>{

alltextarea()
    })
   

toolsFunc()



}

function toolsFunc(){
const notes = document.querySelectorAll(".note");

notes.forEach((note )=>{

note.addEventListener("click", (e)=>{

if(e.target.parentElement.classList.contains("edit")){
  
   editFunc(note)
}
if(e.target.parentElement.classList.contains("delete")){
    deleteFunc(note)
}

})
})


}

function editFunc(note){
    note.querySelector(".txt").focus();  
}


function deleteFunc(note){

    listnotes = listnotes.filter((el)=> el !== note.querySelector(".txt").value)
localStorage.setItem("notes" , JSON.stringify(listnotes))

note.remove()


}



function alltextarea(){

    const textAreaAll = document.querySelectorAll(".txt")
    
    textAreaAll.forEach((txt, idx)=>{
        
    
        listnotes[idx] = txt.value;

    
   })
   

 localStorage.setItem("notes" , JSON.stringify(listnotes))
}
 

