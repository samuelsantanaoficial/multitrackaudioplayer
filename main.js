var track1 = document.getElementById("track1");
var track2 = document.getElementById("track2");
var track3 = document.getElementById("track3");
var track4 = document.getElementById("track4");

function play() {
    track1.play();
    track2.play();
    track3.play();
    track4.play();
}

function stop() {
    track1.pause();
    track2.pause();
    track3.pause();
    track4.pause();
    track1.currentTime = 0;
    track2.currentTime = 0;
    track3.currentTime = 0;
    track4.currentTime = 0;
}

function toggleTrack(trackNumber) {
    var track = document.getElementById("track" + trackNumber);
    var trackCb = document.getElementById("track" + trackNumber + "cb");
    if (trackCb.checked) {
        track.volume = 1;
    } else {
        track.volume = 0;
    }
}