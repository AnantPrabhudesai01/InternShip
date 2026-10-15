# useState — Learning Notes (SpendLog + Minis)

## Interview line (say this)
State lives in App because list, search, filter need same data. Form draft lives in form (object state) and lifts via onAdd. Filtered/sorted/total are derived, not state, to avoid sync bugs. I use updater + spread for immutable array add/remove, stable id keys, controlled inputs, guard validation with early return.

## Concepts used
- useState: array (expenses, todos), string (search, name), boolean (show), object (form draft), number (count)
- Snapshot per render, setter batches, updater `prev => next` for fast clicks
- Derived: filtered, sorted `[...filtered].sort`, total `reduce` — never useState
- Immutable: `[...prev, x]`, `prev.filter(e => e.id !== id)`, `{...prev, [name]: value}`
- Controlled: `value + onChange`, `e.preventDefault`, `trim`, `Number`
- Keys: `key={e.id}` stable, not index (delete/sort safe)
- Guards: empty title, amount<=0, missing date + early `return` + red error

## Files
- src/App.jsx: expenses, search, category, sortKey, handleAdd, handleDelete, filtered, sorted, total
- src/components/ExpenseForm.jsx: form object, handleChange, handleSubmit validation, onAdd lift
- src/data/seedExpenses.js: seedExpenses[3], categories
- src/components/Counter,Toggle,NameForm,TodoList: minis basics

## Bugs I fixed (muscle memory)
1. input vs inputValue name mismatch -> Add dead
2. seedExpense vs seedExpenses export s -> blank + console error
3. Title vs title key -> validation always fails
4. onChange vs onSubmit on form -> Add never fires
5. styles vs style -> no styling
6. sort a/b reversed + missing default -> wrong order
7. select outside App -> category not defined

## Manual test (must pass)
- +1/-1/Reset works, Show/Hide works, live name works, Todo Add works
- SpendLog 870 total, search bus->1, category Food filters, high/low/oldest/newest orders, Add Momo 200 -> 4 items 1070, Delete removes, empty shows message
