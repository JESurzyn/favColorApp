// const makeHttpRequest = async () => {
//     //grabbing form data
//     const colorSelect = document.getElementById('colorSelect');
//     const color = colorSelect.value;
//     const username = document.getElementById('username');
//     const user = username.value;
    
//     const userData = {"username":user, "color":color}
//     console.log(JSON.stringify(userData))
    
//     console.log('making http request...')
//     const request = await fetch('http://localhost:3000/users', 
//                             {method:'POST',
//                              body: JSON.stringify({"test":"test"}),
//                              headers: {
//                                 'Content-Type': 'application/json'
//                              }
//                             })
//     // const response = await fetch('http://localhost:3000/users', {method:'GET'})
//     // const finalResponse = await response.json();
//     // console.log(finalResponse);
//     //changing the color
//     document.getElementById('body').style.backgroundColor = color;
//     //add code to create user
// }

const userCreateForm = document.querySelector('#userCreate')
userCreateForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const colorSelect = document.getElementById('colorSelect');
    const color = colorSelect.value;
    document.getElementById('body').style.backgroundColor = color;
})