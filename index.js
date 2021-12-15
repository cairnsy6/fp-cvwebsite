let portfolioArea = $("#portfolioArea");
let skillsArea = $("#skills-area");
let contactmeArea=$("#contactmeArea");
let myCVArea = $("#myCVArea");
let myEducationArea = $("#educationArea");
let myBlogArea = $("#myblogArea");
let infoStart = $("#info-start");


portfolioArea.hide();
skillsArea.hide();
contactmeArea.hide();
myCVArea.hide();
myEducationArea.hide();
myBlogArea.hide();

//Home Functions
function showHomeArea(){
    portfolioArea.hide();
    skillsArea.hide();
    infoStart.fadeIn(1500)
}

//Portfolio Functions
function showPortfolioArea() {
    infoStart.hide();
    skillsArea.hide();
    portfolioArea.fadeIn(1500);
}

//Skills Functions


//Skill Javascript
let skillsAreaOne = $("#skills-cardOne");
let skillsOneParagraph = $("#skills-cardOne-p");
let skillsOneStars = $("#skills-cardOne-p2")
skillsOneStars.hide();

skillsAreaOne.mouseover(() =>{
    skillsOneParagraph.hide();
    skillsOneStars.show();
}).mouseleave(() =>{
    skillsOneStars.hide();
    skillsOneParagraph.show(); 
})

//Skill Python
let skillsAreaTwo = $("#skills-cardTwo");
let skillsTwoParagraph = $("#skills-cardTwo-p");
let skillsTwoStars = $("#skills-cardTwo-p2")
skillsTwoStars.hide();

skillsAreaTwo.mouseover(() =>{
    skillsTwoParagraph.hide();
    skillsTwoStars.show();
}).mouseleave(() =>{
    skillsTwoStars.hide();
    skillsTwoParagraph.show(); 
})

//Skill Java
let skillsAreaThree = $('#skills-cardThree');
let skillsThreeParagraph = $("#skills-cardThree-p");
let skillsThreeStars = $("#skills-cardThree-p2")
skillsThreeStars.hide();

skillsAreaThree.mouseover(() =>{
    skillsThreeParagraph.hide();
    skillsThreeStars.show();
}).mouseleave(() =>{
    skillsThreeStars.hide();
    skillsThreeParagraph.show(); 
})


function showSkillsArea() {
    infoStart.hide();
    portfolioArea.hide();
    skillsArea.fadeIn(1500);
   
}

