
$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);


    window.addEventListener("load", function(){
        $(".greet_txt").firstElementChild.style.animation = "slide1 1.3s ease-in-out 200ms forwards";
        setTimeout(() => {
        $(".greet_txt").firstElementChild.style.animation = "slide1 forwards, fade1 1s ease-in forwards";
        }, 1500);
    })

  
    window.addEventListener("load", function(){
        $(".greet_txt").lastElementChild.style.animation = "slide2 1.7s ease-in-out 1s forwards";
        setTimeout(() =>{
            $(".greet_txt").lastElementChild.style.animation = "slide2 forwards, fade2 1.4s ease-in forwards";
        }, 2800);
    })



    $(".edu_qual_sec>header>h1").addEventListener("click",()=>{

        if($$(".scl_table tr")[1].classList.contains("scl_row_hover_default")){
            $(".scl_table").style.animation="scl_table_centre 800ms forwards";
            $(".grad_table").style.animation="grad_table_centre 800ms forwards";
            for (let i=1; i<4; i++){
                //remove default class
                console.log("yare")
                $$(".scl_table tr")[i].classList.remove("scl_row_hover_default");
                $$(".grad_table tr")[i].classList.remove("grad_row_hover_default");
                //add center class
                $$(".scl_table tr")[i].classList.add("scl_row_hover_center");
                $$(".grad_table tr")[i].classList.add("grad_row_hover_center");
            }
        }
        else if($$(".scl_table tr")[1].classList.contains("scl_row_hover_center")){
                $(".scl_table").style.animation="scl_table_new 800ms forwards";
                $(".grad_table").style.animation="grad_table_new 800ms forwards";
                for (let i=1; i<4; i++){
                    //remove center class
                    $$(".scl_table tr")[i].classList.remove("scl_row_hover_center");
                    $$(".grad_table tr")[i].classList.remove("grad_row_hover_center");
                    //add new class
                    $$(".scl_table tr")[i].classList.add("scl_row_hover_new");
                    $$(".grad_table tr")[i].classList.add("grad_row_hover_new");
                }
        }
        else if($$(".scl_table tr")[1].classList.contains("scl_row_hover_new")){
            $(".scl_table").style.animation="scl_table_default 800ms forwards";
            $(".grad_table").style.animation="grad_table_default 800ms forwards";
            for (let i=1; i<4; i++){
                //remove new class
                $$(".scl_table tr")[i].classList.remove("scl_row_hover_new");
                $$(".grad_table tr")[i].classList.remove("grad_row_hover_new");
                //add default class
                $$(".scl_table tr")[i].classList.add("scl_row_hover_default");
                $$(".grad_table tr")[i].classList.add("grad_row_hover_default");
            }
        }           
        
})


var pause_slide;
let slide = ["serioflex.jpg", "serioflex2.jpg", "serioflex3.jpg","tip_calc.jpg", 
            "drum_set.jpg", "form.jpg", "pro_resp_grid.jpg", "dice_game.jpg", 
            "responsive_site.jpg", "calculator.jpg", "doughp.jpg", "doughp4.jpg", "serioflex.jpg"];
let i = 0;
let source = "images/projects/";

    
    $(".projects").addEventListener("mouseover", function yare(){
        pause_slide = setInterval(auto_slide, 1800);
        this.removeEventListener("mouseover", yare);
    })
    function auto_slide(){
            i++;
            source += slide[i];
            $(".slide_show>img").setAttribute("src", source);
            if(i==(slide.length-1)){
                i=0;
            }
            source = "images/projects/"
    }

    $(".prev_slide").addEventListener("click", ()=>{
        clearInterval(pause_slide);
        if(i==0){
            i=(slide.length-1);
        }
        else{
            i--;
        }
        source += slide[i];
        $(".slide_show>img").setAttribute("src", source);
        source = "images/projects/";
    })
    // right(nxt) button
    $(".nxt_slide").addEventListener("click", ()=>{
        var yare = clearInterval(pause_slide);
        if(i==(slide.length-1)){
            i=0;
        }
        else{
            i++;
        }
        source += slide[i];
        $(".slide_show>img").setAttribute("src", source);
        source = "images/projects/";
    })





$("#dark_mode").addEventListener("click", ()=>{

    if($("#dark_mode").checked==true){
        $(":root").style.setProperty("--light-mode", "rgb(0, 0, 0)");
        $(":root").style.setProperty('--flip-img-bg', "rgb(7,245,245)");
        $("html").style.backgroundColor = "rgba(255, 255, 255, 0.925)";
        $("#dark_mode").setAttribute("title", "Light Mode");

    }
    else if($("#dark_mode").checked==false){
        $(":root").style.setProperty("--light-mode", "rgb(255, 255, 255)");
        $(":root").style.setProperty('--flip-img-bg', "rgb(8, 56, 56)");
        $("html").style.backgroundColor = "rgba(0, 0, 0, 0.925)";
        $("#dark_mode").setAttribute("title", "Dark Mode");
    }
})


