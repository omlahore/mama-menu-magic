
import { MenuItem } from "../data/menuData";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

const MenuCard = ({ item, index }: MenuCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

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
      <div className="relative overflow-hidden h-48">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-mama-secondary/50">
            <div className="w-6 h-6 border-2 border-mama-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src={item.image} 
          alt={item.name}
          className={cn(
            "menu-card-image transition-all duration-500 group-hover:scale-110 object-cover w-full h-full",
            !imageLoaded && "opacity-0"
          )}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
        />
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-mama-secondary/30 text-mama-text">
            <div className="text-center p-4">
              <p className="font-medium">{item.name}</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-mama-primary transition-colors">{item.name}</h3>
        <p className="text-mama-text/80 mb-4 text-sm min-h-[40px]">{item.description}</p>
        
        <div className="mt-auto flex flex-col gap-2">
          <Button 
            variant="outline" 
            size="sm"
            className="price-pill bg-mama-primary/10 text-mama-accent hover:bg-mama-primary/20 border-mama-primary/30"
          >
            {item.price}
          </Button>
          
          {item.priceWithChai && (
            <Button 
              variant="outline" 
              size="sm"
              className="price-pill bg-mama-secondary/50 text-mama-text/90 hover:bg-mama-secondary/80 border-mama-secondary"
            >
              {item.priceWithChai}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
