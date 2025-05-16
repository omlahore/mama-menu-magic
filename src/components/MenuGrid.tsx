
import { useState, useEffect } from "react";
import { MenuItem } from "../data/menuData";
import MenuCard from "./MenuCard";

interface MenuGridProps {
  items: MenuItem[];
  category: string;
}

const MenuGrid = ({ items, category }: MenuGridProps) => {
  const [displayItems, setDisplayItems] = useState<MenuItem[]>([]);

  // Filter items by category and update display with animation
  useEffect(() => {
    setDisplayItems([]);
    
    const timer = setTimeout(() => {
      setDisplayItems(items.filter(item => item.category === category));
    }, 100);
    
    return () => clearTimeout(timer);
  }, [category, items]);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map((item, index) => (
          <MenuCard key={item.id} item={item} index={index} />
        ))}
      </div>
      
      {displayItems.length === 0 && category !== 'breakfast' && (
        <div className="text-center py-12">
          <p className="text-xl text-mama-text/70 italic">
            Menu items coming soon...
          </p>
        </div>
      )}
    </div>
  );
};

export default MenuGrid;
