STATUS REPORT 1:
===================

(1) What was accomplished during the week?

This week we figured out how to use the Spotify API, embed the Spotify player onto the web page, how to get recommendations using the Spotify API, accepting user input, and trying to make the weather API look better on the page.

(2) What were the challenges and issues the team faced during the week?

We were having a lot of problems trying to embed and SDK player on the page so the user could listen to a whole songs. We spent a lot of time trying to find alternatives like using the SoundCloud API, or trying to work around this through Spotify but we eventually settled on 30 second clips of recommended songs since it's hard to listen to whole songs because of copyright, and SoundCloud does not have to as large of a variety to make recommendations as Spotify does.

(3) What are your goals for the next week?

Do the CSS for the web page. Create a server and connect it to a database. Link user input to getting recommendations. Figure out how to do authorized Spotify API request.

Comments by Ming:
====================
"but we eventually settled on 30 second clips of recommended songs since it's hard to listen to whole songs because of copyrigh" => yeah, that's perfect.

STATUS REPORT 2:
==================
(1) What was accomplished during the week?

Reorganized our design and how the pieces of our project interact with each other. We changed it so we create a server a la assignment 3 that we are planning to have send pack a Spotify URI when we POST a mood. This will be used in conjunction with our application where we will submit a post request to the server to GET Spotify playlist. We also weather API words to words to query into the database.

(2) What were the challenges and issues the team faced during the week?

Trying to figure out how to consolidate user input into the database and changing what is displayed on the page ergo the redesign.

(3) What are your goals for the next week?

Implement the server, fill the server, implement the page. Essentially doing assignment 2 and 3 again.

STATUS REPORT 3:
===================
(1) What was accomplished during the week?

Built the server and linked it with spotify playlists according to weather and mood. Gathered data from form on the HTML page. Starting design on the CSS page.

(2) What were the challenges and issues the team faced during the week?

Server request is not always going through, more than one person need to work on the same file and since we all work on the master branch, it is sometimes annoying with git.

(3) What are your goals for the next week?

Fix the bug and finish off styling -- Wrapping up the project.

# Comments by Ming
* "Server request is not always going through" => why is that?  What are the errors?  
