
document.getElementById('p1').addEventListener('click',()=>next(2));

function next(n){
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
document.getElementById('p'+n).classList.add('active');
}

function showPanda(){
document.getElementById('pandaModal').style.display='flex';
}

function openLetter(){
document.getElementById('pandaModal').style.display='none';
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
document.getElementById('letter').classList.add('active');
typeWriter();
confetti();
}

const msg=`Happiest Birthday Bhavaaa 💗

Enjoyyyy your dayy 🤗

Epomee sirichiteyyy iruu ❤️

Indha insecurity dash lam vendam,

un siripu AZHAGA iruku 😭✨

Stay happy and stay strong 🥰

Edhu vandhalum namba thatti vittu poite irukalam 😎🤚🏻

Once again,

🎉 Happyyy 19teen Bhavaaaa 🤩🤙🏻 🎉

— Rohiii 👶🏻❤️`;

function typeWriter(){
let i=0, el=document.getElementById('type');
function t(){ if(i<msg.length){ el.textContent+=msg.charAt(i++); setTimeout(t,35);}}
t();
}

function confetti(){
for(let i=0;i<80;i++){
let d=document.createElement('div');
d.innerHTML='💖';
d.style.position='fixed';
d.style.left=Math.random()*100+'vw';
d.style.top='-20px';
d.style.fontSize='24px';
d.style.animation='fall '+(3+Math.random()*3)+'s linear forwards';
document.body.appendChild(d);
}
}
let st=document.createElement('style');
st.textContent='@keyframes fall{to{transform:translateY(110vh)}}';
document.head.appendChild(st);
