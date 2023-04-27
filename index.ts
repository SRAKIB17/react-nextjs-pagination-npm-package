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
}: PaginationProps) => {
    // for Each
    const PaginationMainDiv = document.createElement('div');
    console.log(PaginationMainDiv)
    return PaginationMainDiv
};
Pagination({
    lastPage: 34,
    current_page: 2,
    pageHandle: (jump: string) => {
        console.log(jump)
    }
})
export default Pagination;