
import { useState } from "react";
import MenuTabs from "./MenuTabs";
import MenuGrid from "./MenuGrid";
import { menuItems } from "../data/menuData";

const MenuBoard = () => {
  const [activeCategory, setActiveCategory] = useState("breakfast");

  return (
    <div className="min-h-screen bg-mama-background">
      <header className="py-6 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl text-mama-accent text-center">
            Mama's Kitchen
          </h1>
          <p className="text-center text-mama-text/80 mt-2">Digital Menu Board</p>
        </div>
      </header>
      
      <div className="py-6">
        <MenuTabs
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        
        <MenuGrid 
          items={menuItems} 
          category={activeCategory} 
        />
      </div>
      
      <footer className="py-6 mt-8 border-t border-mama-secondary">
        <div className="container mx-auto px-4">
          <p className="text-center text-mama-text/70 text-sm">
            &copy; {new Date().getFullYear()} Mama's Kitchen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MenuBoard;
