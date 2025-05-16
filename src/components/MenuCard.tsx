
import { MenuItem } from "../data/menuData";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

const MenuCard = ({ item, index }: MenuCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className={cn(
        "menu-card group hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transform perspective-1000 transition-all duration-300",
        // Add staggered animation delay based on index
        index === 0 ? "opacity-0 animate-[fade-in_0.4s_0s_forwards]" : 
        index === 1 ? "opacity-0 animate-[fade-in_0.4s_0.1s_forwards]" : 
        index === 2 ? "opacity-0 animate-[fade-in_0.4s_0.2s_forwards]" :
        index === 3 ? "opacity-0 animate-[fade-in_0.4s_0.3s_forwards]" :
        "opacity-0 animate-[fade-in_0.4s_0.4s_forwards]"
      )}
    >
      <div className="relative overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-mama-secondary/50">
            <div className="w-6 h-6 border-2 border-mama-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src={item.image} 
          alt={item.name}
          className={cn(
            "menu-card-image transition-all duration-500 group-hover:scale-110",
            !imageLoaded && "opacity-0"
          )}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-mama-primary transition-colors">{item.name}</h3>
        <p className="text-mama-text/80 mb-4 text-sm min-h-[40px]">{item.description}</p>
        
        <div className="mt-auto">
          <p className="menu-price">{item.price}</p>
          {item.priceWithChai && (
            <p className="menu-price-option">{item.priceWithChai}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
