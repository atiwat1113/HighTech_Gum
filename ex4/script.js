document.addEventListener("DOMContentLoaded",
  function (event) {
    var display_down = "";
    var display_up = "";
    var current_operator = "";
    function makeFunction(value) {
        var myfunc = function (event){
            if (value in [1,2,3,4,5,6,7,8,9,0] && display_down.length < 15) {
                if (current_operator === "=") {
                    display_down = "";
                    display_up = "";
                    current_operator = "";
                }
                display_down += value;
            }

            else if (value === "C") {
                display_down = "";
                display_up = "";
            }

            else if (value === "del") {
                if (current_operator != "="){
                    display_down = display_down.substring(0,display_down.length-1);
                }
            }

            else if (value ==="+" || value ==="-" || value ==="x" || value==="÷") {
                if (display_down.length != 0) {
                    display_up = display_down + value;
                    display_down = "";
                    current_operator = value;
                }
                else if (display_up.length != 0) {
                    display_up = display_up.substring(0,display_up.length-1) + value;
                    current_operator = value;
                }
            }

            else if (value ==="=") {
                if (display_up.length != 0 && current_operator != "=") {
                    var result = "";
                    if (current_operator ==="+" || current_operator ==="-") { result = String(eval(display_up + display_down)); }
                    else if (current_operator ==="x") { result = String(eval(display_up.substring(0,display_up.length-1) + "*" + display_down)); }
                    else if (current_operator ==="÷") { result = String(eval(display_up.substring(0,display_up.length-1) + "/" + display_down)); }
                    display_up = display_up + display_down;
                    display_down = result;
                    current_operator = "=";
                }
            }

            document.querySelector("#Rectangle1").textContent = display_down;
            document.querySelector("#Rectangle2").textContent = display_up;
        };

        return myfunc;
    }

    // Unobtrusive event binding
    var selector = document.querySelectorAll(".font");
    for (var i = 0;i<selector.length;i++) {
        selector[i].addEventListener("click", makeFunction(selector[i].textContent));
    }
    

  }
);