const table = document.getElementById('table');

const tableHead = [{name :'NAME'}, {age :'AGE'}, {email : 'EMAIL'}];
const row1 = [{name :'Tanushi' , age :'21' , email : 't@gmail.com'}];
// const row2 = ['Solanky', '22', 's@gmail.com'];
// const row3 = ['Bhargav', '25', 'b@gmail.com'];


const tHead = table.createTHead();
const thRow = tHead.insertRow();
tableHead.forEach(element => {
    for (const key in element){
    const td = thRow.insertCell();
    td.appendChild(document.createTextNode(Object.values(element)));
    }
});

const tBody = table.createTBody();
const td1Row = tBody.insertRow();
row1.forEach(element => {
    for (const key of tableHead){
    const td1 = td1Row.insertCell();
    td1.appendChild(document.createTextNode(element[Object.keys(key)]));
    }
});
// const td2Row = tBody.insertRow();
// row2.forEach(element => {
//     const td2 = td2Row.insertCell();
//     td2.appendChild(document.createTextNode(element));
// });
// const td3Row = tBody.insertRow();
// row3.forEach(element => {
//     const td3 = td3Row.insertCell();
//     td3.appendChild(document.createTextNode(element));
// });