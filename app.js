const addHabits = document.querySelector(".habit-form");
const habitsList = document.querySelector(".habits");
const habits = JSON.parse(localStorage.getItem("habits")) || [];

// add a habit
function addHabit(e){
    e.preventDefault();
    const name = this.querySelector("[name=habit]").value;
    const goal = +this.querySelector("[name=goal]").value;
    const habit = {
        name: name,
        reps: 0,
        goal: goal,
        completed: false,
    }
    habits.push(habit);
    displayHabits(habits, habitsList);
    localStorage.setItem("habits", JSON.stringify(habits));
    this.reset();
}

// list habits
function displayHabits(habit = [], habitsList) {
    habitsList.innerHTML = habits.map((habit, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="habit${i}" ${habit.completed ? "checked" : ""} />
                <label for="habit${i}"><span>${habit.reps}/${habit.goal} Weekly </span> ${habit.name}
                </label>
                <button class="delete" data-index=${i} id="delete${i}">
                    delete
                </button>
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
    } else if (habits[index].reps > habits[index].goal){
        habits[index].reps = 0;
        habits[index].completed=false;
    }
    displayHabits(habits, habitsList);
    localStorage.setItem("habits", JSON.stringify(habits));
}

// delete habit
function deleteHabit(e){
    var result = confirm("Are you sure you want to delete");
    if (!result){
        return;
    }
    if (!e.target.matches("button")) return;
    const el = e.target;
    const index = el.dataset.index;
    habits.splice(index, 1);
    displayHabits(habits, habitsList);
    localStorage.setItem("habits", JSON.stringify(habits));
}

addHabits.addEventListener("submit", addHabit);
habitsList.addEventListener("click", toggleCompleted);
habitsList.addEventListener("click", deleteHabit);

displayHabits(habits, habitsList);