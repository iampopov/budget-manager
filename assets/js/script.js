// ======================
// VARIABLES
// ======================

// 1st: pull initial budgetItems/lastID from localStorage to set initial variables
const budgetItems = JSON.parse(localStorage.getItem("budgetItems")) || [];
let lastID = parseInt(localStorage.getItem("lastID")) || 0;


// ======================
// FUNCTIONS
// ======================

// 4th: function to update localStorage with latest budgetItems and latest lastID


// 5th: function to render budgetItems on table; each item should be rendered in this format:
// <tr data-id="2"><td>Oct 14, 2019 5:08 PM</td><td>November Rent</td><td>Rent/Mortgage</td><td>1300</td><td>Fill out lease renewal form!</td><td class="delete"><span>x</span></td></tr>
// also, update total amount spent on page (based on selected category):



// ======================
// MAIN PROCESS
// ======================

// 2nd: wire up click event on 'Enter New Budget Item' button to toggle display of form
$("#toggleFormButton, #hideForm").on("click", function() {
    const addItemForm = $("#addItemForm")
    //const toggleButton = $("#toggleFormButton")
    
    addItemForm.toggle("slow", () => {
        $("#toggleFormButton").text(addItemForm.is(":visible") ? "Hide Form" : "Enter New Budget Item");//ternary op.
        //instead of this:
        // if (addItemForm.is(":visible")) {
        //     toggleButton.text("Hide Form");
        // } else {
        //     toggleButton.text("Enter New Budget Item");
        // }
    });
});

// 3rd: wire up click event on 'Add Budget Item' button, gather user input and add item to budgetItems array
// (each item's object should include: id / date / name / category / amount / notes)... then clear the form
// fields and trigger localStorage update/budgetItems rerender functions, once created
$("#addItem").on("click", function(e) {
    e.preventDefault();

    const newItem = {
        id: ++lastID, // increment and store in one step on the same line instead of lastID ++ and then calling id: lastID
        date: moment().format("lll"),
        name: $("#name").val().trim(),
        category: $("#category").val(),
        amount: $("#amount").val().trim(),
        notes: $("#notes").val().trim()
    }

    if (!newItem.name || !newItem.category || !newItem.amount) {
        //if we failed validation
        return alert('You must specify name, category, and amount for each budget item!')
        //return false; //same thing as above
    } 

    budgetItems.push(newItem);
    //update local storage
    //rerender budget items

})

// 6th: wire up change event on the category select menu, show filtered budgetItems based on selection


// 7th: wire up click event on the delete button of a given row; on click delete that budgetItem






