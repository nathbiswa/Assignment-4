# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## Answer no.1 
(i) (getElementById) - getElementByID can catch id element in html.(note: id is uniqe - smae name two not allow ) ;

(ii)  (getElementsByClassName) - getElementsByClassName can catch class name element in html. same class name can have out of one;

(iii) (querySelector)- querySelector can catch one single id / class name element. catch rule id = # sign and class = . sign ;

(iV) (querySelectorAll)- querySelectorAll can catch all element for example:  tag names, classes, IDs, attributes ;



# 2. How do you create and insert a new element into the DOM? 
<!-- isert is confuse word for me-->
## Answer no.2 

  Create element rules with DOM - let div = document.createElement('div');
                                  div.className = "card flex justify-between shadow p-8";
                                   div.innerHTML = <div>
         <p class="company md:text-4xl text-xl">I am love my country</p>
        <p class="position"> I am a Progaming Hero Student </p>
           </div>



# 3. What is Event Bubbling? And how does it work?

# AnsWer no. 3
    Bubling: Bubbling is a Document tree design :
    For Example: Start point ->  Window > document <html> <body> <table> <tr>
    Two part here - 1. Capturing part and 2. Bunnling part;


# 4. What is Event Delegation in JavaScript? Why is it useful?
# AnsWer no. 4
 Event Delegation is catch node. For Example: node.childNode.childNode / node.parentNode.parentNode:
 
# 5. What is the difference between preventDefault() and stopPropagation() methods?
# AnsWer no. 5
## difference between preventDefault() and stopPropagation() methods:

preventDefault() = This disables the element's default browser action.

stopPropagation() = This stops event bubbling or capturing.



