![](src/images/homemade.jpg)

# Home Made

## React Contentful Headless CMS Blog Project.

### Project

Create a blog using React 18 and Contentful headless CMS.

Focus in this project was:

1. Learn to implement React 18 functional components.
2. React Router Dom v6 routing.
3. Research and setup Contentful content models.
4. Access the Contentful API to create a blog.
5. Learn about React hooks.
6. Practice and learn ES6 array methods and syntax.

### Content models and fields.

- **Blog Post model**

  - Image (Media)
  - Title (Short text)
  - Slug ( Short text)
  - Description (Long text)
  - Post Body (Long Text)
  - Publish Date (Date & Time)
  - Post Author (Reference)

- **Author model**
  - Author Name (Short text)
  - Author Introduction (Long text)
  - Author Bio (Long text)
  - Author Image (Media)

Within the blog posts, tags were created for each article.

### Added NPM Dependencies

- classnames: ^2.3.1
- contentful: ^9.1.33
- framer-motion: ^7.0.0
- markdown-to-jsx: ^7.1.7
- node-sass: ^7.0.1
- normalize.css: ^8.0.1
- react-icons: ^4.4.0
- react-router-dom: ^6.3.0

### Styling

I used node-sass (SCSS) for the entire project, together with classnames and css modules. As a learning experience, my goal was
to complete the project without using a css framework such as Bootstrap or Material UI.

Media queries have been added to make the site responsive accross a variety of screens from desktops to mobile. Overall
I'm happy with the outcome, although it is far from complete. I plan to refine the navbar to include a toggle button and
offcanvas mobile menu.

Learning the required syntax to implement SCSS, css modules, in React 18 was a steep learning curve. I still have a lot to learn
to make the most of all Sass has to offer. Overall, it does make writing CSS easier as it cuts duplication.
