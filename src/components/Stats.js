export default function Stats({ items }) {
   const numItems = items.length;
   const numForPercentage = items.filter((item) => item.finished).length;
   const percentage = Math.round((numForPercentage / numItems) * 100);
   const numFinished = items.filter((item) => !item.finished).length;

   return (
      <div className="flex flex-col items-center justify-center gap-10 pt-12 pb-6 bg-primary-600 sm:pt-8 sm:gap-4 sm:pb-5">
         <span className="text-2xl italic sm:text-center sm:text-base sm:h-12 sm:w-11/12 sm:leading-[1.35rem] text-[#aaabb2]">
            {numItems
               ? `${
                    numFinished
                       ? `Your set includes ${numItems} ${
                            numItems === 1 ? 'exercise' : 'exercises'
                         };
                       there ${
                          numItems === 1 || numFinished === 1 ? 'is' : 'are'
                       } ${numFinished} left to finish your training! (${percentage}%)`
                       : 'You finished your workout!'
                 }`
               : `Keep track of your training stats here!`}
         </span>

         <div className="h-[1px] bg-gradient-to-l w-2/6 from-primary-600 via-primary-400 to-primary-600 sm:w-11/12"></div>

         <span className="text-primary-300">
            Workout icon is created by <em>monkik - </em>
            <a
               className="border-b-[1px] border-primary-300 hover:border-transparent transition outline-shadow"
               href="https://www.flaticon.com/free-icons/workout"
               rel="noreferrer"
               target="_blank"
            >
               Flaticon
            </a>
         </span>
      </div>
   );
}
