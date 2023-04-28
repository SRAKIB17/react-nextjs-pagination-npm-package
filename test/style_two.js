//  For main div
const PaginationMainDiv = document.createElement('div');
PaginationMainDiv.setAttribute('class', 'pagination-srakib')

//2nd div
const secondDiv = document.createElement('div');
secondDiv.setAttribute('class', 'button-group')

let borderColor = '#00BCD4'
let borderWidth = 1
let buttonBgColor = 'white'
let buttonTextColor = 'black'
let buttonSize = 32
let font = 534;
let rounded = true

let disableButtonColor = '#00BCD4'
let buttonHoverColor = '#00BCD4'
let buttonTextHoverColor = 'white'

let current_page = 8;
let arrowButtonShow = true
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


const svgRight =
    `
<svg viewBox="0 0 26 26"
   height='8'
    width='8'
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M19.1552734,12.4697266l-11.25-11.25c-0.2929688-0.2929688-0.7675781-0.2929688-1.0605469,0  s-0.2929688,0.7675781,0,1.0605469L17.5644531,13L6.8447266,23.7197266c-0.2929688,0.2929688-0.2929688,0.7675781,0,1.0605469  C6.9912109,24.9267578,7.1826172,25,7.375,25s0.3837891-0.0732422,0.5302734-0.2197266l11.25-11.25  C19.4482422,13.2373047,19.4482422,12.7626953,19.1552734,12.4697266z" stroke="currentColor" stroke-width="2" />
</svg>
`
const svgLeft =
    `
<svg viewBox="0 0 26 26"
    height='8'
    width='8'
    xmlns="http://www.w3.org/2000/svg"
    style='transform: rotate(180deg)'
>
    <path
        d="M19.1552734,12.4697266l-11.25-11.25c-0.2929688-0.2929688-0.7675781-0.2929688-1.0605469,0  s-0.2929688,0.7675781,0,1.0605469L17.5644531,13L6.8447266,23.7197266c-0.2929688,0.2929688-0.2929688,0.7675781,0,1.0605469  C6.9912109,24.9267578,7.1826172,25,7.375,25s0.3837891-0.0732422,0.5302734-0.2197266l11.25-11.25  C19.4482422,13.2373047,19.4482422,12.7626953,19.1552734,12.4697266z" stroke="currentColor" stroke-width="2" />
</svg>
`

const buttonGenerate = ({ className, style, html, mode, pageHandleFunction, value }) => {
    let button = document.createElement('button')
    button.setAttribute('class', className)
    button.style.borderColor = style.borderColor
    button.style.borderWidth = style.borderWidth + 'px';
    button.style.backgroundColor = (mode == 'disable' ? style.disableButtonColor : style.buttonBgColor);
    button.style.color = (mode == 'disable' ? style.buttonTextHoverColor : style.buttonTextColor);
    button.style.height = style.buttonSize + 'px'
    button.style.paddingLeft = style.buttonSize - 20 + 'px';
    button.style.paddingRight = style.buttonSize - 20 + 'px';
    button.style.fontSize = style.fontSize + 'px';
    button.innerHTML = html
    if (rounded) {
        button.style.borderRadius = '1000px'
        button.style.margin = '4px'
    }
    button.style.width = 'fit'


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


let lastPage = 15
const getPageArray = lastPage > 10 ? [...Array(lastPage).keys()].slice((
    (current_page - 3 <= 0 ? 0 : current_page - 3)
),
    (current_page - 3 >= 0 ? current_page + 3 : 6)
) : [...Array(lastPage).keys()]

// For svg 
if (lastPage - 5 >= current_page) {

    if (current_page >= 3 && current_page != 1 && arrowButtonShow) {
        buttonGenerate({
            className: "button buttonPage",
            style: buttonStyle,
            html: svgLeft,
            value: (current_page - 1),
            pageHandleFunction: pageHandleFunction
        })
    }

    if (current_page >= 3) {
        buttonGenerate({
            className: "button buttonPage",
            style: buttonStyle,
            html: 1,
            value: 1,
            pageHandleFunction: pageHandleFunction
        })
    }
    // For two page
    if (current_page >= 4) {
        buttonGenerate({
            className: "button buttonPage",
            style: buttonStyle,
            html: 2,
            value: 2,
            pageHandleFunction: pageHandleFunction
        })
    }

    if (current_page >= 4) {
        buttonGenerate({
            className: "button buttonDisable",
            style: buttonStyle,
            html: '...',
            value: 2,
            mode: 'disable'
        })
    }
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
        // if (lastPage - 5 <= current_page) {
        buttonGenerate({
            className: "button buttonPage",
            style: buttonStyle,
            html: index + 1,
            value: index + 1,
            pageHandleFunction: pageHandleFunction
        })
        // }
    }
}
if (lastPage > 10) {

    if (lastPage - 5 > current_page) {
        buttonGenerate({
            className: "button buttonDisable",
            style: buttonStyle,
            html: '...',
            value: 2,
            mode: 'disable'
        })
    }


    if (lastPage - 4 >= current_page && arrowButtonShow) {
        buttonGenerate({
            className: "button buttonPage",
            style: buttonStyle,
            html: lastPage,
            value: lastPage,
            pageHandleFunction: pageHandleFunction
        })
    }
    if (lastPage - 4 >= current_page && arrowButtonShow) {
        buttonGenerate({
            className: "button buttonPage",
            style: buttonStyle,
            html: svgRight,
            value: current_page + 1,
            pageHandleFunction: pageHandleFunction
        })
    }
}
PaginationMainDiv.appendChild(secondDiv)
document.body.appendChild(PaginationMainDiv)





