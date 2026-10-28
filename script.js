"use strict";

const PHOTO_BASE = "./";
const chapters = [
  {
    file:"03FA58A7-E9D3-4BAB-81BA-9B48A8E281EE.png",
    number:"I",name:"Рождение легенды",accent:"царское призвание",
    title:"Великолепный от природы",
    text:"Говорят, едва Юрий Петрович впервые вошёл в царские палаты, даже древние портреты на стенах выпрямились. Взгляд у него был решительный, осанка государственная, а чувство юмора — такое, что бояре иногда забывали, зачем пришли на совет.",
    quote:"«Не всякий родится царём. Но не всякий родится мною»."
  },
  {
    file:"09F834DB-9DC9-4F1F-A5CB-99A223BADBF6.png",
    number:"II",name:"Светские хроники",accent:"царский бал",
    title:"Бал, где смолкала музыка",
    text:"Когда его величество появлялся на балу, придворные расправляли камзолы, музыканты прибавляли громкости, а дамы обменивались весьма многозначительными взглядами. Царь любил танцы, комплименты и восхищённые лица. Особенно — последнее.",
    quote:"«Красивой даме — поклон. Некрасивому комплименту — отказ»."
  },
  {
    file:"1C6B9657-B067-4B7E-86B9-E992395FD854.png",
    number:"III",name:"Дела чести",accent:"решительный характер",
    title:"Честь и острая шпага",
    text:"Юрий Петрович не страшился вызовов. Если кто-то нарушал правила хорошего тона, государь мог ответить одним суровым взглядом — а если требовалось, и выйти на честный поединок. Впрочем, особенно ценил он победы без лишнего шума: ужин остывать не должен.",
    quote:"«За честь стою твёрдо. Но обед по расписанию»."
  },
  {
    file:"28FCA94C-BBEC-4B50-9C45-2916956E830D.png",
    number:"IV",name:"Государевы заботы",accent:"совет и власть",
    title:"Когда царь размышлял",
    text:"Не все дни состояли из праздников. Бывало, собирал он бояр, слушал донесения и вершил важнейшие дела. Одним словом утихомиривал спор, вторым обнадёживал народ, а третьим приказывал подать чай. Так и держалось государство — на мудрости, твёрдости и горячих пирожках.",
    quote:"«Дума государева глубока. Чай, однако, остывает»."
  },
  {
    file:"52EDBB22-6CAC-4BB9-A53A-83533D3528F5.png",
    number:"V",name:"Жизнь во дворце",accent:"пиры и удовольствия",
    title:"Пир на весь белый свет",
    text:"Ни один летописец не сумел пересчитать, сколько блюд украшало царский стол. Известно одно: государь любил кушать вкусно, сытно и в хорошем обществе. Гостям подавали угощение, музыкантам — знак начинать, а поварам — заслуженную царскую похвалу.",
    quote:"«Голодному подданному — хлеб. Голодавшему царю — два пирога»."
  },
  {
    file:"75435100-E1F9-47E3-8AAF-B19C165AC8E6.png",
    number:"VI",name:"Тайные пристрастия",accent:"волшебная скрижаль",
    title:"Тайна царской скрижали",
    text:"Однажды в руки Юрия Петровича попала дивная волшебная скрижаль. На ней он играл в «Рэйд Шаров Легендс», собирал могучих героев и открывал загадочные сундуки. Бояре шептались: «Опять государь на охоте». А царь отвечал: «Не мешайте, там событие заканчивается!»",
    quote:"«Один призыв. Последний. Клянусь царским престолом»."
  },
  {
    file:"9C8E6A85-2AD7-4A9A-9F1C-A9913A7C6471.png",
    number:"VII",name:"Наследие великого",accent:"человек за короной",
    title:"Таков был наш государь",
    text:"Его помнили и строгим, и весёлым, и задумчивым. Он любил красивых женщин, уважал добрых друзей, умел ценить отменную кухню и с азартом спасал виртуальные королевства. Но главное — не терял себя. Потому и прозвали его Великолепным: другого такого Юрия Петровича не было.",
    quote:"«Пускай пройдут века. А ужин всё равно подавайте вовремя»."
  }
];

const $ = (selector,root=document) => root.querySelector(selector);
const chaptersList = $("#chaptersList");
const galleryGrid = $("#galleryGrid");
const photoSrc = name => PHOTO_BASE + name;
const create = (tag,className,text) => {
  const el = document.createElement(tag);
  if(className) el.className = className;
  if(text!==undefined) el.textContent = text;
  return el;
};

chapters.forEach((story,index) => {
  const article = create("article","chapter reveal");
  article.id = "chapter-" + (index+1);
  const media = create("div","chapter-media");
  const img = create("img");
  img.src = photoSrc(story.file);
  img.alt = "Фотография Юрия Петровича из царской летописи, портрет " + (index+1);
  img.loading = "lazy"; img.decoding = "async";
  media.append(img,create("span","image-number",story.number));
  const content = create("div","chapter-copy");
  content.appendChild(create("div","chapter-count","ГЛАВА "+story.number+" / "+story.name.toUpperCase()));
  const title = create("h3");
  const parts = story.title.split(" ");
  if(parts.length>=3){
    title.append(document.createTextNode(parts.slice(0,-2).join(" ")+" "));
    title.appendChild(create("em","",parts.slice(-2).join(" ")));
  } else {
    title.append(document.createTextNode(story.title));
  }
  content.append(title,create("p","",story.text),create("blockquote","chapter-quote",story.quote));
  article.append(media,content);
  chaptersList.appendChild(article);

  const button = create("button","gallery-item reveal");
  button.type = "button";
  button.setAttribute("aria-label","Открыть портрет "+(index+1)+": "+story.title);
  const photo = create("span","gallery-photo");
  const thumb = create("img");
  thumb.src=photoSrc(story.file);thumb.alt="";thumb.loading="lazy";thumb.decoding="async";
  photo.appendChild(thumb);
  const label = create("span","gallery-label");
  const labelInner = create("span");
  labelInner.append(create("span","", "ПОРТРЕТ 0"+(index+1)), create("strong","",story.title));
  label.append(labelInner,create("b","","↗"));
  button.append(photo,label);
  button.addEventListener("click",()=>openGallery(index));
  galleryGrid.appendChild(button);
});

const modal = $("#galleryDialog");
const dialogImage = $("#dialogImage");
let activeImage = 0;
let galleryTrigger = null;
function updateGallery(index){
  activeImage=(index+chapters.length)%chapters.length;
  const story=chapters[activeImage];
  dialogImage.src=photoSrc(story.file);
  dialogImage.alt="Царский фотопортрет "+(activeImage+1)+": "+story.title;
  $("#dialogCounter").textContent="ПОРТРЕТ 0"+(activeImage+1)+" / 0"+chapters.length;
  $("#dialogTitle").textContent=story.title;
}
function openGallery(index){
  galleryTrigger=document.activeElement;
  updateGallery(index);
  if(typeof modal.showModal==="function") modal.showModal();
  else modal.setAttribute("open","");
  $("#galleryClose").focus();
  document.body.style.overflow="hidden";
}
function closeGallery(){
  if(typeof modal.close==="function") modal.close();
  else modal.removeAttribute("open");
}
$("#galleryClose").addEventListener("click",closeGallery);
$("#galleryPrev").addEventListener("click",()=>updateGallery(activeImage-1));
$("#galleryNext").addEventListener("click",()=>updateGallery(activeImage+1));
modal.addEventListener("close",()=>{
  document.body.style.overflow="";
  if(galleryTrigger && galleryTrigger.isConnected) galleryTrigger.focus();
});
modal.addEventListener("click",e=>{if(e.target===modal)closeGallery()});
modal.addEventListener("keydown",e=>{
  if(e.key==="ArrowLeft"){e.preventDefault();updateGallery(activeImage-1)}
  if(e.key==="ArrowRight"){e.preventDefault();updateGallery(activeImage+1)}
});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape" && modal.hasAttribute("open"))closeGallery();
});

const menuToggle=$("#menuToggle");
const mobileNav=$("#mobileNav");
menuToggle.addEventListener("click",()=>{
  const open=menuToggle.getAttribute("aria-expanded")!=="true";
  menuToggle.setAttribute("aria-expanded",String(open));
  menuToggle.setAttribute("aria-label",open?"Закрыть меню":"Открыть меню");
  mobileNav.hidden=!open;
});
mobileNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
  mobileNav.hidden=true;menuToggle.setAttribute("aria-expanded","false");
  menuToggle.setAttribute("aria-label","Открыть меню");
}));

const decrees = [
"Повелеваю всякому честному человеку сегодня кушать вкусно, смеяться громко и не спорить с царём.",
"С сего дня объявить пироги государственной ценностью. Последний пирожок всегда оставлять государю.",
"Всем боярам немедля сделать важные лица. Государь начинает великий рейд.",
"Объявляю день всеобщего отдыха, пока не выпадет легендарный герой!",
"Повелеваю музыкантам играть, гостям танцевать, а придворным не наступать царю на ноги.",
"Кто рассмешит государя, тому пожаловать почёт и второй кусок пирога.",
"Красивым дамам — цветы, верным друзьям — уважение, завистникам — смотреть издалека.",
"Запрещаю тревожить царя словами «пора спать», когда идёт призыв в Рэйде.",
"Всем, кто усомнится в великолепии Юрия Петровича, предложить взглянуть на царскую галерею.",
"Сей день считать удачным: я проснулся, корона на месте, ужин обещают отменный.",
"Повелеваю казне не пустеть, поварам не лениться, а скрижали не разряжаться.",
"Отныне всякую тяжёлую беседу завершать чаепитием. Ибо такова воля царя."
];
let decreeIndex=0;
const decreeMessage=$("#decreeMessage");
$("#decreeButton").addEventListener("click",()=>{
  let next=decreeIndex;
  while(next===decreeIndex) next=Math.floor(Math.random()*decrees.length);
  decreeIndex=next;
  decreeMessage.textContent=decrees[decreeIndex];
  $("#decreeNumber").textContent=String(decreeIndex+1).padStart(3,"0");
  $("#decreeFeedback").textContent="";
});
$("#copyButton").addEventListener("click",async ()=>{
  const content="Указ Юрия Петровича Великолепного: "+decreeMessage.textContent;
  try{
    if(!navigator.clipboard || !navigator.clipboard.writeText) throw new Error("Clipboard API not available");
    await navigator.clipboard.writeText(content);
    $("#decreeFeedback").textContent="Царский указ скопирован!";
  }catch(e){$("#decreeFeedback").textContent="Копирование недоступно. Выделите текст указа вручную."}
});

const prefersReducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if("IntersectionObserver" in window && !prefersReducedMotion){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}
    })
  },{rootMargin:"0px 0px -30px 0px",threshold:.07});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
}else{
  document.querySelectorAll(".reveal").forEach(el=>el.classList.add("visible"));
}

let ticking=false;
function updateScroll(){
  const range=document.documentElement.scrollHeight-window.innerHeight;
  const fraction=range>0?Math.min(1,Math.max(0,window.scrollY/range)):0;
  $("#scrollProgress").style.transform="scaleX("+fraction+")";
  $("#siteHeader").classList.toggle("scrolled",window.scrollY>25);
  ticking=false;
}
window.addEventListener("scroll",()=>{
  if(!ticking){window.requestAnimationFrame(updateScroll);ticking=true}
},{passive:true});
updateScroll();
