var clr = document.getElementById("clear");
var square = document.getElementById("square");
var del = document.getElementById("delete");
var ans = document.getElementById("answer");
var operator = ["*", "/", "%"];
var currentOutput;




function check() {
    var input = document.getElementById("input").value;
    if (input.length == 1) {
        alert("Synthax Error");
        document.getElementById("input").value = "";

    }

}


function validate() {
    var input = document.getElementById("input").value;
    var len = input.length;
    var res = input.slice(len - 1);

    try {
        if (operator.includes(res)) {

            alert("Synthax Error");

            document.getElementById("input").value = "";
        } else {
            var x = eval(input);
            currentOutput = x;
            document.getElementById("input").value = x;
            document.getElementById("output").value = x;
        }
    } catch (err) {
        alert("Synthax Error");
        document.getElementById("input").value = "";
    }


}

clr.addEventListener("click", function() {

    document.getElementById("output").value = "";
    document.getElementById("input").value = "";

});

square.addEventListener("click", function() {
    var input = document.getElementById("input").value;
    var x = eval(input * input);
    document.getElementById("input").value = x;
});

del.addEventListener("click", function() {
    var input = document.getElementById("input").value;
    document.getElementById("input").value = input.substring(0, input.length - 1);

})

ans.addEventListener("click", function() {
    var x = eval(document.getElementById("output").value);
    document.getElementById("input").value = x;
})