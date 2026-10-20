
const vendors = [
  {
    id: 'my-restaurant',
    name: 'Campus Delight Cafe',
    location: 'Mahallah Ali, Block C',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true,
    menu: [
      {
        id: 'my-1',
        name: 'Nasi Lemak Ayam',
        description: 'Coconut rice with fried chicken, sambal and egg',
        price: 7.50,
        category: 'Rice',
        available: true
      },
      {
        id: 'my-2',
        name: 'Mee Goreng Mamak',
        description: 'Fried noodles with vegetables and egg',
        price: 6.00,
        category: 'Noodles',
        available: true
      },
      {
        id: 'my-3',
        name: 'Teh Ais',
        description: 'Iced milk tea',
        price: 2.50,
        category: 'Drinks',
        available: false
      }
    ]
  },
  {
    id: 'kafe-aminah',
    name: 'Kafe Mahallah Aminah',
    location: 'Mahallah Aminah, Ground Floor',
    openHours: '8:00 am - 9:00 pm',
    isOpen: true,
    menu: [
      {
        id: 'ami-1',
        name: 'Nasi Ayam Penyet',
        description: 'Smashed fried chicken with sambal and rice',
        price: 9.00,
        category: 'Rice',
        available: true
      },
      {
        id: 'ami-2',
        name: 'Air Bandung',
        description: 'Rose syrup with milk',
        price: 3.00,
        category: 'Drinks',
        available: true
      }
    ]
  }
]

export default vendors
