const BASE_URL = "http://localhost:3000/";

const getId = async function (content) {
    try {
        const web = await fetch(BASE_URL, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(data => {

                selectedTask = data.filter((taskName) => {
                    return taskName.description === content
                })
                //console.log(selectedTask)
                selectedTask.forEach((task) => {
                    const idd = task._id
                    console.log(idd)
                })

            });
    } catch (err) {
        console.log(err)
    }
}

async function deleteData(elem) {

    try {
        const res = await fetch(BASE_URL + elem, {
            method: "DELETE",

        });
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}

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






