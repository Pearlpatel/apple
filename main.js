screen_width=0;
screen_height=0;
apple="apple.jpg";
speak_data=" ";
to_number=" ";
draw_apple=' ';

function preload() {
    apple= loadImage("apple.jpg");
}
speech_rec=window.webkitSpeechRecognition;
rec=new speech_rec();

function start() {
    document.getElementById("status").innerHTML="System is listening, please speak ";
    rec.start();
}
rec.onresult=function (event) {
    console.log(event);
    speech_to_text=event.results[0][0].transcript;
document.getElementById("status").innerHTML="Speech has been recognized, "+speech_to_text;
to_number=Number(speech_to_text);
console.log(to_number);
if (Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML="Started drawing apple ";
    draw_apple="set";
} else {
    document.getElementById("status").innerHTML="Speech is not recongized a number ";
}
}

function setup() {
    screen_width=window.innerWidth;
    screen_height=window.innerHeight;
    canvas=createCanvas(screen_width,screen_height-150);
    canvas.position(0,150);
}

function draw() {
    if (draw_apple=="set") {
        for (var i=1; i<=to_number; i++) {
            x=Math.floor(Math.random()*700);
            y=Math.floor(Math.random()*400);
            image(apple,x,y,50,50);
        }
       // document.getElementById("status").innerHTML=to_number+" apples drawn";
        draw_apple=" ";
    }
                             
}