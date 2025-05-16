
import { MenuItem } from "../data/menuData";
import { cn } from "@/lib/utils";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

const MenuCard = ({ item, index }: MenuCardProps) => {
  return (
    <div 
      className={cn(
        "menu-card animate-fade-in",
        // Add staggered animation delay based on index
        index === 0 ? "opacity-0 animate-[fade-in_0.4s_0s_forwards]" : 
        index === 1 ? "opacity-0 animate-[fade-in_0.4s_0.1s_forwards]" : 
        index === 2 ? "opacity-0 animate-[fade-in_0.4s_0.2s_forwards]" :
        index === 3 ? "opacity-0 animate-[fade-in_0.4s_0.3s_forwards]" :
        "opacity-0 animate-[fade-in_0.4s_0.4s_forwards]"
      )}
    >
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.name}
          className="menu-card-image"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
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
