console.log('connected');

$("document").ready(() => {

    $("#aboutButton").click(() => {
        console.log("about button clicked.");
        window.location = "about.html";
    });

    $("#formsub").click(()=>{
        alert("Apologies. Form has been temporarily disabled.");
    });

    /* external pages*/
    $("#linkedIn").click(() => {
        console.log("LinkedIn clikced. Redirects");
        window.open("https://www.linkedin.com/in/iank6/");
    });

    $("#github").click(() => {
        console.log("github clikced. Redirects");
        window.open("https://github.com/Iankimble");
    });

    $("#behance").click(() => {
        console.log("behance clikced. Redirects");
        window.open("https://www.behance.net/iankimble");
    });

    /*Vice Page*/
    $("#v21card").click(() => {
        console.log('21 vice clicked. Redirect to 21 vice page');
        window.location = "21vice.html";
    });

    $("#github21vice").click(() => {
        console.log("open 21 vice github");
        window.open("https://github.com/FlSHBONES/21VICE");
    });

    $("#viceApp").click(() => {
        console.log("open app");
        window.open("https://twenty-one-dice.herokuapp.com/");
    });

    /*Fst brk*/
    $("#fb1card").click(() => {
        console.log("fst brk clicked. Redirect to FstBrk page.");
        window.location = "fstbrk1.html";
    });

    $("#githubFb").click(() => {
        console.log("open fst brk github");
        window.open("https://github.com/Iankimble/fstbrkComplete");
    });

    $("#fbApp").click(() => {
        console.log("open app");
        window.open("https://iankimble.github.io/fbcg/");
    });

    /*Green Print*/
    $("#greenPrintcard").click(() => {
        console.log("fst gp. Redirect to gp page.");
        window.location = "greenPrint.html";
    });

    $("#githubGp").click(() => {
        console.log("open 21 vice github");
        window.open(" https://github.com/Iankimble/greenPrintPrototype");
    });

    $("#gpApp").click(() => {
        console.log("open app");
        window.open(" https://iankimble.github.io/greenPrintPrototype/ ");
    });

    /*Black-U-Weather*/
    $("#blackWeathercard").click(() => {
        console.log("fst brk clicked. Redirect to FstBrk page.");
        window.location = "blackuweather.html";
    });

    $("#githubBw").click(() => {
        console.log("open 21 vice github");
        window.open(" https://github.com/Iankimble/blackuweatherComplete");
    });

    $("#bwApp").click(() => {
        console.log("open app");
        window.open(" https://gentle-badlands-89286.herokuapp.com/");
    });

    /*Yahrn*/
    $("#yahrncard").click(() => {
        console.log("fst brk clicked. Redirect to FstBrk page.");
        window.location = "yahrnAC.html";
    });

    $("#githubYrn").click(() => {
        console.log("open 21 vice github");
        window.open("https://github.com/Iankimble/yahrnPrototype");
    });

    $("#yrnApp").click(() => {
        console.log("open app");
        window.open("https://iankimble.github.io/yahrnPrototype/");
    });




});


