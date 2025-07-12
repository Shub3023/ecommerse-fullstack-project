export const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White' },
      { value: 'black', label: 'Black' },
      { value: 'red', label: 'Red' },
      { value: 'blue', label: 'Blue' },
      { value: 'green', label: 'Green' },
      { value: 'yellow', label: 'Yellow' },
      { value: 'pink', label: 'Pink' },
      { value: 'grey', label: 'Grey' },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: 'XS', label: 'XS' },
      { value: 'S', label: 'S' },
      { value: 'M', label: 'M' },
      { value: 'L', label: 'L' },
      { value: 'XL', label: 'XL' },
      { value: 'XXL', label: 'XXL' },
    ],
  },
];

export const singleFilter = [
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: '0-199', label: '₹0 to ₹199' },
      { value: '200-399', label: '₹200 to ₹399' },
      { value: '400-699', label: '₹400 to ₹699' },
      { value: '700-999', label: '₹700 to ₹999' },
      { value: '1000+', label: '₹1000 and above' },
    ],
  },
  {
    id: 'discount',
    name: 'DISCOUNT RANGE',
    options: [
      { value: '10', label: '10% and above' },
      { value: '20', label: '20% and above' },
      { value: '30', label: '30% and above' },
      { value: '40', label: '40% and above' },
      { value: '50', label: '50% and above' },
    ],
  },
  {
    id: 'stock',
    name: 'Availability',
    options: [
      { value: 'in_stock', label: 'In Stock' },
      { value: 'out_of_stock', label: 'Out of Stock' },
    ],
  },
];

export const sortOptions = [
  { value: 'price_low_high', label: 'Price: Low to High' },
  { value: 'price_high_low', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
  { value: 'discount', label: 'Highest Discount' },
  { value: 'popularity', label: 'Most Popular' },
];
