//1. Currying for infinite sum   ===>asked in many interviews ...as infinite currying function


const sum = (a) => {
  return (b) => {
    if (b == undefined) return a; //it is Stop Condition, it should be there...
    return sum(a + b);
  };
};

const res = sum(20)(30)(10)(); //Note: yha pe last me () lagana jaruri hai, jisse ki b undefined ho jaye and stop condition work kare.
console.log(res);


//2.>Normal curring fucntion to sum, with fixed number of arguments

const add = (a) => {
  return (b) => {
    return (c)=>a+b+c;
  }
}
  const out = add(20)(30)(10);  //yaha last me () lagana jaruri nhi hai, as yha pe 3 parameter hi hai, so 3 call ke bad result mil jayga.
  console.log(out);



/*

Global Scope
│
├── sum (function)
│
└── Execution Flow:
     ├─ sum(20)   → returns f(b)  [closure: a=20]
     │
     ├─ f(30)     → returns f(b)  [closure: a=50]
     │
     ├─ f(10)     → returns f(b)  [closure: a=60]
     │
     └─ f()       → returns 60    [b undefined → stop]


🧠 Summary Table
Step	Call	                What’s stored in closure	        Returned value
1	    sum(20)	                    { a: 20 }	                    function waiting for b
2	    (30)	                    { a: 50 }	                     function waiting for b
3	    (10)	                    { a: 60 }	                      function waiting for b
4	    ()	                            —	                           returns 60

*/

/*

Step-by-Step Breakdown
🪄 Step 1: The first call
sum(20)

What happens:

A new execution context is created for sum.

Parameter a = 20.

Returns a new function:

(b) => (b !== undefined ? sum(a + b) : a)


Closure formed:
This returned function remembers a = 20 even after sum(20) finishes.

🧠 Think of it like a backpack 🎒 —
this function carries a = 20 inside it wherever it goes.

🪄 Step 2: The second call
sum(20)(30)


Now the returned function from step 1 is called with b = 30.

Inside that function:
b !== undefined → true


So it calls:

sum(a + b) → sum(20 + 30) → sum(50)

What happens now:

A new function is returned again.

New closure created → this time it remembers a = 50.

Now you’ve got a chain of closures:

sum(20) → closure with a=20
sum(50) → closure with a=50


But only the latest one (a=50) remains referenced.

🪄 Step 3: The third call
sum(20)(30)(10)


The current function (sum(50)) is called with b = 10.

Inside that function:
b !== undefined → true


So again it calls:

sum(a + b) → sum(50 + 10) → sum(60)


Now a new closure is formed with a = 60.

So after 3 calls, you have this chain:

sum(20) → created closure a=20 (discarded)
sum(50) → created closure a=50 (discarded)
sum(60) → active closure a=60


Each call creates a new environment (closure) with the updated sum.

🪄 Step 4: The last call
sum(20)(30)(10)()


Now the function returned from sum(60) is called without an argument.

That means:

b = undefined


The check:

(b !== undefined) ? sum(a + b) : a


fails (b is undefined), so it returns:

return a;


and a (which is 60) is returned to the console.

✅ Final result → 60

🧠 Memory-Level View (Lexical Environments)
1️⃣ After sum(20)
Closure_1 = { a: 20 }

2️⃣ After sum(20)(30)
Closure_2 = { a: 50 }   // new closure from sum(50)

3️⃣ After sum(20)(30)(10)
Closure_3 = { a: 60 }   // new closure from sum(60)

4️⃣ After sum(20)(30)(10)()

No new closure, b is undefined, returns a=60.

All previous closures (a=20, a=50) are garbage collected
because no function references them anymore.

🧩 How Closures Work Here

Each time you call sum(x):

A new execution context is created.

It stores parameter a.

Returns a new function that remembers that a.

When that new function is called later, it can still access the value of a —
even though the previous call has finished execution.

That’s the essence of a closure:

A function “remembers” the variables from the scope where it was created,
even after that outer scope has finished executing.


*/
