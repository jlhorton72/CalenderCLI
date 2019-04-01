const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
const chalk = require('chalk');

var lodash = require('lodash');

var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // set start date as today
var nowDt = Moment(); //.date();      // sets cureent date in mnumber format

    // print month heading
function displayMonth(){    
    month = nowDt.format("MMMM");
    month = lodash.pad(month, 88);
    console.log(chalk.cyanBright(month));
} // end of displayMonth

    // print day of week headings
function printWeekDay(){
    var str = "";
    for (i=0;i<7;i++){
        str += lodash.pad(weekDays[i], 12);
        if (i!=6){
        str += "|";
        } // end of for loop creating string
    } // end of display days of week
    console.log(chalk.redBright(str));
} // end of weekday

    // print day number 
function printMonth(){
    var day=[];
    var blanks = nowDt.day();
    console.log(blanks);
    // console.log("day: " + blanks);
    // console.log(nowDt.date());
        // call a function to find number of days in the month
    var dom = getDays(nowDt.month() + 1);
    var totDay = blanks + dom;
        //  builds array for days in calender
    for (i = 0; i < totDay; i++) {
        if (i < blanks){
            day.push("");
        } // end of if
        else {
            day.push(i - (blanks - 1));
        } // end of else        
    } // end of for loop building array
        
    var weeks = day.length / 7;
    var wkdays = lodash.chunk(day, 7);
    var strDay = ""; //"          ";
        // console.log(weeks);
        // console.log(wkdays);        // testing for arraay in feb... its off
        // console.log(wkdays[0][5]);       // this is how i found the way to use pad....
    for (i = 0; i < weeks ; i++){
        for (j = 0; j <7; j++){
            if (nowDt.month() == 1 && wkdays[i][j] == 23){
                // strDay += lodash.pad(chalk.purple(wkdays[i][j], 13));
                strDay += chalk.yellowBright(lodash.pad(wkdays[i][j], 13));
            } // end of birthday
            else if (nowDt.month() == 4 && wkdays[i][j] == 10){
                    // var hghlt = chalk.purple(wkdays[i][j]);
                strDay += chalk.yellowBright(lodash.pad(wkdays[i][j], 13));
                    // strDay += lodash.pad(chalk.purple(wkdays[i][j]), 13);
            } // end of if anniversary
            else 
                strDay += chalk.green(lodash.pad(wkdays[i][j], 13));
        } // end of inner for
            //strDay += lodash.join(wkdays[i], (lodash.pad(wkdays[i], 12)));
        console.log(strDay + "\n");
        strDay = "";
    } // end of for loop
        // console.log(dom);
} // end of printMonth

    // this function returns the number of days in each month
function getDays(month){
    if (month == 1 || month == 3 || month == 5 || month == 7 ||
        month == 8 || month == 10 || month == 12)
        return 31;

    if (month == 4 || month == 6 || month == 9 || month == 11)
        return 30;

    if (month == 2){
        if (moment([nowDt.year()]).isLeapYear()){
            return 29;
        } else
            return 28;
    } // end of feb   

    return 0;
} // end of getDays






function printCal(){
    for (lcv = 0; lcv < 12; lcv++){
         
         displayMonth();//nowDt.month());
         printWeekDay();
         printMonth();
         if (nowDt.month() == 0 && nowDt.day() > 28){
            nowDt = nowDt.subtract(3, 'days' );
            // console.log(nowDt.date());           // trying to troubleshoot feb being off
         } // end of if
        else
            nowDt = nowDt.add(1, 'M');
    } // end of for loop
} // this should print calendar

printCal();


// var hourNow = moment().format('H'); 
// const start = new Date(2012, 0, 15);
// const end   = new Date(2012, 4, 23);
// const range = moment.range(start, end);
// console.log(chalk.red(hourNow) + " " + chalk.blue(range));      // testing what works
// var nowMo = Moment().month();   // sets current month in number format
// console.log(nowMo + " " + nowDt); // testing for info
// console.log(nowDt.day());
// console.log(endCal);     // test 
// ***********************  end of testing

// build an array base on number of days in the month + number of blank spaces to 
// compensate for the day of week of set
// now chunk values into groups of 7
// print each array with pad on 12 units
    
// loop until counter is done with month
// increment month counter and repeat until 
// day counter is out of days

// must highlight birthday and one other day
// can be accomplished with if else statement for day


