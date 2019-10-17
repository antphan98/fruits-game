
const targetNumber = 48;
const fruitNum = [12, 9, 4, 18];
// pseudocode ~~ 
// was supposed to make user score change as each image was clicked
// was supposed to fix if you win or lose when hitting target score
// was supposed to reset score once the user was finished



// for (let i = 0; i > fruitNum.length; i++) {

//     const fruitPicture = $("<img>");
//     fruitPicture.addId("apple");
//     fruitPicture.attr("src", "https://cdn1.iconfinder.com/data/icons/fruit-cartoon-flat-cute-fruity/512/apple-512.png");
//     fruitPicture.attr("numAppleValue", numberOptions[i]);
//     $("#apple").append(fruitPicture);


// }

const userScore = 0;


    $("#targetNum").text(targetNumber);
    let counter = 0;
    const count = 0;
    $(document).ready(function() {
        
    $("#apple").on("click", function() {

    // const appleValue = ($(this).attr("numAppleValue"));
    // appleValue = parseInt(appleValue);
        // count += this.value;
        // $("#userNum").html(count);

        counter += 12;
    alert("Your score is " + counter);
      })
      

    })



$("#orange").on("click", function() {

    counter += 9;
    alert("Your score is " + counter);


})

$("#grape").on("click", function() {

    counter += 4;
    alert("Your score is " + counter);

})

$("#pear").on("click", function() {

    counter += 18;

    alert("Your score is " + counter);
 })

if (counter === targetNumber) {
    alert("you win!");

}

else if (counter >= targetNumber) {
    alert("you lose!");

}