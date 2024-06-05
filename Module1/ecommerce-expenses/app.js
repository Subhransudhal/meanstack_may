document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expense-form');
    const expenseDescription = document.getElementById('expense-description');
    const expenseAmount = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');

    let expenses = [];

    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const description = expenseDescription.value.trim();
        const amount = parseFloat(expenseAmount.value.trim());

        if (description && amount) {
            const expense = {
                id: Date.now(),
                description: description,
                amount: amount
            };

            expenses.push(expense);
            addExpenseToDOM(expense);
            clearForm();
        } else {
            alert('Please enter valid description and amount');
        }
    });

    function addExpenseToDOM(expense) {
        const li = document.createElement('li');
        li.textContent = `${expense.description}: $${expense.amount.toFixed(2)}`;
        expenseList.appendChild(li);
    }

    function clearForm() {
        expenseDescription.value = '';
        expenseAmount.value = '';
    }
});
