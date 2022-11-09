import employees from './employees.json';
import { differenceInCalendarYears, getDate, getMonth } from 'date-fns';

// console.table(employees);

document.querySelector('tbody').innerHTML = tableMarkup(employees);

function tableMarkup(arr) {
	return arr
		.map(({ username, birthDate }) => {
			return `<tr>
					<td>${username}</td>
					<td>${calculateAge(birthDate)}</td>
					<td>${isBirthday(birthDate)}</td>
				</tr>`;
		})
		.join('');
}

function calculateAge(birthDate) {
	return differenceInCalendarYears(Date.now(), new Date(birthDate));
}

function isBirthday(date) {
	const today = new Date();
	const birthDate = new Date(date);

	return (
		getDate(today) === getDate(birthDate) &&
		getMonth(today) === getMonth(birthDate)
	);
}
