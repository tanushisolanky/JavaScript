const table = document.getElementById('table');
const tableHeaders = [{ fname: 'FIRST NAME' }, { lname: 'LAST NAME' }, { age: 'AGE' }, { pno: 'Phone NO' }, { email: 'EMAIL' }, { password: 'PASSWORD' },{ action: 'ACTION' }];
table.setAttribute('class', 'table')

const tHead = table.createTHead();
const thRow = tHead.insertRow();
tableHeaders.forEach(element => {
    const td = thRow.insertCell();
    const value = Object.values(element)[0];
    td.appendChild(document.createTextNode(value));
    td.setAttribute('class','td')
    thRow.setAttribute('class','thRow')
});

const tBody = table.createTBody();

function createTableBody(employees) {
    employees.forEach(element => {
        const tr = tBody.insertRow();
        tableHeaders.forEach(header => {
            const td = tr.insertCell();
            if (header.action !== 'ACTION') {
                const key = Object.keys(header)[0];
                td.appendChild(document.createTextNode(element[key]));
                td.setAttribute('class','td')
            }
            else {
                const editBtn = document.createElement('button');
                editBtn.innerText = "EDIT"
                editBtn.onclick = () => editEmployee(element);
                td.appendChild(editBtn);
                editBtn.setAttribute('class','btnedit')
            

                const deleteBtn = document.createElement('button');
                deleteBtn.innerText = "DELETE"
                deleteBtn.onclick = () => deleteEmployee(element.id);
                td.appendChild(deleteBtn);
                deleteBtn.setAttribute('class','btndel')
                td.setAttribute('class','td')
            }
        })

    });
}

// GET method
async function getEmployees() {
    let response;
    try {
        response = await fetch('http://localhost:3000/employees');
        const employees = await response.json();
        createTableBody(employees);
        console.log(employees);
    } catch (error) {
        console.error(error);
    }
    console.log(response);
}

// POST method
function addEmployee() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const age = document.getElementById('age').value;
    const pno = document.getElementById('pno').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fname: fname,
            lname: lname,
            age: age,
            pno: pno,
            email: email,
            password: password,
        })
    })
}

// PUT method
const btn = document.getElementById('data');
function editEmployee(element) {
    const id = element.id;
    document.getElementById('fname').value = element.fname;
    document.getElementById('lname').value = element.lname;
    document.getElementById('age').value = element.age;
    document.getElementById('pno').value = element.pno;
    document.getElementById('email').value = element.email;
    document.getElementById('password').value = element.password;

    btn.onclick = function updateEmployee() {
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const age = document.getElementById('age').value;
        const pno = document.getElementById('pno').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        fetch(`http://localhost:3000/employees/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                fname: fname,
                lname: lname,
                age: age,
                pno: pno,
                email: email,
                password: password
            })
        })
    }
}

// DELETE method
function deleteEmployee(id) {
    fetch(`http://localhost:3000/employees/${id}`, {
        method: 'DELETE',
    });
}


// first name regex
const fnameInput = document.getElementById('fname');
const fnameError = document.getElementById('fname-error');

fnameInput.addEventListener('input', () => {
    const fnameRegex = /^[a-zA-Z]+$/;

    if (!fnameRegex.test(fnameInput.value)) {
        fnameError.style.display = 'block';
    } else {
        fnameError.style.display = 'none';
    }

});

// last name regex
const lnameInput = document.getElementById('lname');
const lnameError = document.getElementById('lname-error');

lnameInput.addEventListener('input', () => {
    const lnameRegex = /^[a-zA-Z]+$/;

    if (!lnameRegex.test(lnameInput.value)) {
        lnameError.style.display = 'block';
    } else {
        lnameError.style.display = 'none';
    }

});

// age regex
const ageInput = document.getElementById('age');
const ageError = document.getElementById('age-error');

ageInput.addEventListener('input', () => {
    const ageRegex = /^[0-9]+$/;

    if (!ageRegex.test(ageInput.value)) {
        ageError.style.display = 'block';
    } else {
        ageError.style.display = 'none';
    }

});

// phone number regex
const pnoInput = document.getElementById('pno');
const pnoError = document.getElementById('pno-error');

pnoInput.addEventListener('input', () => {
    const pnoRegex = /^[6 7 8 9]{1}[0-9]{9}$/;

    if (!pnoRegex.test(pnoInput.value)) {
        pnoError.style.display = 'block';
    } else {
        pnoError.style.display = 'none';
    }

});

// email regex
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

emailInput.addEventListener('input', () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@1rivet.com$/;

    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }

});

// password regex
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('password-error');

passwordInput.addEventListener('input', () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,16}$/;

    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }

});

// submit button validation
const input1 = document.getElementById("fname");
const input2 = document.getElementById("lname");
const input3 = document.getElementById("age");
const input4 = document.getElementById("pno");
const input5 = document.getElementById("email");
const input6 = document.getElementById("password");

const submitButton = document.getElementById('submit')
const error = document.getElementById("submit-error");

function checkInputs() {
  if (input1.value.trim() === "" || input2.value.trim() === "" || input3.value.trim() === "" ||
   input4.value.trim() === "" || input5.value.trim() === "" || input6.value.trim() === "") {
    submitButton.disabled = true;
    error.style.display = "block";
  } else {
    submitButton.disabled = false;
    error.style.display = "none";
  }
}

input1.addEventListener("change", checkInputs);
input2.addEventListener("change", checkInputs);
input3.addEventListener("change", checkInputs);
input4.addEventListener("change", checkInputs);
input5.addEventListener("change", checkInputs);
input6.addEventListener("change", checkInputs);



window.onload(getEmployees())   
