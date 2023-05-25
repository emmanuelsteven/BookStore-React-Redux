import React from 'react';

const Forms = () => {
  const Selectbk = [{
    value: '', label: 'category', disabled: true, selected: true,
  },
  { value: 'Action', label: 'Action' },
  { value: 'Documentary', label: 'Documentary' },
  { value: 'History', label: 'History' },
  { value: 'Science', label: 'Science' },
  { value: 'Medicine', label: 'Medicine' },
  ];
  return (
    <form className="inputfield">
      <input type="text" placeholder="Book title" required id="title" name="title" />
      <select name="category" id="category">
        {Selectbk.map((category) => (
          <option
            key={category.value}
            value={category.value}
            disabled={category.disabled}
            selected={category.selected}
          >
            {category.label}
          </option>
        ))}
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default Forms;
