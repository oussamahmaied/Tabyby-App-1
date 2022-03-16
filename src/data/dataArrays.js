export const categories = [
  // {
  //   id: 3,
  //   name: 'neurologist',
  //   photo_url:
  //   'https://media.discordapp.net/attachments/935973910695002123/953343658042748978/doctor.png?width=468&height=468'
  // },
  {
    id: 1,
    name: 'cardiologist',
    photo_url: 'https://media.discordapp.net/attachments/935973910695002123/953435412867727390/heart.png?width=467&height=467'
  },
  {
    id: 2,
    name: 'dermatologist',
    photo_url:
      'https://media.discordapp.net/attachments/935973910695002123/953435412033044520/dermiss.png?width=467&height=467'
  },
  {
    id: 4,
    name: 'nephrologist',
    photo_url:
    'https://media.discordapp.net/attachments/935973910695002123/953435413404614656/nephrologist.png?width=467&height=467'
  },
  {
    id: 0,
    name: 'general preactitioner',
    photo_url: 'https://media.discordapp.net/attachments/935973910695002123/953435412540588082/general.png?width=467&height=467'
  },
  {
    id: 5,
    name: 'orthopedist',
    photo_url: 'https://media.discordapp.net/attachments/935973910695002123/953435413631103046/orthopedics.png?width=467&height=467'
  },
  {
    id: 6,
    name: 'gynecologist',
    photo_url: 'https://media.discordapp.net/attachments/935973910695002123/953435413857587240/women.png?width=467&height=467'
  },
  {
    id: 7,
    name: 'diabetologist',
    photo_url: 'https://media.discordapp.net/attachments/935973910695002123/953435412267937802/diabetologist.png?width=467&height=467'
  },
  {
    id: 8,
    name: 'dentist',
    photo_url: 'https://media.discordapp.net/attachments/935973910695002123/953433856642519091/dentist.png?width=468&height=468'
  },

  
];

export const recipes = [
  {
    recipeId: 122, //doctor id
    categoryId: 3, // specialitee 
    title: 'dr mortadha',
    photo_url: 'https://th.bing.com/th/id/OIP.pz2e9Dmjs8EOPvk90hqH0QHaKF?pid=ImgDet&rs=1',
    photosArray: [
      'https://th.bing.com/th/id/OIP.pz2e9Dmjs8EOPvk90hqH0QHaKF?pid=ImgDet&rs=1',
      "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
      'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
      'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e',
      'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg'
    ],
    time: '35',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
    'mortadha tbib '
  },
  {
    recipeId: 3,
    categoryId: 4,
    title: 'Dr Oussama',
    photo_url:
      'https://i.pinimg.com/originals/f5/ab/d9/f5abd966ee9915350800bfee990a15fb.jpg',
    photosArray: [
      'https://i.pinimg.com/originals/f5/ab/d9/f5abd966ee9915350800bfee990a15fb.jpg',
      'https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg',
      'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
    ],
    time: '35',
    ingredients: [
      [59, '1'],
      [60, '1/2 lbs'],
      [61, '1/2 liters'],
    ],
    description: ' tbib tbibi'
  },
  {
    recipeId: 2,
    categoryId: 3,
    title: 'DR Badis',
    photo_url: 'https://fr.web.img4.acsta.net/newsv7/19/10/30/15/08/4871429.jpg',
    photosArray: [
      'https://fr.web.img4.acsta.net/newsv7/19/10/30/15/08/4871429.jpg',
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/B2C0/production/_106106754_vegnuggets976.jpg',
      'https://pixel.nymag.com/imgs/daily/grub/2017/11/22/22-mcds-chicken-tenders.w330.h330.jpg',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2Fstyles%2Fmain%2Fpublic%2Fgettyimages-508510211.jpg%3Fitok%3Dh-Uryi8r&w=400&c=sc&poi=face&q=85'
    ],
    time: '35',
    ingredients: [
      [0, '2 quarts'],
      [16, '1'],
      [12, '1 cup'],
      [18, '1 cup'],
      [19, '1 teaspoon'],
      [1, '2 teaspoons'],
      [4, '1/4 teaspoons'],
      [7, '1/8 teaspoons'],
      [20, '1/2 teaspoons'],
      [21, '4']
    ],
    description:
    'tbib tayra '
  },
  {
    recipeId: 3,
    categoryId: 3,
    title: 'Dr Amine',
    photo_url:
      'https://th.bing.com/th/id/R.70a8b012b68062da96dfdde289f28ce7?rik=AbLct6L99xHmjQ&riu=http%3a%2f%2fwww.healthconsultantsnj.com%2fwp-content%2fuploads%2fdr-omar-nabulsi.jpg&ehk=dJpj8Yg0O4pJhCvSQuZ2mJ%2fZmOVtbdhTeb4kUHJD0Dg%3d&risl=&pid=ImgRaw&r=0',
    photosArray: [
      'https://th.bing.com/th/id/R.70a8b012b68062da96dfdde289f28ce7?rik=AbLct6L99xHmjQ&riu=http%3a%2f%2fwww.healthconsultantsnj.com%2fwp-content%2fuploads%2fdr-omar-nabulsi.jpg&ehk=dJpj8Yg0O4pJhCvSQuZ2mJ%2fZmOVtbdhTeb4kUHJD0Dg%3d&risl=&pid=ImgRaw&r=0',
      'https://cdn.junglecreations.com/wp/junglecms/2018/07/4164c5bd-wide-thumbnail.jpg',
      'https://pinchofyum.com/wp-content/uploads/Crunchwrap-Inside.jpg',
      'https://monsonmadethis.com/wp-content/uploads/2017/10/IMG_20171015_161017_025-e1533869302263.jpg'
    ],
    time: '35',
    ingredients: [
      [0, '2 tablespoons'],
      [22, '1/2'],
      [23, '2 tablespoons'],
      [7, '2 cloves'],
      [3, '1 teaspoon'],
      [24, '1 tablespoon'],
      [25, '1 lb'],
      [1, '2 teaspoons'],
      [4, '2 teaspoons'],
      [26, '15 oz'],
      [27, '8'],
      [28, '2'],
      [29, '1 cup']
    ],
    description:
'ydaw5ek oumour teb wfazet yhbalek'  },
// 
];


