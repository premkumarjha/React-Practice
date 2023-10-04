import React from "react";

//https://www.youtube.com/watch?v=hzs4_6ecbEU    ===>css combinator


const SelectorPractice = () => {
  return (
  <>
  {/*1.  simple selector {select elements based on name, id, class}*/}

 
  {/* 2.  //=>There are four different combinators in CSS: */}    
  
  {/* The descendent selector{descendant selector (space)} selects all elements inside of a specified element. */}
  {/* The child selector{child selector (>)} selects all elements that are children of an element.  */ }
 {/* The adjacent sibling selector(+) selects only those siblings of an element that appear immediately after it, The + selector is used to select an element that is directly after(after bol raha na ki inside) another specific elemen */}
  {/* The general sibling selector{general sibling selector (~)} selects all siblings of an element ,The adjacent sibling selector selects only those siblings of an element that appear immediately after it */}
 
 {/*3. ==> Pseudo-class selectors (select elements based on a certain state)   

 A pseudo-class is used to define a special state of an element.

For example, it can be used to:

Style an element when a user mouses over it
Style visited and unvisited links differently
Style an element when it gets focus

NOTE ==>a:active MUST come after a:hover in the CSS definition in order to be effective! Pseudo-class names are not case-sensitive.

//a:hover MUST come after a:link and a:visited in the CSS definition in order to be effective!

 ==>https://www.w3schools.com/css/css_pseudo_classes.asp

 */}
{/*4.  Pseudo-elements selectors (select and style a part of an element) 

A CSS pseudo-element is used to style specified parts of an element.

For example, it can be used to:

Style the first letter, or line, of an element
Insert content before, or after, the content of an element

==>https://www.w3schools.com/css/css_pseudo_elements.asp
*/}
{/*5.  Attribute selectors (select elements based on an attribute or attribute value) 
It is possible to style HTML elements that have specific attributes or attribute values.
The [attribute] selector is used to select elements with a specified attribute.
a[target="_blank"] {
  background-color: yellow;
}

==>https://www.w3schools.com/css/css_attribute_selectors.asp

*/}


  <div>
    
   

  </div>
  </>
  )
};
export default SelectorPractice;
