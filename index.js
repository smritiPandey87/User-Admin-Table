
   

 
const fullNameInput = document.getElementById("FullName");
const emailInput = document.getElementById("email");
const roleInput = document.getElementById("role");

const toggleBtn = document.getElementById("toggleBtn");
const tableContainer = document.querySelector("table-con");

// function validateFrom(){
//     if(fullName.value==""){
// document.getElementById("fullNameError").innerHTML="Name is required";
//     } 
//         else if (!validateEmail(emailInput.value)) {
//             showError('emailError', 'Invalid email format.');
//             isValid = false;
//           }
        
//     }
//    return false;



//    function onAddFullName(e){
//      e.preventDefault();
//      const FullName=document.getElementById('FullName').value;
//    }
   

   var form = document.getElementById("form");
var table = document.getElementById("table");
//add event listener to form 
form.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();

  // get FullName input value
  
  var FullName = document.getElementById("FullName").value;

  //get email input value
  var  email= document.getElementById("email").value;

  //get role input value
  var role = document.getElementById("role").value;

 

  //create delete button
  var deleteBtn = "<button>x</button>"

  var rowContent = [FullName, email, role,  deleteBtn]

  //create rows
  var row = table.insertRow(1);
  //create row cells
  rowContent.map((value, index)=>{
      var rowCell = row.insertCell(index);
      rowCell.innerHTML = value;
  });

}



