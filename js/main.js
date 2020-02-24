let play = false;
let fname;
let sname;
let percentage = 40;

$("#submit").click(function(){
    console.log("click");
    if(!play){
        getNames();
        i = 0;
        getResults();
        play = true;
    }else{
        reset();
        getNames();
        i = 0;
        getResults();
    }
    
    

})

function getNames(){
    fname = $.trim($("#fname").val());
    console.log(fname);
    sname = $.trim($("#sname").val());
    console.log(sname);
}

async function getResults(){

    let loverapi = "https://love-calculator.p.rapidapi.com/getPercentage?fname="+fname+"&sname="+sname;
    console.log(loverapi);

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": loverapi,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "love-calculator.p.rapidapi.com",
            "x-rapidapi-key": "50d032d045mshbf685b6c865b458p12c002jsn30cdc6a8973f",
            'Access-Control-Allow-Origin': '*'
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response.percentage);
        percentage = parseInt(response.percentage);
        showResults();

    });

    // javascript code

    // fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname=ads&sname=Alice", {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-host": "love-calculator.p.rapidapi.com",
    //     "x-rapidapi-key": "50d032d045mshbf685b6c865b458p12c002jsn30cdc6a8973f"
    //     'Access-Control-Allow-Origin': '*'
	// }
    // })
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.log(err);
    // });
        
}

let i = 0;

function showResults () {           //  create a loop function
    $("#percentage").css("visibility","visible");
    setTimeout(function () {    //  call a 3s setTimeout when the loop is called
        let move = -3*i;
       $("#number").html(i.toString()+'% MATCH');    
       $("#percentage").css({
        // 'transition':'0.8s ease-out',
            'transform': 'translate('+move+'px,0px)'
        });
        $("#cat-right").css({
            // 'transition':'0.8s ease-out',
            'transform': 'translate('+move+'px,0px)'
        });
       i++;                     //  increment the counter
       if (i < percentage) {            //  if the counter < 10, call the loop function
        showResults();             //  ..  again which will trigger another 
       }                        //  ..  setTimeout()
    }, 100)
 }
 
function reset(){
    $("#percentage").css("visibility","hidden");
    $("#cat-right").css({
        // 'transition':'0.8s ease-out',
        'transform': 'translate(0px,0px)'
    });
    $("#percentage").css({
        // 'transition':'0.8s ease-out',
        'transform': 'translate(0px,0px)'
    });
}