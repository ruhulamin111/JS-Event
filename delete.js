document.getElementById('submit-btn').addEventListener('click', function () {
    document.getElementById('message').style.display = 'none';
});

/* document.getElementById('confirm').addEventListener('click', function () {
    const deleteConfrim = document.getElementById('confirm');
    console.log(deleteConfrim.value)
});
 */
/* document.getElementById('confirm').addEventListener('change', function () {
    const deleteConfrim = document.getElementById('confirm');
    console.log(deleteConfrim.value)
}); */

document.getElementById('confirm').addEventListener('keyup', function (event) {
    if (event.target.value == 'delete') {
        document.getElementById('submit-btn').removeAttribute('disabled')
    }
    else {
        document.getElementById('submit-btn').setAttribute('disabled', true);
    }
});