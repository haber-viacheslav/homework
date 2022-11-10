// Birthday table
// import employees from './employees.json';
// import { calculateAge } from './helpers/calculateAge';
// import { isBirthday } from './helpers/isBirthday';

// // console.table(employees);

// document.querySelector('tbody').innerHTML = tableMarkup();

// function tableMarkup() {
// 	return employees.map(({ username, birthDate }) => {
// 			return `<tr>
// 					<td>${username}</td>
// 					<td>${calculateAge(birthDate)}</td>
// 					<td>${isBirthday(birthDate) ? 'Yes' : 'No'}</td>
// 				</tr>`;
// 		})
// 		.join('');
// }


// Comments

import comments from './comments.json'
import {formateDatetime} from './helpers/formatDate'
document.querySelector('.comments').innerHTML = comentsMurkup();

function comentsMurkup () {
	return comments.map(({author, content, createdAt}) =>{
	return	`<div class="comment">
				<header>
					<b>${author}</b> posted
					<time datetime="">
						<i>${ formateDatetime (createdAt)}</i>
					</time>
				</header>
				<p>${content}</p>
			</div>`;
	}).join('');
}

