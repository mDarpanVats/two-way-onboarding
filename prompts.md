Create a fullstack app (nextjs, tailwind CSS, ShadCN UI, and strongly-types typescript) with 2025 best prectices and versions, and following functionalities:

1. In the backend the app consumes OpenAI API and create env files to app API keys.
2. In the frontend part of the app I want a "userTour" component that has a. steps and text content, b. search input, c. next and previous step, d. close the whole tour.
3. the "userTour" component renders around the targeted element and with shadow effect(backdrop) to rest on the page.
4. A sample home page with navbar some links, header and footer, so that I can use user tour component as some sort of overlay.
5. During the tour the targated/selected element should not have the backdrop, rather a 2px blue border. Rest of the page should have backdrop shadow and is clickable to cancel the tour.
6. when the user input some text in the searchInput (when the length of input is more than 2 characters), the userTour component makes the request to OpenAI api in backend with chat complition call. In the api call systemMessage is hardcoded string and body.message is the search input from userTour component. messages: [
   { role: "system", content: systemMessage },
   { role: "user", content: body.message },
   ]
7. add a send button on the right side of search input in tourbox which makes the api call enabled when the searchTerm.length > 2
