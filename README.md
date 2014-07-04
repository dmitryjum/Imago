# IMAGO

This is web based image editor with it's own image album for each user. User will be able to create an a account draw and new sketch and save it to his album or upload his own image file to edit.

##### Technologies I am using:
Back-end:

* Ruby on Rails based server
* MongoDB databse
* Mongoid ORM
* Carrierwave-mongoid gem
* AWS S3 storage for picture storage
 
Front-end:
* HTML5 CanvasElement
* CSS3
* Zurb Foundatoin Framework
* JavaScript
* jQuery

##### Pivotal Tracker link:
https://www.pivotaltracker.com/s/projects/1052448

###### ERD:
User has_many pictures<br>
Pictures belong_to user