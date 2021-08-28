'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Our Web Data

const account1 = {
	owner: 'Saheen Ahmed',
	movements: [100, 430, 1000, 40.23, 30.5, -34, 5000, 25000],
	interestrate: 2.5,
	pin: 1111,
	username: 'sah21',
	acc_no: 'c000011112222',
};
const account2 = {
	owner: 'Mohmed Sihan',
	movements: [5000, 3400, -150, -790, 430, 1000, -3210, -1000, 8500, -30, 50000],
	interestRate: 1.5,
	pin: 2222,
	username: 'sih21',
	acc_no: 'c000011112223',
};

const account3 = {
	owner: 'Loganathan Mathan',
	movements: [200, -200, 340, -300, 430, 1000, 400, -460, 10000, 5000],
	interestRate: 0.7,
	pin: 3333,
	username: 'mat21',
	acc_no: 'c000011112224',
};

const account4 = {
	owner: 'Will Smith',
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
	username: 'wil21',
	acc_no: 'c000011112225',
};

const accounts = [account1, account2, account3, account4];

///////////////////////////////////// 🚪🚪Login page🚪🚪
let currentAccount;

if (document.body.className == 'login') {
	const inputLoginUsername = document.querySelector('#username');
	const inputLoginPin = document.querySelector('#password');
	const btnLogin = document.querySelector('.login__btn');
	// console.log(inputLoginUsername);

	btnLogin.addEventListener('click', function (e) {
		e.preventDefault();
		console.log('LOGIN');
		currentAccount = accounts.find((acc) => acc.username === inputLoginUsername.value);
		console.log(currentAccount);

		if (currentAccount?.pin === Number(inputLoginPin.value)) {
			console.log('worked');
			console.log(currentAccount);

			// Clear input fields
			inputLoginUsername.value = inputLoginPin.value = '';
			inputLoginPin.blur();

			//session
			let accu = currentAccount.username;
			sessionStorage.setItem('key1', accu);
			//open dashboard
			window.open('dashboard.htm', '_self');
		}
	});
}
//
/////////////////////////////////////////// 🏂🏂 Dashboard js 🏂🏂
if (document.body.className == 'dashboard') {
	console.log('inside dashboard');
	var ca = sessionStorage.getItem('key1');
	console.log(ca);
	let acc = accounts.find((acc) => acc.username == ca);
	const logoutBtn = document.querySelector('.logout');
	const containerMovements = document.querySelector('#containerMovements');
	//Welcome message
	const welcome = document.querySelector('.welcome');
	welcome.textContent = `WELCOME BACK, ${acc.owner.toUpperCase()}`;
	//DisplayMovements
	const displayMovements = function (movements) {
		containerMovements.innerHTML = ' ';
		movements.forEach(function (mov, i) {
			const type = mov > 0 ? 'deposit' : 'withdrawal';
			const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov.toLocaleString()} Rs</div>
    </div>
    `;
			containerMovements.insertAdjacentHTML('afterbegin', html);
		});
	};
	displayMovements(acc.movements);

	// update balance
	const balance__value = document.querySelector('#balance__value');

	const calcDisplayBalance = function (acc) {
		acc.balance = acc.movements.reduce((accu, mov) => accu + mov, 0);

		balance__value.textContent = ` ${acc.balance.toLocaleString()}`;
	};
	calcDisplayBalance(acc);

	// logout
	const handleLogout = () => {
		window.localStorage.clear();
		window.location.reload(true);
		// window.location.replace('index.html');
	};
	logoutBtn.addEventListener('click', handleLogout);
}
///////////////////////////////////////// 🔮🔮🔮 TRANSFER PAGE 🔮🔮🔮
const btnTransfer = document.querySelector('.submit_btn');
const inputTransferAmount = document.querySelector('#amount');
const inputReceiverAccNo = document.querySelector('#inputReceiverAcc');
const balance__transfer = document.querySelector('#balance__transfer');
if (document.body.className == 'transfer') {
	console.log('in transfer page');
	//get logged in account using session variable
	var ca = sessionStorage.getItem('key1');
	let acc = accounts.find((acc) => acc.username == ca);
	console.log(acc);
	//Transfer page balance
	const calcDisplayBalance2 = function (acc) {
		acc.balance = acc.movements.reduce((accu, mov) => accu + mov, 0);

		balance__transfer.textContent = ` ${acc.balance.toLocaleString()}`;
	};
	calcDisplayBalance2(acc);

	//amount transfer function
	btnTransfer.addEventListener('click', function (e) {
		e.preventDefault();
		const amount = Number(inputTransferAmount.value);
		console.log(amount);
		const receiverAcc = accounts.find((acc) => acc.acc_no === inputReceiverAccNo.value);
		console.log(receiverAcc);
	});
}

//
///////////////////////////////////////// 🏝🏝🏝landing page js🏝🏝🏝
if (document.body.className == 'landing') {
	// Button scrolling
	btnScrollTo.addEventListener('click', function (e) {
		section1.scrollIntoView({ behavior: 'smooth' });
	});

	///////////////////////////////////////
	// Page navigation

	/*document.querySelectorAll('.nav__link').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();

    // Matching
    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });
*/
	///////////////////////////////////////
	// Tabbed component

	tabsContainer.addEventListener('click', function (e) {
		const clicked = e.target.closest('.operations__tab');

		// Guard clause
		if (!clicked) return;

		// Remove active classes
		tabs.forEach((t) => t.classList.remove('operations__tab--active'));
		tabsContent.forEach((c) => c.classList.remove('operations__content--active'));

		// Activate tab
		clicked.classList.add('operations__tab--active');

		// Activate content area
		document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
	});

	///////////////////////////////////////
	// Menu fade animation
	const handleHover = function (e) {
		if (e.target.classList.contains('nav__link')) {
			const link = e.target;
			const siblings = link.closest('.nav').querySelectorAll('.nav__link');
			const logo = link.closest('.nav').querySelector('img');

			siblings.forEach((el) => {
				if (el !== link) el.style.opacity = this;
			});
			logo.style.opacity = this;
		}
	};

	// Passing "argument" into handler
	nav.addEventListener('mouseover', handleHover.bind(0.5));
	nav.addEventListener('mouseout', handleHover.bind(1));

	///////////////////////////////////////
	// Sticky navigation: I used Intersection Observer API
	if (window.screen.width > 680) {
		const header = document.querySelector('.header');
		const navHeight = nav.getBoundingClientRect().height;

		console.log('oopssss');

		const stickyNav = function (entries) {
			const [entry] = entries;
			// console.log(entry);

			if (!entry.isIntersecting) nav.classList.add('sticky');
			else nav.classList.remove('sticky');
		};

		const headerObserver = new IntersectionObserver(stickyNav, {
			root: null,
			threshold: 0,
			rootMargin: `-${navHeight}px`,
		});

		headerObserver.observe(header);
	}
	///////////////////////////////////////
	// Reveal sections
	const allSections = document.querySelectorAll('.section');

	const revealSection = function (entries, observer) {
		const [entry] = entries;

		if (!entry.isIntersecting) return;

		entry.target.classList.remove('section--hidden');
		observer.unobserve(entry.target);
	};

	const sectionObserver = new IntersectionObserver(revealSection, {
		root: null,
		threshold: 0.15,
	});

	allSections.forEach(function (section) {
		sectionObserver.observe(section);
		section.classList.add('section--hidden');
	});

	///////////////////////////////////////
	// Slider
	const slider = function () {
		const slides = document.querySelectorAll('.slide');
		const btnLeft = document.querySelector('.slider__btn--left');
		const btnRight = document.querySelector('.slider__btn--right');
		const dotContainer = document.querySelector('.dots');

		let curSlide = 0;
		const maxSlide = slides.length;

		// Functions
		const createDots = function () {
			slides.forEach(function (_, i) {
				dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
			});
		};

		const activateDot = function (slide) {
			document.querySelectorAll('.dots__dot').forEach((dot) => dot.classList.remove('dots__dot--active'));

			document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
		};

		const goToSlide = function (slide) {
			slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
		};

		// Next slide
		const nextSlide = function () {
			if (curSlide === maxSlide - 1) {
				curSlide = 0;
			} else {
				curSlide++;
			}

			goToSlide(curSlide);
			activateDot(curSlide);
		};

		const prevSlide = function () {
			if (curSlide === 0) {
				curSlide = maxSlide - 1;
			} else {
				curSlide--;
			}
			goToSlide(curSlide);
			activateDot(curSlide);
		};

		const init = function () {
			goToSlide(0);
			createDots();

			activateDot(0);
		};
		init();

		// Event handlers
		btnRight.addEventListener('click', nextSlide);
		btnLeft.addEventListener('click', prevSlide);

		document.addEventListener('keydown', function (e) {
			if (e.key === 'ArrowLeft') prevSlide();
			e.key === 'ArrowRight' && nextSlide();
		});

		dotContainer.addEventListener('click', function (e) {
			if (e.target.classList.contains('dots__dot')) {
				const { slide } = e.target.dataset;
				goToSlide(slide);
				activateDot(slide);
			}
		});
	};
	slider();
}
