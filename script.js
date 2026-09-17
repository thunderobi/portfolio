const $=s=>document.querySelector(s);
document.getElementById("year").textContent=new Date().getFullYear();

const menu=document.querySelector(".menu-toggle"), nav=document.querySelector(".navbar nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const theme=document.getElementById("themeToggle");
theme.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  theme.textContent=document.body.classList.contains("light")?"☾":"☀";
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const toast=$("#toast");
document.querySelectorAll(".project-link").forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    toast.textContent=`Add your GitHub/demo link for "${link.dataset.demo}" here.`;
    toast.classList.add("show");
    setTimeout(()=>toast.classList.remove("show"),2800);
  });
});
