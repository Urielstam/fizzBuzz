var count = 0;
$('body').on('click', '.glow-on-hover', function () {
    count++;
    if (count % 15 === 0) {
        $("#demo").text("fizzBuzz");
    }
    else if (count % 3 === 0) {
        $("#demo").text("fizz");
    }
    else if (count % 5 === 0) {
        $("#demo").text("Buzz");
    }
    else {
        $("#demo").text(count);
    }
    
});