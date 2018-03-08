Clap, Clap


Problem statement:

It is oftentimes difficult and stressful to try and pick music at any point—one can be unsure what kind of “mood” they’re in at the moment, and what kind of music they want to listen to. Having something that will handle that for you would save time in thinking of what to listen to.

How do you solve the problem?:

Have a program to do it for you! Specifically, as the “seed”, it can take in the weather, and optionally your schedule, and play music based on associated factors. For example, if its raining, it might play slower, more somber acoustic music. Or, if it is 10 minutes until a big exam, it might play upbeat “hype” music. Or, if it is a large block of free time, it might play music based on current trends.

List of all the features:

We are going to use data collected from weather api as the default mood (e.g. sunny -- happy tune, rainy -- sad song)
User can associate specific mood/song with certain events that overwrite the default mood
Eventually we go to spotify, find a song corresponding to the mood, and play the song

What data will your prototype be using and collecting?

Spotify api
Weather api
Google calendar api
Optional user override tag (“happy”).

Any algorithms or special techniques:

Figuring out what the mood of a certain song is 
Finding what song is appropriate for each class and weather
Assigning a mood to each class
Using the Spotify API to find songs corresponding to the mood. 
Rechecking and gathering data at the end of every song—listener to see when song has ended, and loop to regather the requisite data. 
