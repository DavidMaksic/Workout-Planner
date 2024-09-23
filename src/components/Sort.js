export default function Sort({ onClearList, sortBy, onSortBy }) {
   return (
      <div className="flex items-center justify-center py-6 gap-9 bg-primary-500 sm:py-4">
         <div className="flex items-center gap-3">
            <span className="text-2x">Sort by:</span>
            <select
               className="p-2 px-4 font-medium rounded-full cursor-pointer bg-secondary-200 text-secondary-600 outline-shadow"
               value={sortBy}
               onChange={(e) => onSortBy(e.target.value)}
            >
               <option value="input">Latest</option>
               <option value="finished">Finished</option>
               <option value="a/z">A/Z</option>
               <option value="z/a">Z/A</option>
            </select>
         </div>

         <button
            className="p-2 px-4 font-medium rounded-full bg-[#D9B1AE] text-secondary-600 hover:bg-[#e4c8c6] transition outline-shadow"
            onClick={onClearList}
         >
            Clear input
         </button>
      </div>
   );
}
