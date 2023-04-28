interface PaginationProps {
    pageHandle: (jump: number | string) => any,
    lastPage: number,
    current_page: number,
    disableButtonColor: string,
    buttonBgColor: string,
    buttonTextColor: string,
    buttonTextHoverColor: string,
    buttonHoverColor: string,
    borderColor: string,
    borderWidth: number,
    buttonSize: number,
    font: number,
    rounded: true | false,
    arrowButtonShow: true | false
}

const Style_one_without_dot_pagination = ({
    pageHandle,
    current_page,
    lastPage,
    disableButtonColor = '#3ABFF8',
    buttonBgColor = 'white',
    buttonTextColor = 'black',
    buttonTextHoverColor = 'white',
    buttonHoverColor = 'blue',
    borderColor = 'blue',
    borderWidth = 1,
    buttonSize = 32,
    font = 18,
    rounded = false,
    arrowButtonShow = false
}: PaginationProps) => {

    //  For main div
    const PaginationMainDiv = document.createElement('div');
    PaginationMainDiv.setAttribute('class', 'pagination-srakib')

    //2nd div
    const secondDiv = document.createElement('div');
    secondDiv.setAttribute('class', 'button-group')



    function standardize_color(str: string) {
        const ctx: any = document.createElement("canvas").getContext("2d");
        ctx.fillStyle = str;
        const hex2rgba = (hex: any, alpha = 1) => {
            const [r, g, b] = hex.match(/\w\w/g).map((x: any) => parseInt(x, 16));
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

    const buttonGenerate = ({ className, style, html, mode = '', value }: { className: string, style: any, html: any, mode: string, value: string | number }) => {
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
            button.onmouseleave = (event: any) => {
                event.target.style.backgroundColor = style.buttonBgColor;
                event.target.style.color = style.buttonTextColor;
            }
            button.onmouseenter = (event: any) => {
                event.target.style.backgroundColor = style.buttonHoverColor;
                event.target.style.color = (Boolean(style.buttonTextHoverColor) ? style.buttonTextHoverColor : style.buttonTextColor);
            }
            button.onclick = () => {
                pageHandle(value)
            }
        }

        secondDiv.appendChild(button)
    }

    const getPageArray = lastPage > 10 ? [...Array(lastPage).keys()].slice((
        (current_page - 5 <= 0 ? 0 : current_page - 5)
    ),
        (current_page - 5 >= 0 ? current_page + 4 : 10)
    ) : [...Array(lastPage).keys()]


    if (current_page >= 6 && current_page != 1 && arrowButtonShow) {
        buttonGenerate({
            className: "button buttonPage",
            style: buttonStyle,
            html: svgLeft,
            value: (current_page - 1),
            mode: ''
        })
    }

    if (current_page >= 6) {
        buttonGenerate({
            className: "button buttonPage",
            style: buttonStyle,
            html: 1,
            value: 1,
            mode: ''
        })
    }
    for (const index of getPageArray) {
        if (current_page == index + 1) {
            buttonGenerate({
                className: "button buttonDisable",
                style: buttonStyle,
                html: index + 1,
                value: index + 1,
                mode: 'disable'
            })
        }
        else {
            buttonGenerate({
                className: "button buttonPage",
                style: buttonStyle,
                html: index + 1,
                value: index + 1,

                mode: ''
            })
        }
    }


    if (lastPage - 3 >= current_page && arrowButtonShow) {
        buttonGenerate({
            className: "button buttonPage",
            style: buttonStyle,
            html: lastPage,
            value: lastPage,
            mode: ''
        })
    }
    if (lastPage - 3 >= current_page && arrowButtonShow) {
        buttonGenerate({
            className: "button buttonPage",
            style: buttonStyle,
            html: svgRight,
            value: current_page + 1,
            mode: ''
        })
    }
    return PaginationMainDiv
    // document.body.appendChild(PaginationMainDiv)

};

export { Style_one_without_dot_pagination };