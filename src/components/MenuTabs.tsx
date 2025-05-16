
import { menuCategories } from '../data/menuData';

interface MenuTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const MenuTabs = ({ activeCategory, setActiveCategory }: MenuTabsProps) => {
  return (
    <div className="border-b border-mama-secondary mb-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 overflow-x-auto pb-1 scrollbar-hide">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`menu-tab text-xl font-bold transition-all duration-300 px-6 py-3 ${
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
        
        {/* Category description - larger & bolder */}
        <div className="py-4 text-center">
          <p className="text-lg font-bold text-mama-text/90">
            {menuCategories.find((cat) => cat.id === activeCategory)?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuTabs;
