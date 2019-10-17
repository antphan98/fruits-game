
const targetNumber = 48;
const fruitNum = [12, 9, 4, 18];
let counter = 0;


// for (let i = 0; i > fruitNum.length; i++) {

//     const fruitPicture = $("<img>");
//     fruitPicture.addId("apple");
//     fruitPicture.attr("src", "https://cdn1.iconfinder.com/data/icons/fruit-cartoon-flat-cute-fruity/512/apple-512.png");
//     fruitPicture.attr("numAppleValue", numberOptions[i]);
//     $("#apple").append(fruitPicture);


// }

    $("#targetNum").text(targetNumber);

    $("#apple").on("click", function() {

    // const appleValue = ($(this).attr("numAppleValue"));
    // appleValue = parseInt(appleValue);
    counter += 12;
    alert("You clicked this crystal " + counter + " times!");

    })

$("#orange").on("click", function() {

    counter += 9;
    alert("You clicked this crystal " + counter + " times!");


})

$("#grape").on("click", function() {

    counter += 4;
    alert("You clicked this crystal " + counter + " times!");

})

$("#pear").on("click", function() {

    counter += 18;

    alert("You clicked this crystal " + counter + " times!");
 })

if (counter === targetNumber) {
    alert("you win!");

}

else if (counter >= targetNumber) {
    alert("you lose!");

}