/*
Nathan Abando

START DATE: 6/28/24 9:25
making boids !
TO DO:
- make boid object (objects are new for me in js I think)
    - ugh I think I'll have to mess with some CSS stuff which was kind of a pain last time
- move it in a random direction (random function is also new for me)
    - move(x,y) and then I think randomDegree = randInt(), x = cos(randomDegree), y = sin(randomDegree)
- create a set interval function 
    - DONE

6/28/24 9:39
- just remembered I have to add a canvas

6/28/24 11:59
- wait nvm I don't cuz I'm not drawing lines
- also I figured out why my css file wasn't being referenced it's because I did link rel = "stylsheet" instead of "stylesheet"
    - I spent like an hour trying to figure this out only to realize it was a typo :(

6/28/24 12:29
- implemented "updateBoid" function, this is where most of the movement logic will go
- currently hard

6/28/24 15:09
- I figured out how to make boids hehehehehehehehehehheh
- Time to obliterate my computer

6/28/24 16:44
- I messed around with the boids for a little bit
- for some reason, boids that are spawned on the edges get stuck
- also I wanna figure out how to have Math.random() produce negative numbers

6/28/24 16:57
- I'm so silly I didn't need random numbers cuz direction is determined by angle which doesn't matter if its negative or not
- now I rly wanna fix the corner cases where the boids spawn on the edge and can't escape

6/28/24 17:11
- Didn't fix the corner case where they bug out in the borders, but changed the collision logic.
- Now, boids teleport to the other side of the screen so now their movement is continuous.

6/28/24 17:15
- changed "angle" parameter to "direction"
- I think I want them to face the direction they're moving

6/28/24 18:21
- RAHHHHHHHHHH I'M HIM
- I solved the rotation problem
- here's the deal: the Math.cos() and Math.sin() functions both think of "0" as the x axis and goes around counterclockwise
- BUT transform: rotate() think "0" is facing directly up and goes around clockwise
- solved by doing rotate(Boid direction in degrees + 90) to account for that offset
- that took me so long to figure out ughhhhhhhh
- but now they all move in the direction they're moving !!!!
- they are funny little triangle guys

6/29/24 6:59
- centered "boids !" text on window, stays centered even if window size changes

6/29/24 7:08
- made spawning boids into a function, plan to spawn boids by clicking

6/29/24 7:20
- implemented spawning boids in by clicking. Will maybe make a count later but I should probably focus on implementing boid behavior.

6/29/24 22:54
- big nappy day
- implemented rough form of proximity detection with "isNear()" function in the Boid class.
    - works surprisingly well, I think I will stick with this for now and tweak it later.
    - detection area is currently a 60 x 60 pixel square around the boid.
    - although slightly skewed to the upper left.
- also slightly changed boid shape
    - fixed rotation, so now boid is automatically facing right when spawned in (now rotation matches with Math trig functions).
    - added "transform: translate(50%, 50%)" to boid element, I think this centers it? Not sure, since all the boids are moving.
        - just kidding I just tested it with them not moving and it does center the boid so that'll be more accurate for collision stuff I think.
- ok I go sleep now

6/30/24 7:41
- implemented turning ! with turn() function
- now combine turn() function with isNear() function and now the boids are kinda steering clear of each other.
- now how to I find the direction a boid is in ? 
- because I can use this direction to make the boids turn away from each other instead of just turning by a certain amount

7/1/24 5:26
- WHATTTTT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
- I FINALLY GOT IT I THINK ??????
- just add 180
- the negative of an angle is NOT the same as adding 180 idk why I thought that
- holyyyyy it works dude

7/2/24 16:03
- finally got smooth separation working
- lets goooooooooooo
- think of degrees as a repeating number line as opposed to the unit circle

7/2/24 17:36
- steering logic should be complete
- collision detection logic: flaw found
    - when boids detect multiple boids are near, boids actually fly towards the flock instead of away.

7/2/24 18:08
- while messing around with code and testing boids only detecting one nearby boid, I saw a boid fly sideways.
- It flew sideways and then corrected itself ??? 
- no idea why that happened, it shouldn't even be a thing, it hasn't happened before or since that incident.
- I think they know I'm watching them.
- genuinely clueless as to why that happened
    - maybe I'm delusional 
    - I'm hungry rn maybe that plays into it
- ...
- ok nvm I know why now
- its from that smooth steering check
    - it updates rotation but not x and y velocity
    - silly

7/2/24 18:20
- made turn rate scale with boid speed
- ratio of turn rate to boid speed is 2:1

7/2/24 18:32
- I LOST MY PEN :(((((((

7/2/24 18:33
- I FOUND IT :DDDDDDDDDDDDD

7/3/24 9:58
= cooked some bomb longsilog
- changed the color scheme so it's easier on the eyes in the dark

7/3/24 11:38
- I'm gonna mess around with colors more, and I'm also gonna add a dark/light mode toggle button.

7/3/24 13:24
- I settled on a dark theme that I like, and now I have a function that can change between light and dark mode.
- unfortunately it straight up blinds you when you switch to light mode so I'm gonna try to figure out how to make it a gradient.
- here's the idea: implement something into the set interval function so that colors gradually change.
    - also have colorTheme have 4 settings: DARK_MODE, LIGHT_MODE, LIGHT_DARK, DARK_LIGHT
        - the last two are transition phases going from light->dark and dark->light

7/3/24 14:31
- hrmmmmmmmmmmmmmmmmmmmmmm string manipulation anhgnrhnghnnndiajncdjacw eiuacjmsiud

7/3/24 21:34
- note: rgb() only takes in integers for r g and b values, trying to increment colors by floats won't work.

7/3/24 21:51
- colorIncrement() function implemented, works as it should.
- now need to implement it into interval function.

7/3/24 21:58
- thinking about using functions to get rgb values but string operations are expensive.
- I think would be faster to just have a counter variable ?

7/3/24 22:50
- it works !!!
- press "enter" to switch from light to dark without blinding urself.
- gradually changes colors.

7/3/24 23:16
- color theme changes somewhat faster.
- I want to implement a button at some point.

7/4/24 9:36
- WHAT IS A KILOMETER !!!!!!!!!????????
- Added javadoc to functions and comments to clarify code in certain spots.
    - I'm procrastinating fixing the separation logic lol.

7/4/24 14:04
- modified isNear() function to support multiple detection ranges.
- also added inViewBoids array for alignment / cohesion behavior.

7/4/24 15:19
= if a boid is in sight, then move in it's direction.
- if a boid is nearby, move away from it.
- for some reason, align() always makes the boids start going right.
- which is interesting because similar behavior occurs when detecting multiplt nearby boids.

7/5/24 7:20
- I found this out yesterday but I'm writing about it now
- When you take the average of two angles, you get two outputs, depending on whether or not you make 360 the maximum angle.
- (20 + 350) / 2 = 370 / 2 = 185
- ((20 + 350) & 360) / 2 = (370 % 360) / 2 = 10 / 2 = 5
    - 185 and 5 are "opposites" of each other, since they are pointing in completely opposite directions (diff of 180 degrees)

7/5/24 12:35
- I'm shifting my focus back onto the alignment behavior, maybe I can find solution to my problem there since I think it is having a similar issue.

7/5/24 14:14
- okay I guess I got alignment working ???? If I don't divide the angle sum by the number of boids around it then it works somehow ?????? I have no idea.
- also if I use single boid detection for separation then it works well with alignment.
- I'm gonna go back to trying to figure out separation.

7/5/24 15:39
- made a backup of this code, I'm gonna rewrite the behavior code from scratch (I'm losing my mind)

7/5/24 15:55
- I just realized the highlight in vscode is rounded that's neat

7/5/24 16:34
- reworked separation function, looks a lot more promising.
    - now gets the average position of nearby boids and then finds angle from that point instead of angle from each boid and then adding it together

7/5/24 17:28
- SEPARATION WORKS BABY !!!!! (probably).
- very happy, will now work on cohesion.

7/5/24 17:54
- cohesion and alignment incorporated, but not working as I'd like.
    - boids have still have a tendency to move right, but I'm still not sure why.
- I'll have to look into this later.
- I'm gonna try to incorporate border avoidance so that they can turn around on their own.

7/7/24 7:50
- I want to try to make the velocity and turning rate dynamic. Not sure if that would help them out
- Also border avoidance was a failure, I'll mess around with that at another time since they're not integral to boid behavior.

7/7/24 8:14
- Interesting bug fix: y Velocity was actually opposite of what it was supposed to be
    - fixing this caused rotation to be weird, but now it's fixed and the fix makes sense (I think? Yes, it does)
    - CSS and Math rotation work in opposite directions, (Math = counter clockwise, CSS = clockwise)
        - by making the math rotation negative, it now matches the CSS rotation ? Yes.
        - I was confused because CSS also has 0 at the y axis, but this was fixed before by initially rotation all boids by 90 degrees when they're made.
            - Or not ? I don't see evidence of this anywhere. 
            - WAIT I think the fix I got for this was by not rotating it, but by making them face right in the CSS code by making the left border visible.
            - This way, the triangle initially points right.

7/8/24 18:05
- Thing I forgot to mention yesterday, made some code so that tracking patterns in boids is easier (console.log() stuff).
- Because of this, I can confidently say that the boids are going right more than left when implementing the separation behavior.
    - 60/40 split (60% going right, 40% going left)
    - Although it might not seem like a big deal, it messes up future behaviors.

7/8/24 18:18
- NOTE: since changing how y vel is calculated, we now have to think about all our calculations as y = 0 being at the top.

7/8/24 18:21
- After some testing, I'm pretty sure the problem lies in the turn()/turnTowards() functions.
    - Immediately pointing in the direction they are supposed to go doesn't return one-sided results.

7/9/24 7:26
- I thiiiink the problem is in the turn() function and not the turnTowards() function.
- Tested the turnTowards() function in a dummy file (z.java)
    - It seems to be producing the desired output every time ?
    - I mean I have the math to back it up too.
    - Meanwhile the turn() function was created haphazardly, and changing one line of code in there changes the results, so that's probably where the problem lies.

7/9/24 7:37
= This might be a scope problem ? Not sure.

7/9/24 7:51
- There was a problem with modulo.
    - google said -2 % 360 = 358.
    - but in java, -2 % 360 = -2.
    - They're both the same thing but I wanted the first result.
    - Fix: if degree is negative, just add 360 to it.
- So now, separation is "fixed".
    - left and right distribution is evened out.
    - but they constantly form infinite circles of two or more boids.
- Maybe a fix to this is to limit the detection range ?
    - NOTE: 7/9/24 this was not the solution.
- It's something we can try.

7/9/24
- Wait, for some reason boids are now only travelling counterclockwise ??

7/9/24
- No clue what's happening lol
- Made it so boids change color on what direction they're facing for debugging purposes tho so that's cool. That's neat that's real nifty.
- Also shrunk the boids size in half.

7/9/24
- IT WORKRS ~!111!!!!!!!!!!
- DUFHASIUDFHASUDHANIDCUAHMICUAHENCAUYGCAUYCMGAUYACHIWEUFKAGKFUAY
- ALL I HAD TO DO 
- WAS MANUALLY MODULATE THAT BAD BOY
- added an if statement in turn() that limited this.directionInDeg to 360
    - if > 360 then -360
    - if < 0 then +360
- wow.
- wow.
- wow. wo. faalsicuahkiachmkuysd
- I'm actually so happy
- ashaisudhfasduygkcasuycegmkauychamkucha

7/9/24 12:36
- alignment behavior behaves in an interesting way, just testing it out atm.
- gonna take a break now, lunch time !!

7/9/24 13:52
- updated target boid so now inViewBoids are highlighted in white
- I think I should give this guy a name.
- I will think about what name to give him while getting a haircut.

7/9/24 17:07
- ok so the solution to averaging angles is to not average angles at all. Always find another way around it.

7/9/24 18:44
- maybe I got it ? I can't tell.
- left and right seem to be evening out kinda ? There sometimes is one side that dominates but that kinda makes sense given the nature of the alignment behavior.

7/9/24 22:33
- Alignment proooobably good ? 
- It works with the separation behavior, so it's probably okay.
    - Can't 100% tell if one side is favored over the other or not, but I'll just go ahead since it doesn't seem to have any huge problems ?
    - It also kinda works in creating loose groupings, which will become proper flocks once the adhesion behavior is implemented.
- Very very good progress today, will work on cohesion tomorrow.

7/10/24 8:38
- wow ok so goMiddle() (cohesion) didn't even need that much fixing, I just added the conditional statements that limit the bounds of direction and then I think it works?
- No left-right imbalances, that was kinda seen earlier
    - Intersting note: boids always tend to form these vertical pillars when just using the cohesive behavior.
    - Before, these pillars would shift from left to right but now they stay in a fixed place (right was favored more due to errors in previous behaviors).

7/10/24 8:42
- When using cohesion with other behaviors, it seems that boids get stuck on the borders

7/10/24 8:50
- Upon further inspection, it seems that align() has some bugs. The boids are wiggling too much for some reason.

7/10/24 8:53
- Switching from tan(y/x) to tan(x/y) seems to have fixed the problem? Although I am not sure why.
- It works perfectly ??? I'll have to look into the math of this for a minute.

7/10/24 9:11
- Ok so I think alignment and separation works well together
    - Although, I would like to tweak the separation code so that a boid only avoids whatver boid is closest to it instead of avoiding the center of the group.
- Buggy behavior when activating cohesion. Big boid pilliars moving left or right.
    - I don't want pilliars, I want flocks.
- Just noticed something about alignment, I think the boids always align at some 45 degree angle ?

7/10/24 (I forgot to write down the time whoops, probably like 9:20)
- Fixed alignment behavior, for some reason I was using tan() when I should've been using atan().
- Now I'm 99.999999% sure separation + alignment is working.
- NOW its finally time to work on cohesion.

7/10/24 12:19
- Big problem: border stuff.
- When boids pass through other side, then they stop seeing the boids around it so it acts weird for a moment.
    - New behavior: steer away from walls.
- Another slight problem: detection zones.
- I think problems arise when boids detect boids that are behind it.
    - when combined with the warping borders, cohesive boids always circle around borders (typically top and bottom ones ? not sure why).

7/10/24 12:31
- lol nvm I just forgot that the y axis is flipped with html stuff.
- changed atan((avgY - thisY) / (avgX - thisX)) to atan((-avgY + thisY) / (avgX - thisX)).
- so I think cohesion works then ? Boids form little spiraling patterns which makes sense.
    - They're all trying to get into the center of each other.

7/10/24 12:34
- haha alignment + cohesion causes the boids to make a little line which is cool
    - makes sense too
    - just alignment makes big clusters moving in same direction
    - cohesion makes them go towards center
    - now they moving in same direction while being as close as possible
    - that's so neat !

7/10/24 12:38
- I think I finished all 3 behaviors !
- Now I just need to do some tweaking
- I want them to prioritize spacing each other out.

7/10/24 16:45
- Implemented object avoidance !
    - isNearObstacle()
    - steerClearObstacle()
    - It's just repeated code but I'm too lazy to change previous code rn lol.
- Right now, the boids just avoid the middle of the page, basically the "boids !" text.

7/10/24 16:45
- Added conditional to behaviors 2 & 3
- If there are more than 20 boids nearby (green), then don't do alignment or cohesion.
- This is to prioritize separation when boids become too dense. 

7/10/24 18:35
- Boids now avoid the mouse cursor (neat !).
- Also created variables for target boid, nearby boids, and in view boids to make changing their colors easier.
- Changed colors for target boid (name Chor'gorloth by Mustaffa), nearby boids and in view boids.
    - colors are visible on both light and dark mode.
    - Colors now look nicer in general (I pulled from color palette).

7/10/24 18:43
- I am having fun just playing with the boids
- NEW TO DO LIST:
    - Wall avoidance.
    - make boids only go away when the user clicks.
    - make the website scream when the user clicks.
    - maybe add a graphic that follows the mouse cursor ? And it changes when you click / hold down the mouse

7/10/24 19:22
- I FIGURED OUT HOW TO HAVE A CIRCULAR AREA OF DETECTION.
- Literally just use the distance formula.
- Not that difficult.
- Might be a little expensive though :/ We'll see.
- Made the avoidance area around the cursor a circle instead of a square.

7/10/24 19:39
- LOL nevermind its so expensive, it can barely run only 20 boids.
- it crashes with 200 lol.

7/10/24 21:53
- The cursor is now a cat that opens its mouth when mouse down and the closes it on mouse up.
- For some reason it is only cat when cursor is over the words or over a boid.

7/10/24 22:19
- Cat now works as intended.

7/10/24 22:24
- Tracking boids now switch colors with light/dark mode switches, although not smoothly.

7/11/24 8:34
- Modified screaming behavior for cat, boids now travel and turn faster when nearby screaming cat.

7/11/24 9:01
- Tracker boid colors now transition smoothly between light and dark mode.

7/11/24 11:38
- Cat now screams with noise, alternating between 2 tom screams.
- Set default color of website to light mode.
    - found out that the background never actually loaded initially.
    - I never noticed cuz it was dark mode and the backgroudn was basically black already.

7/11/24 15:36
- Changed the screams so that there's now a 10% chance for tom scream 2 to play.
- Tom scream 1 is the default.

7/11/24 17:42
- Implemented wall avoidance.

7/11/24 18:11
- Messed around with different types of wall avoidance.
    - if near wall, go towards center of page.
    - if near wall, avoid closest point on that wall.
        - I liked this one better, it just looked like it kinda fit better.

7/11/24 18:24
- Made some code that made it easier to change the initial color theme.

7/11/24 20:08
- Added new constant, FLOCK_DENSITY.
- controls how many nearbyBoids can exist before behaviors 2 and 3 (alignment and cohesion) shut off.

8/8/24 14:54
- oh hi ok so circular detection zone is actually feasible as long as we don't have the console.log() statements.
- so I changed the boids to use the circular detection zone instead of the square one.
- I did this a few days ago but forgot to document it.
*/

//constants
//const INIT_X_POS = 200;
//const INIT_Y_POS = 200;
const INIT_SPEED = 15 / 10;
//const INIT_ANGLE = 50 * -(Math.PI / 180);
const BOID_SIZE = 20;
const INIT_POPULATION = 250;
;
const DETECTION_RANGE = INIT_SPEED * 20; //I think I'm also gonna connect detection range and speed cuz I read that somewhere. Also it kinda makes sense in my head. It's kinda like driving ?
const TURN_RATE = INIT_SPEED * 2; //I think its a good idea to have this scale with speed. Set scaling factor lower for smoother turning, higher for sharper turning.
const WALL_AVOID_SIZE = 1;
const FLOCK_DENSITY = 2;

//boid containers
const boids = [];
var nearbyBoids = [];
var inViewBoids = [];

// color stuff
var colorTheme = 'LIGHT_MODE';
var textColor;
var backGroundColor;
var boidColor;
var colorChangeLevel = 0;
var ChorGorlothColor; 
var nearbyColor = "20px solid rgb(24, 149, 104)";
var inViewColor;
//diff w/ CG is (136, 168, 7) NOTE: 136/4 = 34 and 168 / 4 = 42
var tempColor = inViewColor;
var rgbArr;

//making this so changing initial color theme is easier to change
if (colorTheme == 'LIGHT_MODE') {                    // below are values for DARK_MODE
    textColor = 'rgb(240, 105, 105)';               // 'rgb(255, 169, 183)'
    backGroundColor = 'rgb(250, 235, 215)';        // 'rgb(4, 0, 15)'
    boidColor =  '20px solid rgb(255, 169, 183)'; // '20px solid rgb(190, 56, 78)'

    ChorGorlothColor = "20px solid rgb(2, 68, 106)"; // swap these two
    inViewColor = "20px solid rgb(138, 236, 113)";

    rgbArr = [  // flip signs
        1, 1, 1,
        -2, -2, -2,
        -1, -1, -1,
        -4, -4, -1];
}
if (colorTheme == 'DARK_MODE') {
    textColor = 'rgb(255, 169, 183)';       
    backGroundColor = 'rgb(4, 0, 15)';      
    boidColor =  '20px solid rgb(190, 56, 78)';

    ChorGorlothColor = "20px solid rgb(138, 236, 113)";
    inViewColor = "20px solid rgb(2, 68, 106)";
    
    rgbArr = [
        -1, -1, -1,
        2, 2, 2,
        1, 1, 1,
        4, 4, 1];
}


//boid tracking
var rightCounter = 0;
var upCounter = 0;
var downCounter = 0;
var leftCounter = 0;

//mouse cursor stuff
var cursorX = window.innerWidth;
var cursorY = window.innerHeight;

//audio stuff
var screaming = false;
var screamCollection = [
    'tomScream1.mp3',
    'tomScream2.mp3'
]
var currentScream = 0;
var screamSound = new Audio(screamCollection[currentScream]);

function getRandInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

/**
 * A function that converts degrees into radians.
 * @param {*} degs the number of degrees to be converted into radians.
 * @returns returns radians.
 */
function degToRad(degs) {
    return degs * (Math.PI / 180);
}

/**
 * A function that converts radians into degrees.
 * @param {*} rads the number of radians to be converted into degrees.
 * @returns returns degrees.
 */
function radToDeg(rads) {
    return rads * (180 / Math.PI);
}

/**
 * A function that updates the text, background, and boid color according to their variables.
 */
function updateColors() {
    boidText.style.color = textColor;
    document.body.style.backgroundColor = backGroundColor;
    
    for (let i = 0; i < boids.length; i++) {
        if (boids[i].boidCSS.style.borderLeft == ChorGorlothColor || boids[i].boidCSS.style.borderLeft == nearbyColor) {
            //hi !!!!
        }
        else if (boids[i].boidCSS.style.borderLeft == tempColor) {
            boids[i].boidCSS.style.borderLeft = inViewColor;
        }
        else {
            boids[i].boidCSS.style.borderLeft = boidColor;
        }
        
    }
}

/**
 * A function that updates the state of the website's color scheme.
 */
function toggleLightDarkMode() {
    boidText = document.getElementById("boidText");
    if (colorTheme == "DARK_MODE") {
       colorTheme = "DARK_LIGHT";
    }
    else if (colorTheme == "LIGHT_MODE") {
        colorTheme = "LIGHT_DARK";
    }    
}

/**
 * A function that increments an rgb string by a certain amount.
 * @param {*} rgbString the rgb string to be incremented.
 * @param {*} rInc The amount the "r" value should be incremented.
 * @param {*} gInc The amount the "g" value should be incremented.
 * @param {*} bInc The amount the "b" value should be incremented.
 * @returns The new rgb incremented rgb string. 
 */
function incrementColor(rgbString, rInc, gInc, bInc) {
    let newString = rgbString.substring(4);
    let tempRgbArr = newString.split(", ");
    tempRgbArr[2] = tempRgbArr[2].replace(")", "");

    tempRgbArr[0] = parseInt(tempRgbArr[0]) + rInc;
    tempRgbArr[1] = parseInt(tempRgbArr[1]) + gInc;
    tempRgbArr[2] = parseInt(tempRgbArr[2]) + bInc;

    return "rgb(" + tempRgbArr[0] + ", " + tempRgbArr[1] + ", " + tempRgbArr[2] + ")";
}

/**
 * class for a boid
 */
class Boid {
    /**
     * @param {*} xPos X position of a Boid.
     * @param {*} yPos Y position of a Boid.
     * @param {*} vel Overall initial velocity of a Boid.
     * @param {*} directionInDeg Direction Boid is facing in (IN DEGREES).
     * @param {*} boidCSS The css code of a Boid.
     */
    constructor(xPos, yPos, vel, directionInDeg, boidCSS) {

        this.xPos = xPos
        this.yPos = yPos

        this.totalVel = vel;
        this.directionInDeg = directionInDeg;

        this.xVel = Math.cos(degToRad(directionInDeg)) * vel; //NOTE cos() and sin() take arguments in as RADIANS
        this.yVel = Math.sin(degToRad(directionInDeg)) * vel;

        this.boidCSS = boidCSS;
        boidCSS.style.left = xPos + "px";
        boidCSS.style.top = yPos + "px";

        this.detectionRange = DETECTION_RANGE;
        this.boidTurnRate = TURN_RATE;
    }


    /**
     * A function to detect if a boid is near a target boid, derived from a collision function.
     * @param {*} otherBoid The boid who's position is being checked to determine proximity.
     * @param {*} range The range of detection desired.
     */

    isNear(otherBoid, range) {
        let dist = Math.sqrt(Math.pow(-otherBoid.yPos + this.yPos, 2) + Math.pow(otherBoid.xPos - this.xPos, 2));
        if (dist <= (range * DETECTION_RANGE)) {
            //console.log("true");
            return true;
        }
        //console.log("false");
        return false;
    }
        
        
        /*
        if (otherBoid.xPos >= this.xPos - (this.detectionRange * range) && //check left
            otherBoid.xPos <= this.xPos + (this.detectionRange * range) && //check right
            otherBoid.yPos >= this.yPos - (this.detectionRange * range) && //check above
            otherBoid.yPos <= this.yPos + (this.detectionRange * range)) { //check below
            return true;
        }
        return false;
        
        
    }*/

    /**
     * A function that turns/rotates the boid by a given amount of degrees.
     * @param {*} turnRate The number of degrees to rotate.
     */
    turn(turnRate) {
        this.directionInDeg += turnRate;
        //this.directionInDeg %= 360 //THIS IS THE PROBLEM !!!!!
        if (this.directionInDeg < 0) {
            this.directionInDeg += 360; //we want this one because thigns that determine a boids direction use > or < operators.
            //this.directionInDeg %= 360;
        }
        if (this.directionInDeg > 360) {
            this.directionInDeg -= 360; //WHAT
        }
        this.xVel = Math.cos(degToRad(this.directionInDeg)) * this.totalVel; //NOTE cos() and sin() take arguments in as RADIANS
        this.yVel = Math.sin(degToRad(this.directionInDeg)) * this.totalVel;
    }

    /**
     * A function that gradually turns towards a specified direction.
     * @param {*} newDir The new direction to move towards.
     */
    turnTowards(newDirInDeg) { 
        if (newDirInDeg < 0) {
            newDirInDeg += 360;
        }
        if (newDirInDeg > 360) {
            newDirInDeg -= 360;
        }

        
        if (this.directionInDeg == newDirInDeg) {
            return; //if boid is already facing the desired direction, do nothing.
        }
        if (this.directionInDeg <= newDirInDeg + this.boidTurnRate && this.directionInDeg >= newDirInDeg - this.boidTurnRate) {
            //if boid is within TURN_RATE degrees of the desired direction, only rotate by the needed amount of degrees instead of the full TURN_RATE.
            //this.turn(Math.abs(this.directionInDeg - newDirInDeg));
            return; //this is to prevent over-turning / jittering / infinite loop
        }

        
        if (Math.abs(this.directionInDeg - newDirInDeg) <= 180) {
            if (newDirInDeg < this.directionInDeg) {
                this.turn(-this.boidTurnRate);
            }
            else {
                this.turn(this.boidTurnRate);
            }
        }
        else {
            if (newDirInDeg < this.directionInDeg) {
                this.turn(this.boidTurnRate);
            }
            else {
                this.turn(-this.boidTurnRate);
            }
        }
    }

    /**
     * A function that points the boid away from a nearby boid(s).
     * @param {*} otherBoids The nearby boids to point away from.
     */

    steerClear(otherBoids) { //separation
        let dirToGo; 
        let avgX = 0;
        let avgY = 0;

        for (let i = 0; i < otherBoids.length; i++) {
            avgX += otherBoids[i].xPos;
            avgY += otherBoids[i].yPos;
        }

        avgX /= otherBoids.length;
        avgY /= otherBoids.length;

        
        dirToGo = radToDeg(Math.atan((-avgY + this.yPos) / (avgX - this.xPos)));
        //NOTE: (0,0) is at the top left of the screen for websites, which is why the Y axis is flipped.
        //NOTE AGAIN: Math trig funcitons take in arguments as RADIANS and output values in RADIANS.


        if (avgX > this.xPos) {
            dirToGo += 180;
        }
        if (dirToGo < 0) {
            dirToGo += 360;
        }
        if (dirToGo > 360) {
            dirToGo -= 360;
        }
        //console.log(this.directionInDeg + " - " + dirToGo); //GOD BLESS THIS PRINT STATEMENT IT SAVED ME

        
        //this.directionInDeg = dirToGo;
        /*
        this.xVel = Math.cos(degToRad(this.directionInDeg)) * this.totalVel; //NOTE cos() and sin() take arguments in as RADIANS
        this.yVel = Math.sin(degToRad(this.directionInDeg)) * this.totalVel;
        */

        this.turnTowards(dirToGo);

    }

    align(otherBoids) { //alignment
        let dirToGo = 0;
        let avgXVel = 0;
        let avgYVel = 0;

        for (let i = 0; i < otherBoids.length; i++) {
            avgXVel += otherBoids[i].xVel;
            avgYVel += otherBoids[i].yVel;
        }

        //this makes no difference since these values are dividing each other in the direction calculation.
        //avgXVel /= otherBoids.length;
        //avgYVel /= otherBoids.length;
        
        dirToGo = radToDeg(Math.atan(avgYVel/avgXVel));

        if (avgXVel < 0) { //this because of tangent domain. ?
            dirToGo += 180;
        }

        if (dirToGo > 360) {
            dirToGo -= 360;
        }
        if (dirToGo < 0) {
            dirToGo += 360;
        }

        this.turnTowards(dirToGo);
    }

    goMiddle(otherBoids) { //cohesion
        //NOTE: this is pretty similar code to steerClear(), except this is trying to go towards the center instead of away.
        //      also, it miiiight include the current boids position in the average, not sure, I'll see how it feels/looks later.
        let dirToGo;
        let avgX = 0;
        let avgY = 0;

        for (let i = 0; i < otherBoids.length; i++) {
            avgX += otherBoids[i].xPos;
            avgY += otherBoids[i].yPos;
        }

        //avgX += this.xPos;
        //avgY += this.yPos;

        avgX /= otherBoids.length// + 1;
        avgY /= otherBoids.length// + 1;

        dirToGo = radToDeg(Math.atan((-avgY + this.yPos) / (avgX - this.xPos)));
        if (avgX < this.xPos) {
            dirToGo += 180;
        }
        if (dirToGo > 360) {
            dirToGo -= 360;
        }
        if (dirToGo < 0) {
            dirToGo += 360;
        }

        this.turnTowards(dirToGo);
    }

    isNearObstacle(x, y, range) {
        //attempt at circle
        
        let dist = Math.sqrt(Math.pow(-y + this.yPos, 2) + Math.pow(x - this.xPos, 2));
        //console.log(dist + ", " + (range * this.detectionRange));
        if (dist <= (range * DETECTION_RANGE)) {
            return true;
        }
        //doesn't work, I'll try this out later.
        //It does work ! It's just really really expensive lol.
        return false;
    }

    avoidObstacle(x, y) {
        let dirToGo;
        dirToGo = radToDeg(Math.atan((-y + this.yPos) / (x - this.xPos)));
        if (x > this.xPos) {
            dirToGo += 180;
        }
        if (dirToGo > 360) {
            dirToGo -= 360;
        }
        if (dirToGo < 0) {
            dirToGo += 360;
        }
        this.turnTowards(dirToGo);
    }

    isNearWall(range) {
        if (this.xPos <= range * this.detectionRange * 0.5) {
            //console.log("left wall");
            return 'left wall';
        }
        if (this.xPos >= window.innerWidth - (range * this.detectionRange * 1.1)) {
            //console.log("right wall");
            return 'right wall';
        }
        if (this.yPos <= range * this.detectionRange * 0.5) {
            //console.log("top wall");
            return 'top wall';
        }
        if (this.yPos >= window.innerHeight - (range * this.detectionRange * 1)) {
            //console.log("bottom wall");
            return 'bottom wall';
        }
        return 'noWall';
    }
    
}

/**
 * A function that spawns a boid at a specific location
 * @param {*} x The x coordinate of spawning location.
 * @param {*} y The y coordinate of spawning location.
 * @returns Returns the newly created boid object, usually to be added to an array of boids.
 */
function spawnBoid(x, y) {
    //make new boid element
    var tempBoidElem = document.createElement("NATHANABANDO");
    tempBoidElem.setAttribute("class", "boid");
    tempBoidElem.style.borderLeft = boidColor;
    document.body.appendChild(tempBoidElem);

    //make new boid object
    var tempBoidObject = new Boid(
        x,
        y,
        INIT_SPEED,
        Math.random() * 360, //points boid in a random direction (converted into degrees)
        tempBoidElem
    )

    //add new boid into boid array
    boids.push(tempBoidObject)

    //return boid object
    return tempBoidObject;
}

/**
 * A function to update a specific boid's position and rotation. Also deals with border collision (related to updating boid position).
 * @param {*} targetBoid The boid to be updated.
 */
function updateBoid(targetBoid) {
    //movement
    targetBoid.xPos += targetBoid.xVel;
    targetBoid.yPos -= targetBoid.yVel; //NOTE: coord systems for windows are weird, y = 0 at the top, not the bottom
    targetBoid.boidCSS.style.left = targetBoid.xPos + "px";
    targetBoid.boidCSS.style.top = targetBoid.yPos + "px";

    //border collision
    if (targetBoid.xPos >= window.innerWidth) {
        //move boid to left of border
        targetBoid.xPos = 1 - BOID_SIZE;
    }

    //if boid hits left border
    if (targetBoid.xPos <= -BOID_SIZE) {
        //move boid to right of border
        targetBoid.xPos = window.innerWidth;
    }

    //if boid hits bottom of border
    if (targetBoid.yPos >= window.innerHeight) {
        //move boid to top of border
        targetBoid.yPos = 1 - BOID_SIZE;
    }

    //if boid hits top of border
    if (targetBoid.yPos <= -BOID_SIZE) {
        //move boid to bottom of border
        targetBoid.yPos = window.innerHeight;
    }
    
    //rotate boid in direction of movement
    targetBoid.boidCSS.style.transform = "rotate(" + (-targetBoid.directionInDeg) + "deg)";
}

//-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-INITIALIZATION-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-

var boidText = document.createElement("boidText");
boidText.setAttribute("class", "boidText");
boidText.setAttribute("id", "boidText");
boidText.innerHTML = "boids !";
document.body.appendChild(boidText);

let x = 0;

//creating boids
for (let i = 0; i < INIT_POPULATION; i++) {
    spawnBoid(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
}



document.addEventListener("mousedown", function(e) {
    //spawnBoid(e.clientX, e.clientY);
    console.log("meow");
    document.body.style.cursor = "url('catMouthOpenCursor.png'), none";
    screaming = true;

    //audio stuff
    screamSound.play();
})

document.addEventListener("mouseup", function(e){
    document.body.style.cursor = "url('catMouthCloseCursor.png'), none";
    screaming = false;

    //audio stuff
    screamSound.pause();
    //uncomment this for alternating between tom screams
    /*
    currentScream++;
    currentScream %= screamCollection.length;
    screamSound.src = screamCollection[currentScream];
    */

    if (currentScream > 0) {
        currentScream = 0;
    }
    if (getRandInt(20) >= 19) { //crit !! (with champion archetype)
        currentScream++; //5% chance to do tom scream 2
    }
    
    screamSound.src = screamCollection[currentScream];
    screamSound.load();
})

document.addEventListener("keypress", function(e) {
    if (e.keyCode == 13) {
        toggleLightDarkMode();
    }
})

document.addEventListener("mousemove", function(e) {
    cursorX = e.clientX;
    cursorY = e.clientY;
    //console.log(cursorX + ", " + cursorY);
})

updateColors()

document.body.style.cursor = "url('catMouthCloseCursor.png'), none";

boids[0].boidCSS.style.borderLeft = ChorGorlothColor;

window.onload = function() {
    //review: setInterval(functionThatDoesThingEveryInterval, lengthOfIntervalInMilliseconds)

    setInterval(function() {
        //lol I hope this for loop doesn't shred my laptop
        for (let i = 0; i < boids.length; i++) { //Iterate through all the boids to update them accordingly.
            for (let j = 0; j < boids.length; j++) { //O(N^2) time complexity :((
                //iterate through all the other boids to see which ones are close to each other.
                if (i != j && boids[i].isNear(boids[j], 1)) {
                    nearbyBoids.push(boids[j]);
                }

                else {
                    if (j != 0 && i == 0) {
                        boids[j].boidCSS.style.borderLeft = boidColor;
                    }
                }
                if (i != j && boids[i].isNear(boids[j], 2)) {
                    inViewBoids.push(boids[j]);
                }
                else {
                    if (j != 0 && i == 0) {
                        boids[j].boidCSS.style.borderLeft = boidColor;
                    }
                }
            }
            //console.log(boids[0].directionInDeg);


            //uh oh the nesting aboutta go crazy
            //wall avoidance should have priority over everything
            if (boids[i].isNearWall(WALL_AVOID_SIZE) == 'noWall') {
                if (!(boids[i].isNearObstacle(cursorX, cursorY, 4) && screaming)) { //this logic doesn't make sense to me.
                    if (inViewBoids.length > 0 && nearbyBoids.length <= FLOCK_DENSITY) { //call align() function for a boid that has boids in its line of sight.
                        
                        //BEHAVIOR 2: ALIGNMENT
                        boids[i].align(inViewBoids);

                        //BEHAVIOR 3: COHESION
                        boids[i].goMiddle(inViewBoids);


                        if (i == 0) {
                            for (let k = 0; k < inViewBoids.length; k++) {
                                inViewBoids[k].boidCSS.style.borderLeft = inViewColor;
                            }
                        }
                        
                    }
                    if (nearbyBoids.length > 0) { //call steerClear() function for a boid that has boids around it.
                        
                        //BEHAVIOR 1: SEPARATION
                        boids[i].steerClear(nearbyBoids);

                        if (i == 0) {
                            for (let k = 0; k < nearbyBoids.length; k++) {
                                nearbyBoids[k].boidCSS.style.borderLeft = nearbyColor;
                            }
                        }
                    }
                }
                else {
                    //BEHAVIOR 4: AVOID CURSOR
                    //console.log("here");
                    boids[i].boidTurnRate = TURN_RATE * 2;
                    boids[i].totalVel = INIT_SPEED * 1.5;

                    boids[i].avoidObstacle(cursorX, cursorY);
                }
            }
            else {
                //BEHAVIOR 5: AVOID WALLS
                //console.log(boids[i].isNearWall());

                switch(boids[i].isNearWall(WALL_AVOID_SIZE)) {
                    case 'top wall':
                        boids[i].avoidObstacle(boids[i].xPos, window.innerHeight);
                        break;
                    case 'bottom wall':
                        boids[i].avoidObstacle(boids[i].xPos, 0);
                        break;
                    case 'left wall':
                        boids[i].avoidObstacle(0, boids[i].yPos);
                        break;
                    case 'right wall':
                        boids[i].avoidObstacle(window.innerWidth, boids[i].yPos);
                        break;
                }
            }

            
            inViewBoids = [];
            nearbyBoids = [];

            updateBoid(boids[i]); //update

            //doing this cuz unexpected code stuff ??? no clue why they behave this way actually.
            if (boids[i].boidTurnRate != TURN_RATE) {
                boids[i].boidTurnRate = TURN_RATE;
                
            }
            if (boids[i].totalVel != INIT_SPEED) {
                boids[i].totalVel = INIT_SPEED;
            }
            
            


            //left right counter stuff
            if (boids[i].xVel > 0) {
                rightCounter++;
                //boids[i].boidCSS.style.borderLeft = "20px solid lime";;
            }
            if (boids[i].yVel > 0) {
                upCounter++;
            }
            if (boids[i].xVel < 0) {
                leftCounter++;
                //boids[i].boidCSS.style.borderLeft = "20px solid red";
            }
            if (boids[i].yVel < 0) {
                downCounter++;
            }
            //console.log(boids[i].xVel + ", " + boids[i].yVel);
            
        }
        
        //console.log(upCounter + " " + downCounter + " " + leftCounter + " " + rightCounter);
        if (rightCounter > leftCounter) {
            //console.log("RIGHT:\t" + (100 * leftCounter / boids.length) + "%,\t" + (100 * rightCounter / boids.length) + "%");
            //console.log("RIGHT");
        }
        else {
            //console.log("LEFT:\t" + (100 * leftCounter / boids.length) + "%,\t" + (100 * rightCounter / boids.length) + "%");
            //console.log("LEFT");
        }
        rightCounter = 0;
        upCounter = 0;
        leftCounter = 0;
        downCounter = 0;



        // LIGHT/DARK MODE SHIFTING: gradually updating color scheme when toggled
        // NOTE: rgb diff for text is -15, -64, -78
        // NOTE: rgb diff for bg is 246, 235, 200
        // NOTE: rgb diff for boid is 65, 113, 105
        switch(colorChangeLevel) { //this is hard-coded like crazy lol, basically stop incrementing a r, g, or b value once it has been incremented a certain amount.
            case 7:
                rgbArr[11] = 0;
                break;
            case 15:
                rgbArr[0] = 0;
                break;
            case 34:
                rgbArr[9] = 0;
                break;
            case 42:
                rgbArr[10] = 0;
                break;
            case 64:
                rgbArr[1] = 0;
                break;
            case 65:
                rgbArr[6] = 0;
                break;
            case 78:
                rgbArr[2] = 0;
                break;
            case 105:
                rgbArr[8] = 0;
                break;
            case 113:
                rgbArr[7] = 0;
                break;
            case 100:
                rgbArr[5] = 0;
                break;
            case 117:
                rgbArr[4] /= 2;
                break;
            case 118:
                rgbArr[4] = 0;
                break;
            case 123:
                rgbArr[3] = 0;
                break;

                
        }
        if (colorTheme == "LIGHT_DARK") {            
            textColor = incrementColor(textColor, rgbArr[0], rgbArr[1], rgbArr[2]);
            backGroundColor = incrementColor(backGroundColor, rgbArr[3], rgbArr[4], rgbArr[5]);
            boidColor = "20px solid " + incrementColor(boidColor.substring(11), rgbArr[6], rgbArr[7], rgbArr[8]);
            ChorGorlothColor = "20px solid " + incrementColor(ChorGorlothColor.substring(11), -rgbArr[9], -rgbArr[10], -rgbArr[11]);
            tempColor = inViewColor;
            inViewColor = "20px solid " + incrementColor(inViewColor.substring(11), rgbArr[9], rgbArr[10], rgbArr[11]);

            console.log(inViewColor);

            updateColors();
            colorChangeLevel++;
            
            //once the text, background, and boids have met their desired color, exit state and reset variables.
            if (textColor == "rgb(255, 169, 183)" && backGroundColor == "rgb(4, 0, 15)" && boidColor == "20px solid rgb(190, 56, 78)") {
                
                colorTheme = "DARK_MODE";
                colorChangeLevel = 0;
                rgbArr = [
                -1, -1, -1,
                2, 2, 2,
                1, 1, 1,
                4, 4, 1];
            }
        }
        else if (colorTheme == "DARK_LIGHT") {   
            //Repeated code, I'm too lazy to make it look all nice.
            //Also I don't wanna put these variable settings outside of the if statements because then they'll be called even if the website isn't in a color change state (wasteful I think ?).  
            textColor = incrementColor(textColor, rgbArr[0], rgbArr[1], rgbArr[2]);
            backGroundColor = incrementColor(backGroundColor, rgbArr[3], rgbArr[4], rgbArr[5]);
            boidColor = "20px solid " + incrementColor(boidColor.substring(11), rgbArr[6], rgbArr[7], rgbArr[8]);
            ChorGorlothColor = "20px solid " + incrementColor(ChorGorlothColor.substring(11), -rgbArr[9], -rgbArr[10], -rgbArr[11]);
            tempColor = inViewColor;
            inViewColor = "20px solid " + incrementColor(inViewColor.substring(11), rgbArr[9], rgbArr[10], rgbArr[11]);

            updateColors();
            colorChangeLevel++;

            //this part isn't repeated.
            if (textColor == "rgb(240, 105, 105)" && backGroundColor == "rgb(250, 235, 215)" && boidColor == "20px solid rgb(255, 169, 183)") {
                
                colorTheme = "LIGHT_MODE";
                colorChangeLevel = 0;
                rgbArr = [
                    1, 1, 1,
                    -2, -2, -2,
                    -1, -1, -1,
                    -4, -4, -1];
            }
        }
        boids[0].boidCSS.style.borderLeft = ChorGorlothColor;
    }, 10)
}
