const userSearchForm = document.querySelector('#userSearch');
userSearchForm.addEventListener('submit', function (e) {
    e.preventDefault();
})
const searchUser = async () => {
    const userSearch = document.getElementById('search');
    const userName = userSearch.value;
    console.log('submitting search for user....')
    const resProm = await fetch(`http://localhost:3000/search?search=${userName}`)
    const userColor = await resProm.json()
    console.log(userColor)
    document.getElementById('body').style.backgroundColor = userColor;
}

const userCreateForm = document.querySelector('#userCreate');
userCreateForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let form = e.target
    form.submit()
    const colorSelect = document.getElementById('colorSelect');
    const color = colorSelect.value;
    document.getElementById('body').style.backgroundColor = color;
    })