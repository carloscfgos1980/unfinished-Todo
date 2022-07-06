const addTask = document.querySelector('#add-task ul');

const newTask = document.querySelector('#new-task ul');

const forms = document.forms;

const addForm = forms['add-task'];

addForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const value = addForm.querySelector('input[type="text"]').value;


    //postData(value);


    getData();

});


newTask.addEventListener('click', (e) => {



    if (e.target.className === 'delete') {

        const text = e.target.previousElementSibling.textContent;
        //console.log(text)
        const id = getId(text);
        console.log(id)


        //deleteData(id);
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
        // deleteData();
    }
});

