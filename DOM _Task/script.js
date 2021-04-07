let container = myDom('div', 'container');
let row = myDom('div', 'row');
let col1 = myDom('div','col-2')
let col2 = myDom('div', 'col-8');

let heading = myDom('h1');
heading.textContent = 'Place Order';

let form = myDom('form');
// form.setAttribute('method', 'POST');
form.setAttribute('name', 'data');

// First Name
let nameRow = myDom('div', 'row');
let firstName = myDom('div', 'form-group col-6');
let firstNameLabel = document.createElement('label');
firstNameLabel.setAttribute('for', 'firstname');
firstNameLabel.textContent = "First Name :";
let firstNameInput = myDom('input', 'form-control', 'firstname', 'text');
firstName.append(firstNameLabel, firstNameInput);

// Last Name
let lastName = myDom('div', 'form-group col-6');
let lastNameLabel = document.createElement('label');
lastNameLabel.setAttribute('for', 'lastname');
lastNameLabel.textContent = "Last Name :";

let lastNameInput = myDom('input', 'form-control', 'lastname', 'text');
lastName.append(lastNameLabel, lastNameInput);
nameRow.append(firstName, lastName);

// Gender
let secondRow = myDom('div', 'row');
let genderTitel = myDom('div', 'form-group col-3');
let genderLable = myDom('label');
genderLable.textContent = "Gender :";
genderTitel.append(genderLable);

let genderRow = myDom('div', 'form-group col-9');
let malediv = myDom('div', 'form-check form-check-inline');
let maleInput = myDom('input', 'form-check-input male', 'Gender', 'radio');
maleInput.setAttribute('value', 'male');
maleInput.setAttribute('name', 'gender');
let maleLabel =  document.createElement('label');
maleLabel.setAttribute('for', 'Gender');
maleLabel.textContent = 'Male';
malediv.append(maleInput, maleLabel);

let femalediv = myDom('div', 'form-check form-check-inline form-group');
let femaleInput = myDom('input', 'form-check-input female', 'Gender', 'radio');
femaleInput.setAttribute('value', 'female');
femaleInput.setAttribute('name', 'gender');
let femaleLabel =  document.createElement('label');
femaleLabel.setAttribute('for', 'Gender');
femaleLabel.textContent = 'Female';
femalediv.append(femaleInput, femaleLabel);
genderRow.append(malediv, femalediv);
secondRow.append(genderTitel, genderRow);


// FOOD PREFARANCE
let thirdRow = myDom('div', 'row');

let foodTitel = myDom('div', 'form-group col-3');
let foodLable = myDom('label');
foodLable.setAttribute('for', 'food');
foodLable.textContent = "Select Food:";
foodTitel.append(foodLable);


let foodRow = myDom('div', 'form-group col-9');
let div1 = myDom('div', 'form-check form-check-inline');
let Input1 = myDom('input', 'form-check-input', 'food', 'checkbox');
Input1.setAttribute('value', 'Indain');
let Label1 =  document.createElement('label');
Label1.setAttribute('for', 'food');
Label1.textContent = 'Indian';
div1.append(Input1, Label1);

let div2 = myDom('div', 'form-check form-check-inline form-group');
let Input2 = myDom('input', 'form-check-input', 'food', 'checkbox');
Input2.setAttribute('value', 'American');
let Label2 =  document.createElement('label');
Label2.setAttribute('for', 'food');
Label2.textContent = 'American';
div2.append(Input2, Label2);

let div3 = myDom('div', 'form-check form-check-inline');
let Input3 = myDom('input', 'form-check-input', 'food', 'checkbox');
Input3.setAttribute('value', 'Chinese');
let Label3 =  document.createElement('label');
Label3.setAttribute('for', 'food');
Label3.textContent = 'Chinese';
div3.append(Input3, Label3);

let div4 = myDom('div', 'form-check form-check-inline form-group');
let Input4 = myDom('input', 'form-check-input', 'food', 'checkbox');
Input4.setAttribute('value', 'Japanese');
let Label4 =  document.createElement('label');
Label4.setAttribute('for', 'food');
Label4.textContent = 'Japanese';
div4.append(Input4, Label4);

let div5 = myDom('div', 'form-check form-check-inline form-group');
let Input5 = myDom('input', 'form-check-input', 'food', 'checkbox');
Input5.setAttribute('value', 'French');
let Label5 =  document.createElement('label');
Label5.setAttribute('for', 'food');
Label5.textContent = 'French';
div5.append(Input5, Label5);

foodRow.append(div1, div2,div3,div4,div5);
thirdRow.append(foodTitel, foodRow);


// Address
let fourthdiv = myDom('class', 'row');
let addressdiv = myDom('div', 'form-group col-12');
let addressLabel = document.createElement('label');
addressLabel.setAttribute('for', 'address');
addressLabel.textContent = "Address :";
let addressInput = myDom('input', 'form-control', 'address', 'text');
addressdiv.append(addressLabel, addressInput);
fourthdiv.append(addressdiv);

// State, Country, pincode

let Row = myDom('div', 'row');
// State
let stateName = myDom('div', 'form-group col-4');
let stateNameLabel = document.createElement('label');
stateNameLabel.setAttribute('for', 'statename');
stateNameLabel.textContent = "State Name :";
let stateNameInput = myDom('input', 'form-control', 'statename', 'text');
stateName.append(stateNameLabel, stateNameInput);

// Country
let countryName = myDom('div', 'form-group col-4');
let countryLabel = document.createElement('label');
countryLabel.setAttribute('for', 'countryname');
countryLabel.textContent = "Country Name :";
let countryNameInput = myDom('input', 'form-control', 'countryname', 'text');
countryName.append(countryLabel, countryNameInput);


// pincode
let pinnumber = myDom('div', 'form-group col-4');
let pinnumberLabel = document.createElement('label');
pinnumberLabel.setAttribute('for', 'pincode');
pinnumberLabel.textContent = "Pin Code :";
let pinnumberInput = myDom('input', 'form-control', 'pincode', 'number');
pinnumber.append(pinnumberLabel, pinnumberInput);
Row.append(stateName, countryName, pinnumber);

// Button
// let btn = myDom('button', 'btn btn-primary','bttn ','submit');
// btn.textContent = 'Place Order';


form.append(nameRow,secondRow,thirdRow,fourthdiv,Row);
col2.append(heading,form);

let col3 = myDom('div', 'col-2');
row.append(col1, col2, col3);



// TABLE DESIGN
let tableRow = myDom('div', 'row');
let tbcol1 = myDom('div','col-2 ')
let tbcol2 = myDom('div', 'col-9');


 let table = myDom('table', 'table');
let thead = myDom('thead', 'thead bg-primary');
let theadTr = myDom('tr');



// table headings
let theadTh1 = myDom('th');
theadTh1.setAttribute('scope', 'col');
theadTh1.innerHTML = 'S.No';

let theadTh2 = myDom('th');
theadTh2.setAttribute('scope', 'col');
theadTh2.innerHTML = 'First Name';

let theadTh3 = myDom('th');
theadTh3.setAttribute('scope', 'col');
theadTh3.innerHTML = 'Last Name';

let theadTh4 = myDom('th');
theadTh4.setAttribute('scope', 'col');
theadTh4.innerHTML = 'Gender';

let theadTh5 = myDom('th');
theadTh5.setAttribute('scope', 'col');
theadTh5.innerHTML = 'Food';

let theadTh6 = myDom('th');
theadTh6.setAttribute('scope', 'col');
theadTh6.innerHTML = 'Address';

let theadTh7 = myDom('th');
theadTh7.setAttribute('scope', 'col');
theadTh7.innerHTML = 'State';

let theadTh8 = myDom('th');
theadTh8.setAttribute('scope', 'col');
theadTh8.innerHTML = 'Country';

let theadTh9 = myDom('th');
theadTh9.setAttribute('scope', 'col');
theadTh9.innerHTML = 'Pin Code';

// table body
let tbody = myDom('tbody');

theadTr.append(theadTh1, theadTh2, theadTh3, theadTh4, theadTh5, theadTh6, theadTh7, theadTh8, theadTh9);
thead.append(theadTr);
table.append(thead,tbody);
tbcol2.append(table);

let tbcol3 = myDom('div', 'col-1');
tableRow.append(tbcol1, tbcol2,tbcol3);
container.append(row,tableRow);
document.body.append(container);
// FUNCTION TO CRETE ELEMENTS
function myDom(elem, elemClass = ' ', elemId = ' ', elemType = ' ') {
    let element = document.createElement(elem);
    element.setAttribute('class', elemClass);
    element.setAttribute('id', elemId);
    element.setAttribute('type', elemType);
    return element;
}



let index = ' ';
function viewRecord() {
    index++;
    let FirstName = document.data.querySelector('#firstname').value;
    let LastName = document.data.querySelector('#lastname').value;
    let Gender = document.data.querySelector("#Gender:Checked").value;
    let Food = document.data.querySelector("#food:Checked").value;
    let Address = document.data.querySelector("#address").value;
    let State = document.data.querySelector("#statename").value;
    let Country = document.data.querySelector("#countryname").value;
    let Pincode = document.data.querySelector("#pincode").value;
  
    let tbody = document.querySelector('tbody');
    tbody.innerHTML += (`<tr><td> ${index} </td><td>
                                 ${FirstName} </td><td> 
                                 ${LastName} </td><td>
                                  ${Gender} </td><td>
                                   ${Food} </td><td> 
                                   ${Address} </td><td>
                                   ${State} </td><td>
                                   ${Country} </td><td>
                                   ${Pincode}</td></tr>`);

}

























