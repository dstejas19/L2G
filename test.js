const https = require('https');
const octokit = require('@octokit/rest');
const { resolve } = require('path');
const axios = require('axios');

const checkGithubRepo = async () => {
  let data;

  try {
    data = await axios.get(
      'https://github.com/dstejas19/LeetCode-Solutions-test'
    );
  } catch (error) {
    if (error.response.status === 404) {
      const user = new octokit.Octokit({
        auth: '86dcf1ad86fe6065c5c272959ae1e29bb0e22062',
      });

      try {
        const { data } = await user.request('/user');

        user.repos.createForAuthenticatedUser({
          name: 'LeetCode-Solutions-test',
          description: 'LeetCode-Solutions-test',
        });
      } catch (err) {
        throw new Error(err);
      }
    }

    return;
  }

  console.log('done');

  return;
};

// const fu = async () => {
console.log(1);
console.log(2);
console.log(3);
checkGithubRepo();
console.log(4);
console.log(5);
console.log(6);
// };

// fu();
