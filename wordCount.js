var speech = "I am a  good person. I don'n sooner at night";

var count = 0;
for(var i = 0; i < speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i - 1] !=" "){
        count++;
    }
}
count++;
console.log(count);