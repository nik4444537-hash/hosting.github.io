// array of songs
var songsArray = [{
        id: "song1",
        songImage: "images/wakhra.jpg",
        songName: "Agar Tu Hota",
        type: "romantic",
        year: "2016",
        singer: "arijit"
    },

    {
        id: "song2",
        songImage: "images/khul ke jeene ka.jpg",
        songName: "Darkhaast",
        type: "romantic",
        year: "2016",
        singer: "arijit"
    },

    {
        id: "song3",
        songImage: "images/khul ke jeene ka.jpg",
        songName: "Hamdard",
        type: "romantic",
        year: "2015",
        singer: "arijit"
    },
    {
        id: "song4",
        songImage: "images/khul ke jeene ka.jpg",
        songName: "Phir Kabhi",
        type: "sad",
        year: "2016",
        singer: "arijit"
    },
    {
        id: "song5",
        songImage: "images/khul ke jeene ka.jpg",
        songName: "Tose Naina",
        type: "sad",
        year: "2016",
        singer: "arijit"
    },
    {
        id: "song6",
        songImage: "images/khul ke jeene ka.jpg",
        songName: "Yaad Hai Na",
        type: "sad",
        year: "2016",
        singer: "arijit"
    },
    {
        id: "song7",
        songImage: "images/khul ke jeene ka.jpg",
        songName: "soch na sake",
        type: "party",
        year: "2016",
        singer: "arijit"
    },
    {
        id: "song8",
        songImage: "images/khul ke jeene ka.jpg",
        songName: "Suno Na Sangemarmar",
        type: "party",
        year: "2016",
        singer: "arijit"
    }



];
var songIdStore = [];

var arr = [];
var songsContainer = document.getElementsByClassName("songs")[0];
var audio;
var playPause = document.getElementById("play");
var rangeSlider = document.getElementsByClassName("slider")[0];
var navbar = document.getElementsByClassName("bottom-navigation")[0];
var audioLength;
var a;
var con = 0;
var time = 0;
var playing = 0;




// slider manipulation
function slider(length) {
    rangeSlider.max = length;
    a = setInterval(function () {
        if (time != rangeSlider.value) {
            time = rangeSlider.value;
            audio.currentTime = time;
            console.log("time not equal");
        }
        if (time <= length) {
            console.log(time);
            time++;
            rangeSlider.value = time;
            con++;
        }
        if (time > length) {
            clearInterval(a);
            playPause.classList.add("fa-play-circle");
            playPause.classList.remove("fa-pause-circle");
            rangeSlider.value = 0;
            audio.pause();
        }


    }, 1000);
}





// dynamically adding songs
songsArray.map(function (song) {
    songIdStore.push(song.id);
    console.log(song.songName);
    arr.push(`
<div  class="${song.id}" class="song">
<img src="${song.songImage}" alt="${song.songName}-image">
 <h3> ${song.songName}</h3>
</div>
`);
});
arr = arr.join("");
songsContainer.innerHTML = arr;




// play that specific song when clicked on it
//for (var i = 0; i < songIdStore.length; i++) {
    var songIdentifier = document.getElementsByClassName("songs")[0];
    var songPointer=document.getElementsByClassName("song")[0];
    
  songIdentifier.addEventListener("click", function (e) {
    var name = e.target.parentElement.getAttribute("class");
       if (playing > 0) {
           audio.pause();
            con = 0;
            rangeSlider.value = 0;
           clearInterval(a);
       }
        navbar.style.display = "block";



        for (var i = 0; i < songIdStore.length; i++) {
            if (name==songsArray[i].id) {
                var song = songsArray[i].songName;
                audio = new Audio(song + ".mp3");
                audio.preload = "metadata";
                playing++;
                audio.addEventListener("loadedmetadata", function () {

                    audio.play();
                    if (con == 0) {
                        time = 0;
                        audioLength = Math.floor(audio.duration);
                        console.log(audio.volume);
                        console.log("audioLength" + audio.duration);
                        slider(audioLength)
                    } else {
                        slider(audioLength);
                    }

                    playPause.addEventListener("click", function () {

                        if (playPause.classList.contains("fa-pause-circle")) {
                            playPause.classList.remove("fa-pause-circle");
                            playPause.classList.add("fa-play-circle");
                            audio.pause();
                            clearInterval(a);
                            alert("pause");


                        } else {
                            alert("play");
                            playPause.classList.add("fa-pause-circle");
                            playPause.classList.remove("fa-play-circle");
                            audio.play();
                            if (con == 0) {
                                time = 0;
                                audioLength = Math.floor(audio.duration);
                                slider(audioLength)
                            } else {
                                slider(audioLength);
                            }
                        }
                    });
                });
            }
        }
    });



// var songId=document.querySelectorAll("song");
//console.log(songId);
//songId.forEach(function(id){
//console.log(id);
//});
//songId.style.cursor="pointer";
//songId.addEventListener("click", function (e) {
//navbar.style.display="block";
//for (var i = 1; i < songNameStore.length; i++) {
//      var name = e.target.getAttribute("class");
//console.log(name);
//if (name.localeCompare("song" + i) == 0) {
//   var song = songsArray[i - 1].songName;
//     audio = new Audio(song + ".mp3");
//       audio.play();
//         console.log("play");
//          break;
//      }
//   }
//});




// cascading dropdown options
var genreOptions = [{
        genre: "type"
    },

    {
        genre: "romantic"
    },
    {
        genre: "sad"
    },
    {
        genre: "party"
    }

];

var yearOptions = [{
        genre: "year"
    },

    {
        genre: "2016"
    },
    {
        genre: "2017"
    },
    {
        genre: "2018"
    },
    {
        genre: "2019"
    },
    {
        genre: "2020"
    },
    {
        genre: "2021"
    }

];

var singerOptions = [{
        genre: "singer"
    },
    {
        genre: "arijit"
    },
    {
        genre: "Neha kakkar"
    },
    {
        genre: "armaan"
    }

];

var arr = [];
var arr1 = [];
var arr2 = [];

var songG = document.getElementById("songGenre");
var songY = document.getElementById("songYear");
var songS = document.getElementById("songSinger");

var val = 0;
genreOptions.map(function (g) {
    val++;
    arr.push(
        `<option value="gen${val}"  class="options">
${g.genre}
</option>`
    )
});
var p = arr.join("");
songG.innerHTML = p;



yearOptions.map(function (y) {
    arr1.push(
        `<option  class="options">
${y.genre}
</option>`
    )
});
var p = arr1.join("");
songY.innerHTML = p;


singerOptions.map(function (s) {
    arr2.push(
        `<option class="options">
${s.genre}
</option>`
    )
});
var p = arr2.join("");
songS.innerHTML = p;






// changing of type option
console.log(songG.value);
songG.addEventListener("change", function () {
    console.log(songG.value);
    arr = [];
    songsArray.forEach(function (item) {
        if (songG.value == "gen2" && item.type == "romantic") {
            arr.push(`
<div  class="song${item.id}" class="song">
<img src="${item.songImage}" alt="${item.songName}-image">
 <h3> ${item.songName}</h3>
</div>
`);
            var p = arr.join("");
            songsContainer.innerHTML = p;
        } else if (songG.value == "gen3" && item.type == "sad") {
            alert("hii sad");
        } else if (songG.value == "gen4" && item.type == "party") {
            alert("hii party");
        }
    });
});