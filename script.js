document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#birthdate", {
        dateFormat: "d-m-Y",
        allowInput: true
    });
});

function Send(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var birthdate = document.getElementById('birthdate').value;
    var sex = document.getElementById('sex').value;
    var ID = document.getElementById('ID').value;
    var specialization = document.querySelector('input[name="specialization"]:checked').value;
    var classOf = document.getElementById('classOf').value;
    var address = document.getElementById('address').value;

    alert(
        'Name: ' + name + '\n' +
        'Birthdate: ' + birthdate + '\n' +
        'Sex:' + sex + 'n' +
        'ID: ' + ID + '\n' +
        'Specialization: ' + specialization + '\n' +
        'ClassOf: ' + classOf + '\n' +
        'Address: ' + address
    );
}