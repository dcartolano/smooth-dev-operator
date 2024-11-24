# smooth-dev-operator

## Description

This goal of this app was to successfully deploy an already functioning app using working branches off of the main branch (develop and feature), and using GitHub actions, make sure that commits from feature into develop and develop into main both passed specific .yml tests before being allowed to be merged, and also would automatically deploy to Render when merging into the main branch, but only if the tests had passed. 

Through this project, I learned more about DevOps, the processes associated with it, and creating and implementing my own .yml files, as well as the proper process for using branches and approving merges.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To use this app, you will need to copy the SSH Key from the [GitHub Repository](https://github.com/dcartolano/smooth-dev-operator) and perform a git clone into a local directory of your choice. Open in VS Code or similar program. In the integrated terminal, run `npm i` to download all relevant node modules. 


## Usage

To view the deployed app, [click here](https://smooth-dev-operator.onrender.com/).

After making your own repository, you can deploy to Render as a web service. You'll want to use `npm run render-build` for the Build Command and `npm run start` for the Start Command, and set Auto-Deploy to `No`. You'll also need to enter an environment variable called `MONGODB_URI` with the value set to a Cluster connection string that you've created using MongoDB Atlas. 

Once deployed, copy the `Deploy hook` from the Render settings and add it as the value for a `Repository secret` in GitHub named `RENDER_DEPLOY_HOOK_URL`. 

After creating a `develop` branch from your `main` branch in your repo, also create a `feature` branch off of the `develop` branch. Create a small change in your `feature` branch and push it to `develop`, and then do the same for `develop` into `main`. You should then be able to add Branch protection rules under the Branches section of your GitHub repo settings. 

Use the following instructions for setting up the branch protection rules, which I grabbed from some of the EdX curriculum instructions. I think they describe these steps more succinctly and accurately than I would be able to if I tried to paraphrase them. 

* For the branch protections:

  * On `main` only: Check "Require a pull request before merging" with "Require approvals" unchecked.

  * For both: Check "Require status checks to pass before merging."

  * For both: Check "Do not allow bypassing the above settings."

  * For the `develop` branch, in the "Search for status checks in the last week for this repository" input, search for and add the `Checking Tests` action.

  * For the `main` branch, in the "Search for status checks in the last week for this repository" input, search for and add the `Deploy To Render` action.

  **Note**: The actions will not show up in the search unless they have run successfully at least once. The names we are searching for come from the value provided to the name key under the jobs key in the YAML files. The names are case-sensitive.


## Credits

Thanks to EdX and Northwestern for the starter code and the opportunity to practice these skills, and also for the branch protection rule instructions that I "borrowed" in the section above.

Thanks also to my instructor and the EdX tutors for all the help and clarifications along the way.

## License

n/a