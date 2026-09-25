//your JS code here. If required.
let existingbtn = document.querySelector('#existing');
let savedUser = localStorage.getItem('userdata');
if (savedUser.name) {
    existingbtn.style.display = 'block';
}
existingbtn.addEventListener('click', () => {
    let savedUser = localStorage.getItem('userdata');
    let user = JSON.parse(savedUser);

    alert(`Logged in as ${user.name}`);
});
let submitbtn=document.querySelector('#submit');
submitbtn.addEventListener('click',(event)=>{ 
	event.preventDefault()
let username=document.querySelector('#username').value;
let password=document.querySelector('#password').value;
let checkbox=document.querySelector('#checkbox').checked;
	let user={
		name:username,
		password:password
}
	if(checkbox){
		  localStorage.setItem('userdata',JSON.stringify(user));
    }
	else{
		localStorage.removeItem("userdata");
	}
	
	alert(`Logged in as ${username}`)
})
