 export const Footer = () => {
   return (
     <footer className="py-8 border-t border-border">
       <div className="container mx-auto px-6">
         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
               <span className="font-mono font-bold text-primary-foreground text-xs">&lt;/&gt;</span>
             </div>
            <span className="font-mono text-sm text-muted-foreground">Lin Thu</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Lin Thu. Built with React & TypeScript.
          </p>
           <div className="flex items-center gap-4">
             <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
               Back to top
             </a>
           </div>
         </div>
       </div>
     </footer>
   );
 };