<div align="center">
  

  <h1 align="center">suggested algorithms for specified challenge in codewar</h1>

</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <a href="#challenges">Challenges</a>
    <ul>
      <li><a href="#detect-pangram">Detect Pangram</a></li>
    </ul>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#installation">Installation</a></li>
  </ol>
</details>
<br/>

<div id="challenges"></div>

### challenges


<div id="detect-pangram"></div>

1. **Detect Pangram**

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

2. **Square Number**

Given an integral number, determine if it's a square number:

3. **Equal Sides Of An Array**

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

4. **Find the missing letter**

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

5. **odd or even letter**

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

6. **spin words**

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

7. **Help the bookseller!**

A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

For example an extract of a stocklist could be:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

M = {"A", "B", "C", "W"} 
or
M = ["A", "B", "C", "W"] or ...
and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):

(A : 20) - (B : 114) - (C : 50) - (W : 0)
where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).

### Built With

<div id="built-with"></div>

these challenges solved using 

- [Typescript](https://styled-components.com/)

### Installation

<div id="installation"></div>

1. Clone the repo

   ```sh
   git clone git@github.com:itshosein/typescript-codewar-challenges.git
   ```

2. Install NPM packages
   ```sh
   npm install
   ```
3. build the project

   ```sh
   npm run build
   ```
4. run the main script

   ```sh
   npm start
   ```

