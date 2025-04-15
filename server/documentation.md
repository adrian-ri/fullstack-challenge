# Adrian Rivera docs- Backend

I ended up creating a postman to make sure all the endpoints worked befor I connected to them from the frontend. The table data should still be there but if not the postman requests can be used to add any data before using the application. 
[Postman link](https://purpleinnovationllc.postman.co/workspace/My-Workspace~5f3a4c46-7752-4ef8-882b-932fda24ffc9/collection/23841261-93397643-5949-4f4f-af28-8512799b73d9?action=share&creator=23841261)

# decisions made
- I did not have enough time to do this but I was going to have a selector to switch between orginizations. I had The data but ran out of time on for the ui.
- I decided to go with Mateterial-UI because its the component library that I am most familar with and I really like the built out components.
- I decided to spend equal time on the backend and the frontend and ended up needing more time for the front end so that ended up being a bad thing. 
- I decided to seperate everything out into their own folders for API,Components and Views. I figured this structure would support scaling as more views and components are built out.

# Assumptions 
- The biggest assumption I made was that there was only going to be one organization and one account tied to a deal. 
- I also assumed that you would want to seperate deals out even if they were between the same orginization and account.

# If I had more time
- I would make the orginization_id and the account_id forign keys on the deals so that you could easly access the names when displaying data. 
- I would create a theme file and fine tune the components so that eveything actually looks good.
- I would create tests across the board.
- I would finish out the filtering by creating a filter component that would allow you to select the status or year and then filter the dealArray to match the filter based on what was selected.(We had all the data already so there would be no need to call the api again.)

# Feedback 

- Seemed like a lot to takle in 4 hours but I did have some little hiccups here and there that probably set me back on time.
- I Love the challange deffenitly more applicible than leetcode challanges.

