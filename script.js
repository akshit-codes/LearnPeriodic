var inputs, modal, modalHead, modalBody, modalFoot, resultArr, popup;

function onLoad() {
	inputs = document.getElementsByClassName('elem-input');
	modal = document.getElementsByClassName('modal')[0];
	modalHead = document.getElementsByClassName('modalHead')[0];
	modalBody = document.getElementsByClassName('modalBody')[0];
	modalFoot = document.getElementsByClassName('modalFoot')[0];
	barrier = document.getElementsByClassName('barrier')[0];
	popup = document.getElementsByClassName('popupInactive')[0];
	for (i = 0; i < 118; i++) {
		inputs[i].addEventListener('input', updateValue);
		inputs[i].setAttribute('spellcheck', 'false');
	}
}

function updateValue(e) {
	value = e.target.value;
	if (value.length > 0) {
		value = value.substr(0, 2);
		if (value[0] == ' ') {
			value = '';
		}
		if (value[1] == ' ') {
			value = value[0];
		}
		if (value.length != 0) {
			value.length == 1
				? (value = value[0].toUpperCase())
				: (value = value[0].toUpperCase() + value[1].toLowerCase());
		}
		e.target.value = value;
	}
}

function submit() {
	attempted = 0;
	score = 0;
	resultArr = [];

	for (i = 0; i < 118; i++) {
		if (inputs[i].value != '') {
			attempted += 1;
			if (inputs[i].value == elements[i]) {
				score += 1;
				resultArr.push('🟩');
			} else {
				resultArr.push('🟥');
			}
		} else {
			resultArr.push('⬜');
		}
	}

	gap1 = '⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛';
	gap2 = '⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛';
	gap3 = '⬛⬛';

	periodicResult =
		resultArr.slice(0, 1).join('') +
		gap1 +
		resultArr.slice(1, 2).join('') +
		'<br>' +
		resultArr.slice(2, 4).join('') +
		gap2 +
		resultArr.slice(4, 10).join('') +
		'<br>' +
		resultArr.slice(10, 12).join('') +
		gap2 +
		resultArr.slice(12, 18).join('') +
		'<br>' +
		resultArr.slice(18, 36).join('') +
		'<br>' +
		resultArr.slice(36, 54).join('') +
		'<br>' +
		resultArr.slice(54, 72).join('') +
		'<br>' +
		resultArr.slice(72, 90).join('') +
		'<br>' +
		'<br>' +
		gap3 +
		resultArr.slice(90, 104).join('') +
		gap3 +
		'<br>' +
		gap3 +
		resultArr.slice(104, 118).join('') +
		gap3 +
		'<br>';

	copyText =
		resultArr.slice(0, 1).join('') +
		gap1 +
		resultArr.slice(1, 2).join('') +
		'\n' +
		resultArr.slice(2, 4).join('') +
		gap2 +
		resultArr.slice(4, 10).join('') +
		'\n' +
		resultArr.slice(10, 12).join('') +
		gap2 +
		resultArr.slice(12, 18).join('') +
		'\n' +
		resultArr.slice(18, 36).join('') +
		'\n' +
		resultArr.slice(36, 54).join('') +
		'\n' +
		resultArr.slice(54, 72).join('') +
		'\n' +
		resultArr.slice(72, 90).join('') +
		'\n' +
		'\n' +
		gap3 +
		resultArr.slice(90, 104).join('') +
		gap3 +
		'\n' +
		gap3 +
		resultArr.slice(104, 118).join('') +
		gap3 +
		'\n';

	result =
		'Attempted: ' +
		attempted +
		'<br>Correct: ' +
		score +
		'<br>Incorrect: ' +
		(attempted - score);

	score >= 40
		? (modalHead.innerHTML = '<h2>Well Done<h2>')
		: (modalHead.innerHTML = '<h2>Could Improve<h2>');

	modalBody.innerHTML = periodicResult;

	modalFoot.innerHTML = result;

	handleModal(true);
}

function handleModal(bool) {
	if (bool) {
		modal.setAttribute('style', 'display:flex');
		barrier.setAttribute('style', 'display:block');
		console.log('meow');
		setTimeout(() => {
			modal.classList.add('modalActive');
		}, 10);
	} else {
		modal.classList.remove('modalActive');
		barrier.setAttribute('style', 'display:none');
		setTimeout(() => {
			modal.setAttribute('style', 'display:none');
		}, 500);
	}
}

function copy() {
	const el = document.createElement('textarea');
	el.value = copyText;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
	handlePopup();
}

function handlePopup() {
	popup.classList.add('popupActive');
	setTimeout(() => {
		popup.classList.remove('popupActive');
	}, 3000);
}

document.addEventListener('keyup', function (event) {
	if (event.code === 'Enter') {
		submit();
	}
	if (event.code === 'Escape') {
		if (modal.classList.contains('modalActive')) {
			handleModal(false);
		}
	}
});

elements = [
	'H',
	'He',
	'Li',
	'Be',
	'B',
	'C',
	'N',
	'O',
	'F',
	'Ne',
	'Na',
	'Mg',
	'Al',
	'Si',
	'P',
	'S',
	'Cl',
	'Ar',
	'K',
	'Ca',
	'Sc',
	'Ti',
	'V',
	'Cr',
	'Mn',
	'Fe',
	'Co',
	'Ni',
	'Cu',
	'Zn',
	'Ga',
	'Ge',
	'As',
	'Se',
	'Br',
	'Kr',
	'Rb',
	'Sr',
	'Y',
	'Zr',
	'Nb',
	'Mo',
	'Tc',
	'Ru',
	'Rh',
	'Pd',
	'Ag',
	'Cd',
	'In',
	'Sn',
	'Sb',
	'Te',
	'I',
	'Xe',
	'Cs',
	'Ba',
	'La',
	'Hf',
	'Ta',
	'W',
	'Re',
	'Os',
	'Ir',
	'Pt',
	'Au',
	'Hg',
	'Tl',
	'Pb',
	'Bi',
	'Po',
	'At',
	'Rn',
	'Fr',
	'Ra',
	'Ac',
	'Rf',
	'Db',
	'Sg',
	'Bh',
	'Hs',
	'Mt',
	'Ds',
	'Rg',
	'Cn',
	'Nh',
	'Fl',
	'Mc',
	'Lv',
	'Ts',
	'Og',
	'Ce',
	'Pr',
	'Nd',
	'Pm',
	'Sm',
	'Eu',
	'Gd',
	'Tb',
	'Dy',
	'Ho',
	'Er',
	'Tm',
	'Yb',
	'Lu',
	'Th',
	'Pa',
	'U',
	'Np',
	'Pu',
	'Am',
	'Cm',
	'Bk',
	'Cf',
	'Es',
	'Fm',
	'Md',
	'No',
	'Lr',
];
