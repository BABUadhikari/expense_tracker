## Expense Tracker

Welcome to the Expense Tracker application! This project is designed to help users keep track of their income and expenses, providing a clear view of their financial situation.

### Features

- Add new income and expense transactions
- Delete existing transactions
- View the balance, total income, and total expenses
- Real-time updates
- User-friendly interface

### Technologies Used

- **Frontend:**
  - React
  - Tailwind CSS

### Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git@github.com:BABUadhikari/expense_tracker.git
   cd expense-tracker
   ```

2. **Install the dependencies:**

   ```sh
   npm install
   ```

3. **Start the frontend:**

   ```sh
   npm start
   ```

### Usage

1. **Home Page:**
   - View your current balance.
   - See a summary of your income and expenses.

2. **Add Transaction:**
   - Add a new transaction by specifying the text and amount.
   - Choose whether it's an income or expense.

3. **Delete Transaction:**
   - Remove transactions that you no longer want to track.

### Code Structure

- **Frontend:**
  - `src/components/`: Contains the React components.
  - `src/context/`: Contains the GlobalContext for state management.
  - `src/App.js`: Main app component.

### Example Transactions

Here is a sample of what the transaction data structure looks like:

```javascript
const transactions = [
  { id: 1, text: 'Salary', amount: 5000 },
  { id: 2, text: 'Groceries', amount: -200 },
  { id: 3, text: 'Electricity Bill', amount: -150 },
  { id: 4, text: 'Freelance Work', amount: 800 },
  { id: 5, text: 'Dining Out', amount: -60 }
];
```

### Contact

If you have any questions or suggestions, please feel free to open an issue or contact me.

---

Thank you for using the Expense Tracker application! Happy tracking!

---

This README provides a comprehensive guide to the Expense Tracker project, detailing its features, technologies, installation steps, usage instructions, and more. If you have any specific requirements or additional information you'd like to include, feel free to let me know!
