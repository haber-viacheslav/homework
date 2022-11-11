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

// import comments from './comments.json'
// import {formateDatetime} from './helpers/formatDate'
// document.querySelector('.comments').innerHTML = comentsMurkup();

// function comentsMurkup () {
// 	return comments.map(({author, content, createdAt}) =>{
// 	return	`<div class="comment">
// 				<header>
// 					<b>${author}</b> posted
// 					<time datetime="">
// 						<i>${ formateDatetime (createdAt)}</i>
// 					</time>
// 				</header>
// 				<p>${content}</p>
// 			</div>`;
// 	}).join('');
// }

// Timer

const refs = {
	startBtn: document.querySelector('button[data-action-start]'),
	stopBtn: document.querySelector('button[data-action-stop]'),
	clockFace: document.querySelector('.js-clockface'),
}

// console.log(refs.stopBtn);
// console.log(refs.startBtn);
// console.log(refs.clockFace);
const timer = {

	isActive: false,
	intId: null,
	start () {
		const startTime = Date.now();
	    
		    this.intId = setInterval(() => {
			const currentTime = Date.now();
			const resultTime = currentTime - startTime;
			const { hours, mins, secs } = getTimeComponents(resultTime)
			refs.clockFace.textContent = `${hours}:${mins}:${secs}`
			this.isActive = true;
			if(this.isActive) {
				console.log(refs.startBtn.getAttribute('disabled'));
				
				refs.startBtn.setAttribute('disabled', true)

				console.log(refs.startBtn.getAttribute('disabled'));
			}
			// console.log('start -> current time', currentTime - startTime);
			
		}, 1000)
		
	},
	stop() {
		clearInterval(this.intId);
		this.isActive = false;
		refs.startBtn.removeAttribute('disabled')
	}
	
}
refs.startBtn.addEventListener('click', () => {timer.start()});
refs.stopBtn.addEventListener('click', () => {timer.stop()})
function pad (value) {
	return String(value).padStart(2, "0");
}


function getTimeComponents(time) {
	    const hours = pad(
	      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	    );
	    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
	    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
	
	    return { hours, mins, secs };
	  }










// const refs = {
//   startBtn: document.querySelector('button[data-action-start]'),
//   stopBtn: document.querySelector('button[data-action-stop]'),
//   clockface: document.querySelector('.js-clockface'),
// };

// class Timer {
//   constructor({ onTick }) {
//     this.intervalId = null;
//     this.isActive = false;
//     this.onTick = onTick;

//     this.init();
//   }

//   init() {
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   start() {
//     if (this.isActive) {
//       return;
//     }

//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = this.getTimeComponents(deltaTime);

//       this.onTick(time);
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   /*
//    * - Принимает время в миллисекундах
//    * - Высчитывает сколько в них вмещается часов/минут/секунд
//    * - Возвращает обьект со свойствами hours, mins, secs
//    * - Адская копипаста со stackoverflow 💩
//    */
//   getTimeComponents(time) {
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
//   }

//   /*
//    * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
//    */
//   pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }

// const timer = new Timer({
//   onTick: updateClockface,
// });

// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

// /*
//  * - Принимает время в миллисекундах
//  * - Высчитывает сколько в них вмещается часов/минут/секунд
//  * - Рисует интерфейс
//  */
// function updateClockface({ hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }
