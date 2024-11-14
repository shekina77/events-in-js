


const card=document.querySelector("div");
card.innerHTML=`<img src="https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hieu-697259.jpg&fm=jpg" width=200px , height=200px/>
<p>beautyfull flowers</p>
<button>explore more</button>`

card.style.border="2px solid black";
card.style.backgroundColor="lightpink";
card.style.display="inline-block"
card.style.padding="10px"
card.style.justifycontent="center"
card.style.textAlign="center"


const newcard1=document.getElementById("card2");
newcard1.innerHTML=`<img src="https://www.blacktulipflowers.qa/wp-content/uploads/2022/11/pink-rose-bush-001.png" width=200px ,height=250px;/>
<p>pink roses</p>
<button>explore more</button>`

newcard1.style.border="2px solid black";
newcard1.style.backgroundColor="lightpink";
newcard1.style.display="inline-block"
newcard1.style.padding="10px"
newcard1.style.textAlign="center"


const card3=document.createElement('div')
card3.innerHTML=`<img src="https://images.pexels.com/photos/4825/red-love-romantic-flowers.jpg?cs=srgb&dl=pexels-jeshoots-4825.jpg&fm=jpg" width=200px , height=200px/>
<p>red roses</p>
<button>explore more</button>`
card3.style.border="2px solid black";
card3.style.backgroundColor="lightpink";
card3.style.display="inline-block"
card3.style.padding="10px"
card3.style.textAlign="center"
document.body.appendChild(card3)


const card4=document.createElement('div')
card4.innerHTML=`<img src="https://www.flowerswithdevotion.com.au/cdn/shop/files/IMG_3605.jpg?v=1705305905" width=200px, height=200px;/>
<p>beautyfull boquet</p>
<button>explore more</button>`
card4.style.border="2px solid black";
card4.style.backgroundColor="lightpink";
card4.style.display="inline-block"
card4.style.padding="10px"
card4.style.textAlign="center"
document.body.appendChild(card4)


document.body.style.display="flex"
document.body.style.gap="10px"
