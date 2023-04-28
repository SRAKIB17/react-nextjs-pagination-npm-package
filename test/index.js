//  For main div
const PaginationMainDiv = document.createElement('div');
PaginationMainDiv.setAttribute('class', 'pagination-srakib')

//2nd div
const secondDiv = document.createElement('div');
secondDiv.setAttribute('class', 'button-group')

let borderColor = 'red'
let borderWidth = 5
let buttonBgColor = 'blue'
let buttonTextColor = 'white'
let buttonSize = 32
let font = 534;


let current_page = 3
let buttonStyle = {
    borderColor: borderColor,
    borderWidth: borderWidth,
    buttonBgColor: buttonBgColor,
    buttonTextColor: buttonTextColor,
    buttonSize: buttonSize,
    font: font,

    disableButtonColor: 'green',

    // for hover
    buttonHoverColor: 'red',
    buttonTextHoverColor: 'white',

}

const buttonGenerate = ({ className, style, html, mode }) => {
    let button = document.createElement('button')
    button.setAttribute('class', className)
    button.style.borderColor = style.borderColor
    button.style.borderWidth = style.borderWidth + 'px';
    button.style.backgroundColor = (mode == 'disable' ? style.disableButtonColor : style.buttonBgColor);
    button.style.color = style.buttonTextColor;
    button.style.height = style.buttonSize + 'px'
    button.style.paddingLeft = style.buttonSize - 20 + 'px';
    button.style.paddingRight = style.buttonSize - 20 + 'px';
    button.style.fontSize = style.fontSize + 'px';
    button.innerHTML = html
    if (!mode == 'disable') {
        button.onmouseleave = (event) => {
            event.target.style.backgroundColor = style.buttonBgColor;
            event.target.style.color = style.buttonTextColor;
        }
        button.onmouseenter = (event) => {
            event.target.style.backgroundColor = style.buttonHoverColor;
            event.target.style.color = (Boolean(style.buttonTextHoverColor) ? style.buttonTextHoverColor : style.buttonTextColor);
        }
    }
    secondDiv.appendChild(button)
}


//!  when current_page greater three (current_page > 3)


//!  when current_page greater one (current_page > 1)
// * Done

buttonGenerate({
    className: "button buttonPage",
    style: buttonStyle,
    html: current_page - 1,
})

//!  disable button current page 

buttonGenerate({
    className: " buttonDisable button ",
    style: buttonStyle,
    html: current_page,
    mode: 'disable'
})


//! when current_page == lastPage || current_page == lastPage - 3 || then
//? current_page >= lastPage - 2 || current_page == lastPage - 4 || then


//! when current_page < lastPage - 2 && then

//!  when  lastPage - 2 == current_page && then


PaginationMainDiv.appendChild(secondDiv)
document.body.appendChild(PaginationMainDiv)
console.log(PaginationMainDiv)
