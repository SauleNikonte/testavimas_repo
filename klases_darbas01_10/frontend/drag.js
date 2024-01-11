console.log("veikiu")

let dragElement;
const allDragableElements = document.querySelectorAll(".draggable");
const dropZone = document.querySelectorAll(".dropzone");

    for (const element of allDragableElements){
element.addEventListener('dragstart', (event) => {
    dragElement = event.target;
});
    };
    cor (const dropZone of dropZones)
    {dropZone.addEventListener("dragover" , (event) =>{
        event.preventDefault();
    });
dropZone.addEventListener("dragenter", (event) =>{
    if (event.target.classList.contains("dropzone")){
        event.target
    }
})
dropZone.addEventListener.remove("dragover");
dropZone.addEventListener.("drop", (event) =>)
event.preventDefault();
if (event.target.classList.contains)
    }
