const addTask = document.querySelector('#add-task ul');

const newTask = document.querySelector('#new-task ul');

const forms = document.forms;

const addForm = forms['add-task'];

addForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const value = addForm.querySelector('input[type="text"]').value;


    postData(value);


    getData();

});

newTask.addEventListener('click', (e) => {

    const text = newTask.querySelector('li').innerText;
    console.log(text)
    if (e.target.className === 'delete') {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
        // deleteData();
    }
});

