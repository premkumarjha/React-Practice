import React  from 'react';

const ReplaceMethodPractice = () => {


    /* 
    When to Use replace()?
    ************************
✅ User Input Formatting (Phone, Credit Card, Date, etc.)
✅ Data Cleaning (Removing unwanted characters)
✅ String Manipulation (Swapping words, capitalizing)
✅ Security & Masking (Hiding sensitive data)
    


===>string.replace(pattern, replacement);
pattern → The substring or regular expression to match.
replacement → The string or function that determines the new value.
In the .replace() method, $1, $2, etc. are backreferences that refer to captured groups from the regular expression.

str.replace(/(\d{4})/g, "$1-");
**************************************************
/(\d{4})/g → Regular expression that captures 4 digits (\d{4}) in a group ()
"$1-" → The replacement pattern where:
$1 → Refers to the first captured group (4-digit match).
- → Adds a hyphen after each 4-digit match.

input.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
**************************************************
Let's break it down:

Regex Pattern	  Meaning
(\d{3})	          Captures first 3 digits (Group 1)
(\d{3})	          Captures next 3 digits (Group 2)
(\d{4})	          Captures last 4 digits (Group 3)
This pattern matches a 10-digit number like "1234567890".

🔹 What does "$1-$2-$3" do?
$1 → Inserts the first captured group (first 3 digits).
$2 → Inserts the second captured group (next 3 digits).
$3 → Inserts the third captured group (last 4 digits).
The "-" between them adds dashes between the groups.


/apple/gi  ==>g (Global) → Replaces all occurrences of "apple" in the string, instead of stopping at the first match.

/apple/gi  ==>i (Case-Insensitive) → Makes the search case-insensitive, so it matches "Apple", "APPLE", etc.
    
    */  
   
//**************Problems to practice*************************************

    //1.>Replace a Word in a String + Replace All Occurrences (Using /g Flag)
    //2.>Remove Non-Numeric Characters
    //3.>Format a Phone Number (XXX-XXX-XXXX)
    //4.>Swap First and Last Name
    //5.>Capitalize the First Letter of Each Word
    //6.>Remove Extra Spaces +Replace Spaces with Hyphens
    //7.>Mask a Credit Card Number (Show Last 4 Digits)
    //8.>Auto-Format Date (MM/DD/YYYY)
    //9.>Auto-Format Credit Card Number (XXXX-XXXX-XXXX-XXXX)
    //10.>Auto-Format Phone Number (XXX-XXX-XXXX)
    //11.>Restrict Input to Numbers Only



    return (
        <>
            <h1>Replace Method Practice</h1>
        </>
    )

};

