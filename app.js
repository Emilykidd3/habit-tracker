const addHabits = document.querySelector(".habit-form");
const habitsList = document.querySelector(".habits");
const habits = [];

// add a habit
function addHabit(e){
    e.preventDefault();
    const name = this.querySelector("[name=habit]").value;
    // console.log(habitName);
    const goal = this.querySelector("[name=goal]").value;
    // console.log(goalNumber);
    const habit = {
        name: name,
        reps: 0,
        goal: goal,
        completed: false,
    }
    habits.push(habit);
    displayHabits(habits, habitsList);
    this.reset();
    console.log(habits);
}

// list habits
function displayHabits(habit = [], habitsList) {
    habitsList.innerHTML = habits.map((habit, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="habit${i}" ${habit.completed ? "checked" : ""} />
                <label for="habit${i}"><span>${habit.reps}/${habit.goal} Weekly </span> ${habit.name}
                </label>
            </li>
        `;
    });
}

// toggle if achieved

// delete habit

addHabits.addEventListener("submit", addHabit);
displayHabits(habits, habitsList);