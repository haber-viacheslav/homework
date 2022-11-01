// const refs = {
// 	body: document.querySelector('body'),
// 	container: document.querySelector('.container'),
// 	mainParent: document.querySelector('.main-parent'),
// 	parent: document.querySelector('.parent'),
// 	child: document.querySelector('.child'),
// 	innerChild: document.querySelector('.inner-child'),
// 	buttonMain: document.querySelector('.click-btn'),
// };

// // console.log(refs.container);
// // console.log(refs.mainParent);
// // console.log(refs.parent);
// // console.log(refs.child);
// // console.log(refs.innerChild);
// // console.log(refs.buttonMain);

// refs.body.addEventListener('click', onBodyClick);
// refs.container.addEventListener('click', onContainerClick);
// refs.mainParent.addEventListener('click', onMainParentClick);
// refs.parent.addEventListener('click', onParentClick);
// refs.child.addEventListener('click', onChildClick);
// refs.innerChild.addEventListener('click', onInnerChildClick);
// refs.buttonMain.addEventListener('click', onButtonClick);

// function onBodyClick(event) {
// 	console.log('onBodyClick');
// 	console.log('onBodyClick -> event.target', event.target);
// 	console.log('onBodyClick -> event.currentTarget', event.currentTarget);
// }
// function onContainerClick(event) {
// 	console.log('onContainerClick');
// 	console.log('onContainerClick -> event.target', event.target);
// 	console.log('onContainerClick -> event.currentTarget', event.currentTarget);
// }
// function onMainParentClick(event) {
// 	console.log('onMainParentClick');
// 	console.log('onMainParentClick -> event.target', event.target);
// 	console.log(
// 		'onMainParentClick -> event.currentTarget',
// 		event.currentTarget
// 	);
// }
// function onParentClick(event) {
// 	console.log('onChildClick');
// 	console.log('onChildClick -> event.target', event.target);
// 	console.log('onChildClick -> event.currentTarget', event.currentTarget);
// }
// function onChildClick(event) {
// 	console.log('onChildClick');
// 	console.log('onChildClick -> event.target', event.target);
// 	console.log('onChildClick -> event.currentTarget', event.currentTarget);
// }
// function onInnerChildClick(event) {
// 	console.log('onInnerChildClick');
// 	console.log('onInnerChildClick -> event.target', event.target);
// 	console.log(
// 		'onInnerChildClick -> event.currentTarget',
// 		event.currentTarget
// 	);
// }
// function onButtonClick(event) {
// 	console.log('onButtonClick');
// 	console.log('onButtonClick -> event.target', event.target);
// 	console.log('onButtonClick -> event.currentTarget', event.currentTarget);
// }

// const containerRef = document.querySelector('.js-container');

// containerRef.addEventListener('click', onClick);

// function onClick(evt) {
// 	if (evt.target.nodeName !== 'BUTTON') {
// 		return;
// 	}
// 	// console.log(evt.target.nodeName);
// 	console.log(evt.currentTarget);
// 	console.log(evt.target);
// }

// const addBtn = document.querySelector('.js-button');
// let labelCounter = 6;

// addBtn.addEventListener('click', onAddButtons);

// function onAddButtons() {
// 	const btn = document.createElement('button');
// 	btn.textContent = `Кнопка ${labelCounter}`;
// 	btn.type = 'button';
// 	console.log(btn);

// 	containerRef.append(btn);
// 	labelCounter += 1;
// }
