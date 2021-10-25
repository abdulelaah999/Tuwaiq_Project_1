
const mainContainer = $("#mainContainer");
const nameInput = $("#name");
const ageInput = $("#age");
const timeInput = $("#time");

const bookAppointement = [
  { bookadd: "name", age: 00, time: "00/00" },
  
 
];


function renderArr(array) {
  for (let i = 0; i < array.length; i++) {
    const div = $(`<div class="secondryContainer">
        <h1>${array[i].name}</h1>
        <h1>${array[i].age}</h1>
        <h1>${array[i].time}</h1>
    </div>`);
    mainContainer.append(div);
  }
}

renderArr(bookAppointement);

function addBook() {
  
  const newBOOK = {
    name: nameInput.val(),
    age: ageInput.val(),
    time: timeInput.val(),
  };
 
  bookAppointement.push(newBOOK);

  
  renderArr([newBOOK]);
}

function hideHandler() {
  
  mainContainer.hide();
}

function spliceHandler() {
  
  mainContainer.splice();
}



