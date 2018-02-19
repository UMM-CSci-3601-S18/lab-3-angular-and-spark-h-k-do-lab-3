1. The .gitignore files are in the root directory, the client directory, and the server directory.
It seems there could be multiple git ignores to manage the server and client components of the project independently.
This would allow for different rules to apply to these different components.

2. There is a client-side and server-side build.gradle. There is a third build.gradle that runs both. This is because the client and server both have to be automated.

3. The navbar is an html file that angular uses. The html has a path to different pages, which is how it's used to navigate.
No. There is an app.routes.ts in the client directory. So, there is some routing work done on the client side.

4. user-list.component.ts imports user.list-service.ts. -service contains functions for getting a list of users and a user by id.
It's kept separate because a service is loaded when the page is loaded, and kept. In contrast, a component is only loaded when it's being viewed on the page. So, if the logic was done in user-list.component.ts, it wouldn't be available unless we we're on the page.

Chose to use angular filtering for the majority of categories because it reduced the number of queries to the server.
Chose to use server side filtering for ID's because it implied the user knew what they were looking for, which meant there would typically only be one query to the server.

In addition to this, choosing server side filtering for ID's simplified the process of implementing its functionality.
This is because it already had a pre-built function to query the server with, which meant not altering our pre-existing function or writing a new one, while at the same time allowing us to not have to guess at what the API routes were.
Though we did try to implement others (which can be seen as commented out sections of ghost code in todo-list.service.ts). We decided against this, however, because it conflicted with assumptions about the getTodos() function that were used for making all of our tests.
If we were to abandon the hours spent testing, the code could be quickly implemented by adding a new button in the html that ran the getTodos() function. Then altering the getTodos() function to take the "status" argument, as well as giving it the argument where it is called in todo-list.component.
This can be further expanded by providing it more arguments, and providing a modular way of generating the URL.
