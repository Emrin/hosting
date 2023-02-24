[![license](https://img.shields.io/badge/©️_License-MIT-yellow?style=flat)](./LICENSE.md)
[![](https://img.shields.io/badge/semver-2.0.0-informational)](https://semver.org)

# 👋 Welcome to the nBold Hosting documentation repository

## ABSTRACT
This repository hosts the contents of the [nBold Hosting](https://hosting.nbold.co) website.

## 🚀 CONTRIBUTE

### Run locally

```sh
# Clone this repo
git clone https://github.com/nboldhq/hosting.git
# Install dependencies
npm install
# Start local server
npm run start
```

### CI/CD
Deployment is automated by the [cicd](./.github/workflows/cicd.yml) GitHub Action:
1. Checkout the `main` branch when a push is detected
2. Build the static assets using the [Docusaurus](https://docusaurus.io) `build` command and commit changes
3. Push changes to the `published` branch
4. The website is deployed to GitHub pages

## 🆘 Support
See [SUPPORT](./SUPPORT.md)

## 📝 Contributing
See [CONTRIBUTING](./CONTRIBUTING.md)

## 🛂 Code of Conduct
See [CODE OF CONDUCT](./CODE_OF_CONDUCT.md).

## 🔐 Security Policy
See [SECURITY](./SECURITY.md).

## © License
See [LICENSE](./LICENSE.md).
