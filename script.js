var videoFiles = ["video1.mp4", "video2.mp4", "video3.mp4"];
var headlineTexts = ["Why do landlords get away with intimidating tenants in Montreal?", " How can we fight far-right extremism? - Montreal ",  " Quelles solutions pour le logement abordable étudiant ? - l'Organe "];
var publishedBy = ["published by Local 514", "published by Local 514", "published by Local 514"];
var publishedDate = ["Apr 25, 2023", "Feb 6, 2023", "Oct 31, 2022"];
var videoIndex = 0;

var videoElement = document.getElementById('video');
videoElement.addEventListener('ended', onVideoEnded);

function loadVideo() {
    console.log("Loading video:", videoFiles[videoIndex]);
    videoElement.src = videoFiles[videoIndex];
    videoElement.load();
    videoElement.play();
}

function onVideoEnded() {
    console.log("Video ended");
    // increment videoIndex and load next video
    videoIndex = (videoIndex + 1) % videoFiles.length;
    loadVideo();

    // update headline text
    document.getElementById("headline").innerHTML = headlineTexts[videoIndex];

    // update "published by" and "date published" text
    document.getElementById("published-by").innerHTML = publishedBy[videoIndex];
    document.getElementById("published-date").innerHTML = publishedDate[videoIndex];
}

// load first video
loadVideo();

// update headline text
document.getElementById("headline").innerHTML = headlineTexts[videoIndex];

// update "published by" and "date published" text
document.getElementById("published-by").innerHTML = publishedBy[videoIndex];
document.getElementById("published-date").innerHTML = publishedDate[videoIndex];





function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var timeString = hours + ':' +
        minutes + ' ' + ampm;
    document.getElementById("clock").innerHTML = timeString;
    setTimeout(updateTime, 1000);
}

updateTime();

