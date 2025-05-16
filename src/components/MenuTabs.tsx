
import { menuCategories } from '../data/menuData';

interface MenuTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const MenuTabs = ({ activeCategory, setActiveCategory }: MenuTabsProps) => {
  return (
    <div className="border-b border-mama-secondary mb-8 sticky top-[116px] bg-white/90 backdrop-blur-sm z-10">
      <div className="container mx-auto px-4">
        <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-hide">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`menu-tab transition-all duration-300 ${
                activeCategory === category.id ? 'menu-tab-active' : 'menu-tab-inactive'
              }`}
            >
              {category.name}
              {activeCategory === category.id && (
                <div className="tab-indicator" />
              )}
            </div>
          ))}
        </div>
        
        {/* Category description */}
        <div className="py-2 text-sm text-mama-text/70 italic">
          {menuCategories.find((cat) => cat.id === activeCategory)?.description}
        </div>
      </div>
    </div>
  );
};

export default MenuTabs;
