//  For main div
var PaginationMainDiv = document.createElement('div');
PaginationMainDiv.setAttribute('class', 'pagination-srakib')

//2nd div
var secondDiv = document.createElement('div');
secondDiv.setAttribute('class', 'button-group')

var buttonGenerate = (className, style) => {
    let button = document.createElement('button')
    button.setAttribute('class', className)
}


//!  when current_page greater three (current_page > 3)


//!  when current_page greater one (current_page > 1)

//!  disable button current page 

//! when current_page == lastPage || current_page == lastPage - 3 || then
//? current_page >= lastPage - 2 || current_page == lastPage - 4 || then


//! when current_page < lastPage - 2 && then

//!  when  lastPage - 2 == current_page && then


PaginationMainDiv.appendChild(secondDiv)

console.log(PaginationMainDiv)
