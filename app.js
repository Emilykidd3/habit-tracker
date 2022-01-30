const addHabits = document.querySelector(".habit-form");
const habitsList = document.querySelector(".habits");
const habits = [];

// add a habit
function addHabit(e){
    e.preventDefault();
    const name = this.querySelector("[name=habit]").value;
    // console.log(habitName);
    const goal = +this.querySelector("[name=goal]").value;
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
    }).join("");
}

// toggle if achieved
function toggleCompleted(e){
    if(!e.target.matches("input")) return;
    const el = e.target;
    const index = el.dataset.index;
    habits[index].reps+=1;
    if(habits[index].reps === habits[index].goal){
        habits[index].completed = true;
    } 
    displayHabits(habits, habitsList);
}

// delete habit

addHabits.addEventListener("submit", addHabit);
habitsList.addEventListener("click", toggleCompleted);

displayHabits(habits, habitsList);