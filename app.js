const addHabits = document.querySelector(".habit-form");
const habitsList = document.querySelector(".habits");
const habits = [];

// add a habit
function addHabit(e){
    e.preventDefault();
    const habitName = this.querySelector("[name=habit").value;
    console.log(habitName);
}

// list habits

// toggle if achieved

// delete habit

addHabits.addEventListener("submit", addHabit);