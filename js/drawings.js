/* Gráficos interactivos de la galería, implementados con Canvas 2D. */
const $=(id)=>document.getElementById(id);
function draw(kind,canvas,opts={}){if(!canvas)return;const c=canvas.getContext('2d');c.clearRect(0,0,400,400);const fill=(r,g,b)=>{c.fillStyle=`rgb(${r},${g},${b})`};const stroke=(r,g,b)=>{c.strokeStyle=`rgb(${r},${g},${b})`};const noStroke=()=>c.strokeStyle='transparent';const ellipse=(x,y,w,h)=>{c.beginPath();c.ellipse(x,y,w/2,h/2,0,0,Math.PI*2);c.fill();if(c.strokeStyle!=='transparent')c.stroke()};const rect=(x,y,w,h)=>{c.fillRect(x,y,w,h);if(c.strokeStyle!=='transparent')c.strokeRect(x,y,w,h)};const line=(x,y,X,Y)=>{c.beginPath();c.moveTo(x,y);c.lineTo(X,Y);c.stroke()};const triangle=(a,b,d,e,f,g)=>{c.beginPath();c.moveTo(a,b);c.lineTo(d,e);c.lineTo(f,g);c.closePath();c.fill();if(c.strokeStyle!=='transparent')c.stroke()};const bg=(r,g,b)=>{fill(r,g,b);c.fillRect(0,0,400,400)};stroke(0,0,0);fill(255,255,255);bg(255,255,255);
if(kind==='rana'){const x=200,y=250;noStroke();fill(30,204,91);ellipse(x,y,200,100);ellipse(x-50,y-50,40,40);ellipse(x+50,y-50,40,40);fill(255,255,255);ellipse(x-50,y-50,30,30);ellipse(x+50,y-50,30,30);fill(0,0,0);ellipse(x,y,120,50);rect(x-55,y-55,10,15);rect(x+45,y-55,10,15);if(opts.blink){fill(30,204,91);rect(x-65,y-58,30,10);rect(x+35,y-58,30,10)}}
if(kind==='conejo'){bg(255,255,255);stroke(0,0,0);fill(255,255,255);ellipse(150,70,60,120);ellipse(240,70,60,120);ellipse(200,170,150,150);fill(0,0,0);ellipse(170,150,10,10);ellipse(230,150,10,10);line(150,200,250,200);fill(255,255,255);const len=Number(opts.toothLength??100);rect(185,200,15,len);rect(200,200,15,len);fill(0,0,0);ellipse(170,150,30,30);ellipse(230,150,30,30)}
if(kind==='cena'){bg(186,145,20);stroke(0,0,0);fill(255,255,255);ellipse(200,200,350,350);ellipse(200,200,300,300);fill(230,230,230);ellipse(200,200,300,200);fill(255,255,255);ellipse(150,190,35,35);fill(210,160,90);triangle(230,240,310,240,270,190);fill(255,200,0);triangle(230,240,310,240,270,190);fill(50,180,70);stroke(0,100,0);ellipse(110,240,30,20);ellipse(140,250,30,20);ellipse(170,240,30,20);if(opts.extra){fill(225,80,70);stroke(150,40,30);ellipse(205,278,45,22)}}
if(kind==='nevado'){const sky=opts.sky||'#00c8ff';c.fillStyle=sky;c.fillRect(0,0,400,400);fill(240,248,255);noStroke();rect(0,300,400,100);stroke(0,0,0);fill(255,187,0);ellipse(80,64,100,100);fill(255,255,255);ellipse(200,300,150,150);ellipse(200,200,100,100);ellipse(200,120,75,75);if(opts.snow){noStroke();fill(255,255,255);for(let i=0;i<28;i++)ellipse((i*97+23)%400,(i*71+12)%295,5,5)}}
if(kind==='muneco'){bg(255,255,255);stroke(0,0,0);fill(255,255,255);rect(0,350,400,50);ellipse(200,300,150,150);ellipse(200,200,100,100);ellipse(200,120,75,75);stroke(90,90,90);line(150,200,100,150);line(250,200,300,140);if(opts.decorate){fill(0,0,0);noStroke();ellipse(187,115,7,7);ellipse(213,115,7,7);fill(255,145,25);triangle(200,125,235,132,200,135);fill(30,35,55);rect(160,77,80,10);rect(173,38,54,43);fill(220,40,75);rect(150,168,100,12)}}}
const descriptions={rana:'Rana con pupilas rectangulares dibujadas usando coordenadas relativas x e y.',conejo:'Conejo con longitud de dientes controlada por una variable toothLength.',cena:'Plato de comida compuesto con elipses, triángulos, colores y trazos.',nevado:'Paisaje de cielo azul, suelo nevado, sol y muñeco de nieve.',muneco:'Muñeco de nieve construido mediante elipses, líneas y rectángulos.'};
const snippets={rana:`var x = 200; var y = 250;
noStroke(); fill(30, 204, 91);
ellipse(x, y, 200, 100);
ellipse(x - 50, y - 50, 40, 40);
ellipse(x + 50, y - 50, 40, 40);
fill(255, 255, 255);
ellipse(x - 50, y - 50, 30, 30);
ellipse(x + 50, y - 50, 30, 30);
fill(0, 0, 0); ellipse(x, y, 120, 50);
rect(x - 55, y - 55, 10, 15);
rect(x + 45, y - 55, 10, 15);`,conejo:`ellipse(150, 70, 60, 120); // left ear
ellipse(240, 70, 60, 120); // right ear
ellipse(200, 170, 150, 150); // face
fill(0, 0, 0);
ellipse(170, 150, 10, 10);
ellipse(230, 150, 10, 10);
line(150, 200, 250, 200);
noFill();
rect(185, 200, 15, 10);
rect(200, 200, 15, 10);
var eyeSize = 30;
fill(0, 0, 0);
ellipse(170, 150, eyeSize, eyeSize);
ellipse(230, 150, eyeSize, eyeSize);
var toothLength = 100;
noFill();
rect(185, 200, 15, toothLength);
rect(200, 200, 15, toothLength);`,cena:`background(186, 145, 20); // wooden table
ellipse(200, 200, 350, 350); // plate
ellipse(200, 200, 300, 300);
fill(230, 230, 230); stroke(0, 0, 0);
ellipse(200, 200, 300, 200);
// Huevo
fill(255, 255, 255); stroke(0, 0, 0);
ellipse(150, 190, 35, 35);
// Pan y queso
fill(210, 160, 90); stroke(200, 150, 0);
triangle(230, 240, 310, 240, 270, 190);
fill(255, 200, 0); stroke(200, 150, 0);
triangle(230, 240, 310, 240, 270, 190);
// Verduras
fill(50, 180, 70); stroke(0, 100, 0);
ellipse(110, 240, 30, 20);
ellipse(140, 250, 30, 20);
ellipse(170, 240, 30, 20);`,nevado:`background(0, 200, 255);
fill(240, 248, 255);
// The ground
rect(0, 300, 400, 100);
fill(255, 187, 0);
// The sun
ellipse(80, 64, 100, 100);
fill(255, 255, 255);
// The snowman
ellipse(200, 300, 150, 150);
ellipse(200, 200, 100, 100);
ellipse(200, 120, 75, 75);`,muneco:`rect(0, 350, 400, 50);
ellipse(200, 300, 150, 150);
ellipse(200, 200, 100, 100);
ellipse(200, 120, 75, 75);
line(150, 200, 100, 150);
line(250, 200, 300, 140);`};
function init(){document.querySelectorAll('canvas[data-drawing]').forEach(canvas=>draw(canvas.dataset.drawing,canvas));const stage=$('drawing');if(stage){const kind=stage.dataset.drawing;const opts={};const render=()=>draw(kind,stage,opts);render();if($('description'))$('description').textContent=descriptions[kind];if($('original-code'))$('original-code').textContent=snippets[kind];document.querySelectorAll('[data-option]').forEach(input=>{const update=()=>{opts[input.dataset.option]=input.type==='checkbox'?input.checked:input.value;if(input.dataset.option==='toothLength')$('length-value').textContent=input.value;render()};input.addEventListener('input',update);update()});$('reset')?.addEventListener('click',()=>{document.querySelectorAll('[data-option]').forEach(i=>{if(i.type==='checkbox')i.checked=false;else if(i.type==='range')i.value=100;else if(i.type==='color')i.value='#00c8ff';i.dispatchEvent(new Event('input'))})});$('save')?.addEventListener('click',()=>{const a=document.createElement('a');a.href=stage.toDataURL('image/png');a.download=kind+'.png';a.click()})}}
document.addEventListener('DOMContentLoaded',init);