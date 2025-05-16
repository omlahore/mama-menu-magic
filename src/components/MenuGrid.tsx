
import { useState, useEffect } from "react";
import { MenuItem } from "../data/menuData";
import MenuCard from "./MenuCard";
import { Skeleton } from "@/components/ui/skeleton";

interface MenuGridProps {
  items: MenuItem[];
  category: string;
}

const MenuGrid = ({ items, category }: MenuGridProps) => {
  const [displayItems, setDisplayItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter items by category and update display with animation
  useEffect(() => {
    setIsLoading(true);
    setDisplayItems([]);
    
    // Simulate loading delay for better user experience
    const timer = setTimeout(() => {
      setDisplayItems(items.filter(item => item.category === category));
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, [category, items]);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          // Skeleton loaders while content loads
          Array.from({ length: 3 }).map((_, index) => (
            <div key={`skeleton-${index}`} className="menu-card">
              <Skeleton className="w-full h-48" />
              <div className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            </div>
          ))
        ) : (
          displayItems.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))
        )}
      </div>
      
      {!isLoading && displayItems.length === 0 && category !== 'breakfast' && (
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
