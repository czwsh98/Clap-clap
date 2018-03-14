Simon Chen, Jared Hwang, Tania Valrani, Juliet Yue
Group Project Proposal and Design Document
COMP20 Ming Chow
March 9, 2018


# Clap, Clap


Problem statement:
--------------------

It is oftentimes difficult and stressful to try and pick music at any point—one can be unsure what kind of “mood” they’re in at the moment, and what kind of music they want to listen to. Having something that will handle that for you would save time in thinking of what to listen to.

How do you solve the problem?
-------------------------------
Have a program to do it for you! Specifically, as the “seed”, it can take in the weather, and optionally a future event, and play music based on associated factors. For example, if its raining, it might play slower, more somber acoustic music. Or, if it is 10 minutes until a big exam, it might want to play upbeat “hype” music.

List of all the features :
-------------------------------

* We are going to use data collected from weather api as the default mood (e.g. sunny -- happy tune, rainy -- sad song)
* Eventually we go to spotify, find a song corresponding to the mood, and play the song 
* User can also put in a mood and a duration to override the current app’s playlist—it will play say, “happy” for say an “hour.”
* User can also schedule future events, and dictate what music should play then. For example, a user might schedule “somber” for March 10th 2018, for two hours, and add a description for themselves that says “annual brooding.” This event note will appear on the page.

What data will your prototype be using and collecting?
--------------------------------------------------------------
* Spotify api
* Weather api
* Optional user override tag (“happy”).
* Optional user event schedule, user input. 

Any algorithms or special techniques:
----------------------------------------

* Figuring out what the mood of a certain song is via spotify
* Finding what song is appropriate for each class and weather
* Assigning a mood to each class
* Using the Spotify API to find songs corresponding to the mood. 
* Rechecking and gathering data at the end of every song—listener to see when song has ended, and loop to regather the requisite data. 

Electronic Mockup:
--------------------
![Electronic Mockup Diagram](/Mockup.png "Wireframe mockup")

# Comments by Ming
* Excellent. Please proceed
* If I recall correctly, this was the semester project theme for spring 2017
* I've seen a team do this before
