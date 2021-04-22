// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',  // Unsure if wanted
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { 
  through: {
    model: ProductTag,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: 'merch_label',  // Unsure if name fits
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: 'tagged_products' // Unsure if name fits
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
