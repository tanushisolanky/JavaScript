const table = document.getElementById('table');

const tableHead = ['NAME', 'AGE', 'EMAIL'];
const row1 = ['Tanushi', '21', 't@gmail.com'];
const row2 = ['Solanky', '22', 's@gmail.com'];
const row3 = ['Bhargav', '25', 'b@gmail.com'];


const tHead = table.createTHead();
const thRow = tHead.insertRow();
tableHead.forEach(element => {
    const td = thRow.insertCell();
    td.appendChild(document.createTextNode(element));
});

const tBody = table.createTBody();
const td1Row = tBody.insertRow();
row1.forEach(element => {
    const td1 = td1Row.insertCell();
    td1.appendChild(document.createTextNode(element));
});
const td2Row = tBody.insertRow();
row2.forEach(element => {
    const td2 = td2Row.insertCell();
    td2.appendChild(document.createTextNode(element));
});
const td3Row = tBody.insertRow();
row3.forEach(element => {
    const td3 = td3Row.insertCell();
    td3.appendChild(document.createTextNode(element));
});