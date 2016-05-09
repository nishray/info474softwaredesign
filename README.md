# Nishant Velagapudi
# info474 coding assignment 3

##Introduction
This module allows you to create word clouds using d3. Please note that this requires
D3 and also d3.layout.cloud.js (which can be taken from https://jardindesconnaissances.googlecode.com/svn-history/r82/trunk/public/js/d3.layout.cloud.js.

More common words have a default color of red. Less common words have a default color of black. More common words are larger. You can modify cloud height, width, pick colors for most and least often occurring words, and adjust
the scale of the words created (more often occurring words are larger by definition).

Input text needs to be in the format of a simple string: words separated by spaces. Special characters are cleaned.

##Functions

The following functions are exposed to the user:

**Word Cloud Width**
Set the width of the word cloud. Note that setting a width wider than containing element
will result in missing words.

**Word Cloud Height**
Set the height of word cloud. Note that setting a height greater than containing element
results in missing words.

**Word Cloud Word Occurence Coloring: Max Color**
Set the color of the most often occurring word in the cloud. Max color and min color establish gradient bounding points.

**Word Cloud Word Occurence Coloring: Min Color**
Set the color of the least often occurring word in the cloud.

**Word Cloud Word Scale**
Set the relative size of words all words. Note that this needs to be adjusted to tune with the number of words and size of the word cloud to optimize readability.

**Word Cloud Margin**
Set the margin from the container given to the beginning of the word cloud. Use if there are any elements surrounding the word cloud to avoid obscuring them.



