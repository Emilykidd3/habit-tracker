const addHabits = document.querySelector(".habit-form");
const habitsList = document.querySelector(".habits");
const habits = [];

// add a habit
function addHabit(e){
    e.preventDefault();
    const habitName = this.querySelector("[name=habit").value;
    // console.log(habitName);
    const goalNumber = this.querySelector("[name=goal]").value;
    // console.log(goalNumber);
    const habit = {
        habitName: habitName,
        goalNumber: goalNumber,
        completed: false,
    }
    habits.push(habit);
    console.log(habits);
}

// list habits

// toggle if achieved

// delete habit

addHabits.addEventListener("submit", addHabit);