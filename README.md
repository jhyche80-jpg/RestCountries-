# REST Countries API with Color Theme Switcher

## Table of Contents
1. [Overview](#overview)  
   1. [Features](#features)  
2. [Problem](#problem)  
   1. [Goal Breakdown](#goal-breakdown)  
   2. [Questions and Answers](#questions-and-answers)  
   3. [Input](#input)  
   4. [Output](#output)  
   5. [Step by Step Plan](#step-by-step-plan)  
3. [Build Steps](#build-steps)  
4. [Troubleshooting](#troubleshooting)  
   1. [Problems](#problems)  
   2. [Solutions](#solutions)  
5. [Reflection](#reflection)  
6. [References](#references)  
   1. [Programs Used](#programs-used)  
   2. [Websites Used](#websites-used)  

---

## Overview
Develop an application that fetches data from the REST Countries API , displays country information, and includes a color theme switcher for light and dark modes.
### Features
- See all countries from the API on the homepage
- Search for a country using an input field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Bonus: Toggle the color scheme between light and dark mode


---

## Problem


### Goal Breakdown

- Countries 

- → Calling an api (function API Fetch)
- → Store the information (context)
- → Show the information in a list for the main page ( figure out how to display the information in a colum of 4 and in rows)
- → filter by category 
- → Show infromation based on the specific country clicked on another page
- → Search for a specific country and have it show the information on the change 

### Questions and Answers
List important questions and answers that helped guide the build.
1. How will I get the Border countries ?
  - I can use the sub-regions and render a list by listing all the countries in that sube reigion 
2. This api doesnt really display the flag here or a photo of the flag how will I get the photo?
- the easiest way to do it is using the website flagsapi.com 
ex 
```
<img src="https://flagsapi.com/:country_code/:style/:size.png">
// example 
<img src="https://flagsapi.com/BE/flat/64.png"> 

```
### Input
- Search term 
- category term 


### Output
- A list of countryies that could be looked up 

---

## Step by Step Plan
Plan before building.

1. Set up project folder  
2. set up types, context , util, providers and pages folders.   
3.  Make the conntext page and provider page 
5. Wrap browser router in main
6. Make the Routes in app
7. Fetch APi
8. Render List of countries and basic information 
9. create the page I will navigate to 
10. Render information based on what is looked up . 



---

## Build Steps
1. I created the types folder
2. I then went ahead and madde the componests I would use during the project such as the Display card for both the home page (how the countries would be viewes )and the countries deatail display as well . 
3. I made a context page adding  the theme mode change and the data that would be stored to it inside there
4. I then made a dataProvider page that was used to wrap App in the provider in order to provide context to the tree 
5. I made the utils page and made a function that would fetch the information i need using the Async and await function
6. I used the newly made function to render a list of the countries and their preview infor inside the component cart for them 
7. I then did the same for the countries detail page which was where the browser would navigate to after that I set up the navigation and also wrapped app inside the Browser router provider.
8. After that I added the the event  handling to the page managing button clicks like back or forward
9. I debugged and tried to find easier ways to do things
10. I added  filtering to the page so that the page will show the item that is either being looked up or  being filtered. 
11. I added styling and dark and light mode to the page 
   - I did this by maing a function that wouldd read what theme is currently ( theme was profided via a context provider wrapped around App)
12. I fixed my ReadMe 

---

## Troubleshooting

Use a simple troubleshooting mindset.

Ask yourself:  
- What should happen right now  
- What is actually happening  
- Test one assumption at a time  

### Problems
List specific problems you faced.

1.  Getting country names to render for the border coutries
      - whenever I tried to show the names of the border countries they would not render correctly (only showing te country code)
      - What should be happening?
         - Intl.Display names should show use the county code to show the name of the country 
      - what is actually happening 
         -When i set it to region the screen gores white due to a run time error 
      - There is an unforseen effect happening with th method i am using 
 
2. Search was not working 
   - What should be happening 
      - Every time I type something the search should pop ulate with results 
   - what is actually hapening 
      - Nothing is happening 
   - Thoughts?
      - Somewhere something is the search term isn not being used or considered  



### Solutions
Explain how you solved each problem.

1. Instead of continuing to use that function I decided to take the country odes and fetch their information in their  based off their fields and then take the name from the data fetched and map through there and display all the names that way   

2.  I was correct The search term was not being used correctly so I added in code to make the search term and the filter term display and populate on change bassed on which one it is.  

---

## Reflection
did this project to challenge myself and try to learn something new. I felt that I needed more practice with React Router. During this project, I gained a better understanding of how to use params, navigate to a specific page, and render the correct information on that page.

Problem solving and finding solutions to problems is starting to make more sense to me, since there are a lot of different ways to do things. If the first approach doesn’t work, I’ve learned that I can pivot and try another one. I experienced this when trying to get the flags and border countries to display correctly. One of the biggest challenges was figuring out how to structure the URL in order to get all the information I needed.

Overall, this project helped me better understand context providers and how much more useful they are compared to prop drilling.
---

## References

### Programs Used
- Browser Router 
- React 
- typescript 

### Websites Used
- HomePage Api = "https://restcountries.com/v3.1/all?fields=region,flag,population,name,capital,currency,lang,subregion"
- https://react.dev/learn/rendering-lists
- https://teamtreehouse.com/community/javascript-formatting-numbers-with-commas
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join












