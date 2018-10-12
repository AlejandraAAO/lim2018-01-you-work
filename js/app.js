const btnVisitor = document.getElementById('btnVisitor');
const main = document.querySelector('.main');
const register = document.querySelector('.register');
const adminPage = document.querySelector('.admin');
const returnI = document.querySelector('#returnInit');
const btnAdmin = document.querySelector('#btnAdmin');
const returnI2 = document.querySelector('#returnInit2');
const c = document.getElementById('contenido');

btnVisitor.addEventListener('click', () => {
  main.classList.add('back');
  register.classList.remove("back");
});

btnAdmin.addEventListener('click', ()=>{
	main.classList.add('back');
  adminPage.classList.remove("back");
});

returnI.addEventListener('click', () => {
  main.classList.remove('back');
  register.classList.add("back");
});

returnI2.addEventListener('click', () => {
  main.classList.remove('back');
  adminPage.classList.add("back");
});


$(document).ready(function(){
  $('.tabs').tabs();
  $('.datepicker').datepicker();
	$('.timepicker').timepicker();
	$('select').formSelect();
});

window.addEventListener("DOMContentLoaded", function() {
	var video = document.getElementById('video');
	var localStream = null;
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var errBack = function(e) {
		console.log('Opps.. no se puede utilizar la cámara', e);
	};
 
	// Solicitar acceso a la cámara
	if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
		navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
			video.src = window.URL.createObjectURL(stream);
			video.play();
		});
	}
	else if(navigator.getUserMedia) { // Standard
		navigator.getUserMedia({ video: true }, function(stream) {
			video.src = stream;
			video.play();
			localStream = stream;
		}, errBack);
	} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
		navigator.webkitGetUserMedia({ video: true }, function(stream){
			video.src = window.URL.createObjectURL(stream);
			video.play();
			localStream = stream;
		}, errBack);
	} else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
		navigator.mozGetUserMedia({ video: true }, function(stream){
			video.src = window.URL.createObjectURL(stream);
			video.play();
			localStream = stream;
		}, errBack);
	}
 
	document.getElementById('tomar').addEventListener('click', function() {
    context.drawImage(video, 0, 0, 480, 360);
   	c.innerText = canvas.toDataURL();
  });
  // esto funcionará solamente si tienen una etiqueta button o similar con el id "detener".
document.getElementById('detener').addEventListener('click', function() {
	video.src = '';
	video.pause();
	localStream.getVideoTracks()[0].stop();
});
}, false);

