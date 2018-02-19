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
