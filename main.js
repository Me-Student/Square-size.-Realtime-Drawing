function setup(){
    canvas= createCanvas(500,500);
    canvas.position(600,80);
    video= createCapture(VIDEO);
    video.size(550,500);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Posenet is loaded');
}

function draw()
{
    background("#FF4C20")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}