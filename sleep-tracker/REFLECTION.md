Describe how your application fetches sleep data from the backend. Identify the screen and the hook or function where the fetch logic is implemented.

1. My Sleep Tracker application uses the useEffect hook and the fetch() function to retrieve sleep data from the backend. The fetching logic is implemented in sleep-list.tsx on the Sleep Log List screen and also in statistics.tsx on the Sleep Statistics screen. The data is stored using useState, and the screens display loading or error messages when needed.

Explain how you handled form validation on the **Sleep Log Entry** screen. Which component or file contains the validation logic and how does the user receive feedback when the form is submitted?

2. I implemented form validation in the handleSubmit() function inside sleep-log.tsx. The function checks whether any fields are empty and whether the date and time formats are correct. If the information is invalid, the user receives an error message such as "Please fill in all fields." If the information is valid, the application displays "Sleep entry submitted successfully!" and clears all the input fields.

Describe how sleep entries are rendered dynamically in either the **Sleep Log List** screen or the **Sleep Statistics** screen. Which state variables and components are involved?

3. In the Sleep Log List screen, I used the entries state variable with useState to store the sleep records retrieved from the backend. I used the .map() function to display each sleep entry inside a View component with Text components showing the date, bedtime, wake time, and sleep quality. This allows the list to update automatically when the fetched data changes.

Describe one challenge you encountered while implementing state management, data fetching, or statistics calculations. Explain how you resolved the issue.

4. One challenge I encountered was getting the Sleep Log Entry form to display the correct validation and success messages. I accidentally had two message displays in sleep-log.tsx and used an isError variable that was not defined, which caused errors. I resolved the problem by removing the duplicate message display and using setMessage() with one conditional Text component to show feedback.

Choose one commit from your Git history that represents meaningful progress in this assignment. Include the commit message and explain what was implemented in that commit.

5. One meaningful commit from my Git history was d2052a9, with the message **"feat: add sleep log form validation and reset"**. In this commit, I updated the sleep-log.tsx file to validate required fields and check the date and time formats before accepting a submission. I also added feedback messages and made the form automatically clear after a successful submission.
