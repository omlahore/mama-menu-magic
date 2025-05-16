
import { useState, useEffect, useRef } from "react";
import MenuTabs from "./MenuTabs";
import MenuGrid from "./MenuGrid";
import { menuItems, menuCategories } from "../data/menuData";

const MenuBoard = () => {
  const [activeCategory, setActiveCategory] = useState("breakfast");
  const [specialItem, setSpecialItem] = useState(menuItems[0]);
  const autoRotateTimerRef = useRef<NodeJS.Timeout | null>(null);
  const specialTimerRef = useRef<NodeJS.Timeout | null>(null);
  const userInteractionRef = useRef(false);

  // Auto-rotate categories every 20 seconds if no user interaction
  useEffect(() => {
    const startAutoRotate = () => {
      if (autoRotateTimerRef.current) {
        clearTimeout(autoRotateTimerRef.current);
      }
      
      autoRotateTimerRef.current = setTimeout(() => {
        if (!userInteractionRef.current) {
          const currentIndex = menuCategories.findIndex(cat => cat.id === activeCategory);
          const nextIndex = (currentIndex + 1) % menuCategories.length;
          setActiveCategory(menuCategories[nextIndex].id);
        }
        userInteractionRef.current = false;
      }, 20000); // 20 seconds
    };

    startAutoRotate();

    // User interaction event listeners
    const handleUserInteraction = () => {
      userInteractionRef.current = true;
      startAutoRotate();
    };

    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);
    window.addEventListener('mousemove', handleUserInteraction);

    return () => {
      if (autoRotateTimerRef.current) {
        clearTimeout(autoRotateTimerRef.current);
      }
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('mousemove', handleUserInteraction);
    };
  }, [activeCategory]);

  // Change special item every 60 seconds
  useEffect(() => {
    const rotateSpecial = () => {
      const randomIndex = Math.floor(Math.random() * menuItems.length);
      setSpecialItem(menuItems[randomIndex]);
    };

    rotateSpecial(); // Set initial special
    specialTimerRef.current = setInterval(rotateSpecial, 60000); // Every minute

    return () => {
      if (specialTimerRef.current) {
        clearInterval(specialTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-mama-background to-mama-secondary/20">
      <header className="py-6 bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl text-mama-accent text-center font-playfair">
            Mama's Kitchen
          </h1>
          <p className="text-center text-mama-text/80 mt-2 font-lato">Digital Menu Board</p>
          
          {/* "Special of the Moment" Marquee */}
          <div className="mt-3 py-2 bg-mama-highlight/20 rounded-lg overflow-hidden">
            <div className="flex items-center justify-center animate-slide-in">
              <span className="font-semibold mr-2">Today's Special:</span> 
              <span className="text-mama-primary font-semibold">{specialItem.name}</span> - 
              <span className="ml-2 italic text-sm">{specialItem.price}</span>
            </div>
          </div>
        </div>
      </header>
      
      <div className="py-6">
        <MenuTabs
          activeCategory={activeCategory}
          setActiveCategory={(category) => {
            userInteractionRef.current = true;
            setActiveCategory(category);
          }}
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
