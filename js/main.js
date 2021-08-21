// tablet and mobile nav toggle
const navOpenBtn = document.querySelector('.open');
const navCloseBtn = document.querySelector('.close');
const navBar = document.querySelector('.nav')

navOpenBtn.addEventListener('click', () => {
	navBar.style.display = 'flex';
	navOpenBtn.style.display = 'none';
	navCloseBtn.style.display = 'inline'
})

navCloseBtn.addEventListener('click', () => {
	navBar.style.display = 'none';
	navOpenBtn.style.display = 'inline';
	navCloseBtn.style.display = 'none'
})


// adopt review - tab menu
const reviewTarget = document.querySelectorAll('.pet-img');
const reviewContent = document.querySelectorAll('.review__list');

for (let i = 0; i < reviewTarget.length; i++) {
  reviewTarget[i].addEventListener('click', (e) => {
    e.preventDefault();
    const reviewOrgTarget = e.currentTarget.getAttribute('href');
    const reviewTabTarget = reviewOrgTarget.replace('#', '');

    for (let j = 0; j < reviewContent.length; j++) {
      reviewContent[j].style.display = 'none';
    }
    document.getElementById(reviewTabTarget).style.display = 'flex';
		
		for (let x = 0; x < reviewTarget.length; x++) {
			reviewTarget[x].classList.remove('review__btn-active');
			e.currentTarget.classList.add('review__btn-active')
		}
  });
}

function init() {
	for (let i = 0; i < reviewContent.length; i++) {
		reviewContent[i].style.display = 'none'
	}
	document.getElementById('pet01').style.display = 'flex'
}

init();  
