const BASE_URL = "http://localhost:3000/";

const id = '1bff780f-1a3c-410f-b935-75e4a8ac8294';


async function getId() {
    try {
        const web = await fetch(BASE_URL, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(data => {

                selectedTask = data.filter((taskName) => {
                    return taskName.description === li
                })
                // console.log(selectedTask)
            });
    } catch (err) {
        console.log(err)
    }
}

//getId();


async function postData(task) {
    const data = { description: task, done: false };

    try {
        const res = await fetch(BASE_URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}

async function getData() {
    try {
        const web = await fetch(BASE_URL, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                data.forEach((tarea) => {
                    const li = document.createElement('li');
                    const task = document.createElement('span');
                    const deleteBtn = document.createElement('button');

                    task.innerHTML = tarea.description;
                    deleteBtn.innerHTML = '';

                    task.classList.add('task');
                    deleteBtn.classList.add('delete');

                    li.appendChild(task);
                    li.appendChild(deleteBtn);
                    newTask.appendChild(li);
                })
            });
    } catch (err) {
        console.log(err)
    }
}

async function deleteData() {

    try {
        const res = await fetch(BASE_URL + id, {
            method: "DELETE",

        });
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}




