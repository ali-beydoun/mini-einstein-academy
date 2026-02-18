document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('notifyForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        form.classList.add('submitting');

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        })
        .then(function (res) { return res.json(); })
        .then(function () {
            form.classList.remove('submitting');
            form.querySelector('.form-row').style.display = 'none';
            form.querySelector('.form-success').style.display = 'block';
        })
        .catch(function () {
            form.classList.remove('submitting');
            alert('Something went wrong. Please try again.');
        });
    });
});