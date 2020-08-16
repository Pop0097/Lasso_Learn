# LassoLearn

A revolutionary platform for users to connect in one-on-one discussions to teach and/or learn new skills! Built using React JS and Firebase.
View project demo: https://www.youtube.com/watch?time_continue=117&v=TE_L7q1bBag&feature=emb_title

# Deploying the Project

1. Download and extract the zip file of this repository.
2. cd to the repository.
3. Type `cd yeehaw` and run `npm install` to download all required dependencies. 
4. Type `npm start` after the dependencies have downloaded and enjoy :))

NOTE: For the time being I have added "SKIP_PREFLIGHT_CHECK=true" to the .env file becuase there was an issue between react-scripts and webpack that I could not resolve. I will look into it at a later date.

# Contributors

This project was made for YeeHaw hacks in August 2020. 

Contributors (Link to their GitHubs):
- [Rahul Aggarwal](https://github.com/RahulAggarwal1016)
- [Sophie Liu](https://github.com/midnightingale)
- [Dhruv Rawat](https://github.com/Pop0097) (Owner of Repository)

# Hackathon Fields

## Inspiration

We all have a set of unique skills that we want to share and acquire. Regardless, it is difficult to engage in one on one discussions – especially during quarantine – to facilitate teaching and learning. This has especially disadvantaged many of our group members, who found it difficult to learn school subjects after we could not have one-on-one conversations with our teachers. With online schooling continuing in Ontario in the 2020-21 school year, this problem will continue to hinder the learning with more students. 

## What it does

LassoLearn is a platform for users to engage in one-on-one discussions to teach and learn new skills. When a user creates an account on LassoLearn, they can select the topics that they would like to teach (this is referred to as “Ransom”) or learn (this is referred to as “Seeking”). To learn about a topic, users can search that topic using the search bar and find other users who they can talk to. Likewise, others can contact the user to learn from them. All contact is done through the LassoLearn instant messaging service. 

## How we built it

We built this app using React in order to develop the front-end client side of LassoLearn as well as Firebase to create, read, update, authenticate and edit user accounts. We used Firestore to store each unique user (authentication managed by Firebase Auth API) and enable our application’s various real-time chat rooms. Lastly, we used the React Context API to create a global state instance and avoid prop-drilling. 

The primary dependencies we used are as follows: react-router-dom, materialUI, bootstrap, styled-components, Firebase tools etc. 

## Challenges we ran into

Our group members had very little experience using Firebase and some had almost no experience with React. As a result, it was difficult to implement both technologies into our project. To familiarize ourselves with these tools, we invested time in learning the basics of Firebase and React. We found [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg) to be a very helpful resource. 

Another challenge we faced was optimization. Due to our lack of experience, the structure of our query requests drastically impacted the performance of our application, resulting in slow loading times and frequent server disconnects. Nonetheless, our willingness to reference related videos on youtube, scavenge Stack Overflow and reach out to mentors helped us along the way. 

Finally, making an instant messaging service was incredibly difficult. Making the website connect to Firebase fast enough to ensure real-time updates was difficult and required a lot of optimization on our part. Consulting videos and persevering on Rahul’s part helped overcome this. 

## Accomplishments that we're proud of

We are proud to have created a web application and have learned the fundamentals of React and Firebase in such a short period of time. Furthermore, we are thrilled to have created an instant messaging service that updates in real-time!

## What we learned

We learned the fundamentals of React i.e. JSX syntax, class & functional components, state management, component life-cycle hooks, routing, props etc. Similarly, we learned how to connect Firebase to a web application, create database queries, setup Firestore, manage documents etc. 

## What's next for LassoLearn

In the future, we would like to bring LassoLearn to iOS and Android. In addition, we would also like to create new ways to teach/learn such as blogs, videos, video chat, and more!
