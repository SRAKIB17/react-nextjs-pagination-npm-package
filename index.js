"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Style_two_dot_pagination_1 = require("./Style_two_dot_pagination");
var style_one_without_dot_pagination_1 = require("./style_one_without_dot_pagination");
var Pagination = function (_a) {
    var pageHandle = _a.pageHandle, current_page = _a.current_page, lastPage = _a.lastPage, _b = _a.disableButtonColor, disableButtonColor = _b === void 0 ? '#3ABFF8' : _b, _c = _a.buttonBgColor, buttonBgColor = _c === void 0 ? 'white' : _c, _d = _a.buttonTextColor, buttonTextColor = _d === void 0 ? 'black' : _d, _e = _a.buttonTextHoverColor, buttonTextHoverColor = _e === void 0 ? 'white' : _e, _f = _a.buttonHoverColor, buttonHoverColor = _f === void 0 ? 'blue' : _f, _g = _a.borderColor, borderColor = _g === void 0 ? 'blue' : _g, _h = _a.borderWidth, borderWidth = _h === void 0 ? 1 : _h, _j = _a.buttonSize, buttonSize = _j === void 0 ? 32 : _j, _k = _a.font, font = _k === void 0 ? 18 : _k, _l = _a.rounded, rounded = _l === void 0 ? false : _l, _m = _a.arrowButtonShow, arrowButtonShow = _m === void 0 ? false : _m, paginationStyle = _a.paginationStyle;
    var getPagination;
    if (paginationStyle == 'style_one_dot') {
        getPagination = (0, Style_two_dot_pagination_1.Style_two_dot_pagination)({ arrowButtonShow: arrowButtonShow, borderColor: borderColor, borderWidth: borderWidth, buttonBgColor: buttonBgColor, buttonHoverColor: buttonHoverColor, buttonSize: buttonSize, buttonTextColor: buttonTextColor, buttonTextHoverColor: buttonTextHoverColor, current_page: current_page, disableButtonColor: disableButtonColor, font: font, lastPage: lastPage, pageHandle: pageHandle, rounded: rounded });
    }
    else {
        getPagination = (0, style_one_without_dot_pagination_1.Style_one_without_dot_pagination)({ arrowButtonShow: arrowButtonShow, borderColor: borderColor, borderWidth: borderWidth, buttonBgColor: buttonBgColor, buttonHoverColor: buttonHoverColor, buttonSize: buttonSize, buttonTextColor: buttonTextColor, buttonTextHoverColor: buttonTextHoverColor, current_page: current_page, disableButtonColor: disableButtonColor, font: font, lastPage: lastPage, pageHandle: pageHandle, rounded: rounded });
    }
    return getPagination;
};
exports.default = Pagination;
