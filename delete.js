// comment delete section 
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

// event bubble part 
document.getElementById('first').addEventListener('click', function (event) {
    event.stopPropagation();
    // event.stopImmediatePropagation();
    console.log('first clicked')
})

/* document.getElementById('first').addEventListener('click', function (event) {
    // event.stopPropagation();
    event.stopImmediatePropagation();
    console.log('second clicked')
}) */

document.getElementById('container').addEventListener('click', function () {
    console.log('container clicked')
})

document.getElementById('section').addEventListener('click', function () {
    console.log('section clicked')
})

// delegation part 
/* const items = document.getElementsByClassName('item');
for (const item of items) {

    //   item.addEventListener('click', function () {
    //       document.getElementById('container-dele').removeChild(item);
    //   })

    item.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}; */

document.getElementById('add').addEventListener('click', function () {
    const text = document.getElementById('text');
    const li = document.createElement('li');
    li.innerText = text.value;
    li.classList.add('item')
    text.value = '';
    const parent = document.getElementById('container-dele')
    parent.appendChild(li);
});

document.getElementById('container-dele').addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
})

