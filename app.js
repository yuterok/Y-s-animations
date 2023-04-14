const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        console.log(blockID)
        if (blockID == '#skills'){
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "end"
            })
        } else {
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    })
}
console.log(anchors)