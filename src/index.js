import {getUsers, deleteUser} from './api/userApi'

getUsers().then(res =>  {
	let userBody = ""

	res.map(user => {
		const {id, name, username, email} = user
		userBody += `
		<tr>
			<td><a href="#" data-id="${id}" class="deleteUser">Delete</a></td>
			<td>${id}</td>
			<td>${name}</td>
			<td>${username}</td>
			<td>${email}</td>
		</tr>
		`
	})
	document.querySelector('#users').innerHTML = userBody

	const deleteLinks = document.querySelectorAll('.deleteUser')

	Array.from(deleteLinks, link => {
		link.onclick = function(e){
			const element = e.target
			e.preventDefault()
			deleteUser(element.attributes["data-id"].value)
			const row = element.parentNode.parentNode
			row.parentNode.removeChild(row)
		}
	})
})