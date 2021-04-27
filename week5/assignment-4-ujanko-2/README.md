# Hello and welcome to IT338

Before starting on the assignment make sure that you have Git installed
on your machine and that you have a GitHub Account.
For more information about the git commands, look at the course website.

# For full credit you must:

- Create index.html and index.js files, add vue and bootstrap.
- Create a component that will take an array of images and display them, must be required.
- Your image-gallery component should look something like [this](https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp).
- It must be responsive (look at [css media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) for reference):
  - Mobile 1 column
  - Tablet 2 columns 
  - Desktop 4 columns
- Every image should have a button in the top right corner that will emit a delete event ([custom events](https://vuejs.org/v2/guide/components-custom-events.html)).
- The parent should listen for the delete event, and have a method that will remove the image once it is triggered. *Hint: You need to pass something that will identify the image.*
- Add a slot to the component that will be a placeholder for the title html, the text/content that will show up before the gallery.

For the purposes of this assignment we will use the following definitions: 
- Mobile: screens where the width is smaller than 600px
- Tablet: screens where the width is bigger than 600px and smaller 960px
- Desktop: screens where the width is wider than 960px

# For committing your work:

- Add all the files with the commands discussed in class.
- Create a commit with a meaningful message.
- Push your changes to GitHub

# For Extra credit (2 points):

- Add a window resize event, that will look at the size of the users screen and reduce the fond size for the slot based on:
    - Mobile: 14px
    - Tablet: 18px
    - Desktop: 22px

