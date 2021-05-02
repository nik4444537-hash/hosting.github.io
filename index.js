var marrow=0;

/* object */
var review=[

{
id:0,
image:"https://media-exp1.licdn.com/dms/image/C5103AQHKC2iGBY0_GA/profile-displayphoto-shrink_200_200/0/1582534226349?e=1625097600&v=beta&t=zhy5acB5_xVr01jSlpDuJZivQu6pzIuv5jvSQU9yXmI",
name:"Nakul yadav0",
work:"web-developer",
content:"Hello i am Nakul yadav and i love to code,especially to create new things<br>"+
"it is just my passion to become invester,entreprenaur,philosopher"
    },

    {
        id:1,
        image:"https://media-exp1.licdn.com/dms/image/C5103AQHKC2iGBY0_GA/profile-displayphoto-shrink_200_200/0/1582534226349?e=1625097600&v=beta&t=zhy5acB5_xVr01jSlpDuJZivQu6pzIuv5jvSQU9yXmI",
        name:"Nakul yadav1",
        work:"web-developer",
        content:"Hello i am Nakul yadav and i love to code,especially to create new things<br>"+
        "it is just my passion to become invester,entreprenaur,philosopher"
            },

            {
                id:2,
                image:"https://media-exp1.licdn.com/dms/image/C5103AQHKC2iGBY0_GA/profile-displayphoto-shrink_200_200/0/1582534226349?e=1625097600&v=beta&t=zhy5acB5_xVr01jSlpDuJZivQu6pzIuv5jvSQU9yXmI",
                name:"Nakul yadav2",
                work:"web-developer",
                content:"Hello i am Nakul yadav and i love to code,especially to create new things<br>"+
                "it is just my passion to become invester,entreprenaur,philosopher"
                    },

                    {
                        id:3,
                        image:"https://media-exp1.licdn.com/dms/image/C5103AQHKC2iGBY0_GA/profile-displayphoto-shrink_200_200/0/1582534226349?e=1625097600&v=beta&t=zhy5acB5_xVr01jSlpDuJZivQu6pzIuv5jvSQU9yXmI",
                        name:"Nakul yadav3",
                        work:"web-developer",
                        content:"Hello i am Nakul yadav and i love to code,especially to create new things<br>"+
                        "it is just my passion to become invester,entreprenaur,philosopher"
                            }

                        ];




// buttons
document.getElementsByClassName("left")[0].addEventListener("click",slideLeft);
document.getElementsByClassName("right")[0].addEventListener("click",slideRight);

// get image class
var img=document.getElementsByClassName("my-image")[0];

var naam=document.querySelectorAll("p")[0];

var job=document.querySelectorAll("p")[1];

var des=document.querySelector("scan");



// slide left function 
function slideLeft(){
    marrow--;
    if(marrow<0){
        marrow=3;
        
        img.innerHTML=review[3].image;
        naam.innerHTML=review[3].name;
        job.innerHTML=review[3].work;
        des.innerHTML=review[3].content;
           
        }
        else{
            img.innerHTML=review[marrow].image;
        naam.innerHTML=review[marrow].name;
        job.innerHTML=review[marrow].work;
        des.innerHTML=review[marrow].content; 
        }

}

// slide right function 
function slideRight(){
    
    marrow++;
    if(marrow>3){
        marrow=0;
        img.innerHTML=review[0].image;
        naam.innerHTML=review[0].name;
        job.innerHTML=review[0].work;
        des.innerHTML=review[0].content;
        
        }
        else{
            img.innerHTML=review[marrow].image;
            naam.innerHTML=review[marrow].name;
            job.innerHTML=review[marrow].work;
            des.innerHTML=review[marrow].content; 
            
        }
}

