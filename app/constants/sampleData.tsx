export const products: any = [
  {
    model_name: "Anubhutee",
    name: "Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti",
    image: "/images/img1.png",
    fabric: "Cotton + Khaadi",
    bg_type: 1,
  },
  {
    model_name: "Anubhutee",
    name: "Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti",
    image: "/images/img2.png",
    fabric: "Nylon + Cotton",
    bg_type: 2,
  },
  {
    model_name: "Anubhutee",
    name: "Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti",
    image: "/images/img3.png",
    fabric: "Silk",
    bg_type: 3,
  },
  {
    model_name: "Anubhutee",
    name: "Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti",
    image: "/images/img4.png",
    fabric: "Pure Cotton",
    bg_type: 4,
  },
  {
    model_name: "Anubhutee",
    name: "Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti",
    image: "/images/img5.png",
    fabric: "Cotton + Khaadi",
    bg_type: 5,
  },
  {
    model_name: "Anubhutee",
    name: "Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti",
    image: "/images/img6.png",
    fabric: "Pure Cotton",
    bg_type: 6,
  },
];

export const filters: any = {
  "categories": {
    "title": "Category",
    "name": "category",
    "data": [
      {
        "id": 1,
        "name": "Men's",
        'isSelected': true,
      },
      {
        "id": 2,
        "name": "Women's"
        ,
        'isSelected': true,
      },
      {
        "id": 3,
        "name": "Clildren's"
        ,
        'isSelected': false,
      },
    ]
  },
  "colors": {
    "title": "Color",
    "name": "color",
    "data": [
      {
        "id": 1,
        "name": "Green",
        "color_code": "#159400"
        ,
        'isSelected': false,
      },
      {
        "id": 2,
        "name": "Mustard",
        "color_code": "#F9BC60"
        ,
        'isSelected': false,
      },
      {
        "id": 3,
        "name": "Teal",
        "color_code": "#105263"
        ,
        'isSelected': false,
      },
      ,
      {
        "id": 4,
        "name": "Beige",
        "color_code": "#FCF1F1"
        ,
        'isSelected': false,
      },
      ,
      {
        "id": 5,
        "name": "Black",
        "color_code": "#000"
        ,
        'isSelected': false,
      },
    ]
  },
  "brands": {
    "title": "Brand",
    "name": "brand",
    "data": [
      {
        "id": 1,
        "name": "Malhaar"
        ,
        'isSelected': false,
      },
      {
        "id": 2,
        "name": "Prakriti"
        ,
        'isSelected': false,
      },
      {
        "id": 3,
        "name": "Anubhutee"
        ,
        'isSelected': false,
      },
    ]
  },
  "discount_ranges": {
    "title": "Discount Range",
    "name": "discount_percentage",
    "data": [
      {
        "id": 1,
        "name": "Upto 20% off",
        "value": 20,
        'isSelected': false,
      },
      {
        "id": 2,
        "name": "Upto 30% off",
        "value": 30,
        'isSelected': false,
      },
      {
        "id": 3,
        "name": "Upto 40% off",
        "value": 40,
        'isSelected': false,
      },
    ]
  },
  "materials": {
    "title": "Material",
    "name": "material",
    "data": [
      {
        "id": 1,
        "name": "Cotton"
        ,
        'isSelected': false,
      },
      {
        "id": 2,
        "name": "Nylon"
        ,
        'isSelected': false,
      },
      {
        "id": 3,
        "name": "Silk"
        ,
        'isSelected': false,
      },
    ]
  },
  "occasions": {
    "title": "Occasion",
    "name": "occasion",
    "data": [
      {
        "id": 1,
        "name": "Bridal"
        ,
        'isSelected': false,
      },
      {
        "id": 2,
        "name": "Party Wear"
        ,
        'isSelected': false,
      },
      {
        "id": 3,
        "name": "Official friendly"
        ,
        'isSelected': false,
      },
    ]
  },
  "prints": {
    "title": "Print",
    "name": "print",
    "data": [
      {
        "id": 1,
        "name": "Cudhidar"
        ,
        'isSelected': false,
      },
      {
        "id": 2,
        "name": "Embroidary"
        ,
        'isSelected': false,
      },
      {
        "id": 3,
        "name": "Cross lines"
        ,
        'isSelected': false,
      },
    ]
  },
  "prices": {
    "title": "Price",
    "name": "price"
  }
};

export const categroyMenu = [
  {
    id: "f3a6b4c1-b5d3-429f-9162-a3dff46c7cbd",
    type: "category",
    category_image: "images/cate-1.jpg",
    status: "live",
    name: "Men's Kurtas",
    slug: "men_kurtas",
    description: "Men's Kurtas",
    children: [
      {
        id: "825a7dd0-5c3a-4ff4-abef-da0c66ca978e",
        type: "category",
        status: "live",
        name: "Men",
        slug: "men",
        description: "men",
        children: [
          {
            id: "c35cb8dc-e855-4585-9305-478246b77b33",
            type: "category",
            status: "live",
            name: "Men's T-Shirts",
            slug: "men_t_shirt",
            description: "Men's T-Shirts",
          },
          {
            id: "f3a6b4c1-b5d3-429f-9162-a3dff46c7cbd",
            type: "category",
            status: "live",
            name: "Men's Kurtas",
            slug: "men_kurtas",
            description: "Men's Kurtas",
          },
        ],
      },
      {
        id: "4343feae-5201-44fa-8a23-bdcd11930b0f",
        type: "category",
        status: "live",
        name: "Woman",
        slug: "woman",
        description: "woman",
      },
    ],
  },
  {
    id: "c35cb8dc-e855-4585-9305-478246b77b33",
    type: "category",
    category_image: "images/cate-2.jpg",
    status: "live",
    name: "Men's T-Shirts",
    slug: "men_t_shirt",
    description: "Men's T-Shirts",
  },
  {
    id: "4343feae-5201-44fa-8a23-bdcd11930b0f",
    type: "category",
    category_image: "images/cate-3.jpg",
    status: "live",
    name: "Woman",
    slug: "woman",
    description: "woman",
  },
  {
    id: "825a7dd0-5c3a-4ff4-abef-da0c66ca978e",
    type: "category",
    category_image: "images/cate-4.jpg",
    status: "live",
    name: "Men",
    slug: "men",
    description: "men",
  },
  {
    id: "a84db0b3-5c9c-4472-bc85-0685e5ea5af7",
    type: "category",
    category_image: "images/cate-5.jpg",
    status: "live",
    name: "Apparel",
    slug: "apparel",
    description: "apparel",
  },
  {
    id: "825a7dd0-5c3a-4ff4-abef-da0c66ca978e",
    type: "category",
    category_image: "images/cate-6.jpg",
    status: "live",
    name: "Accessories",
    slug: "accessories",
    description: "accessories",
  },
  {
    id: "825a7dd0-5c3a-4ff4-abef-da0c66ca978e",
    type: "category",
    category_image: "images/cate-7.jpg",
    status: "live",
    name: "Fancy",
    slug: "fancy",
    description: "fancy",
  },
];

export const myCollectionMenu: any = [
  {
    id: '825a7dd02-5c3a-4ff4-abef-da0c66ca978e',
    collection_name: 'Kurtis',
    collection_image: 'images/img1.png',
    created_data: 'created on 9th July 2022'
  },
  {
    id: '825a7dd02-5c3a-4ff4-abef-da0c66ca978e',
    collection_name: 'Kurtis',
    collection_image: 'images/img1.png',
    created_data: 'created on 9th July 2022'
  },
  {
    id: '825a7dd02-5c3a-4ff4-abef-da0c66ca978e',
    collection_name: 'Kurtis',
    collection_image: 'images/img1.png',
    created_data: 'created on 9th July 2022'
  },
  {
    id: '825a7dd02-5c3a-4ff4-abef-da0c66ca978e',
    collection_name: 'Kurtis',
    collection_image: 'images/img1.png',
    created_data: 'created on 9th July 2022'
  }
  , {
    id: '825a7dd02-5c3a-4ff4-abef-da0c66ca978e',
    collection_name: 'Kurtis',
    collection_image: 'images/img1.png',
    created_data: 'created on 9th July 2022'
  },
  {
    id: '825a7dd02-5c3a-4ff4-abef-da0c66ca978e',
    collection_name: 'Kurtis',
    collection_image: 'images/img1.png',
    created_data: 'created on 9th July 2022'
  }
]

export const apparelData: any = [
  {
    image: 'images/apparel.jpg',
    name: 'Sarees'
  },
  {
    image: 'images/apparel.jpg',
    name: 'Sarees'
  },
  {
    image: 'images/apparel.jpg',
    name: 'Sarees'
  },
  {
    image: 'images/apparel.jpg',
    name: 'Sarees'
  },
  {
    image: 'images/apparel.jpg',
    name: 'Sarees'
  },
  {
    image: 'images/apparel.jpg',
    name: 'Sarees'
  }, {
    image: 'images/apparel.jpg',
    name: 'Sarees'
  }, {
    image: 'images/apparel.jpg',
    name: 'Sarees'
  }
  ,
  {
    image: 'images/apparel.jpg',
    name: 'Sarees'
  }, {
    image: 'images/apparel.jpg',
    name: 'Sarees'
  }, {
    image: 'images/apparel.jpg',
    name: 'Sarees'
  }
  ,
  {
    image: 'images/apparel.jpg',
    name: 'Sarees'
  }, {
    image: 'images/apparel.jpg',
    name: 'Sarees'
  }, {
    image: 'images/apparel.jpg',
    name: 'Sarees'
  }, {
    image: 'images/apparel.jpg',
    name: 'Sarees'
  }
]