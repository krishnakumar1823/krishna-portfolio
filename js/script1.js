// function randomText(){
// 	var text=("!@#$%^&*()_+=")
// 	letters=text[Math.floor(Math.random()*text.length)]
// 	return letters
// }
// function rain(){
// 	let cloud=document.querySelector('.cloud')
// 	let e=document.createElement("div")
// 	e.classList.add('drop')
// 	cloud.appendChild(e)

// 	let left=Math.floor(Math.random() * (56 - 43 + 1) + 43)
// 	let size=Math.random()*0.5
// 	let duration=Math.random()*1.5

// 	e.innerHTML=randomText()
// 	e.style.left=left + "%"
// 	e.style.fontSize=1+size+"em"
// 	e.style.animationDuration=1+duration+'s'
 
// 	setTimeout(function(){
// 		cloud.removeChild(e)
// 	},1500)
// }
// setInterval(function(){
// 	rain()
// },100)


 
let options = {
	startAngle: -1.55,
	size: 150,
	value: 0.85,
	fill: {gradient: ['#009688','#00ffe5']}
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
function(event, progress, stepValue){
	$(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".html .bar").circleProgress({
	value: 0.95
	});
$(".js .bar").circleProgress({
	value: 0.85
});
$(".bootstrap .bar").circleProgress({
	value: 0.90
});      
$(".react .bar").circleProgress({
	value: 0.80
});



var page=document.getElementById("page0")
var home=document.getElementById("home")
var home1=document.getElementById("home1")
var about1=document.getElementById("about1")
var resume1=document.getElementById("resume1")
var project1=document.getElementById("project1")
var contact1=document.getElementById("contact1")
var change=document.querySelector(".change")
var change_one=document.getElementById("change1")
var change_two=document.getElementById("change2")
var change_three=document.getElementById("change3")
var change_four=document.getElementById("change4")
var changeIcon=document.getElementById("changeIcon")
 

//buttuon-1
var changeCount=0
var color_btn=document.getElementById("color_btn")
color_btn.addEventListener("click",function(){
	color_btn.classList.toggle('todoList')
	change.classList.toggle('todoList')
	change_one.classList.toggle('todoList')
	change_two.classList.toggle('todoList')
	change_three.classList.toggle('todoList')
	change_four.classList.toggle('todoList')
	changeCount++
	if(changeCount%2!=0){
		changeIcon.setAttribute("class","bi bi-brightness-high py-3 d-inline-block")
		project1.setAttribute("style","z-index: 0;background-color: #1d252c!important;color: white !important;")
		contact1.setAttribute("style","z-index: 0;background-color: #1d252c!important;color: white !important;")

		var contact_card=document.getElementById("contactCardParent")
		contact_card.innerHTML=""

		var array1=[
			{cls:"./image/telephone1.png",contact:"tel:+919787533778",text:"phone number",call:"9787533778"},
			{cls:"./image/email1.png",contact:"mailto:kumarkrishna11231@gmail.com",text:"Mail id",call:"kumarkrishna11231@gmail"},
			{cls:"./image/github1.png",contact:"https://github.com/krishnakumar1823",text:"Github id",call:"https://github.com/krishnakumar1823"}
		]
		 
		array1.map((val,ind)=>{
		contact_card.innerHTML+=`<div class="col-6 px-2 my-2" style="min-height: 30vh;">
			<div class="position-relative contact-div row justify-content-center align-items-center" style="cursor:pointer;border:1px solid #009688;border-radius:6px;width:100%;height:30vh;">
				<div class="col-12 text-center">
					<img src=${val.cls} width="50px" height="50px">
					<h6 class="py-2">${val.text}</h6>
				</div>
				<div class="contact-content-color text-center">
					<div class="contact-content-transform">
						<a href=${val.contact}>${val.call}</a>
					</div>
				</div>
			</div>
		</div>`
		})
	}
	else{
		changeIcon.setAttribute("class","bi bi-moon py-3 d-inline-block")
		project1.setAttribute("style","z-index: 0;background-color: white!important;color: black !important;")
		contact1.setAttribute("style","z-index: 0;background-color: white!important;color: black !important;")

		var contact_card=document.getElementById("contactCardParent")
		contact_card.innerHTML=""

		var array1=[
			{cls:"./image/telephone.png",contact:"tel:+919787533778",text:"phone number",call:"9787533778"},
			{cls:"./image/email.png",contact:"mailto:kumarkrishna11231@gmail.com",text:"Mail id",call:"kumarkrishna11231@gmail"},
			{cls:"./image/github.png",contact:"https://github.com/krishnakumar1823",text:"Github id",call:"https://github.com/krishnakumar1823"}
		]
		 
		array1.map((val,ind)=>{
		contact_card.innerHTML+=`<div class="col-6 px-2 my-2" style="min-height: 30vh;">
			<div class="position-relative contact-div row justify-content-center align-items-center" style="cursor:pointer;border:1px solid #009688;border-radius:6px;width:100%;height:30vh;">
				<div class="col-12 text-center">
					<img src=${val.cls} width="50px" height="50px">
					<h6 class="py-2">${val.text}</h6>
				</div>
				<div class="contact-content-color text-center">
					<div class="contact-content-transform">
						<a href=${val.contact}>${val.call}</a>
					</div>
				</div>
			</div>
		</div>`
		})
	}
	
})


//buttuon-2
var changeIcon2=document.getElementById("changeIcon2")
var color_btn=document.getElementById("color_btn_1")
color_btn.addEventListener("click",function(){
	color_btn.classList.toggle('todoList')
	change.classList.toggle('todoList')
	change_one.classList.toggle('todoList')
	change_two.classList.toggle('todoList')
	change_three.classList.toggle('todoList')
	change_four.classList.toggle('todoList')
	changeCount++
	if(changeCount%2!=0){
		changeIcon2.setAttribute("class","bi bi-brightness-high py-3 d-inline-block")
		project1.setAttribute("style","z-index: 0;background-color: #1d252c!important;color: white !important;")
		contact1.setAttribute("style","z-index: 0;background-color: #1d252c!important;color: white !important;")

		var contact_card=document.getElementById("contactCardParent")
		contact_card.innerHTML=""

		var array1=[
			{cls:"./image/telephone1.png",contact:"tel:+919787533778",text:"phone number",call:"9787533778"},
			{cls:"./image/email1.png",contact:"mailto:kumarkrishna11231@gmail.com",text:"Mail id",call:"kumarkrishna11231@gmail"},
			{cls:"./image/github1.png",contact:"https://github.com/krishnakumar1823",text:"Github id",call:"https://github.com/krishnakumar1823"}
		]
		 
		array1.map((val,ind)=>{
		contact_card.innerHTML+=`<div class="col-6 px-2 my-2" style="min-height: 30vh;">
			<div class="position-relative contact-div row justify-content-center align-items-center" style="cursor:pointer;border:1px solid #009688;border-radius:6px;width:100%;height:30vh;">
				<div class="col-12 text-center">
					<img src=${val.cls} width="50px" height="50px">
					<h6 class="py-2">${val.text}</h6>
				</div>
				<div class="contact-content-color text-center">
					<div class="contact-content-transform">
						<a href=${val.contact}>${val.call}</a>
					</div>
				</div>
			</div>
		</div>`
		})
	}
	else{
		changeIcon2.setAttribute("class","bi bi-moon py-3 d-inline-block")
		project1.setAttribute("style","z-index: 0;background-color: white!important;color: black !important;")
		contact1.setAttribute("style","z-index: 0;background-color: white!important;color: black !important;")

		var contact_card=document.getElementById("contactCardParent")
		contact_card.innerHTML=""

		var array1=[
			{cls:"./image/telephone.png",contact:"tel:+919787533778",text:"phone number",call:"9787533778"},
			{cls:"./image/email.png",contact:"mailto:kumarkrishna11231@gmail.com",text:"Mail id",call:"kumarkrishna11231@gmail"},
			{cls:"./image/github.png",contact:"https://github.com/krishnakumar1823",text:"Github id",call:"https://github.com/krishnakumar1823"}
		]
		array1.map((val,ind)=>{
		contact_card.innerHTML+=`<div class="col-6 px-2 my-2" style="min-height: 30vh;">
			<div class="position-relative contact-div row justify-content-center align-items-center" style="cursor:pointer;border:1px solid #009688;border-radius:6px;width:100%;height:30vh;">
				<div class="col-12 text-center">
					<img src=${val.cls} width="50px" height="50px">
					<h6 class="py-2">${val.text}</h6>
				</div>
				<div class="contact-content-color text-center">
					<div class="contact-content-transform">
						<a href=${val.contact}>${val.call}</a>
					</div>
				</div>
			</div>
		</div>`
		})
	}
	
})

//count
var contactCount=0
var projectCount=0

page.setAttribute("class","col-12 col-md-12 col-lg-5 full-shadow-div1")
home1.setAttribute("class","col-12 col-md-12 col-lg-6 home in")
about1.setAttribute("class","col-12 col-md-12 col-lg-6 hidden")
resume1.setAttribute("class","col-12 col-md-12 col-lg-6 hidden")
project1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
contact1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
 
var change_clr_home=document.getElementById("change-clr-js")
var change_clr_home1=document.getElementById("change-clr-js1")
var change_clr_home2=document.getElementById("change-clr-js2")
var change_clr_home3=document.getElementById("change-clr-js3")
var change_clr_home4=document.getElementById("change-clr-js4")
change_clr_home.setAttribute("style","none")
change_clr_home1.setAttribute("style","none")
change_clr_home2.setAttribute("style","none")
change_clr_home3.setAttribute("style","none")
change_clr_home4.setAttribute("style","none")

home.addEventListener("click",function(e){
	e.preventDefault()
	
	//project and contact card reset function
	var contact_card=document.getElementById("contact1")
	contact_card.innerHTML=""

	var project_card=document.getElementById("project1")
	project_card.innerHTML=""
	//

	change_clr_home.setAttribute("style","color:#26a69a;font-weight:600")
	change_clr_home1.setAttribute("style","none")
	change_clr_home2.setAttribute("style","none")
	change_clr_home3.setAttribute("style","none")
	change_clr_home4.setAttribute("style","none")

	contactCount=0
	projectCount=0

	home1.setAttribute("class","col-12 col-md-12 col-lg-6 home active in")
	about1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	project1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	resume1.setAttribute("class","col-12 col-md-12 col-lg-6 hidden")
	contact1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
})

var about=document.getElementById("about")
about.addEventListener("click",function(e1){
	e1.preventDefault()
	
	contactCount=0
	projectCount=0

	change_clr_home.setAttribute("style","none")
	change_clr_home1.setAttribute("style","color:#26a69a;font-weight:600")
	change_clr_home2.setAttribute("style","none")
	change_clr_home3.setAttribute("style","none")
	change_clr_home4.setAttribute("style","none")

	home1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	about1.setAttribute("class","col-12 col-md-12 col-lg-6 home in active")
	resume1.setAttribute("class","col-12 col-md-12 col-lg-6 hidden")
	project1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	contact1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
})

var resume=document.getElementById("resume")
resume.addEventListener("click",function(e2){
	e2.preventDefault()
	
	//project and contact card reset function
	var contact_card=document.getElementById("contact1")
	contact_card.innerHTML=""

	var project_card=document.getElementById("project1")
	project_card.innerHTML=""
	//

	change_clr_home.setAttribute("style","none")
	change_clr_home1.setAttribute("style","none")
	change_clr_home2.setAttribute("style","color:#26a69a;font-weight:600")
	change_clr_home3.setAttribute("style","none")
	change_clr_home4.setAttribute("style","none")

	contactCount=0
	projectCount=0

	home1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	about1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	project1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	resume1.setAttribute("class","col-12 col-md-12 col-lg-6 home in active")
	contact1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
})

var project=document.getElementById("project")
project.addEventListener("click",function(e3){
	e3.preventDefault()

	// contact card reset function
	var contact_card=document.getElementById("contact1")
	contact_card.innerHTML=""
	//

	change_clr_home.setAttribute("style","none")
	change_clr_home1.setAttribute("style","none")
	change_clr_home2.setAttribute("style","none")
	change_clr_home3.setAttribute("style","color:#26a69a;font-weight:600")
	change_clr_home4.setAttribute("style","none")
	
	contactCount=0
	++projectCount

	if(projectCount==1){

	var project1=document.getElementById("project1")
	home1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	about1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	resume1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
	project1.setAttribute("class","col-12 col-md-12 col-lg-6 div5-bg home in active")
	contact1.setAttribute("class","col-12 col-md-12 col-lg-6 div6-bg home hidden")

	
	
	var array=[	
				{image:"image/bookmyshow.png",cnt:"Book My Show",link:"https://krishnakumar1823.github.io/bookmyshow/",lang:"React js,Material UI"},
				{image:"image/bigbasket.png",cnt:"Big Basket",link:"https://krishnakumar1823.github.io/big-basket/",lang:"React js,Material UI"},
				{image:"image/swiggy.png",cnt:"Swiggy",link:"https://krishnakumar1823.github.io/swiggy/",lang:"Html,Css,Js,Bootstrap"},
				{image:"image/clock.png",cnt:"Clock",link:"https://krishnakumar1823.github.io/alarm-clock/",lang:"Html,Css,Js"},
				{image:"image/stopwatch.png",cnt:"Stopwatch",link:"https://krishnakumar1823.github.io/js-stopwatch/",lang:"Html,Css,Js"},
				{image:"image/mentor.png",cnt:"Mentor",link:"https://krishnakumar1823.github.io/Mentor/",lang:"Html,Css,Bootstrap"},
				{image:"image/vesper.png",cnt:"Vesper",link:"https://krishnakumar1823.github.io/24th-may-task/",lang:"Html,Css"},
				{image:"image/event.png",cnt:"Event",link:"https://krishnakumar1823.github.io/TheEvent/#Event-button1",lang:"Html,Css,Js,Bootstrap"},
				{image:"image/groovin.png",cnt:"groovin",link:"https://krishnakumar1823.github.io/9th-june-task/",lang:"Html,Css,Js,Bootstrap"},
				{image:"image/education.png",cnt:"Education",link:"https://krishnakumar1823.github.io/Education/",lang:"Html,Css,Js,Bootstrap"}
			]
		
		var project1=document.getElementById("project1")

		var projectCardHead=document.createElement("p")
		projectCardHead.innerHTML="Projects"
		projectCardHead.setAttribute("class","abt-heading ps-4")

		project1.appendChild(projectCardHead)

		for(var i=0;i<array.length;i++){
			var project1=document.getElementById("project1")
		
			var flipCard=document.createElement("div")
			var flipCardInner=document.createElement("div")
			var flipCardFront=document.createElement("div")
			var imgSrc=document.createElement("img")
			var flipCardBack=document.createElement("div")
			var cnt=document.createElement("h6")
			var lang=document.createElement("p")
			var websiteLink=document.createElement("a")

			project1.setAttribute("class","col-12 col-md-12 col-lg-6 row div5-bg home in active")
			flipCard.setAttribute("class","flip-card col-12 col-md-6 col-lg-6 p-4")
			flipCardInner.setAttribute("class","flip-card-inner")
			flipCardFront.setAttribute("class","flip-card-front row align-items-center")
			flipCardBack.setAttribute("class","flip-card-back")
			
			
			imgSrc.setAttribute("style","height:200px;width:100%;border-radius:10px")
			imgSrc.setAttribute("src",array[i].image)
			cnt.setAttribute("class","col-12")
			cnt.innerHTML=`Task: ${array[i].cnt}`
			lang.setAttribute("class","col-12")
			lang.innerHTML=`Languages used:<br> ${array[i].lang}`
			

			websiteLink.innerHTML="<br>Project link"
			websiteLink.setAttribute("class","bi bi-link")
			websiteLink.setAttribute("href",array[i].link)
			websiteLink.setAttribute("target","_blank")
			websiteLink.setAttribute("style","color:white;display:block;")
			
			
			project1.appendChild(flipCard)
			flipCard.appendChild(flipCardInner)
			flipCardInner.appendChild(flipCardFront)
			flipCardFront.appendChild(imgSrc)
			flipCardInner.appendChild(flipCardBack)
			flipCardBack.appendChild(cnt)
			flipCardBack.appendChild(lang)
			flipCardBack.appendChild(websiteLink)
		}
	}
})


var contact=document.getElementById("contact")
contact.addEventListener("click",function(e4){
	e4.preventDefault()
	
	// contact card reset function
	var project_card=document.getElementById("project1")
	project_card.innerHTML=""
	//

	++contactCount
	projectCount=0
	
	change_clr_home.setAttribute("style","none")
	change_clr_home1.setAttribute("style","none")
	change_clr_home2.setAttribute("style","none")
	change_clr_home3.setAttribute("style","none")
	change_clr_home4.setAttribute("style","color:#26a69a;font-weight:600")

	if(contactCount == 1){
		var contact1=document.getElementById("contact1")
		home1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
		about1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
		resume1.setAttribute("class","col-12 col-md-12 col-lg-6 home hidden")
		project1.setAttribute("class","col-12 col-md-12 col-lg-6 div5-bg home hidden")
		contact1.setAttribute("class","col-12 col-md-12 col-lg-6 div6-bg home in active")
				
		var contact1=document.getElementById("contact1")
		contact1.setAttribute("class","col-12 col-md-12 col-lg-6 row div5-bg home in active")

		var contactHeaddiv=document.createElement("div")
		contact1.appendChild(contactHeaddiv)

		var contactCardHead=document.createElement("p")
		contactCardHead.innerHTML="Contact"
		contactCardHead.setAttribute("class","abt-heading ps-4")
		contactHeaddiv.appendChild(contactCardHead)
		

		var contactParent=document.createElement("div")
		contactParent.setAttribute("class","col-12 row")
		contactParent.setAttribute("id","contactCardParent")
		contactHeaddiv.appendChild(contactParent)

		var array1=[
			{cls:"./image/telephone.png",contact:"tel:+919787533778",text:"phone number",call:"9787533778"},
			{cls:"./image/email.png",contact:"mailto:kumarkrishna11231@gmail.com",text:"Mail id",call:"kumarkrishna11231@gmail"},
			{cls:"./image/github.png",contact:"https://github.com/krishnakumar1823",text:"Github id",call:"https://github.com/krishnakumar1823"}
		]
		array1.map((val,ind)=>{
			contactParent.innerHTML+=`<div class="col-6 px-2 my-2" style="min-height: 30vh;">
				<div class="position-relative contact-div row justify-content-center align-items-center" style="cursor:pointer;border:1px solid #009688;border-radius:6px;width:100%;height:30vh;">
					<div class="col-12 text-center">
						<img src=${val.cls} width="50px" height="50px">
						<h6 class="py-2">${val.text}</h6>
					</div>
					<div class="contact-content-color text-center">
						<div class="contact-content-transform">
							<a href=${val.contact}>${val.call}</a>
						</div>
					</div>
				</div>
			</div>`
		})
	}
})