import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/categories";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const transactionsPerType = transactions.filter(
    (title) => title.type === title
  );
  const total = transactionsPerType.reduce(
    (accumulator, currentValue) => (accumulator += currentValue.amount),0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories;
    console.log({transactionsPerType, total, categories})
};

