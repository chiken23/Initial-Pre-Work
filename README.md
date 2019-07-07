# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The first step of the process is to check if said website is in the cache. If it is the browser decodes the cache info and renders it on screen. If it is not in the cache the browser makes a request for the IP address. The OS then makes a DNS lookup and sends the IP address to the browser. The browser then makes a HTTP request through a TCP connection. Once it receives the HTTP response it checks for conditional responses, authorization requests, 404 error etc., responds to them accordingly and caches the data if possible. Then it is rendered on screen.
Delightful explanation on yahoo answers used to write this paragraph.  

## From start to finish, how does data reach you to be rendered in the browser?

Your computer makes a request for the server IP address by using a DNS lookup. Using the IP address it receives a HTTP response. Using the response it renders the correct items on screen, html page, images etc.

## What code is rendered in the browser?

A web browser may use html, css and/or javascript.

## What is the server-side code’s main function?

The main function, from what I gleaned,  is to interact with permanent storage, ie databases or files.
## What is the client-side code’s main function?

The main function of client-side code is to interact with the server-side databases and render them correctly on screen.

## What is runtime?

Run time is like action mode. It is a series of code that is usable while the program is running on a computer.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

Ideally 2, one .js format and one .css format.
* not sure on this one but from about 45 minutes of googling I believe this is the correct answer.

## How many instances of the server-side code are available at any given time?

It seems to depend on the sever.
* not sure but that is what google leads me to believe.

## How many instances of the databases connected to the server application are created?

A server can have many instances. each instance of the server can have multiple databases and each database can be used by multiple users. so i suppose if you are entering fresh information and the server has to create a new instance only one instance would be created and it would be able to access multiple databases.
* again belief by google
