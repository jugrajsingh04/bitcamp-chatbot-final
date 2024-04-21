# 🤖 PocketBot Chrome Extension

Wish you had a reliable chatbot on every website? Enter PocketBot! With premier web scraping and large language models (LLMs), we bring accurate answers to your doorstep no matter what part of the web you find yourself in!

This repository contains the source code for the PocketBot Chrome Extension. This extension enables users to interact with a chatbot directly from their Chrome browser. Below are the instructions on how to set up and use the extension.

## 📋 Prerequisites

Before you install the extension, make sure you have the following prerequisites installed:

- **Node.js**: This extension requires Node.js to run the JavaScript code. Download and install Node.js from [nodejs.org](https://nodejs.org/).

- **npm (Node Package Manager)**: npm is installed with Node.js, which helps in managing the packages required by the JavaScript code.

## 🛠 Installation Instructions

Follow these steps to get the extension up and running:

### 1. Clone the Repository

First, you need to clone the repository to your local machine. Open your terminal and run the following command:

```bash
git clone https://github.com/jugrajsingh04/bitcamp-chatbot-final.git
```
### 2. Install Dependencies

Navigate to the cloned directory and install the necessary npm packages:
```bash
cd bitcamp-chatbot-final
npm install
```
### 3. Build the Extension

If the project requires a build step (e.g., using webpack or tsc), run the build command:

```bash
npm run build
```

This command should create a dist directory containing the build output, which can be loaded into Chrome.

### 4. Load the Extension into Chrome
To load the extension into Chrome, follow these steps:

* Open Chrome and go to the Extensions page by navigating to chrome://extensions/.
* Enable "Developer mode" at the top right of the page.
* Click on "Load unpacked" and select the dist directory from your cloned repository. If there is no dist directory, select the directory containing the manifest.json file.
## 🚀 Usage
After loading the extension, you should see the PocketBot Chatbot icon in your Chrome toolbar. Click on this icon to interact with the chatbot. Enter your queries, and the chatbot will respond accordingly.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit pull requests or create issues for bugs and feature requests.


