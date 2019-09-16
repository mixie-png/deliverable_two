var tempFahr = prompt ("Please enter temperature in F");

var eventType = prompt ("Is the event: casual, semi-formal, or formal?");

if (tempFahr < 54) {
        var resultsTemp = "a coat";
    } else if (tempFahr >= 54 && tempFahr < 70) {
        var resultsTemp = "a jacket";
    } else if (tempFahr >= 70) {
        var resultsTemp = "no jacket";
    }

if (eventType === "casual") {
        var resultsEvent = "something comfy";
    } else if (eventType === "semi-formal") {
        var resultsEvent = "a polo";
    } else if (eventType === "formal") {
        var resultsEvent = "a suit";
    }

var result =
console.log (`Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should 
wear ${resultsEvent} and ${resultsTemp}.`)