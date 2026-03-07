# Welcome to your Expo app

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions
=======
- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

---

## Update Development Week 6
## Card1 Development Time Table

### Task                                         | Estimated Hours
### -------------------------------------------- | ---------------
### Initialize new Expo project                  | 0.5
### Create src/ and component folders            | 0.2
### Create Card1.js & Card1Styles.js skeleton    | 0.5
### Add Card1 component to App.js                | 0.3
### Test Card1 in Expo                           | 0.3
### Initialize Git & create branches             | 0.3
### Force push main to GitHub                    | 0.1
### Push feature/card-1 branch                   | 0.1
### Make tiny README change to allow Draft PR    | 0.1
### Open Draft Pull Request for Card1            | 0.2
### -------------------------------------------- | ---------------
### Total                                        | 2.6

## Assigned Issue(s) Update

## Link(s) to Issue(s): 
[https://github.com/SeattleColleges/NSC-Dev-Expo-Site/issues/23]

## Progress Summary:
Created the Card1 component skeleton with image, text, and buttons.
Set up src/components/Cards/Card1 folder structure and integrated the component into App.js for testing.
Prepared the branch for version control and collaboration.

## Key Learnings:
- Learned how to structure React Native components in a modular way.
- Practiced creating and managing branches in Git/GitHub.
- Learned how to create a Draft Pull Request and manage commit histories for collaboration.

## Additional Information:
- Project set up to allow future cards (Card2–Card5) to reuse the same folder/component structure.
- Minor README adjustments enabled Draft Pull Request workflow.

## Branch Link(s)

## feature/card-1 branch:
https://github.com/DennizGarza1234/card-components-project/tree/feature/card-1

## Draft Pull Request(s) Update

## Link(s) to Draft Pull Request(s):
[https://github.com/DennizGarza1234/card-components-project/pull/1#issue-4023478467]

## Progress Summary:
Draft PR created to track Card1 component development.
Includes component skeleton, basic layout with image, text, and buttons,
and initial integration into the Expo app.

## Key Learnings:
- Learned to use Draft Pull Requests to manage work in progress without merging immediately.
- Learned best practices for committing small incremental changes to support PR workflow.

## Additional Information:
- Future commits (styling, Figma design updates) will be pushed to this branch and automatically update the Draft PR.
- Ensures collaboration readiness and provides a reference for tracking weekly development hours.

---

## Update Development Week 7
### Navigate to your project root
cd /path/to/your/project  # change to your project folder

### Append Week 7 update to README.md
cat << 'EOF' >> README.md

## Card Component Development Time Table

### Task                                         | Estimated Hours
### -------------------------------------------- | ---------------
### Implement Card component feature             | 1.5
### Create feature/card-1 branch                 | 0.2
### Push branch to GitHub                         | 0.1
### Open Pull Request for Card component        | 0.2
### Update README.md and resolve merge conflicts | 0.5
### Review other PRs                              | 0.5
### -------------------------------------------- | ---------------
### Total                                        | 3.0

## Assigned Issue(s) Update

## Link(s) to Issue(s): 
[https://github.com/SeattleColleges/NSC-Dev-Expo-Site/issues/23]

## Progress Summary:
Implemented a reusable Card component with customizable title, description, and image slots.
Applied basic hover and click styling and responsive layout adjustments.
Created a feature branch, pushed to GitHub, and opened a Pull Request.
Merged the branch into main after reviewing and resolving README conflicts.

## Key Learnings:
- Learned to structure React components for modularity and reusability.
- Gained experience managing branches, pull requests, and merge conflicts.
- Improved understanding of documenting weekly development updates.

## Additional Information:
- Branch deleted after merge to keep repository clean.
- Project now ready for next week’s development tasks.

## Branch Link(s)

## feature/card-1 branch:
Was deleted so we only have the main branch:
[https://github.com/DennizGarza1234/card-components-project.git]

## Pull Request(s) Update

## Link(s) to Pull Request(s):
[https://github.com/DennizGarza1234/card-components-project/pull/2#issue-4025257378]

## Progress Summary:
Pull request included the Card component feature, README updates, and merge conflict resolution.
Successfully merged into main branch.

## Key Learnings:
- Learned to maintain clean commit history and clear PR descriptions.
- Gained experience with GitHub review workflows and collaboration practices.

## Additional Information:
- No blockers occurred during development.
- Collaboration and code review ensured feature quality and readiness.
EOF

# Stage the changes
git add README.md

# Commit the changes
git commit -m "Update README: Add Week 7 development summary"

# Push to GitHub
git push origin main

---

## Update Development Week 8
## Step 1: Make sure you are on the feature/search-profile branch
git checkout feature/search-profile

## Step 2: Open or create a markdown file for week 8 update (e.g., DEV_WEEK_08.md)
cat <<EOT > DEV_WEEK_08.md

## Search + Card1 Development Time Table

### Task                                         | Estimated Hours
### -------------------------------------------- | ---------------
### Create feature/search-profile branch         | 0.2
### Create src/components/Search folder          | 0.1
### Create SearchBar.js & SearchBarStyles.js     | 0.5
### Integrate Card1 component into App.js        | 0.5
### Set up sample card data & search filtering   | 0.5
### Test Search + Card functionality in Expo     | 0.5
### Push feature/search-profile branch           | 0.1
### Open Pull Request for Search + Card1        | 0.2
### -------------------------------------------- | ---------------
### Total                                        | 2.6

## Assigned Issue(s) Update

## Link(s) to Issue(s): 
[https://github.com/SeattleColleges/NSC-Dev-Expo-Site/issues/23]

## Progress Summary:
- Created SearchBar component for filtering cards.  
- Updated Card1 component integration in App.js.  
- Added sample card data representing “Belinda’s Closet” projects.  
- Connected SearchBar input to filter displayed cards dynamically.  
- Tested full functionality in Expo to ensure cards render and search works as expected.  

## Key Learnings:
- Learned how to connect component state to dynamic filtering.  
- Reinforced Expo component integration and folder structure organization.  
- Practiced creating feature branches and managing pull requests.  

## Additional Information:
- Setup allows future addition of more cards or other filtering criteria.  
- SearchBar and Card1 component are ready for future styling or enhancements.  

## Branch Link(s)

## feature/search-profile branch:
[https://github.com/DennizGarza1234/card-components-project/tree/feature/search-profile]

## Pull Request(s) Update

## Link(s) to Pull Request(s):
[https://github.com/DennizGarza1234/card-components-project/pull/3#issue-4025403048]

## Progress Summary:
- PR created to track development of Search + Card1 feature.  
- Includes all component files, sample card data, and search filtering functionality.  

## Key Learnings:
- Gained experience connecting multiple components with shared state.  
- Learned to manage feature branches and PR workflow effectively.  

## Additional Information:
- Future commits (styling, new cards, additional filters) will automatically update the PR.  
- Ready for review and eventual merge into main.
EOT

# Step 3: Stage the new README / DEV_WEEK_08.md
git add DEV_WEEK_08.md

# Step 4: Commit the update
git commit -m "Week 8: Add development update for Search + Card1 feature"

# Step 5: Push the changes to the feature branch
git push origin feature/search-profile

---

## Update Development Week 9
## Card & Search/Profile Development Time Table

### Task                                         | Estimated Hours
### -------------------------------------------- | ---------------
### Continue Card1 component styling             | 0.5
### Integrate Search component skeleton         | 0.5
### Integrate Profile component skeleton        | 0.5
### Connect Search results to Profile display   | 0.7
### Test Search & Profile components in Expo    | 0.5
### Update navigation & UI spacing              | 0.4
### Commit changes to feature/card-1            | 0.1
### Commit changes to feature/search-profile    | 0.2
### Push branches to GitHub                      | 0.1
### Open Pull Request for feature/search-profile| 0.2
### -------------------------------------------- | ---------------
### Total                                        | 3.7

## Assigned Issue(s) Update

## Link(s) to Issue(s): 
[https://github.com/SeattleColleges/NSC-Dev-Expo-Site/issues/23]

## Progress Summary:
- Updated Card1 component with refined layout and navigation spacing.
- Implemented Search component skeleton for user queries.
- Implemented Profile component skeleton for displaying user info.
- Connected Search results dynamically to Profile cards.
- Tested integration in Expo for both desktop and mobile layouts.
- Prepared branches for version control and collaboration.

## Key Learnings:
- Practiced connecting multiple components in React Native (Search → Profile → Card1).
- Learned to manage multiple feature branches simultaneously.
- Reinforced testing in Expo for real-time updates and responsiveness.

## Additional Information:
- Search and Profile components are modular for reuse in future features.
- Card1 enhancements maintain consistency with new components.
- Branch workflow ensures clear separation between UI, search logic, and profile logic.

## Branch Link(s)

## feature/card-1 branch:
[https://github.com/DennizGarza1234/card-components-project/tree/feature/card-1]

## feature/search-profile branch:
[https://github.com/DennizGarza1234/card-components-project/tree/feature/search-profile]

## Pull Request(s) Update

## Link(s) to Pull Request(s):
[https://github.com/DennizGarza1234/card-components-project/pull/4#issue-4039551681]

## Progress Summary:
- PR tracks development of Card1, Search, and Profile components.
- Includes updated layout, navigation spacing, and integration with Expo.
- Both branches are synchronized for collaborative development.

## Key Learnings:
- Learned to manage multiple branches and PRs effectively.
- Learned best practices for incremental commits to support PR workflow.
- Practiced linking components and testing interactions in Expo.

## Additional Information:
- Future updates (styling, component enhancements) will continue to push to these branches.
- PR provides a central reference for weekly development hours and collaboration readiness.
