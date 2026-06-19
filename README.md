# Project Title
Website Development_ Sureroll (PTY)LTD

## Student Information
- Name: Phumzile Clementine Shabalala 
- Course: WEDE5020
- Student Number: ST10503068


## Project Overview
This project involves the design and development of a simple website using HTML. The website is intended to provide information about business services such as payroll, accounting, and financial management. It is structured to be user-friendly, informative, and easy to navigate.

## Features
- Home Page 
- Contact form
- About page
- Services Page
- Blog Page
- Simple navigation links

## Key Features and Functionality
- Home page with navigation links  
- About Us section  
- Contact page for user inquiries  
- Blog or information pages 

## Website Sitemap
- `index.html` - Homepage with hero image, introduction, services overview, and call-to-action links.
- `about.html` - Company background, approach, mission, promise, and business focus.
- `services.html` - Dynamic services listing with search and sort functionality.
- `blog.html` - Business finance articles presented with expandable content sections.
- `enquiry.html` - Service enquiry form with validation and quote estimate response.
- `contact.html` - General contact form, business address, and embedded map.
- `contactus.html` - Redirect page for older contact links.

## Timeline and Milestones
- Phase 1: Planning and design  
- Phase 2: HTML structure development  
- Phase 3: Content creation and page linking  
- Phase 4: Testing and review  
- Phase 5: Final submission  

## Part 1 Details
Part 1 of this project focuses on creating the basic structure of the website using HTML only. This includes:
- Setting up the homepage  
- Creating navigation links  
- Building initial content pages  
- Ensuring proper layout and structure 

## Part 2 Details: CSS Styling and Responsive Design

Part 2 of this project focuses on improving the visual design of the website using an external CSS stylesheet and responsive design techniques. The website uses one shared stylesheet, `css/style.css`, which is linked to all five HTML pages.

The following improvements were made for Part 2:
- A consistent blue and grey colour scheme was applied across the website.
- Typography styles were added for headings, body text, buttons, and navigation links.
- CSS Grid and Flexbox were used to create structured desktop layouts.
- Reusable CSS classes were created for headers, navigation, hero sections, service cards, forms, buttons, and footers.
- Responsive breakpoints were added for tablet and mobile screen sizes.
- Images were made responsive using flexible sizing, `srcset`, and `sizes` attributes.
- The logo was updated to a larger blue version to match the website theme.
- The website was tested on desktop, tablet, and mobile screen sizes.

## Part 3 Details: JavaScript Functionality and SEO

Part 3 of this project focuses on improving website functionality using JavaScript and applying search engine optimisation best practices.

The following improvements were made for Part 3:
- Added an external JavaScript file, `js/script.js`, and linked it to the website pages.
- Added dynamic service cards on the Services page using JavaScript data.
- Added search and sort functionality so users can filter services by keyword and order them by name or estimated cost.
- Added client-side form validation for required fields, email addresses, phone numbers, number inputs, and message length.
- Added a dedicated `enquiry.html` page for service quote requests.
- Added a dedicated `contact.html` page for general contact messages.
- Added JavaScript response messages to guide users when forms are valid or incomplete.
- Added a quote estimate response on the enquiry form based on selected service and number of employees.
- Added asynchronous form processing before preparing the email message.
- Added lightbox image previews so users can click page images to view them larger.
- Added simple scroll reveal animations using JavaScript and CSS.
- Added page-specific animations on the Home page hero section and Services page service cards.
- Added an About page image gallery that opens larger image previews in the lightbox.
- Added SEO title tags, meta descriptions, keywords, canonical links, descriptive alt text, internal links, `robots.txt`, and `sitemap.xml`.
- Kept the old `contactus.html` page as a redirect to the new `contact.html` page.
## Recent Changes

The following updates were made to improve the Sureroll website for Part 2 and Part 3:

- Updated all five website pages with a consistent blue and grey design.
- Added an external stylesheet, `css/style.css`, and linked it to every HTML page.
- Moved the stylesheet into the `css` folder to keep the project files organized.
- Added Part 3 JavaScript functionality, SEO metadata, `robots.txt`, `sitemap.xml`, and dedicated enquiry/contact form pages.
- Improved the homepage, about page, services page, blog page, and contact page layouts.
- Added responsive layouts using CSS Grid, Flexbox, relative units, and media queries.
- Added responsive image support using `srcset` and `sizes` attributes.
- Added desktop, tablet, and mobile testing screenshots in the `img` folder.
- Updated the README with Part 2 details, responsive testing evidence, and CSS references.
- Added a completed `CHANGELOG.md` file to record project updates.
- Replaced the original logo display with a larger blue logo to match the website theme.
- Fixed the About page image so the full picture displays correctly.
- Fixed the Contact page HTML structure and improved the contact and quote forms.

More detailed project changes are recorded in `CHANGELOG.md`.

## Part 3 Submission Check

The website was reviewed again before submission to confirm that the Part 3 requirements are included:
- All HTML pages link to the external JavaScript file, `js/script.js`.
- The Services page uses JavaScript to display dynamic service cards.
- The Services page includes search and sort tools for filtering services.
- The Contact and Enquiry pages include client-side JavaScript validation.
- The Enquiry page displays a quote estimate based on selected service and number of employees.
- The forms use asynchronous JavaScript processing before preparing the email message.
- Website images and the About page gallery support clickable lightbox previews.
- Scroll reveal animations are applied to cards and panels.
- The Home page and Services page include visible CSS animations.
- Each HTML page includes SEO title tags, meta descriptions, canonical links, and descriptive alt text.
- `robots.txt` and `sitemap.xml` are included for search engine indexing guidance.
- The older `contactus.html` page redirects users to the updated `contact.html` page.
- Local links, image references, stylesheet references, and script references were checked.

## Deployment

The website is prepared for deployment on GitHub Pages. The canonical website URL used in the page metadata is:
https://phumzile77.github.io/sureroll/

The project should be pushed to the private GitHub repository provided for WEDE5020 and the repository link should be submitted on the LMS as required by the POE.
## Changelog

Project changes are recorded in the separate `CHANGELOG.md` file. The changelog includes entries for the original website structure, feedback-related improvements, CSS styling updates, responsive design updates, and fixed issues.
## Responsive Design Testing

The website was tested using browser developer tools to check how it displays on desktop, tablet, and mobile screen sizes.

### Devices Tested

| Device Type | Screen Size | Result |
|---|---:|---|
| Desktop | 1366 x 768 | Layout displays in multiple columns with full navigation visible. |
| Tablet | 768 x 1024 | Content adjusts and sections stack neatly where needed. |
| Mobile | 390 x 844 | Layout changes to a single-column structure and images resize correctly. |

### Screenshot Evidence

#### Desktop View
![Desktop screenshot](img/desktop-test.png)

#### Tablet View
![Tablet screenshot](img/tablet-test.png)

#### Mobile View
![Mobile screenshot](img/mobile-test.png)

### Testing Summary

During testing, the layout, navigation, images, service cards, and contact forms were checked on different screen sizes. The website was updated to use responsive CSS, media queries, flexible grids, relative units, and responsive images so that users can view the website clearly on desktop, tablet, and mobile devices.
## References

MDN Web Docs (n.d.) *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 19 April 2026).

W3Schools (n.d.) *HTML Tutorial*. Available at: https://www.w3schools.com/html/ (Accessed: 19 April 2026).

Afrihost (n.d.) Afrihost website. Available at: https://www.afrihost.com/ (Accessed: 9 
April 2026).  

Nathaniel Seloane (2026) Interview on company operations and website requirements. 
Personal communication, 9 April. 

Color Hunt (n.d.) Color palettes for design inspiration. Available at: https://colorhunt.co/ 
(Accessed: 9 April 2026). 

Freepik (n.d.) Free design resources and images. Available at: https://www.freepik.com/ 
(Accessed: 9 April 2026). 

Google Fonts (n.d.) Free font library. Available at: https://fonts.google.com/ (Accessed: 9 
April 2026). 

South African Revenue Service (2026) Tax compliance and business requirements. Available at: https://www.sars.gov.za
 (Accessed: 22 April 2026).

Investopedia (2026) Accounting and payroll definitions. Available at: https://www.investopedia.com
 (Accessed: 22 April 2026).

Small Enterprise Development Agency (2026) Small business support services. Available at: https://www.seda.org.za
 (Accessed: 22 April 2026).
MDN Web Docs (n.d.) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 28 May 2026).

MDN Web Docs (n.d.) *Responsive design*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design (Accessed: 28 May 2026).

MDN Web Docs (n.d.) *Using media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries (Accessed: 28 May 2026).

W3Schools (n.d.) *CSS Tutorial*. Available at: https://www.w3schools.com/css/ (Accessed: 28 May 2026).
MDN Web Docs (n.d.) *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 28 May 2026).

MDN Web Docs (n.d.) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 28 May 2026).

Google Search Central (n.d.) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 28 May 2026).

Google Search Central (n.d.) *Build and submit a sitemap*. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap (Accessed: 28 May 2026).


