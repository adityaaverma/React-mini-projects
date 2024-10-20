import { useState } from "react";
function calculate(expression) {
  //   const num = [];
  //   const op = [];
  //   let i = 0;

  //   if (expression[0] === '-') {
  //     let numStr = '-';
  //     i++;
  //     while (i < expression.length && expression[i] >= "0" && expression[i] <= "9") {
  //       numStr += expression[i];
  //       i++;
  //     }
  //     num.push(parseInt(numStr));
  //   }

  //   while (i < expression.length) {
  //     if (expression[i] >= "0" && expression[i] <= "9") {
  //       let numStr = "";

  //       while (i < expression.length && expression[i] >= "0" && expression[i] <= "9") {
  //         numStr += expression[i];
  //         i++;
  //       }
  //       num.push(parseInt(numStr));
  //     } else if (expression[i] === '-' && (i === 0 || !isNumeric(expression[i - 1]))) {

  //       let numStr = '-';
  //       i++;
  //       while (i < expression.length && expression[i] >= "0" && expression[i] <= "9") {
  //         numStr += expression[i];
  //         i++;
  //       }
  //       num.push(parseInt(numStr));
  //     } else {

  //       while (op.length > 0 && precedence(expression[i]) <= precedence(op[op.length - 1])) {
  //         let secondOperand = num.pop();
  //         let firstOperand = num.pop();
  //         num.push(applyOperation(op.pop(), firstOperand, secondOperand));
  //       }
  //       op.push(expression[i]);
  //       i++;
  //     }
  //   }

  //   while (op.length > 0) {
  //     let secondOperand = num.pop();
  //     let firstOperand = num.pop();
  //     num.push(applyOperation(op.pop(), firstOperand, secondOperand));
  //   }

  //   return num[0];

  const x = expression.split(/(\+|\-|\*|\/)/g);
  console.log(x);
  // let a = null,
  //   b = null,
  //   op = null;
  // for (let i = 0; i < x.length; i++) {
  //   if (x[i] !== "*" && x[i] !== "/" && x[i] !== "+" && x[i] !== "-") {
  //     if (a === null) {
  //       a = Number(x[i]);
  //     } else {
  //       b = Number(x[i]);
  //     }
  //   } else {
  //     op = x[i];
  //     console.log(op);
  //   }
  //   if (a != null && b != null && op != null) {
  //     a = applyOperation(op, a, b);
  //     b = null;
  //     op = null;
  //   }
  // }
  let a=Number(x[0]);
  for(let i=1;i<x.length;i+=2){
    a=applyOperation(x[i],a,Number(x[i+1]));
  }
  return a;
}

function isNumeric(char) {
  return char >= "0" && char <= "9";
}

function precedence(op) {
  if (op === "+" || op === "-") return 1;
  if (op === "*" || op === "/") return 2;
  return 0;
}

function applyOperation(op, a, b) {
  console.log(op,a,b);
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return Math.floor(a / b);
    default:
      return 0;
  }
}

function App() {
  const [val, setVal] = useState("");
  const [done, setDone] = useState(false);
  function evaluateExpression(expression) {
    // Remove leading zeros from numbers in the expression
    const cleanedExpression = expression.replace(/\b0+(\d+)/g, "$1");

    try {
      // Check if the cleaned expression is a valid math expression (digits, operators)
      if (/^[\d+\-*/(). ]+$/.test(cleanedExpression)) {
        // Evaluate the expression using eval
        const result = calculate(cleanedExpression);
        setVal(result.toString());
        setDone(true); // Correct usage of toString
      } else {
        throw new Error("Invalid characters in the expression");
      }
    } catch (error) {
      console.error("Invalid expression:", error);
      setVal("Error: Invalid Expression");
      setDone(true); // Set an error message if the expression is invalid
    }
  }

  return (
    <>
      <div className="bg-red-100 h-screen ">
        <div className="flex-col fixed bg-blue-500 h-[700px] w-[700px] left-[500px] top-[30px]">
          <div className="w-5/6 h-[150px] bg-slate-100 absolute left-[50px] top-[50px] text-right">
            {val}
          </div>
          <div className=" flex absolute bg-red-50 text-white top-[250px] left-[50px] w-[600px] h-[400px] ">
            <div className="bg-green-100 w-3/4">
              <div className="bg-amber-400 h-1/4 flex justify-around">
                <button
                  className="bg-white w-1/4 mx-2 text-black text-center my-2"
                  onClick={() => {
                    if (done) {
                      setVal(""); // Clear the current value if the expression has been evaluated
                      setDone(false); // Reset the done state to false
                    }
                    setVal((prevVal) => prevVal + "7"); // Append the value '7' to the expression
                  }}
                >
                  7
                </button>
                <button
                  className="bg-white w-1/4 mx-2 text-black text-center my-2"
                  onClick={() => {
                    if (done) {
                      setVal(""); // Clear the current value if the expression has been evaluated
                      setDone(false); // Reset the done state to false
                    }
                    setVal((prevVal) => prevVal + "8"); // Append the value '7' to the expression
                  }}
                >
                  8
                </button>
                <button
                  className="bg-white w-1/4 mx-2 text-black text-center my-2"
                  onClick={() => {
                    if (done) {
                      setVal(""); // Clear the current value if the expression has been evaluated
                      setDone(false); // Reset the done state to false
                    }
                    setVal((prevVal) => prevVal + "9"); // Append the value '7' to the expression
                  }}
                >
                  9
                </button>
              </div>

              <div className="bg-orange-300 h-1/4 flex justify-around">
                <button
                  className="bg-white w-1/4 mx-2 text-black text-center my-2"
                  onClick={() => {
                    if (done) {
                      setVal(""); // Clear the current value if the expression has been evaluated
                      setDone(false); // Reset the done state to false
                    }
                    setVal((prevVal) => prevVal + "4"); // Append the value '7' to the expression
                  }}
                >
                  4
                </button>
                <button
                  className="bg-white w-1/4 mx-2 text-black text-center my-2"
                  onClick={() => {
                    if (done) {
                      setVal(""); // Clear the current value if the expression has been evaluated
                      setDone(false); // Reset the done state to false
                    }
                    setVal((prevVal) => prevVal + "5"); // Append the value '7' to the expression
                  }}
                >
                  5
                </button>
                <button
                  className="bg-white w-1/4 mx-2 text-black text-center my-2"
                  onClick={() => {
                    if (done) {
                      setVal(""); // Clear the current value if the expression has been evaluated
                      setDone(false); // Reset the done state to false
                    }
                    setVal((prevVal) => prevVal + "6"); // Append the value '7' to the expression
                  }}
                >
                  6
                </button>
              </div>
              <div className="bg-red-300 h-1/4 flex justify-around">
                <button
                  className="bg-white w-1/4 mx-2 text-black text-center my-2"
                  onClick={() => {
                    if (done) {
                      setVal(""); // Clear the current value if the expression has been evaluated
                      setDone(false); // Reset the done state to false
                    }
                    setVal((prevVal) => prevVal + "1"); // Append the value '7' to the expression
                  }}
                >
                  1
                </button>
                <button
                  className="bg-white w-1/4 mx-2 text-black text-center my-2"
                  onClick={() => {
                    if (done) {
                      setVal(""); // Clear the current value if the expression has been evaluated
                      setDone(false); // Reset the done state to false
                    }
                    setVal((prevVal) => prevVal + "2"); // Append the value '7' to the expression
                  }}
                >
                  2
                </button>
                <button
                  className="bg-white w-1/4 mx-2 text-black text-center my-2"
                  onClick={() => {
                    if (done) {
                      setVal(""); // Clear the current value if the expression has been evaluated
                      setDone(false); // Reset the done state to false
                    }
                    setVal((prevVal) => prevVal + "3"); // Append the value '7' to the expression
                  }}
                >
                  3
                </button>
              </div>
              <div className="bg-blue-300 h-1/4 flex justify-center">
                <button
                  className="bg-white w-1/4 mx-2 text-black text-center my-2"
                  onClick={() => {
                    if (done) {
                      setVal(""); // Clear the current value if the expression has been evaluated
                      setDone(false); // Reset the done state to false
                    }
                    setVal((prevVal) => prevVal + "0"); // Append the value '7' to the expression
                  }}
                >
                  0
                </button>
              </div>
            </div>
            <div className="bg-slate-400 w-1/4 flex flex-col items-center">
              <button
                className="bg-red-300 w-1/2 h-1/5 border-black my-2"
                onClick={() => {
                  if (done) {
                    setVal(""); // Clear the current value if the expression has been evaluated
                    setDone(false); // Reset the done state to false
                  }
                  setVal((prevVal) => prevVal + "+"); // Append the value '7' to the expression
                }}
              >
                +
              </button>
              <button
                className="bg-red-300 w-1/2 h-1/5 border-black my-2"
                onClick={() => {
                  if (done) {
                    setVal(""); // Clear the current value if the expression has been evaluated
                    setDone(false); // Reset the done state to false
                  }
                  setVal((prevVal) => prevVal + "-"); // Append the value '7' to the expression
                }}
              >
                -
              </button>
              <button
                className="bg-red-300 w-1/2 h-1/5 border-black my-2"
                onClick={() => {
                  if (done) {
                    setVal(""); // Clear the current value if the expression has been evaluated
                    setDone(false); // Reset the done state to false
                  }
                  setVal((prevVal) => prevVal + "/"); // Append the value '7' to the expression
                }}
              >
                /
              </button>
              <button
                className="bg-red-300 w-1/2 h-1/5 border-black my-2"
                onClick={() => {
                  if (done) {
                    setVal(""); // Clear the current value if the expression has been evaluated
                    setDone(false); // Reset the done state to false
                  }
                  setVal((prevVal) => prevVal + "*"); // Append the value '7' to the expression
                }}
              >
                *
              </button>
            </div>
          </div>
        </div>
        <button
          className="absolute h-[40px] w-[100px] left-[725px] top-[685px] bg-white"
          onClick={() => evaluateExpression(val)} // Ensure the function is called on click
        >
          Evaluate
        </button>
      </div>
    </>
  );
}

export default App;
