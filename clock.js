setInterval(function(){
	d = new Date();
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hrRot = 30 * hr + min / 2;
	minRot = 6 * min;
	secRot = (6 * sec);
    // console.log(d)
    // console.log(hr)
    // console.log(min)
    // console.log(sec)
    // console.log(hr_rotation)
    // console.log(min_rotation)
    console.log(secRot)

	document.getElementById("hr").style.transform = `rotate(${hrRot}deg)`;
	document.getElementById("min").style.transform = `rotate(${minRot}deg)`;
	document.getElementById("sec").style.transform = `rotate(${secRot}deg)`;
    
}, 1000);



