
const hasTooltips = Array.from(document.querySelectorAll(".has-tooltip"));


hasTooltips.forEach(hasTooltip => {
    hasTooltip.addEventListener("click", (event) => {
        event.preventDefault();
        
        const height = event.target.offsetHeight;
        const { left, top } = event.target.getBoundingClientRect(event.target);
        event.target.insertAdjacentHTML("afterEnd", `<div class="tooltip" style="left:${left}px; top:${top + height}px">${event.target.getAttribute("title")}</div>`);

        if (event.target.nextElementSibling.classList.contains("tooltip_active")) {
            event.target.nextElementSibling.classList.remove("tooltip_active");
        } else {
            const tooltipsActive = Array.from(document.querySelectorAll(".tooltip_active"));
            tooltipsActive.forEach(tooltipActive => tooltipActive.classList.remove("tooltip_active"));
            event.target.nextElementSibling.classList.add("tooltip_active");
        }
    });
})





//2 ВАРИАНТ
// const allTips = Array.from(document.getElementsByClassName('has-tooltip'));


// function toolTipsActive(e) {
//     e.preventDefault();
//     let deletableElement = document.getElementsByClassName("tooltip tooltip_active")[0];
//     if (deletableElement) {
//         deletableElement.remove();
//     }
//     let tipText = this.title;
//     this.insertAdjacentHTML('afterend', `<div class="tooltip tooltip_active">${tipText}</div>`);
// }



// for (let i = 0; i < allTips.length; i++) {
//     const element = allTips[i];
//     element.addEventListener('click', toolTipsActive);
// }

