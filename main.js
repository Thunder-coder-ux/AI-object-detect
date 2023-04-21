Status = "";
input = "";

function setup(){
    canvas = createCanvas(400, 320);
    canvas.position(490,210);
    video = createCapture(VIDEO);
    video.size(400,320);
    video.hide();
}

function start(){
    object = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("stat").innerHTML = "Status: Detecting Object(s)";
    input = document.getElementById("object_input").value;

}

function modelLoaded(){
    console.log("CoCo Modal Has been Loaded");
    Status = true ;
}

function draw(){
    image(video, 0,0,400,320);
}