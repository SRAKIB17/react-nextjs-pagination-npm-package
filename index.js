"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pagination = function (_a) {
    var pageHandle = _a.pageHandle, current_page = _a.current_page, lastPage = _a.lastPage, _b = _a.disableButtonColor, disableButtonColor = _b === void 0 ? '#3ABFF8' : _b, _c = _a.buttonBgColor, buttonBgColor = _c === void 0 ? 'white' : _c, _d = _a.buttonTextColor, buttonTextColor = _d === void 0 ? 'black' : _d, _e = _a.buttonTextHoverColor, buttonTextHoverColor = _e === void 0 ? 'white' : _e, _f = _a.buttonHoverColor, buttonHoverColor = _f === void 0 ? 'blue' : _f, _g = _a.borderColor, borderColor = _g === void 0 ? 'blue' : _g, _h = _a.borderWidth, borderWidth = _h === void 0 ? 1 : _h, _j = _a.buttonSize, buttonSize = _j === void 0 ? 32 : _j, _k = _a.font, font = _k === void 0 ? 18 : _k;
    return (<div className='pagination-srakib'>
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
                    <button onClick={function () { return pageHandle(1); }} className="button buttonPage" style={{
                        borderColor: borderColor,
                        borderWidth: borderWidth + 'px',
                        backgroundColor: buttonBgColor,
                        color: buttonTextColor,
                        height: buttonSize + 'px',
                        paddingLeft: buttonSize - 20 + 'px',
                        paddingRight: buttonSize - 20 + 'px',
                        fontSize: font + 'px'
                    }} onMouseLeave={function (event) {
                        event.target.style.backgroundColor = buttonBgColor;
                        event.target.style.color = buttonTextColor;
                    }} onMouseEnter={function (event) {
                        event.target.style.backgroundColor = buttonHoverColor;
                        event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
                    }}>
                        {1}
                    </button>

                    <button onClick={function () { return pageHandle(2); }} className="button buttonPage" style={{
                        borderColor: borderColor,
                        borderWidth: borderWidth + 'px',
                        backgroundColor: buttonBgColor,
                        color: buttonTextColor,
                        height: buttonSize + 'px',
                        paddingLeft: buttonSize - 20 + 'px',
                        paddingRight: buttonSize - 20 + 'px',
                        fontSize: font + 'px'
                    }} onMouseLeave={function (event) {
                        event.target.style.backgroundColor = buttonBgColor;
                        event.target.style.color = buttonTextColor;
                    }} onMouseEnter={function (event) {
                        event.target.style.backgroundColor = buttonHoverColor;
                        event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
                    }}>
                        {2}
                    </button>
                    {/* ********************* */}
                    {
                        // CASE: 03
                        current_page == 4 ||
                        <button onClick={function () { return pageHandle(3); }} className="button buttonPage" style={{
                            borderColor: borderColor,
                            borderWidth: borderWidth + 'px',
                            backgroundColor: buttonBgColor,
                            color: buttonTextColor,
                            height: buttonSize + 'px',
                            paddingLeft: buttonSize - 20 + 'px',
                            paddingRight: buttonSize - 20 + 'px',
                            fontSize: font + 'px'
                        }} onMouseLeave={function (event) {
                            event.target.style.backgroundColor = buttonBgColor;
                            event.target.style.color = buttonTextColor;
                        }} onMouseEnter={function (event) {
                            event.target.style.backgroundColor = buttonHoverColor;
                            event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
                        }}>
                            {3}
                        </button>}
                    {/* ********************** */}
                    {
                        // CASE: 04
                        current_page > 5 &&
                        <button className="button buttonPage" style={{
                            borderColor: borderColor,
                            borderWidth: borderWidth + 'px',
                            backgroundColor: buttonBgColor,
                            color: buttonTextColor,
                            height: buttonSize + 'px',
                            paddingLeft: buttonSize - 20 + 'px',
                            paddingRight: buttonSize - 20 + 'px',
                            fontSize: font + 'px'
                        }}>
                            ...
                        </button>}
                </>}
            {/*

            O5. WHEN PAGE > 1 => BUTTON SHOW (page - 1);

        */}

            {
                // CASE: 05
                current_page > 1 &&
                <button onClick={function () { return pageHandle(current_page - 1); }} className="button buttonPage" style={{
                    borderColor: borderColor,
                    borderWidth: borderWidth + 'px',
                    backgroundColor: buttonBgColor,
                    color: buttonTextColor,
                    height: buttonSize + 'px',
                    paddingLeft: buttonSize - 20 + 'px',
                    paddingRight: buttonSize - 20 + 'px',
                    fontSize: font + 'px'
                }} onMouseLeave={function (event) {
                    event.target.style.backgroundColor = buttonBgColor;
                    event.target.style.color = buttonTextColor;
                }} onMouseEnter={function (event) {
                    event.target.style.backgroundColor = buttonHoverColor;
                    event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
                }}>
                    {current_page - 1}
                </button>}
            {/* <a href="#"
            onmouseover="this.style.textDecoration = 'none'"
            onmouseout="this.style.textDecoration = 'underline'">Hello</a> */}

            {/* *******CURRENT PAGE AND DISABLE BUTTON********** */}
            <button className=" buttonDisable button " style={{
                borderColor: borderColor,
                borderWidth: borderWidth + 'px',
                backgroundColor: disableButtonColor,
                color: buttonTextColor,
                height: buttonSize + 'px',
                paddingLeft: buttonSize - 20 + 'px',
                paddingRight: buttonSize - 20 + 'px',
                fontSize: font + 'px'
            }} onMouseLeave={function (event) {
                event.target.style.backgroundColor = buttonBgColor;
                event.target.style.color = buttonTextColor;
            }} onMouseEnter={function (event) {
                event.target.style.backgroundColor = buttonHoverColor;
                event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
            }}>
                {current_page}
            </button>

            {/*

            06. WHEN PAGE == LAST PAGE OR PAGE == LAST PAGE -3 => FALSE THEN THIS BUTTON SHOW....

        */}
            {
                //CASE: 06;
                current_page == lastPage || current_page == lastPage - 3 ||
                <>
                    <button onClick={function () { return pageHandle(current_page + 1); }} className="button buttonPage" style={{
                        borderColor: borderColor,
                        borderWidth: borderWidth + 'px',
                        backgroundColor: buttonBgColor,
                        color: buttonTextColor,
                        height: buttonSize + 'px',
                        paddingLeft: buttonSize - 20 + 'px',
                        paddingRight: buttonSize - 20 + 'px',
                        fontSize: font + 'px'
                    }} onMouseLeave={function (event) {
                        event.target.style.backgroundColor = buttonBgColor;
                        event.target.style.color = buttonTextColor;
                    }} onMouseEnter={function (event) {
                        event.target.style.backgroundColor = buttonHoverColor;
                        event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
                    }}>
                        {current_page + 1}
                    </button>

                    {/*
                    07. WHEN PAGE >= LAST PAGE - 2 OR PAGE == LAST PAGE - 4 => FALSE THEN THIS BUTTON SHOW
                
                */}
                    {
                        //CASE: 07
                        current_page >= lastPage - 2 || current_page == lastPage - 4 ||
                        <button style={{
                            borderColor: borderColor,
                            borderWidth: borderWidth + 'px',
                            backgroundColor: disableButtonColor,
                            color: buttonTextColor,
                            height: buttonSize + 'px',
                            paddingLeft: buttonSize - 20 + 'px',
                            paddingRight: buttonSize - 20 + 'px',
                            fontSize: font + 'px'
                        }} className=" buttonDisable  button ">
                            ...
                        </button>}
                </>}

            {current_page < lastPage - 2 &&
                <>
                    <button onClick={function () { return pageHandle(lastPage - 2); }} className="button buttonPage" style={{
                        borderColor: borderColor,
                        borderWidth: borderWidth + 'px',
                        backgroundColor: buttonBgColor,
                        color: buttonTextColor,
                        height: buttonSize + 'px',
                        paddingLeft: buttonSize - 20 + 'px',
                        paddingRight: buttonSize - 20 + 'px',
                        fontSize: font + 'px'
                    }} onMouseLeave={function (event) {
                        event.target.style.backgroundColor = buttonBgColor;
                        event.target.style.color = buttonTextColor;
                    }} onMouseEnter={function (event) {
                        event.target.style.backgroundColor = buttonHoverColor;
                        event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
                    }}>
                        {lastPage - 2}
                    </button>
                    <button onClick={function () { return pageHandle(lastPage - 1); }} className="button buttonPage" style={{
                        borderColor: borderColor,
                        borderWidth: borderWidth + 'px',
                        backgroundColor: buttonBgColor,
                        color: buttonTextColor,
                        height: buttonSize + 'px',
                        paddingLeft: buttonSize - 20 + 'px',
                        paddingRight: buttonSize - 20 + 'px',
                        fontSize: font + 'px'
                    }} onMouseLeave={function (event) {
                        event.target.style.backgroundColor = buttonBgColor;
                        event.target.style.color = buttonTextColor;
                    }} onMouseEnter={function (event) {
                        event.target.style.backgroundColor = buttonHoverColor;
                        event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
                    }}>
                        {lastPage - 1}
                    </button>
                    <button onClick={function () { return pageHandle(lastPage); }} style={{
                        borderColor: borderColor,
                        borderWidth: borderWidth + 'px',
                        backgroundColor: buttonBgColor,
                        color: buttonTextColor,
                        height: buttonSize + 'px',
                        paddingLeft: buttonSize - 20 + 'px',
                        paddingRight: buttonSize - 20 + 'px',
                        fontSize: font + 'px'
                    }} onMouseLeave={function (event) {
                        event.target.style.backgroundColor = buttonBgColor;
                        event.target.style.color = buttonTextColor;
                    }} onMouseEnter={function (event) {
                        event.target.style.backgroundColor = buttonHoverColor;
                        event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
                    }} className="button buttonPage">
                        {lastPage}
                    </button>

                </>}
            {lastPage - 2 == current_page &&
                <button onClick={function () { return pageHandle(lastPage); }} className="button buttonPage" style={{
                    borderColor: borderColor,
                    borderWidth: borderWidth + 'px',
                    backgroundColor: buttonBgColor,
                    color: buttonTextColor,
                    height: buttonSize + 'px',
                    paddingLeft: buttonSize - 20 + 'px',
                    paddingRight: buttonSize - 20 + 'px',
                    fontSize: font + 'px'
                }} onMouseLeave={function (event) {
                    event.target.style.backgroundColor = buttonBgColor;
                    event.target.style.color = buttonTextColor;
                }} onMouseEnter={function (event) {
                    event.target.style.backgroundColor = buttonHoverColor;
                    event.target.style.color = (Boolean(buttonTextHoverColor) ? buttonTextHoverColor : buttonTextColor);
                }}>
                    {lastPage}
                </button>}

        </div>
    </div>);
};
exports.default = Pagination;
