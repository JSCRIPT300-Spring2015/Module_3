## Module_3: Assignment

For this assignment, you're going to for this repository to your own Github account and clone that repository locally. Inside the repo you'll find a directory called server. Inside that directory you'll find three placeholder files: server.js, enhancedDate.js, and trucks.js. 

1. In enhancedDate.js, use the code you wrote for the Module_2 assignment to export a node module that supports the same methods it did in your original module. Refer to how Node modules are defined. You won't be using the immediately invoked function execution syntax nor will you be using the return keyword.
2. In trucks.js, you'll find an array of food-truck objects. Each object has a name, a food type, and a schedule of days the food truck is available. Using this data, export another node module with a single method: __filterByDay(day)__ where the "day" parameter is the name of a day of the week. Use the underscore library in that module to [filter](http://underscorejs.org/#filter) the list of trucks by the day name passed in to __filterByDay()__.
3. In server.js, you're going to build an http server. The server should listen for request events, and handle them by writing to the response the following message:

"Today is **day name**, **month name** **date**. The food trucks available are :"

Follow this with a list of food trucks obtained by calling __filterByDay()__. Calling that function will return an array of objects. You'll want to loop through that object, getting the name of each truck and adding it to a string that you'll build up. Because you'll just be outputting text, add the newline character to the end of each food-truck name: '\n' (e.g. truckString += trucks[i].name + '\n'; ). Once you're done looping through the list, write the string to the response stream, then close the stream. Again, refer to the existing code we looked at for how you write a simple http server in Node.
4. Add a package.json file to your project directory, and include any dependencies necessary for this (hint: you're using underscore in trucks.js). You can use the command: npm init to create the file for you, and it will ask you some questions about what should go in the file. The only thing you should actually worry about is the name for now. Everything else you can hit 'enter' or 'return' and take the default values.
