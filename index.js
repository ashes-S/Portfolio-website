var pause_slide;$=document.querySelector.bind(document),$$=document.querySelectorAll.bind(document),window.addEventListener("load",function(){$(".greet_txt").firstElementChild.style.animation="slide1 1.3s ease-in-out 200ms forwards",setTimeout(()=>{$(".greet_txt").firstElementChild.style.animation="slide1 forwards, fade1 1s ease-in forwards"},1500)}),window.addEventListener("load",function(){$(".greet_txt").lastElementChild.style.animation="slide2 1.7s ease-in-out 1s forwards",setTimeout(()=>{$(".greet_txt").lastElementChild.style.animation="slide2 forwards, fade2 1.4s ease-in forwards"},2800)}),$(".edu_qual_sec>header>h1").addEventListener("click",()=>{if($$(".scl_table tr")[1].classList.contains("scl_row_hover_default")){$(".scl_table").style.animation="scl_table_centre 800ms forwards",$(".grad_table").style.animation="grad_table_centre 800ms forwards";for(let e=1;e<4;e++)console.log("yare"),$$(".scl_table tr")[e].classList.remove("scl_row_hover_default"),$$(".grad_table tr")[e].classList.remove("grad_row_hover_default"),$$(".scl_table tr")[e].classList.add("scl_row_hover_center"),$$(".grad_table tr")[e].classList.add("grad_row_hover_center")}else if($$(".scl_table tr")[1].classList.contains("scl_row_hover_center")){$(".scl_table").style.animation="scl_table_new 800ms forwards",$(".grad_table").style.animation="grad_table_new 800ms forwards";for(let e=1;e<4;e++)$$(".scl_table tr")[e].classList.remove("scl_row_hover_center"),$$(".grad_table tr")[e].classList.remove("grad_row_hover_center"),$$(".scl_table tr")[e].classList.add("scl_row_hover_new"),$$(".grad_table tr")[e].classList.add("grad_row_hover_new")}else if($$(".scl_table tr")[1].classList.contains("scl_row_hover_new")){$(".scl_table").style.animation="scl_table_default 800ms forwards",$(".grad_table").style.animation="grad_table_default 800ms forwards";for(let e=1;e<4;e++)$$(".scl_table tr")[e].classList.remove("scl_row_hover_new"),$$(".grad_table tr")[e].classList.remove("grad_row_hover_new"),$$(".scl_table tr")[e].classList.add("scl_row_hover_default"),$$(".grad_table tr")[e].classList.add("grad_row_hover_default")}});let slide=["serioflex.jpg","serioflex2.jpg","serioflex3.jpg","tip_calc.jpg","drum_set.jpg","form.jpg","pro_resp_grid.jpg","dice_game.jpg","responsive_site.jpg","calculator.jpg","doughp.jpg","doughp4.jpg","serioflex.jpg"],i=0,source="images/projects/";function auto_slide(){source+=slide[++i],$(".slide_show>img").setAttribute("src",source),i==slide.length-1&&(i=0),source="images/projects/"}$(".projects").addEventListener("mouseover",function e(){pause_slide=setInterval(auto_slide,1800),this.removeEventListener("mouseover",e)}),$(".prev_slide").addEventListener("click",()=>{clearInterval(pause_slide),0==i?i=slide.length-1:i--,source+=slide[i],$(".slide_show>img").setAttribute("src",source),source="images/projects/"}),$(".nxt_slide").addEventListener("click",()=>{clearInterval(pause_slide);i==slide.length-1?i=0:i++,source+=slide[i],$(".slide_show>img").setAttribute("src",source),source="images/projects/"}),$("#dark_mode").addEventListener("click",()=>{1==$("#dark_mode").checked?($(":root").style.setProperty("--light-mode","rgb(0, 0, 0)"),$(":root").style.setProperty("--flip-img-bg","rgb(7,245,245)"),$("html").style.backgroundColor="rgba(255, 255, 255, 0.925)",$("#dark_mode").setAttribute("title","Light Mode")):0==$("#dark_mode").checked&&($(":root").style.setProperty("--light-mode","rgb(255, 255, 255)"),$(":root").style.setProperty("--flip-img-bg","rgb(8, 56, 56)"),$("html").style.backgroundColor="rgba(0, 0, 0, 0.925)",$("#dark_mode").setAttribute("title","Dark Mode"))});
