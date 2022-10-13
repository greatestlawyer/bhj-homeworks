
const allDropDownList = Array.from(document.getElementsByClassName('dropdown__value'));
const dropdownLink = Array.from(document.getElementsByClassName('dropdown__link'));

function dropDown() {
    let list = Array.from(document.getElementsByClassName('dropdown__list'));
    if (list[0].className === "dropdown__list") {
        list[0].className = "dropdown__list dropdown__list_active";
    } else {
        list[0].className = "dropdown__list";
    }
    return false;
}

function clickItem(e) {
    let dropdownValue = Array.from(document.getElementsByClassName('dropdown__value'));
    dropdownValue[0].textContent = this.textContent;
    e.preventDefault();
    dropDown();
}

allDropDownList[0].addEventListener('click', dropDown);

for (let i = 0; i < dropdownLink.length; i++) {
    dropdownLink[i].addEventListener('click', clickItem);
}

