Web Movie App

My development process is stated below:

## 1.Add People Page 

After browsing through TMDB, I found that the current software lacks the introduction of movie stars, so I plan to make an interface to introduce famous people.

![image-20231118210842733](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231118210842733.png)

1. First, I tried to connect with TMDB to get the celebrity names

2. Second, I designed the UI of the page to put them into the PeopleCard component and loaded their photos to make this format.

![image-20231118211038481](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231118211038481.png)

3.Next, I think the design of this interface is too different from the previous ones, so I'm going to add the title at the top and adjust the formatting to make it display more comfortably.

![image-20231118225450364](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231118225450364.png)



4. I added the function of filter, so that users have the freedom to filter, categorized by gender, so that it is more convenient to find their favorite actor

Here is the link: https://www.themoviedb.org/person/27972-josh-hutcherson

![image-20231118233819441](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231118233819441.png)

And it worked！

![image-20231118233855425](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231118233855425.png)

![image-20231118233919057](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231118233919057.png)



5.Add a link to the people to connect to the movie screen and automatically jump to the details when you click on it

Worked！

![image-20231118234649812](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231118234649812.png)

![image-20231118234718291](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231118234718291.png)

Clicked the link and it has redirected to the movie detailed page.



## 2.Add Functions for Movies

1.Add Top Rated Page

https://www.themoviedb.org/movie/top-rated

Use the same template as before...

![image-20231119003250966](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231119003250966.png)

And it also have function to add in playlist.



2.Added filter for Languages

https://www.themoviedb.org/movie/top-rated

![image-20231119012825340](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231119012825340.png)





## 3.Add TV Shows Page

https://www.themoviedb.org/tv

Add an interface basically modeled after the movies format.

I encountered a problem with different TMDB identifiers along the way, but solved it by using a selective approach in order to maximize code reuse ability.

![image-20231119022251530](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231119022251530.png)

![image-20231119022417919](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231119022417919.png)



4.Design the interface UI to make it more concise and generous

![image-20231119031825716](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231119031825716.png)

![image-20231119031853297](C:\Users\Yolanda Y\Desktop\md文件\Typora图片路径\image-20231119031853297.png)

Added box in detailed page.