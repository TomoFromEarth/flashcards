# To Run

Run `npm start` in the project root and the app will be available on port 3000.

# State

The app's state is totally normalized, with slices for topics, quizzes, and cards.

# Routes

- `/new-topic` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/new-quiz` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

# To Test

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over

# Questions

I would like to know from experienced Redux devs if this is a good solution? If there are better practices to be used here I would like to learn. Redux has been very challenging for me to grasp so any insight from folks with experience is greatly appreciated!

# Live Site

[Flashcards Live Site](http://tomofromearth-flashcards.surge.sh/)
