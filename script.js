var robot = require("robotjs");

//var mouse = robot.getMousePos();
//console.log(mouse);

var screensize = robot.getScreenSize();

setTimeout(handledevc, 2000);

function handledevc(){
    opendevc();
    setTimeout(initializecode, 3000);
}

function opendevc(){
    robot.moveMouseSmooth(60, screensize.height-30);
    robot.mouseClick();
    robot.typeStringDelayed("Dev-C++", 2000);
    robot.keyTap("enter");
}

function initializecode(){
    robot.moveMouseSmooth(22, 56)
    robot.mouseClick();
    robot.moveMouseSmooth(21, 75);
    robot.mouseClick();
    robot.typeStringDelayed("#include<iostream", 2000);
    robot.keyTap("right");
    robot.keyTap("enter");
    robot.typeStringDelayed("#include<bits/stdc++.h", 2000);
    robot.keyTap("right");
    robot.keyTap("enter");
    robot.keyTap("enter");
    robot.typeStringDelayed("using namespace std;", 2000);
    robot.keyTap("enter");
    robot.typeStringDelayed("int main(){ ", 2000);

}

