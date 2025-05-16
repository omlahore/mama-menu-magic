
import { useState } from 'react';
import { menuCategories } from '../data/menuData';

interface MenuTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const MenuTabs = ({ activeCategory, setActiveCategory }: MenuTabsProps) => {
  return (
    <div className="border-b border-mama-secondary mb-8">
      <div className="container mx-auto px-4">
        <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-hide">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`menu-tab ${
                activeCategory === category.id ? 'menu-tab-active' : 'menu-tab-inactive'
              }`}
            >
              {category.name}
              {activeCategory === category.id && (
                <div className="absolute -bottom-[2px] left-0 w-full h-[2px] bg-mama-primary" />
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
