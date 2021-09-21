let history = '';

      //function that display value 
      function dis(val) {
        document.getElementById("result").value += val;

        addToHistory(val);
      }

      //function that evaluates the digit and return result 
      function solve() {
        let x = document.getElementById("result").value;
        let y = eval(x);
        document.getElementById("result").value = y;
        addToHistory('=' + y);
      }

      //function that clear the display 
      function clr() {
        document.getElementById("result").value = "";

        addToHistory(' ');
      }

      function addToHistory(value) {
        history += value;
        document.getElementById('history').innerText = history;
      }
