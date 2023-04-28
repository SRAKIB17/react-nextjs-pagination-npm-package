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

    return (
        <div className='pagination-srakib'>
            <div className="button-group">

                {/* 
                
                1. WHEN PAGE NUMBER 1 IT HIDE 
                2. WHEN PAGE > 3 IT SHOW BUT 
                3. WHEN PAGE == 4 HIDE => THREE PAGE BUTTON. BECAUSE DOUBLE SHOW 3;
                4. WHEN PAGE > 5 => SHOW (.....) BUTTON. BECAUSE FOUR BUTTON HIDE INSTANTLY

             */}

                {
                    //  CASE: 01 AND 02
                    current_page > 3 &&
                    <>
                        <button
                            onClick={() => pageHandle(1)}
                            className="button buttonPage"
                            style={{
                                borderColor: borderColor,
                                borderWidth: borderWidth + 'px',
                                backgroundColor: buttonBgColor,
                                color: buttonTextColor,
                                height: buttonSize + 'px',
                                paddingLeft: buttonSize - 20 + 'px',
                                paddingRight: buttonSize - 20 + 'px',
                                fontSize: font + 'px'
                            }}
                            onMouseLeave={(event: { target: { style: { backgroundColor: string; color: string; }; }; }) => {
                                event.target.style.backgroundColor = buttonBgColor;
                                event.target.style.color = buttonTextColor;
                            }}
                            onMouseEnter={(event) => {
                                event.target.style.backgroundColor = buttonHoverColor;
                                event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
                            }}
                        >
                            {1}
                        </button>

                        <button
                            onClick={() => pageHandle(2)}
                            className="button buttonPage"
                            style={{
                                borderColor: borderColor,
                                borderWidth: borderWidth + 'px',
                                backgroundColor: buttonBgColor,
                                color: buttonTextColor,
                                height: buttonSize + 'px',
                                paddingLeft: buttonSize - 20 + 'px',
                                paddingRight: buttonSize - 20 + 'px',
                                fontSize: font + 'px'
                            }}
                            onMouseLeave={(event) => {
                                event.target.style.backgroundColor = buttonBgColor;
                                event.target.style.color = buttonTextColor;
                            }}
                            onMouseEnter={(event) => {
                                event.target.style.backgroundColor = buttonHoverColor;
                                event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
                            }}
                        >
                            {2}
                        </button>
                        {/* ********************* */}
                        {
                            // CASE: 03
                            current_page == 4 ||
                            <button
                                onClick={() => pageHandle(3)}
                                className="button buttonPage"
                                style={{
                                    borderColor: borderColor,
                                    borderWidth: borderWidth + 'px',
                                    backgroundColor: buttonBgColor,
                                    color: buttonTextColor,
                                    height: buttonSize + 'px',
                                    paddingLeft: buttonSize - 20 + 'px',
                                    paddingRight: buttonSize - 20 + 'px',
                                    fontSize: font + 'px'
                                }}
                                onMouseLeave={(event) => {
                                    event.target.style.backgroundColor = buttonBgColor;
                                    event.target.style.color = buttonTextColor;
                                }}
                                onMouseEnter={(event) => {
                                    event.target.style.backgroundColor = buttonHoverColor;
                                    event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
                                }}
                            >
                                {3}
                            </button>
                        }
                        {/* ********************** */}
                        {
                            // CASE: 04
                            current_page > 5 &&
                            <button
                                className="button buttonPage"
                                style={{
                                    borderColor: borderColor,
                                    borderWidth: borderWidth + 'px',
                                    backgroundColor: buttonBgColor,
                                    color: buttonTextColor,
                                    height: buttonSize + 'px',
                                    paddingLeft: buttonSize - 20 + 'px',
                                    paddingRight: buttonSize - 20 + 'px',
                                    fontSize: font + 'px'
                                }}
                            >
                                ...
                            </button>
                        }
                    </>
                }
                {/* 

                    O5. WHEN PAGE > 1 => BUTTON SHOW (page - 1);

                */}


                {/* <a href="#"
                    onmouseover="this.style.textDecoration = 'none'"
                    onmouseout="this.style.textDecoration = 'underline'">Hello</a> */}

                {/* *******CURRENT PAGE AND DISABLE BUTTON********** */}
                <button
                    className=" buttonDisable button "
                    style={{
                        borderColor: borderColor,
                        borderWidth: borderWidth + 'px',
                        backgroundColor: disableButtonColor,
                        color: buttonTextColor,
                        height: buttonSize + 'px',
                        paddingLeft: buttonSize - 20 + 'px',
                        paddingRight: buttonSize - 20 + 'px',
                        fontSize: font + 'px'
                    }}
                    onMouseLeave={(event) => {
                        event.target.style.backgroundColor = buttonBgColor;
                        event.target.style.color = buttonTextColor;
                    }}
                    onMouseEnter={(event) => {
                        event.target.style.backgroundColor = buttonHoverColor;
                        event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
                    }}
                >
                    {current_page}
                </button>

                {/* 

                    06. WHEN PAGE == LAST PAGE OR PAGE == LAST PAGE -3 => FALSE THEN THIS BUTTON SHOW....

                */}
                {
                    //CASE: 06;
                    current_page == lastPage || current_page == lastPage - 3 ||
                    <>
                        <button
                            onClick={() => pageHandle(current_page + 1)}
                            className="button buttonPage"
                            style={{
                                borderColor: borderColor,
                                borderWidth: borderWidth + 'px',
                                backgroundColor: buttonBgColor,
                                color: buttonTextColor,
                                height: buttonSize + 'px',
                                paddingLeft: buttonSize - 20 + 'px',
                                paddingRight: buttonSize - 20 + 'px',
                                fontSize: font + 'px'
                            }}
                            onMouseLeave={(event) => {
                                event.target.style.backgroundColor = buttonBgColor;
                                event.target.style.color = buttonTextColor;
                            }}
                            onMouseEnter={(event) => {
                                event.target.style.backgroundColor = buttonHoverColor;
                                event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
                            }}
                        >
                            {current_page + 1}
                        </button>

                        {/* 
                            07. WHEN PAGE >= LAST PAGE - 2 OR PAGE == LAST PAGE - 4 => FALSE THEN THIS BUTTON SHOW
                        
                        */}
                        {
                            //CASE: 07
                            current_page >= lastPage - 2 || current_page == lastPage - 4 ||
                            <button
                                style={{
                                    borderColor: borderColor,
                                    borderWidth: borderWidth + 'px',
                                    backgroundColor: disableButtonColor,
                                    color: buttonTextColor,
                                    height: buttonSize + 'px',
                                    paddingLeft: buttonSize - 20 + 'px',
                                    paddingRight: buttonSize - 20 + 'px',
                                    fontSize: font + 'px'
                                }}
                                className=" buttonDisable  button "
                            >
                                ...
                            </button>
                        }
                    </>
                }

                {
                    current_page < lastPage - 2 &&
                    <>
                        <button
                            onClick={() => pageHandle(lastPage - 2)}
                            className="button buttonPage"
                            style={{
                                borderColor: borderColor,
                                borderWidth: borderWidth + 'px',
                                backgroundColor: buttonBgColor,
                                color: buttonTextColor,
                                height: buttonSize + 'px',
                                paddingLeft: buttonSize - 20 + 'px',
                                paddingRight: buttonSize - 20 + 'px',
                                fontSize: font + 'px'
                            }}
                            onMouseLeave={(event) => {
                                event.target.style.backgroundColor = buttonBgColor;
                                event.target.style.color = buttonTextColor;
                            }}
                            onMouseEnter={(event) => {
                                event.target.style.backgroundColor = buttonHoverColor;
                                event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
                            }}
                        >
                            {lastPage - 2}
                        </button>
                        <button
                            onClick={() => pageHandle(lastPage - 1)}
                            className="button buttonPage"
                            style={{
                                borderColor: borderColor,
                                borderWidth: borderWidth + 'px',
                                backgroundColor: buttonBgColor,
                                color: buttonTextColor,
                                height: buttonSize + 'px',
                                paddingLeft: buttonSize - 20 + 'px',
                                paddingRight: buttonSize - 20 + 'px',
                                fontSize: font + 'px'
                            }}
                            onMouseLeave={(event) => {
                                event.target.style.backgroundColor = buttonBgColor;
                                event.target.style.color = buttonTextColor;
                            }}
                            onMouseEnter={(event) => {
                                event.target.style.backgroundColor = buttonHoverColor;
                                event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
                            }}
                        >
                            {lastPage - 1}
                        </button>
                        <button
                            onClick={() => pageHandle(lastPage)}
                            style={{
                                borderColor: borderColor,
                                borderWidth: borderWidth + 'px',
                                backgroundColor: buttonBgColor,
                                color: buttonTextColor,
                                height: buttonSize + 'px',
                                paddingLeft: buttonSize - 20 + 'px',
                                paddingRight: buttonSize - 20 + 'px',
                                fontSize: font + 'px'
                            }}
                            onMouseLeave={(event) => {
                                event.target.style.backgroundColor = buttonBgColor;
                                event.target.style.color = buttonTextColor;
                            }}
                            onMouseEnter={(event) => {
                                event.target.style.backgroundColor = buttonHoverColor;
                                event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
                            }}
                            className="button buttonPage"
                        >
                            {lastPage}
                        </button>

                    </>
                }
                {
                    lastPage - 2 == current_page &&
                    <button
                        onClick={() => pageHandle(lastPage)}
                        className="button buttonPage"
                        style={{
                            borderColor: borderColor,
                            borderWidth: borderWidth + 'px',
                            backgroundColor: buttonBgColor,
                            color: buttonTextColor,
                            height: buttonSize + 'px',
                            paddingLeft: buttonSize - 20 + 'px',
                            paddingRight: buttonSize - 20 + 'px',
                            fontSize: font + 'px'
                        }}
                        onMouseLeave={(event) => {
                            event.target.style.backgroundColor = buttonBgColor;
                            event.target.style.color = buttonTextColor;
                        }}
                        onMouseEnter={(event) => {
                            event.target.style.backgroundColor = buttonHoverColor;
                            event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
                        }}
                    >
                        {lastPage}
                    </button>
                }

            </div>
        </div>
    );
};

export default Pagination;