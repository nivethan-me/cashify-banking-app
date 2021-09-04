// 'use strict';
const containerMovements = document.querySelector('#containerMovements');

//Data

const account1 = {
	owner: 'Saheen Ahmed',
	movements: [100, 40.23, 30.5, -34],
	interestrate: 2.5,
	pin: 1234,
	username: 'sah21',
};
const account2 = {
	owner: 'Mohmed Sihan',
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
	username: 'sih21',
};

const account3 = {
	owner: 'Loganathan Mathan',
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
	username: 'mat21',
};

const account4 = {
	owner: 'Will Smith',
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
	username: 'wil21',
};

const accounts = [account1, account2, account3, account4];

//
const displayMovements = function (movements) {
	containerMovements.innerHTML = ' ';
	movements.forEach(function (mov, i) {
		const type = mov > 0 ? 'deposit' : 'withdrawal';

		const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov} Rs</div>
      </div>
    `;

		containerMovements.insertAdjacentHTML('afterbegin', html);
	});
};

displayMovements(account2.movements);

// update balance
const lbalance__value = document.querySelector('#balance__value');

const calcDisplayBalance = function (movements) {
	const balance = movements.reduce((accu, mov) => accu + mov, 0);
	lbalance__value.textContent = ` ${balance}`;
};
calcDisplayBalance(account1.movements);

// Login
const btnLogin = document.querySelector('.login__btn');

btnLogin.addEventListener('click', function (e) {
	e.preventDefault();
	console.log('LOGIN');
});
