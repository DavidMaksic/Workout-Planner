import Logo from './Logo';
import Form from './Form';
import ExerciseList from './ExerciseList';
import Sort from './Sort';
import Stats from './Stats';
import { useState } from 'react';

export default function App() {
   const [items, setItems] = useState([]);

   // - Sorting logic
   const [sortBy, setSortBy] = useState('input');

   let sortedItems;
   if (sortBy === 'input') sortedItems = items;

   if (sortBy === 'finished')
      sortedItems = items
         .slice()
         .sort((a, b) => Number(!a.finished) - Number(!b.finished));

   if (sortBy === 'a/z')
      sortedItems = items
         .slice()
         .sort((a, b) => a.exercise.localeCompare(b.exercise));

   if (sortBy === 'z/a')
      sortedItems = items
         .slice()
         .sort((a, b) => b.exercise.localeCompare(a.exercise));

   // - Adding, deleting and updating items logic
   function handleAddItem(item) {
      setItems((items) => [...items, item]);
   }

   function handleDeleteItem(id) {
      setItems((items) => items.filter((item) => item.id !== id));
   }

   function handleUpdateItem(id) {
      setItems((items) =>
         items.map((item) =>
            item.id === id ? { ...item, finished: !item.finished } : item
         )
      );
   }

   function handleClearList() {
      setItems([]);
   }

   return (
      <div className="grid h-screen grid-rows-layout text-primary-200 sm:text-sm selection:bg-primary-300 selection:text-white">
         <Logo />
         <Form onAddItem={handleAddItem} />
         <ExerciseList
            onDeleteItem={handleDeleteItem}
            onUpdateItem={handleUpdateItem}
            sortedItems={sortedItems}
         />
         <Sort
            onClearList={handleClearList}
            sortBy={sortBy}
            onSortBy={setSortBy}
         />
         <Stats items={items} />
      </div>
   );
}
