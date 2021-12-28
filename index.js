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
    contactmeArea.hide();
    myCVArea.hide();
    myEducationArea.hide();
    myBlogArea.hide();
    infoStart.fadeIn(1500)
}

//Portfolio Functions
function showPortfolioArea() {
    infoStart.hide();
    skillsArea.hide();
    contactmeArea.hide();
    myCVArea.hide();
    myEducationArea.hide();
    myBlogArea.hide();
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

//Skill SQL
let skillsAreaFour = $('#skills-cardFour');
let skillsFourParagraph = $("#skills-cardFour-p");
let skillsFourStars = $("#skills-cardFour-p2")
skillsFourStars.hide();

skillsAreaFour.mouseover(() =>{
    skillsFourParagraph.hide();
    skillsFourStars.show();
}).mouseleave(() =>{
    skillsFourStars.hide();
    skillsFourParagraph.show(); 
})

//Skill HTML
let skillsAreaFive = $('#skills-cardFive');
let skillsFiveParagraph = $("#skills-cardFive-p");
let skillsFiveStars = $("#skills-cardFive-p2")
skillsFiveStars.hide();

skillsAreaFive.mouseover(() =>{
    skillsFiveParagraph.hide();
    skillsFiveStars.show();
}).mouseleave(() =>{
    skillsFiveStars.hide();
    skillsFiveParagraph.show(); 
})

//Skill CSS
let skillsAreaSix = $('#skills-cardSix');
let skillsSixParagraph = $("#skills-cardSix-p");
let skillsSixStars = $("#skills-cardSix-p2")
skillsSixStars.hide();

skillsAreaSix.mouseover(() =>{
    skillsSixParagraph.hide();
    skillsSixStars.show();
}).mouseleave(() =>{
    skillsSixStars.hide();
    skillsSixParagraph.show(); 
})


function showSkillsArea() {
    infoStart.hide();
    portfolioArea.hide();
    contactmeArea.hide();
    myCVArea.hide();
    myEducationArea.hide();
    myBlogArea.hide();
    skillsArea.fadeIn(1500);
   
}

function showContactArea() {
    infoStart.hide();
    portfolioArea.hide();
    skillsArea.hide();
    myCVArea.hide();
    myEducationArea.hide();
    myBlogArea.hide();
    contactmeArea.fadeIn(1500)
}

function showCVArea() {
    infoStart.hide();
    portfolioArea.hide();
    skillsArea.hide();
    contactmeArea.hide();
    myEducationArea.hide();
    myBlogArea.hide();
    myCVArea.fadeIn(1500);
}

function showEducationArea(){
    infoStart.hide();
    portfolioArea.hide();
    skillsArea.hide();
    contactmeArea.hide();
    myCVArea.hide();
    myBlogArea.hide();
    myEducationArea.fadeIn(1500);
}

function showBlogArea(){
    infoStart.hide();
    portfolioArea.hide();
    skillsArea.hide();
    contactmeArea.hide();
    myCVArea.hide();
    myEducationArea.hide();
    myBlogArea.fadeIn(1500);
}