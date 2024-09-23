import { useState } from 'react';

export default function Form({ onAddItem }) {
   const [reps, setReps] = useState(1);
   const [exercise, setExercise] = useState('');

   function handleSubmit(e) {
      e.preventDefault();

      if (!exercise) return;

      const itemData = {
         reps,
         exercise,
         finished: false,
         id: Date.now(),
      };

      onAddItem(itemData);

      // - Reset state
      setReps(1);
      setExercise('');
   }

   return (
      <form
         className="flex items-center justify-center gap-8 py-8 bg-primary-500 sm:gap-4 sm:py-4 sm:px-4"
         onSubmit={handleSubmit}
      >
         <div className="flex items-center gap-3">
            <span className="text-xl sm:text-lg">Reps:</span>
            <select
               className="px-4 py-2 rounded-full cursor-pointer bg-secondary-200 text-secondary-600 sm:px-0 sm:pl-3 outline-shadow"
               value={reps}
               onChange={(e) => setReps(+e.target.value)}
            >
               {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                  <option value={num} key={num}>
                     {num}
                  </option>
               ))}
            </select>
         </div>

         <input
            className="p-2 px-4 rounded-full bg-secondary-200 text-secondary-600 placeholder:text-secondary-600 sm:w-3/4 outline-shadow"
            type="text"
            placeholder="Exercise..."
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
         />

         <span className="text-xl pointer-events-none text-secondary-300">
            |
         </span>

         <button
            className="px-5 py-2 text-base font-semibold transition rounded-full text-tertiary-700 bg-tertiary-400 hover:bg-tertiary-200 outline-shadow"
            style={{ fontFamily: 'Bruno Ace SC' }}
         >
            ADD
         </button>
      </form>
   );
}
