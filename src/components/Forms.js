import React from 'react';

const Forms = () => {
  const Selectbk = [{
    value: '', label: 'category', disabled: true, selected: true,
  },
  { value: 'action', label: 'action' }];
  return (
    <form className="inputfield">
      <input type="text" placeholder="Book title" />
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
