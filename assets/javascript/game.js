// Select a random number to display //
// number is between 19-120 //

$(document).ready(function () {
    var random = Math.floor(Math.random() * 101 + 19);



    // Append random number to randomNumber id in the html //

    $('#target').append(random);



    // Assign random numbers for gems //
    // numbers are between 1-12 //

    var number1 = Math.floor(Math.random() * 11 + 1);
    var number2 = Math.floor(Math.random() * 11 + 1);
    var number3 = Math.floor(Math.random() * 11 + 1);
    var number4 = Math.floor(Math.random() * 11 + 1);


    // Variables for win counter //

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $('#win').append(wins);
    $('#loss').append(losses);
    $('#current').append(userTotal);



    // Game Reset //

    function reset() {
        random = Math.floor(Math.random() * 101 + 19);
        $('#target').text(random);
        console.random = Math.floor(Math.random() * 101 +19);
        $('#randomNumber').text(random);
        number1 = Math.floor(Math.random() * 11 + 1);
        number2 = Math.floor(Math.random() * 11 + 1);
        number3 = Math.floor(Math.random() * 11 + 1);
        number4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('#current').text(userTotal);
    }


    // Add wins to counter //

    function pass() {
        alert("YOU WIN!");
        wins++;
        $('#win').text(wins);
        reset();
    }

    function fail() {
        alert("YOU LOSE!");
        losses ++;
        $('#loss').text(losses);
        reset();
    }


    // click function for gems //

    $('#one').on('click', function(){
        userTotal = userTotal +number1;
        console.log("New userTotal = "+ userTotal);
        $('#current').text(userTotal);
        if (userTotal === random){
            pass();
        }
    
        else if (userTotal > random) {
            fail();
        }
    })

    $('#two').on('click', function(){
        userTotal = userTotal +number2;
        console.log("New userTotal = "+ userTotal);
        $('#current').text(userTotal);
        if (userTotal === random){
            pass();
        }
    
        else if (userTotal > random) {
            fail();
        }
    })

    $('#three').on('click', function(){
        userTotal = userTotal +number3;
        console.log("New userTotal = "+ userTotal);
        $('#current').text(userTotal);
        if (userTotal === random){
            pass();
        }
    
        else if (userTotal > random) {
            fail();
        }
    })

    $('#four').on('click', function(){
        userTotal = userTotal +number4;
        console.log("New userTotal = "+ userTotal);
        $('#current').text(userTotal);
        if (userTotal === random){
            pass();
        }
    
        else if (userTotal > random) {
            fail();
        }
    })
    //if win/loss //

    if (userTotal === random){
        pass();
    }

    else if (userTotal > random) {
        fail();
    }


});

