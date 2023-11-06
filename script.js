const details = document.getElementById('details');
const playername = document.getElementsByClassName('playername');


const imgs = ["https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sehwag.png",
            "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sachin.png",
            "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-gambhir.png",
            "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-virat-kohli.png",
            "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-dhoni.png",
            "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-yuvraj.png",
            "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-suresh-raina.jpg",
            "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-harbhajan.jpg",
            "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-zaheer-khan.jpg",
            "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sreeshanth.jpg",
            "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-munaf-patel.jpg"
        ]
var image = document.getElementById('image')

details.style.display = "none";
function popup(index){
    details.style.display = "block";
    image.src=imgs[index];   
}
function cut(){
    details.style.display = "none";
}
