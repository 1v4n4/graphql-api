
const products = [
  {
    id: "1",
    name: "Steel Pot",
    description: "Silver steel pot that is perfect for cooking",
    quantity: 230,
    price: 42.44,
    image: "img-1",
    onSale: false,
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
  },
  {
    id: "2",
    name: "Salad Bowl",
    description: "Round wooden bowl perfect for tossing and making salads",
    quantity: 33,
    price: 53.5,
    image: "img-2",
    onSale: false,
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
  },
  {
    id: "3",
    name: "Spoon",
    description: "Small and delicate spoon",
    quantity: 4266,
    price: 1.33,
    image: "img-3",
    onSale: true,
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
  },
  {
    id: "4",
    name: "Shovel",
    description: "Grey rounded shovel for digging",
    quantity: 753,
    price: 332,
    image: "img-4",
    onSale: false,
    categoryId: "34115aac-0ff5-4859-8f43-10e8db23602b",
  },
  {
    id: "5",
    name: "Fertilizer",
    description: "Nitrogen based fertitlizer",
    quantity: 53453,
    price: 23.11,
    image: "img-5",
    onSale: true,
    categoryId: "34115aac-0ff5-4859-8f43-10e8db23602b",
  },
  {
    id: "6",
    name: "Basketball",
    description: "Outdoor or indoor basketball",
    quantity: 128,
    price: 59.99,
    image: "img-6",
    onSale: true,
    categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1d",
  },
  {
    id: "7",
    name: "Golf Clubs",
    description: "Good for golfing",
    quantity: 3,
    price: 427.44,
    image: "img-7",
    onSale: false,
    categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1d",
  },
  {
    id: "8",
    name: "Baseball Gloves",
    description: "Professional catcher gloves",
    quantity: 745,
    price: 77.0,
    image: "img-8",
    onSale: true,
    categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1d",
  },
  {
    id: "9",
    name: "Soccer Ball",
    description: "Round ball",
    quantity: 734,
    price: 93.44,
    image: "img-9",
    onSale: false,
    categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1d",
  },
];

let categories = [
  {
    id: "10",
    name: "Kitchen",
  },
  {
    id: "11",
    name: "Garden",
  },
  {
    id: "12",
    name: "Sports",
  },
];

const reviews = [
  {
    id: "13",
    date: "2021-01-01",
    title: "This is bad",
    comment: "when i bought this it broke the stove",
    rating: 1,
    productId: "53a0724c-a416-4cac-ae45-bfaedce1f147",
  },
  {
    id: "14",
    date: "2021-04-23",
    title: "This is good",
    comment: "one of the most decent pots",
    rating: 3,
    productId: "53a0724c-a416-4cac-ae45-bfaedce1f147",
  },
  {
    id: "15",
    date: "2020-04-23",
    title: "is okay",
    comment: "yes it is decent i guess",
    rating: 2,
    productId: "53a0724c-a416-4cac-ae45-bfaedce1f147",
  },
  {
    id: "16",
    date: "2020-07-23",
    title: "terrible",
    comment: "why is it so expensive",
    rating: 1,
    productId: "53a0724c-a416-4cac-ae45-bfaedce1f147",
  },
  {
    id: "17",
    date: "2021-01-01",
    title: "best thing ever",
    comment: "really good bowl",
    rating: 5,
    productId: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
  },
  {
    id: "18",
    date: "2021-04-23",
    title: "SUPER HAPPY",
    comment: "this is amazing, only 4 stars tho... :)",
    rating: 4,
    productId: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
  },
  {
    id: "19",
    date: "2020-04-23",
    title: "life changing",
    comment: "writing mock data is so boring...",
    rating: 5,
    productId: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
  },
  {
    id: "20",
    date: "2020-07-23",
    title: "This is coooooool!",
    comment: "I would totally recommend",
    rating: 5,
    productId: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
  },
  {
    id: "21",
    date: "2020-07-23",
    title: "idc",
    comment: "It's a spoon...",
    rating: 3,
    productId: "2c931e7e-510f-49e5-aed6-d6b44087e5a1",
  },
  {
    id: "22",
    date: "2020-07-23",
    title: "terrible!!!!!!",
    comment:
      "Not good at all!! used it once and got caught 2 days later. now im doing life without parole",
    rating: 1,
    productId: "404daf2a-9b97-4b99-b9af-614d07f818d7",
  },
  {
    id: "23",
    date: "2020-07-23",
    title: "great",
    comment: "Great for planting",
    rating: 5,
    productId: "404daf2a-9b97-4b99-b9af-614d07f818d7",
  },
  {
    id: "24",
    date: "2020-07-23",
    title: "Made well",
    comment: "Strong an firm",
    rating: 5,
    productId: "404daf2a-9b97-4b99-b9af-614d07f818d7",
  },
  {
    id: "25",
    date: "2020-07-23",
    title: "Plants grew well",
    comment: "Oxygen and nitrogen rich!",
    rating: 3,
    productId: "6379c436-9fad-4b3f-a427-2d7241f5c1b1",
  },
  {
    id: "26",
    date: "2020-07-23",
    title: "I made the Nba",
    comment: "My name is LeBron James",
    rating: 5,
    productId: "f01bcdec-6783-464e-8f9e-8416830f7569",
  },
  {
    id: "27",
    date: "2020-07-23",
    title: "I did not make the NBA",
    comment: "My name is Laith Harb",
    rating: 5,
    productId: "f01bcdec-6783-464e-8f9e-8416830f7569",
  },
  {
    id: "28",
    date: "2020-07-23",
    title: "I love ball",
    comment: "I play basketball with this basketball",
    rating: 5,
    productId: "f01bcdec-6783-464e-8f9e-8416830f7569",
  },
  {
    id: "29",
    date: "2020-07-23",
    title: "Gooooolf",
    comment: "I need golfing tips",
    rating: 5,
    productId: "a4824a31-5c83-42af-8c1b-6e2461aae1ef",
  },
  {
    id: "30",
    date: "2020-07-23",
    title: "meh",
    comment: "I don't like it",
    rating: 3,
    productId: "a4824a31-5c83-42af-8c1b-6e2461aae1ef",
  },
  {
    id: "31",
    date: "2020-07-23",
    title: "baseball...?",
    comment: "I thought this was for football",
    rating: 5,
    productId: "b553085a-a7e0-4c9b-8a12-f971919c3683",
  },
  {
    id: "32",
    date: "2020-07-23",
    title: "soccer or football",
    comment: "IT'S CALLED FOOTBALL",
    rating: 2,
    productId: "47bf3941-9c8b-42c0-9c72-7f3985492a5b",
  },
  {
    id: "33",
    date: "2020-07-23",
    title: "too small",
    comment: "ball is too same",
    rating: 4,
    productId: "47bf3941-9c8b-42c0-9c72-7f3985492a5b",
  },
  {
    id: "34",
    date: "2020-07-23",
    title: "got flat",
    comment: "The ball got as flat as the earth. I want it round!!!!",
    rating: 2,
    productId: "47bf3941-9c8b-42c0-9c72-7f3985492a5b",
  },
];

export {
  products,
  categories,
  reviews,
};