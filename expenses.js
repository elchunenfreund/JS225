class Expense {
  #id;
  #amount;
  #date;
  #category;

  constructor(id, amount, date, category) {
  let parsedDate;
  if (typeof date === 'string') {
    parsedDate = new Date(date);
  } else if (date instanceof Date) {
    parsedDate = new Date(date.getTime());
  } else {
    throw new TypeError('The "date" must be a valid Date string or Date object.');
  }

  if (isNaN(parsedDate.getTime())) {
    throw new TypeError('The "date" is invalid.');
  }
  
  parsedDate.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (parsedDate > today) {
    throw new Error('Expense date cannot be in the future.');
  }

  if (typeof amount !== 'number' || amount <= 0) {
    throw new TypeError('Amount must be a positive number.');
  }
  
  const trimmedCategory = category.trim();
  if (typeof category !== 'string' || trimmedCategory.length === 0) {
    throw new TypeError('Category must be a non-empty string.');
  }

  this.#id = id;
  this.#amount = amount;
  this.#date = parsedDate;
  this.#category = trimmedCategory.toLowerCase(); 
  
  Object.freeze(this);
}

  get id() { return this.#id; }
  get amount() { return this.#amount; }
  get date() { return new Date(this.#date.getTime()) }; // Defensive copy
  get category() { return this.#category; }
}

class ExpenseManager {
  #expenses = [];
  #allowedCategories = ['food', 'housing', 'transportation', 'entertainment', 'health']; // Normalized to lowercase
  #nextId = 1; // 2. ID Generation

  constructor() {
    this.#allowedCategories = this.#allowedCategories.map(c => c.toLowerCase());
  }

  newExpense(amount, date, category) {
    const normalizedCategory = category.trim().toLowerCase(); // Normalize input

    if (!this.#allowedCategories.includes(normalizedCategory)) {
      throw new Error(`Category "${category}" is not on the approved list. Allowed categories are: ${this.#allowedCategories.join(', ')}.`);
    }

    const id = this.#nextId++;
    const newExpense = new Expense(id, amount, date, normalizedCategory);
    this.#expenses.push(newExpense);
  };

  addCategory(category) {
    const trimmedCategory = category.trim();
    if (typeof category !== 'string' || trimmedCategory.length === 0) {
      throw new TypeError('Category must be a non-empty string.');
    }
    
    const normalizedCategory = trimmedCategory.toLowerCase();

    if (!this.#allowedCategories.includes(normalizedCategory)) {
        this.#allowedCategories.push(normalizedCategory);
    }
  }

  get categories() {
    return this.#allowedCategories.slice(); // Defensive copy
  }

  get expenses() {
    return this.#expenses.slice(); // Defensive copy
  }

  summary() {
    if (this.#expenses.length === 0) {
      return { totalSpent: 0, count: 0, averageAmount: 0 };
    }
    
    const totalSpent = this.#expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const count = this.#expenses.length;
    const averageAmount = totalSpent / count;

    return {
      totalSpent: totalSpent,
      count: count,
      averageAmount: averageAmount
    };
  }

  deleteExpense(id) {
    const targetId = Number(id);
    this.#expenses = this.#expenses.filter((expense) => expense.id !== targetId);
  }

  findByCategory(category) {
    const normalizedCategory = category.trim().toLowerCase();
    let result = this.#expenses.filter((expense) => expense.category === normalizedCategory);
    return result.slice(); // Defensive copy
  }

  findByDateRange(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      throw new TypeError('Date range inputs must be valid date strings or Date objects.');
    }

    let result = this.#expenses.filter((expense) => {
      return expense.date.getTime() >= startDate.getTime() && 
             expense.date.getTime() <= endDate.getTime();
    })
    return result.slice();
  }
}

class BudgetExpenseManager extends ExpenseManager {
  #maxBudget;

  constructor(budget) {
    super(); 

    if (typeof budget !== 'number' || budget <= 0) {
      throw new TypeError('Budget must be a positive number.');
    }
    this.#maxBudget = budget;
  }

  #getTotalSpent() {
    return super.summary().totalSpent; 
  }

  newExpense(amount, date, category) { 
    const currentSpent = this.#getTotalSpent();
    const newTotal = currentSpent + amount;

    if (newTotal > this.#maxBudget) {
      const remaining = this.#maxBudget - currentSpent;
      throw new Error(`Adding this expense would exceed the budget. Remaining budget: ${remaining.toFixed(2)}.`);
    }
    
    super.newExpense(amount, date, category);
  }

  remainingBudget() {
    return this.#maxBudget - this.#getTotalSpent();
  }

  summary() {
    const standardSummary = super.summary();
    
    return {
      ...standardSummary,
      maxBudget: this.#maxBudget,
      budgetUsed: standardSummary.totalSpent,
      budgetRemaining: this.remainingBudget()
    };
  }
}