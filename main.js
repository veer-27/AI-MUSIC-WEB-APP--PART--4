song_1="";
song_2="";

scoreleftwrist = 0;
scorerightwrist = 0;

leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

function preload()
{
    song_1 = loadSound("AI MUSIC_music.mp3");
    song_2 = loadSound("AI MUSIC_music2.mp3");
}

function setup()
{
    canvas = createCanvas(550,550);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose' , gotposes);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized')
}

function gotposes(results,error)
{
    if(results.lenght > 0)
    {
        console.log(results);

        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;

        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;

        scoreleftwrist = results[0].keypoints[9].score;
        scorerightwrist = results[0].keypoints[10].score;
    }
}


function draw()
{
    image(video,0,0,550,550);
    song_variable.isPlaying();
    fill("#FF0000");
    stroke("#0000FF")
    if(scoreleftwrist > 0.2)
    {
        circle(leftwristX,leftwristY,20);
        stop(song_2);
    }
    if(song = 'false')
    {
        play(song_1);
        document.getElementById("play_button").innerHTML = "SONG NAME = " + song;
    }
}
