/* 
    Summer Hacks
    SOA Code Room
    Project Template
    Use this template: https://github.com/SOACodeRoom/summerhacks-projectName/generate
    script.js: You will write your Javascript code for your portfolio website here. You can add other Javascript files too but it must be under "js" folder.
*/
const card1 = document.querySelector('.card1');
card1.addEventListener('click', function(){
	card1.classList.toggle('is_flipped');
});
const card2 = document.querySelector('.card2');
card2.addEventListener('click', function(){
	card2.classList.toggle('is_flipped');
});
const card3 = document.querySelector('.card3');
card3.addEventListener('click', function(){
	card3.classList.toggle('is_flipped');
});