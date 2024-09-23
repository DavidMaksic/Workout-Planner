export default function ExerciseList({
   onDeleteItem,
   onUpdateItem,
   sortedItems,
}) {
   return (
      <div className="flex items-center justify-center py-16 bg-primary-400 sm:py-12">
         <ul
            className={
               sortedItems.length > 3
                  ? 'grid grid-cols-3 gap-8 sm:grid-cols-1'
                  : 'flex gap-8 sm:grid sm:grid-cols-1'
            }
         >
            {sortedItems.length ? (
               sortedItems.map((item) => (
                  <Item
                     item={item}
                     key={item.id}
                     onDeleteItem={onDeleteItem}
                     onUpdateItem={onUpdateItem}
                  />
               ))
            ) : (
               <Message />
            )}
         </ul>
      </div>
   );
}

function Message() {
   return (
      <div className="flex items-center justify-center w-full h-28 rounded-3xl bg-primary-300 sm:w-3/4 sm:mx-auto sm:text-center">
         <span className="px-10 pb-1 text-2xl font-medium text-primary-500">
            Your workout list is empty!
         </span>
      </div>
   );
}

function Item({ item, onDeleteItem, onUpdateItem }) {
   return (
      <li className="relative flex items-center h-24 rounded-full w-96 bg-primary-600 text-primary-100 sm:w-72 sm:h-[4.5rem]">
         <div className="pl-12 text-xl uppercase text-primary-200 sm:pl-6">
            <span>Reps - {item.reps}</span>
         </div>

         <button
            className={`absolute right-0 w-[60%] h-full transition duration-300 rounded-full text-primary-600 outline-shadow hover:text-secondary-600 ${
               item.finished
                  ? 'bg-tertiary-500 translate-x-[-67%]'
                  : 'bg-redAlt-600'
            }`}
            onClick={() => onUpdateItem(item.id)}
         >
            <span className="text-2xl" style={{ fontFamily: 'Bruno Ace SC' }}>
               {item.exercise}
            </span>
         </button>

         <span
            className={`absolute right-[4.3rem] text-5xl text-tertiary-400 cursor-default transition-all duration-200 sm:right-12 ${
               item.finished ? 'active' : 'hide'
            }`}
         >
            &#10003;
         </span>

         <button
            onClick={() => onDeleteItem(item.id)}
            className="absolute top-[-8px] right-[-16px] text-3xl transition text-primary-600 hover:text-primary-300 outline-shadow focus:rounded-md"
         >
            &times;
         </button>
      </li>
   );
}
