# 💰 Account Operations App

A simple React + Redux application that allows users to manage their bank account by depositing, withdrawing, and requesting loans. 🏦🚀

## 📋 Table of Contents

- [📖 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Installation](#-installation)
- [🚀 Usage](#-usage)
- [📁 Code Structure](#-code-structure)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

## 📖 Overview

The **Account Operations App** enables users to perform essential banking transactions such as:  
✔️ Depositing money in different currencies 💵💶💷  
✔️ Withdrawing money 💳  
✔️ Requesting a loan with a specified purpose 🏦  
✔️ Paying off an existing loan ✅

Built with **React** ⚛️ and **Redux**, this app efficiently manages state and simulates banking functionalities.

## ✨ Features

- **💰 Deposit Funds:** Add money in multiple currencies (USD, EUR, GBP).
- **🏧 Withdraw Money:** Withdraw any amount from your balance.
- **🏦 Request Loan:** Take a loan by specifying an amount and a purpose.
- **✅ Pay Loan:** If you have an active loan, you can pay it off.
- **🚀 Optimized State Management:** Uses Redux  for efficient state handling.

## 🛠️ Installation

### ✅ Prerequisites

- Node.js (v14 or higher) 🖥️
- npm or Yarn 📦

### 📥 Steps to Install

1️⃣ Clone the repository:
   ```bash
   git clone <repository-url>
   cd account-operations-app
   ```  

2️⃣ Install dependencies:
   ```bash
   npm install
   ```
Or, if using Yarn:
   ```bash
   yarn install
   ```

3️⃣ Start the application:
   ```bash
   npm start
   ```
Or with Yarn:
   ```bash
   yarn start
   ```

4️⃣ Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 🚀 Usage

- **Deposit Money:**
    - Enter an amount in the deposit input field.
    - Select a currency from the dropdown.
    - Click the **Deposit** button to add money to your account.

- **Withdraw Money:**
    - Enter an amount in the withdrawal input field.
    - Click the **Withdraw** button to deduct money from your balance.

- **Request a Loan:**
    - Enter the loan amount.
    - Specify the loan purpose.
    - Click **Request Loan** to receive the requested amount.

- **Pay Loan:**
    - If you have an outstanding loan, a **Pay Loan** button will be displayed.
    - Click it to clear your debt.

## 📁 Code Structure

```
redux-intro/
├── public/ 🌍  # Static assets
├── src/ 📜  # Source code
│   ├── features/ 🚀  # Application features
│   │   ├── accounts/ 💰  # Account-related components
│   │   │   ├── AccountOperations.js 🏦  # Handles deposits, withdrawals, and loans
│   │   │   ├── accountSlice.js 🔄  # Redux slice for account state
│   │   │   ├── BalanceDisplay.js 📊  # Displays account balance
│   │   ├── customers/ 🧑‍💼  # Customer-related components
│   │   │   ├── customerSlice.js 🔄  # Redux slice for customer state
│   │   │   ├── CreateCustomer.js 🆕  # Handles customer creation
│   │   │   ├── Customer.js 🏷️  # Displays customer details
│   ├── store.js 🏪  # Main Redux store configuration
│   ├── store-v1.js 🏪 (Legacy)  # Older version of Redux store
│   ├── App.js ⚛️  # Main application component
│   ├── index.js 🏁  # Entry point for React
│   ├── index.css 🎨  # Global styles
├── .gitignore 📄  # Git ignore rules
├── package.json 📦  # Project dependencies and scripts
├── package-lock.json 🔒  # Lock file for package versions
├── README.md 📘  # Project documentation
```

## 🤝 Contributing

Contributions are welcome! 🎉 If you'd like to improve the project:

1. **Fork** the repository 🍴.
2. **Create a new branch** (`git checkout -b feature-branch`) 🌿.
3. **Make your changes** and commit (`git commit -m "Add feature"`) ✍️.
4. **Push to your branch** (`git push origin feature-branch`) 📤.
5. **Open a pull request** 🙌.

Please follow best practices when contributing! 🚀

## 📜 License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it! 🎁

---
💡 **Happy Coding!** 💻🚀  

