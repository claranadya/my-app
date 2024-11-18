import React, { createContext, useState, useContext, useMemo } from 'react';

const CatalogContext = createContext();

export const CatalogProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All Products');
  const [selectedProductId, setSelectedProductId] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Chocolate cake',
      price: 250000,
      image: '/images/2.jpeg',
      category: 'All Products',
      description: 'Indulge in our rich chocolate cake, made with premium dark chocolate and layered with smooth chocolate ganache. Each slice delivers an intense chocolate experience that will satisfy any chocolate lovers cravings. Perfect for celebrations or as a special treat.',
      ingredients: ['Dark Chocolate', 'Fresh Cream', 'Butter', 'Flour', 'Sugar'],
      servingSize: '8-10 persons',
      allergens: ['Milk', 'Eggs', 'Wheat'],
      nutritionalInfo: {
        calories: '350 per slice',
        fat: '18g',
        sugar: '25g'
      }
    },
    {
      id: 2,
      name: 'Carrot cake',
      price: 250000,
      image: '/images/1.jpeg',
      category: 'All Products',
      description: 'Our moist carrot cake is packed with freshly grated carrots, crushed pineapple, and chopped walnuts, topped with cream cheese frosting. This classic recipe includes warm spices like cinnamon and nutmeg for the perfect balance of flavors.',
      ingredients: ['Carrots', 'Walnuts', 'Cream Cheese', 'Cinnamon', 'Nutmeg'],
      servingSize: '8-10 persons',
      allergens: ['Nuts', 'Milk', 'Eggs', 'Wheat'],
      nutritionalInfo: {
        calories: '320 per slice',
        fat: '16g',
        sugar: '22g'
      }
    },
    {
      id: 3,
      name: 'Brownie',
      price: 200000,
      image: '/images/3.jpeg',
      category: 'All Products',
      description: 'Dense, fudgy, and rich chocolate brownies made with premium cocoa powder and dark chocolate chips. Each square is perfectly chewy with a slightly crisp top layer. An ideal treat for chocolate enthusiasts.',
      ingredients: ['Cocoa Powder', 'Dark Chocolate Chips', 'Butter', 'Eggs', 'Flour'],
      servingSize: '9 pieces',
      allergens: ['Milk', 'Eggs', 'Wheat'],
      nutritionalInfo: {
        calories: '180 per piece',
        fat: '9g',
        sugar: '15g'
      }
    },
    {
      id: 4,
      name: 'Eclair',
      price: 50000,
      image: '/images/4.jpeg',
      category: 'All Products',
      description: 'Light and airy choux pastry filled with smooth vanilla custard and topped with various ganache. Our éclairs are freshly made daily for the perfect crispy-creamy combination.',
      ingredients: ['Butter', 'Eggs', 'Flour', 'Vanilla Custard', 'Chocolate'],
      servingSize: 'Individual',
      allergens: ['Milk', 'Eggs', 'Wheat'],
      nutritionalInfo: {
        calories: '220 per piece',
        fat: '12g',
        sugar: '18g'
      }
    },
    {
      id: 5,
      name: 'Cake Jar',
      price: 50000,
      image: '/images/5.jpeg',
      category: 'All Products',
      description: 'Layers of moist cake, fresh cream, and various toppings served in a convenient jar. Perfect for on-the-go treats or gifting. Available in multiple flavors including chocolate, vanilla, and red velvet.',
      ingredients: ['Assorted Cake Flavors', 'Fresh Cream', 'Various Toppings'],
      servingSize: 'Individual',
      allergens: ['Milk', 'Eggs', 'Wheat'],
      nutritionalInfo: {
        calories: '280 per jar',
        fat: '14g',
        sugar: '20g'
      }
    },
    {
      id: 6,
      name: 'Birthday Cakes',
      price: 300000,
      image: '/images/49.jpeg',
      category: 'Special Products',
      description: 'Celebrate your special day with our custom birthday cakes. Choose from various flavors, designs, and sizes. Each cake is decorated with care and can be personalized with your message.',
      customization: true,
      orderLeadTime: '48 hours',
      sizes: ['6 inch', '8 inch', '10 inch'],
      servingSize: 'Varies by size'
    },
    {
      id: 7,
      name: 'Wedding Cakes',
      price: 10000000,
      image: '/images/46.jpeg',
      category: 'Special Products',
      description: 'Elegant multi-tiered cakes perfect for your wedding day. Our experienced bakers work with you to create the perfect design that matches your wedding theme and preferences.',
      customization: true,
      orderLeadTime: '2 weeks',
      consultation: 'Required',
      servingSize: 'Customizable'
    },
    {
      id: 8,
      name: 'Mini Cakes',
      price: 50000,
      image: '/images/57.jpeg',
      category: 'Special Products',
      description: 'Delight in our adorable mini cakes, perfect for any occasion. These individual-sized treats come in a variety of flavors and designs. Ideal for parties, gifts, or just a little indulgence.',
      customization: true,
      orderLeadTime: '24 hours',
      sizes: ['Single', 'Box of 4', 'Box of 6'],
      servingSize: '1 person per mini cake'
    },
    {
      id: 9,
      name: 'Flower Cakes',
      price: 1200000,
      image: '/images/14.jpeg',
      category: 'Special Products',
      description: 'Elevate your celebrations with our exquisite Flower Cakes, adorned with beautiful buttercream floral designs. Available in a variety of flavors and customizable floral patterns, these cakes are perfect for weddings, anniversaries, or any special occasion.',
      customization: true,
      orderLeadTime: '72 hours',
      sizes: ['6 inch', '8 inch', '10 inch'],
      servingSize: 'Varies by size'
    },
    {
      id: 10,
      name: 'Fondant Cakes',
      price: 2500000,
      image: '/images/9.jpeg',
      category: 'Special Products',
      description: 'Make a statement with our luxurious Fondant Cakes, crafted with smooth fondant for a flawless finish. These cakes can be designed in endless themes and styles, making them perfect for weddings, birthdays, or corporate events.',
      customization: true,
      orderLeadTime: '96 hours',
      sizes: ['6 inch', '8 inch', '10 inch', '12 inch'],
      servingSize: 'Varies by size'
    },
    {
      id: 11,
      name: 'Fruit Cakes',
      price: 1000000,
      image: '/images/56.jpeg',
      category: 'Special Products',
      description: 'Enjoy the perfect blend of freshness and sweetness with our Fruit Cakes, topped with an assortment of seasonal fresh fruits. Perfect for any occasion, these cakes are as beautiful as they are delicious.',
      customization: true,
      orderLeadTime: '48 hours',
      sizes: ['6 inch', '8 inch', '10 inch'],
      servingSize: 'Varies by size'
    },
    {
      id: 12,
      name: 'Custom Cakes',
      price: 1500000,
      image: '/images/custom.jpeg',
      category: 'Special Products',
      description: 'Bring your dream cake to life with our Custom Cakes! From unique themes to personalized designs, we create cakes tailored to your vision. Choose your flavor, size, and decoration to make your special moments unforgettable.',
      customization: true,
      orderLeadTime: '5-7 days (depending on design)',
      sizes: ['6 inch', '8 inch', '10 inch', '12 inch', 'Custom size'],
      servingSize: 'Varies by size and design'
    },
    {
        id: 13,
        name: 'Puff Pastry',
        price: 80000,
        image: '/images/42.jpeg',
        category: 'Popular Products',
        description: 'Delight in our flaky, buttery Puff Pastry, topped with fresh cream and an assortment of juicy berries. Perfect for an elegant dessert, afternoon tea, or a sweet snack to brighten your day.',
        ingredients: ['Phyllo Pastry', 'Fresh Cream', 'Berries (Strawberries, Blueberries, Raspberries)', 'Sugar'],
        servingSize: 'Individual',
        allergens: ['Milk', 'Eggs', 'Wheat'],
        nutritionalInfo: {
          calories: '250 per pastry',
          fat: '14g',
          sugar: '20g',
          protein: '3g'
  }
    },
    {
        id: 14,
        name: 'Baklava',
        price: 50000,
        image: '/images/53.jpeg',
        category: 'Popular Products',
        description: 'Experience the richness of our handcrafted Baklava, layered with flaky phyllo pastry and generously filled with premium pistachios. Sweetened with a honey syrup, this dessert offers the perfect balance of crunch and sweetness.',
        ingredients: ['Phyllo Pastry', 'Pistachios', 'Honey', 'Sugar', 'Butter'],
        servingSize: 'Individual piece',
        allergens: ['Nuts (Pistachios)', 'Milk', 'Wheat'],
        nutritionalInfo: {
          calories: '200 per piece',
          fat: '15g',
          sugar: '18g',
          protein: '4g'
        }
    },
    {
        id: 15,
        name: 'Macaron',
        price: 50000,
        image: '/images/6.jpeg',
        category: 'Popular Products',
        description: 'Delight in our delicate and colorful Macarons, crafted with a crispy shell and a soft, flavorful filling. Available in a variety of classic and seasonal flavors, these sweet treats are perfect for gifts, parties, or self-indulgence.',
        ingredients: ['Almond Flour', 'Egg Whites', 'Sugar', 'Butter', 'Food Coloring', 'Flavoring'],
        servingSize: '1-2 pieces',
        allergens: ['Nuts (Almonds)', 'Eggs'],
        nutritionalInfo: {
          calories: '100 per piece',
          fat: '5g',
          sugar: '9g',
          protein: '2g'
        }
    },
    {
        id: 16,
        name: 'Bomboloni',
        price: 50000,
        image: '/images/45.jpeg',
        category: 'Popular Products',
        description: 'Indulge in our soft and fluffy Bomboloni filled with rich, gooey chocolate. These Italian-style doughnuts are perfect for breakfast, dessert, or a sweet snack anytime of the day.',
        ingredients: ['Flour', 'Chocolate Filling', 'Sugar', 'Yeast', 'Milk', 'Butter'],
        servingSize: 'Individual',
        allergens: ['Milk', 'Eggs', 'Wheat'],
        nutritionalInfo: {
          calories: '280 per piece',
          fat: '14g',
          sugar: '22g',
          protein: '4g'
        }
    },
    {
        id: 17,
        name: 'Fruit Pie',
        price: 50000,
        image: '/images/55.jpeg',
        category: 'Popular Products',
        description: 'Enjoy the perfect harmony of buttery crust and fresh, juicy fruits with our Fruit Pie. Topped with an assortment of seasonal fruits, this dessert is as stunning as it is delicious—perfect for any celebration or sweet craving.',
        ingredients: ['Buttery Pie Crust', 'Seasonal Fruits', 'Sugar', 'Cinnamon'],
        servingSize: 'Individual or Slices',
        allergens: ['Milk', 'Eggs', 'Wheat'],
        nutritionalInfo: {
          calories: '320 per slice',
          fat: '15g',
          sugar: '22g',
          protein: '3g'
        }
    },
    {
        id: 18,
        name: 'Danish Raisin',
        price: 80000,
        image: '/images/51.jpeg',
        category: 'All Products',
        description: 'Savor the perfect combination of flaky, buttery pastry and sweet, plump raisins with our Danish Raisin. Ideal for breakfast, snacks, or dessert, this treat offers a delightful bite of sweetness in every layer.',
        ingredients: ['Buttery Pastry', 'Raisins', 'Sugar'],
        servingSize: 'Individual',
        allergens: ['Milk', 'Eggs', 'Wheat'],
        nutritionalInfo: {
          calories: '250 per pastry',
          fat: '12g',
          sugar: '18g',
          protein: '3g'
        }
    },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (product.description?.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = activeTab === 'All Products' ? true : product.category === activeTab;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, activeTab]);

  const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id)) || null;
  };

  const getRelatedProducts = (categoryName, currentProductId, limit = 3) => {
    return products
      .filter(product => 
        product.category === categoryName && 
        product.id !== currentProductId
      )
      .slice(0, limit);
  };

  const categories = useMemo(() => {
    return ['All Products', ...new Set(products.map(product => product.category))];
  }, [products]);

  const value = {
    products: filteredProducts,
    searchQuery,
    setSearchQuery,
    activeTab,
    setActiveTab,
    selectedProductId,
    setSelectedProductId,

    getProductById,
    getRelatedProducts,
    categories,

    totalProducts: filteredProducts.length,
    hasFiltersActive: searchQuery !== '' || activeTab !== 'All Products'
  };

  return (
    <CatalogContext.Provider value={value}>
      {children}
    </CatalogContext.Provider>
  );
};

export const useCatalog = () => {
  const context = useContext(CatalogContext);
  if (!context) {
    throw new Error('useCatalog must be used within a CatalogProvider');
  }
  return context;
};