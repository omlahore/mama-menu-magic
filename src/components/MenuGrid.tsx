
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

  // Function to group lunch items by their section based on ID ranges
  const getLunchSection = (id: number) => {
    if (id >= 11 && id <= 15) return "Chaat";
    if (id >= 16 && id <= 22) return "Bites";
    if (id >= 23 && id <= 29) return "Mains";
    if (id >= 30 && id <= 33) return "Wraps & Toasties";
    return "";
  };

  // Group items by section for lunch category
  const renderLunchSections = () => {
    if (category !== "lunch") return null;

    const sections = ["Chaat", "Bites", "Mains", "Wraps & Toasties"];
    
    return sections.map(section => {
      const sectionItems = displayItems.filter(item => getLunchSection(item.id) === section);
      
      if (sectionItems.length === 0) return null;
      
      return (
        <div key={section} className="mb-10">
          <h2 className="text-2xl font-playfair font-bold text-mama-accent mb-4 border-b border-mama-secondary pb-2">{section}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectionItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container mx-auto px-4">
      {category === "lunch" ? (
        isLoading ? (
          // Skeleton loaders while content loads
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={`skeleton-${index}`} className="menu-card">
                <Skeleton className="w-full h-48" />
                <div className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-1/3" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          renderLunchSections()
        )
      ) : (
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
      )}
      
      {!isLoading && displayItems.length === 0 && category !== 'breakfast' && category !== 'lunch' && (
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
