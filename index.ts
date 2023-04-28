import { Style_two_dot_pagination } from "./Style_two_dot_pagination";
import { Style_one_without_dot_pagination } from "./style_one_without_dot_pagination";

interface PaginationPropsMain {
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
    arrowButtonShow: true | false,
    paginationStyle: 'style_one_dot' | 'style_two_dot'
}

const Pagination = ({
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
    arrowButtonShow = false,
    paginationStyle
}: PaginationPropsMain) => {
    let getPagination: HTMLDivElement;
    if (paginationStyle == 'style_one_dot') {
        getPagination = Style_two_dot_pagination({ arrowButtonShow, borderColor, borderWidth, buttonBgColor, buttonHoverColor, buttonSize, buttonTextColor, buttonTextHoverColor, current_page, disableButtonColor, font, lastPage, pageHandle, rounded })
    }
    else {
        getPagination = Style_one_without_dot_pagination({ arrowButtonShow, borderColor, borderWidth, buttonBgColor, buttonHoverColor, buttonSize, buttonTextColor, buttonTextHoverColor, current_page, disableButtonColor, font, lastPage, pageHandle, rounded })
    }
    return getPagination
};

export default Pagination;