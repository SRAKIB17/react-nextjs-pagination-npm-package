//  For main div
const PaginationMainDiv = document.createElement('div');
PaginationMainDiv.setAttribute('class', 'pagination-srakib')

//2nd div
const secondDiv = document.createElement('div');
secondDiv.setAttribute('class', 'button-group')

let borderColor = '#00BCD4'
let borderWidth = 1
let buttonBgColor = 'gold'
let buttonTextColor = 'black'
let buttonSize = 32
let font = 534;

let disableButtonColor = '#00BCD4'
let buttonHoverColor = '#00BCD4'
let buttonTextHoverColor = 'white'

let current_page = 6
const pageHandleFunction = (jump) => {
    console.log(jump)
}


function standardize_color(str) {
    var ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = str;
    const hex2rgba = (hex, alpha = 1) => {
        const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
        return `rgba(${r},${g},${b},${alpha})`;
    };
    return hex2rgba(ctx.fillStyle);
}

let buttonStyle = {
    borderColor: standardize_color(borderColor),
    borderWidth: borderWidth,
    buttonBgColor: standardize_color(buttonBgColor),
    buttonTextColor: standardize_color(buttonTextColor),
    buttonSize: buttonSize,
    font: font,

    disableButtonColor: standardize_color(disableButtonColor),

    // for hover
    buttonHoverColor: standardize_color(buttonHoverColor),
    buttonTextHoverColor: standardize_color(buttonTextHoverColor),

}

const buttonGenerate = ({ className, style, html, mode, pageHandleFunction, value }) => {
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


    if (!(mode == 'disable')) {
        button.onmouseleave = (event) => {
            event.target.style.backgroundColor = style.buttonBgColor;
            event.target.style.color = style.buttonTextColor;
        }
        button.onmouseenter = (event) => {
            event.target.style.backgroundColor = style.buttonHoverColor;
            event.target.style.color = (Boolean(style.buttonTextHoverColor) ? style.buttonTextHoverColor : style.buttonTextColor);
        }
        button.onclick = () => {
            pageHandleFunction(value)
        }
    }

    secondDiv.appendChild(button)
}


let lastPage = 100
const getPageArray = lastPage > 10 ? [...Array(lastPage).keys()].slice((
    (current_page - 5 <= 0 ? 0 : current_page - 5)
),
    (current_page - 5 >= 0 ? current_page + 4 : 10)
) : [...Array(lastPage).keys()]


if (current_page >= 6) {
    buttonGenerate({
        className: "button buttonPage",
        style: buttonStyle,
        html: 1,
        value: 1,
        pageHandleFunction: pageHandleFunction
    })
}
for (const index of getPageArray) {
    if (current_page == index + 1) {
        buttonGenerate({
            className: "button buttonDisable",
            style: buttonStyle,
            html: index + 1,
            value: index + 1,
            pageHandleFunction: pageHandleFunction,
            mode: 'disable'
        })
    }
    else {
        buttonGenerate({
            className: "button buttonPage",
            style: buttonStyle,
            html: index + 1,
            value: index + 1,
            pageHandleFunction: pageHandleFunction
        })
    }
}


if (lastPage - 3 >= current_page) {
    buttonGenerate({
        className: "button buttonPage",
        style: buttonStyle,
        html: lastPage,
        value: lastPage,
        pageHandleFunction: pageHandleFunction
    })
}

PaginationMainDiv.appendChild(secondDiv)
document.body.appendChild(PaginationMainDiv)
console.log(PaginationMainDiv)




