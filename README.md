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
Describe what data the project takes in.  
Explain where the input comes from and how the user provides it.

Example:  
- Username from input field  
- Password from input field  

### Output
Describe what output the project produces after receiving an input.

Example:  
- Displays login success message  
- Redirects to dashboard  

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
2. 

---

## Troubleshooting

Use a simple troubleshooting mindset.

Ask yourself:  
- What should happen right now  
- What is actually happening  
- Test one assumption at a time  

### Problems
List specific problems you faced.

1.  
2.  
3.  

### Solutions
Explain how you solved each problem.

1.  
2.  
3.  

---

## Reflection
Reflect on what you learned, what worked well, and what you would do differently.  
Include lessons about problem solving and debugging.

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












