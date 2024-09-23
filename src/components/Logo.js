export default function Logo() {
   return (
      <>
         <div className="flex items-center justify-center w-full gap-2 py-6 bg-primary-500">
            <LogoH1>Workout</LogoH1>
            <img
               className="h-20 mr-[0.3rem] invert opacity-35 sm:h-14"
               src={require('../img/logo.png')}
               alt="Logo"
            />
            <LogoH1>Planner</LogoH1>
         </div>
         <div className="h-[1px] bg-gradient-to-r from-primary-500 via-primary-300 to-primary-500"></div>
      </>
   );
}

function LogoH1({ children }) {
   return (
      <h1
         className="text-4xl font-medium text-secondary-300 sm:text-2xl"
         style={{ fontFamily: 'Bruno Ace SC' }}
      >
         {children}
      </h1>
   );
}
