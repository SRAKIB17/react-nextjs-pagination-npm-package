"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Style_two_dot_pagination = void 0;
var Style_two_dot_pagination = function (_a) {
    var pageHandle = _a.pageHandle, current_page = _a.current_page, lastPage = _a.lastPage, _b = _a.disableButtonColor, disableButtonColor = _b === void 0 ? '#3ABFF8' : _b, _c = _a.buttonBgColor, buttonBgColor = _c === void 0 ? 'white' : _c, _d = _a.buttonTextColor, buttonTextColor = _d === void 0 ? 'black' : _d, _e = _a.buttonTextHoverColor, buttonTextHoverColor = _e === void 0 ? 'white' : _e, _f = _a.buttonHoverColor, buttonHoverColor = _f === void 0 ? 'blue' : _f, _g = _a.borderColor, borderColor = _g === void 0 ? 'blue' : _g, _h = _a.borderWidth, borderWidth = _h === void 0 ? 1 : _h, _j = _a.buttonSize, buttonSize = _j === void 0 ? 32 : _j, _k = _a.font, font = _k === void 0 ? 18 : _k, _l = _a.rounded, rounded = _l === void 0 ? false : _l, _m = _a.arrowButtonShow, arrowButtonShow = _m === void 0 ? false : _m;
    //  For main div
    var PaginationMainDiv = document.createElement('div');
    PaginationMainDiv.setAttribute('class', 'pagination-srakib');
    //2nd div
    var secondDiv = document.createElement('div');
    secondDiv.setAttribute('class', 'button-group');
    function standardize_color(str) {
        var ctx = document.createElement("canvas").getContext("2d");
        ctx.fillStyle = str;
        var hex2rgba = function (hex, alpha) {
            if (alpha === void 0) { alpha = 1; }
            var _a = hex.match(/\w\w/g).map(function (x) { return parseInt(x, 16); }), r = _a[0], g = _a[1], b = _a[2];
            return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(alpha, ")");
        };
        return hex2rgba(ctx.fillStyle);
    }
    var buttonStyle = {
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
    };
    var svgRight = "\n<svg viewBox=\"0 0 26 26\"\n   height='8'\n    width='8'\n    xmlns=\"http://www.w3.org/2000/svg\"\n>\n    <path\n        d=\"M19.1552734,12.4697266l-11.25-11.25c-0.2929688-0.2929688-0.7675781-0.2929688-1.0605469,0  s-0.2929688,0.7675781,0,1.0605469L17.5644531,13L6.8447266,23.7197266c-0.2929688,0.2929688-0.2929688,0.7675781,0,1.0605469  C6.9912109,24.9267578,7.1826172,25,7.375,25s0.3837891-0.0732422,0.5302734-0.2197266l11.25-11.25  C19.4482422,13.2373047,19.4482422,12.7626953,19.1552734,12.4697266z\" stroke=\"currentColor\" stroke-width=\"2\" />\n</svg>\n";
    var svgLeft = "\n<svg viewBox=\"0 0 26 26\"\n    height='8'\n    width='8'\n    xmlns=\"http://www.w3.org/2000/svg\"\n    style='transform: rotate(180deg)'\n>\n    <path\n        d=\"M19.1552734,12.4697266l-11.25-11.25c-0.2929688-0.2929688-0.7675781-0.2929688-1.0605469,0  s-0.2929688,0.7675781,0,1.0605469L17.5644531,13L6.8447266,23.7197266c-0.2929688,0.2929688-0.2929688,0.7675781,0,1.0605469  C6.9912109,24.9267578,7.1826172,25,7.375,25s0.3837891-0.0732422,0.5302734-0.2197266l11.25-11.25  C19.4482422,13.2373047,19.4482422,12.7626953,19.1552734,12.4697266z\" stroke=\"currentColor\" stroke-width=\"2\" />\n</svg>\n";
    var buttonGenerate = function (_a) {
        var className = _a.className, style = _a.style, html = _a.html, _b = _a.mode, mode = _b === void 0 ? '' : _b, value = _a.value;
        var button = document.createElement('button');
        button.setAttribute('class', className);
        button.style.borderColor = style.borderColor;
        button.style.borderWidth = style.borderWidth + 'px';
        button.style.backgroundColor = (mode == 'disable' ? style.disableButtonColor : style.buttonBgColor);
        button.style.color = (mode == 'disable' ? style.buttonTextHoverColor : style.buttonTextColor);
        button.style.height = style.buttonSize + 'px';
        button.style.paddingLeft = style.buttonSize - 20 + 'px';
        button.style.paddingRight = style.buttonSize - 20 + 'px';
        button.style.fontSize = style.fontSize + 'px';
        button.innerHTML = html;
        if (rounded) {
            button.style.borderRadius = '1000px';
            button.style.margin = '4px';
        }
        button.style.width = 'fit';
        if (!(mode == 'disable')) {
            button.onmouseleave = function (event) {
                event.target.style.backgroundColor = style.buttonBgColor;
                event.target.style.color = style.buttonTextColor;
            };
            button.onmouseenter = function (event) {
                event.target.style.backgroundColor = style.buttonHoverColor;
                event.target.style.color = (Boolean(style.buttonTextHoverColor) ? style.buttonTextHoverColor : style.buttonTextColor);
            };
            button.onclick = function () {
                pageHandle(value);
            };
        }
        secondDiv.appendChild(button);
    };
    var getPageArray = lastPage > 10 ? __spreadArray([], Array(lastPage).keys(), true).slice(((current_page - 3 <= 0 ? 0 : current_page - 3)), (current_page - 3 >= 0 ? current_page + 3 : 6)) : __spreadArray([], Array(lastPage).keys(), true);
    // For svg 
    if (lastPage - 5 >= current_page) {
        if (current_page >= 3 && current_page != 1 && arrowButtonShow) {
            buttonGenerate({
                className: "button buttonPage",
                style: buttonStyle,
                html: svgLeft,
                value: (current_page - 1),
                mode: '',
            });
        }
        if (current_page >= 3) {
            buttonGenerate({
                className: "button buttonPage",
                style: buttonStyle,
                html: 1,
                value: 1,
                mode: '',
            });
        }
        // For two page
        if (current_page >= 4) {
            buttonGenerate({
                className: "button buttonPage",
                style: buttonStyle,
                html: 2,
                value: 2,
                mode: '',
            });
        }
        if (current_page >= 4) {
            buttonGenerate({
                className: "button buttonDisable",
                style: buttonStyle,
                html: '...',
                value: 2,
                mode: 'disable',
            });
        }
    }
    for (var _i = 0, getPageArray_1 = getPageArray; _i < getPageArray_1.length; _i++) {
        var index = getPageArray_1[_i];
        if (current_page == index + 1) {
            buttonGenerate({
                className: "button buttonDisable",
                style: buttonStyle,
                html: index + 1,
                value: index + 1,
                mode: 'disable'
            });
        }
        else {
            // if (lastPage - 5 <= current_page) {
            buttonGenerate({
                className: "button buttonPage",
                style: buttonStyle,
                html: index + 1,
                value: index + 1,
                mode: '',
            });
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
            });
        }
        if (lastPage - 4 >= current_page && arrowButtonShow) {
            buttonGenerate({
                className: "button buttonPage",
                style: buttonStyle,
                html: lastPage,
                value: lastPage,
                mode: '',
            });
        }
        if (lastPage - 4 >= current_page && arrowButtonShow) {
            buttonGenerate({
                className: "button buttonPage",
                style: buttonStyle,
                html: svgRight,
                value: current_page + 1,
                mode: '',
            });
        }
    }
    PaginationMainDiv.appendChild(secondDiv);
    return PaginationMainDiv;
    // document.body.appendChild(PaginationMainDiv)
};
exports.Style_two_dot_pagination = Style_two_dot_pagination;
