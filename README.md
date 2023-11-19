Web Movie App

This is a file to describe the React App for Web App Development Class.
Owned by Jia Yang.
Student Number: 20104736.

#Functions:

1.People Page Development
Cards with famous people's image, name
Links to movies from people
Add Filter with gender
Designed docorations

2.Movie Page Extentions
New page of Top Rated Movies
Add Language Filter
Decorate Movie Details Page
Add functions to Top Rated Movies Page
New Decorations for filter card

3.TV Show Page Development
Create TV Show Page
To reduce code redundunt, reuse movie template
Add new filter logic to TV Page
Decorate the TV Page


#My development process is stated below:
The pictures cannot be loaded so I will include them in the vedio.

## 1.Add People Page 

After browsing through TMDB, I found that the current software lacks the introduction of movie stars, so I plan to make an interface to introduce famous people.

1. First, I tried to connect with TMDB to get the celebrity names

2. Second, I designed the UI of the page to put them into the PeopleCard component and loaded their photos to make this format.


3.Next, I think the design of this interface is too different from the previous ones, so I'm going to add the title at the top and adjust the formatting to make it display more comfortably.


4. I added the function of filter, so that users have the freedom to filter, categorized by gender, so that it is more convenient to find their favorite actor

Here is the link: https://www.themoviedb.org/person/27972-josh-hutcherson

And it worked！


5.Add a link to the people to connect to the movie screen and automatically jump to the details when you click on it

Worked！

Clicked the link and it has redirected to the movie detailed page.



## 2.Add Functions for Movies

1.Add Top Rated Page

https://www.themoviedb.org/movie/top-rated

Use the same template as before...

And it also have function to add in playlist.



2.Added filter for Languages

https://www.themoviedb.org/movie/top-rated



## 3.Add TV Shows Page

https://www.themoviedb.org/tv

Add an interface basically modeled after the movies format.

I encountered a problem with different TMDB identifiers along the way, but solved it by using a selective approach in order to maximize code reuse ability.

4.Design the interface UI to make it more concise and generous

Added box in detailed page.

#References:
TMDB Database:https://www.themoviedb.org
