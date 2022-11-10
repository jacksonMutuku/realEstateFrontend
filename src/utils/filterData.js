export const filterData = [
    {
      items: [
        { name: 'For-Sale', value: 'For-Sale' },
        { name: 'For-Rent', value: 'For-Rent' },
      ],
      placeholder: 'Purpose',
      queryName: 'purpose',
    },
    {
      items: [
        { name: 'Daily', value: 'daily' },
        { name: 'Weekly', value: 'weekly' },
        { name: 'Monthly', value: 'Monthly' },
        { name: 'Yearly', value: 'yearly' },
      ],
      placeholder: 'Rent Frequency',
      queryName: 'rentFrequency',
    },
    // {
    //   items: [
    //     { name: '2000', value: '5000' },
    //     { name: '5000', value: '10000' },
    //     { name: '10,000', value: '10000' },
    //     { name: '20,000', value: '20000' },
    //     { name: '30,000', value: '30000' },
    //     { name: '40,000', value: '40000' },
    //     { name: '50,000', value: '50000' },
    //     { name: '60,000', value: '60000' },
    //     { name: '85,000', value: '85000' },
    //   ],
    //   placeholder: 'Min Price(Ksh)',
    //   queryName: 'minPrice',
    // },
    // {
    //   items: [
    //     { name: '50,000', value: '50000' },
    //     { name: '60,000', value: '60000' },
    //     { name: '85,000', value: '85000' },
    //     { name: '110,000', value: '110000' },
    //     { name: '135,000', value: '135000' },
    //     { name: '160,000', value: '160000' },
    //     { name: '185,000', value: '185000' },
    //     { name: '200,000', value: '200000' },
    //     { name: '300,000', value: '300000' },
    //     { name: '400,000', value: '400000' },
    //     { name: '500,000', value: '500000' },
    //     { name: '600,000', value: '600000' },
    //     { name: '700,000', value: '700000' },
    //     { name: '800,000', value: '800000' },
    //     { name: '900,000', value: '900000' },
    //     { name: '1000,000', value: '1000000' },
    //   ],
    //   placeholder: 'Max Price(Ksh)',
    //   queryName: 'maxPrice',
    // },
    // {
    //   items: [
    //     { name: 'Lowest Price', value: 'price-asc' },
    //     { name: 'Highest Price', value: 'price-des' },
    //   ],
    //   placeholder: 'Sort',
    //   queryName: 'sort',
    // },
    {
      items: [
        { name: "1", value: "1"},
        { name: "2", value: "2" },
        { name: "3", value: "3" },
        { name: "4", value: "4" },
        { name: "5", value: "5" },
        { name: "6", value: "6" },
        { name: "7", value: "7" },
        { name: "8", value: "8" },
        { name: "9", value: "9" },
        { name: "10", value: "10" },
      ],
      placeholder: 'Rooms',
      queryName: 'rooms',
    },
    {
      items: [
        { name: "1", value: "1" },
        { name: "2", value: "2" },
        { name: "3", value: "3" },
        { name: "4", value: "4" },
        { name: "5", value: "5" },
        { name: "6", value: "6" },
        { name: "7", value: "7" },
        { name: "8", value: "8" },
        { name: "9", value: "9" },
        { name: "10", value: "10" },
      ],
      placeholder: 'Bathroom',
      queryName: 'bathrooms',
    },
    {
      items: [
        { name: 'Furnished', value: 'Furnished' },
        { name: 'Unfurnished', value: 'Unfurnished' },
      ],
      placeholder: 'Furnish Type',
      queryName: 'furnishingStatus',
    },
    {
      items: [
        { name: 'Apartment', value: 'Apartment' },
        { name: 'Townhouses', value: 'Townhouses' },
        { name: 'Bedsitter', value: 'Bedsitter'},
        { name: 'Villas', value: 'Villas' },
      ],
      placeholder: 'Property Type',
      queryName: 'housetype',
    },
  ];
  
  export const getFilterValues = (filterValues) => {
    const {
      purpose,
      rentFrequency,
      housetype,
      // minPrice,
      // maxPrice,
      rooms,
      bathrooms,
      sort,
    } = filterValues;
  
    const values = [
      {
        name: 'purpose',
        value: purpose,
      },
      {
        name: 'rentFrequency',
        value: rentFrequency,
      },
      // {
      //   name: 'minPrice',
      //   value: minPrice,
      // },
      // {
      //   name: 'maxPrice',
      //   value: maxPrice,
      // },
      {
        name: 'rooms',
        value: rooms,
      },
      {
        name: 'bathrooms',
        value: bathrooms,
      },
      // {
      //   name: 'sort',
      //   value: sort,
      // },
      {
        name: "furnishingStatus",
        value: "furnishingStatus"
      },
      {
        name: 'housetype',
        value: housetype,
      },
    ];
  
    return values;
  };