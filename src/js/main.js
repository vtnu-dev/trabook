// Custom scripts

function burgerMenu() {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const body = document.querySelector('body')
	const menuItems = document.querySelectorAll('.menu__item-link')

	const toogleMenu = () => {
		menu.classList.toggle('active')
		burger.classList.toggle('active-burger')
		body.classList.toggle('locked')

		const removeActive = () => {
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
		}
		menuItems.forEach(item => {
			item.addEventListener('click', removeActive)
		})

		document.addEventListener('keydown', e => {
			if (e.keyCode == 27) {
				// code for kye Escape, but can use e.key
				removeActive()
			}
		})
      
      window.addEventListener('orientationchange', () => {
            removeActive()
      })

	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			removeActive()
		}
	})

	}

	burger.addEventListener('click', toogleMenu)

	
}
burgerMenu()

function fixedNav() {
	const nav = document.querySelector('nav')

	const breakpoint = 1
	if (window.scrollY >= breakpoint) {
		nav.classList.add('fixed__nav')
	} else {
		nav.classList.remove('fixed__nav')
	}
}

const nav = document.querySelector('nav');

let prevScrollpos = window.pageYOffset

window.addEventListener('scroll', function () {
	let currentScrollPos = window.pageYOffset
	if (prevScrollpos > currentScrollPos || window.scrollY <= 70) {
		nav.style.top = '0'
	} else {
		nav.style.top = '-80px'
	}
	prevScrollpos = currentScrollPos
})


$(function () {
	let year = new Date().getFullYear()
	let day = new Date().getUTCDate()
	let month = new Date().getUTCMonth() + 1
	let today = month + '/' + day + '/' + year

	let labelToday = document.querySelector('.label-today')

	$('input[name="datefilter"]').daterangepicker(
		{
			minDate: month + '/' + day + '/' + year,
			//"singleDatePicker": true,
			autoApply: true,
			autoUpdateInput: false,
			//locale: {
			//	cancelLabel: 'Clear',
			//},
		},
		function (start, end, label) {
			labelToday.textContent = start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY')

			console.log(
				'New date range selected: ' +
					start.format('YYYY-MM-DD') +
					' to ' +
					end.format('YYYY-MM-DD') +
					' (predefined range: ' +
					label +
					')'
			)
		}
	)
})

const footerYear = document.querySelector('.footer__year');
function currentYear() {footerYear.textContent = new Date().getFullYear()};
currentYear();

// console.info(today);

var swiperOne = new Swiper('.swiper-one', {
	slidesPerView: 4,
	spaceBetween: 20,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	navigation: {
		nextEl: '.destination__button-next',
		prevEl: '.destination__button-prev',
	},
	breakpoints: {
      320: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
		950: {
         slidesPerView: 3,
		},
      1220: {
         slidesPerView: 4,
      },
	},
})

var swiperTwo = new Swiper(".swiper-two", {
   slidesPerView: 3,
   spaceBetween: 30,
   slidesPerGroup: 1,
   loop: true,
   loopFillGroupWithBlank: true,
   
   navigation: {
     nextEl: ".tour__button-next",
     prevEl: ".tour__button-prev",
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
		950: {
			slidesPerView: 3,
		},
	},

 });

 var swiperFour = new Swiper(".swiper-three", {
   spaceBetween: 120,
   loop: true,
   direction: "horizontal",
   
   navigation: {
      nextEl: ".reviews__button-next",
      prevEl: ".reviews__button-prev",
   },
   breakpoints: {
      1050: {
         direction: "vertical",
		},
   }
 });

 var swiperFour = new Swiper(".swiper-four", {
   slidesPerView: 4,
	spaceBetween: 20,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
   autoplay:true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
     dynamicBullets: true,
     dynamicMainBullets: 1,
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
		950: {
         slidesPerView: 3,
		},
      1220: {
         slidesPerView: 4,
      },
	},
   
 });


