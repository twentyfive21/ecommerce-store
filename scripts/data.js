const items = [
  {
    id: 1,
    productName: 'Nike Air Max 1',
    price: '$119.97',
    description:
      'Air Max 1 started as a running shoe, but you can’t keep innovation contained. Adopted by hip-hop culture, this runner with a controversial exposed Air unit could be found anywhere from the heart of Brooklyn to the streets of London. Its cutting-edge design and striking colorways, to this day, are celebrated year after year.',
    category: 'Shoes',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707262585/nx1t71nqt4xhcc6fdkrb.webp',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707262988/jtr3f6qkl8yf0efh5fou.webp',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Athletic Activities'],
    productRating: { rate: 4.6, count: 90 },
    customerReviews: [
      {
        customerName: 'Olivia Santos',
        customerImage: 'https://randomuser.me/api/portraits/women/2.jpg',
        customerReview:
          "I was really excited to get these shoes, but they didn't meet my expectations. They felt uncomfortable after wearing them for a short time, and the color wasn't as vibrant as I expected. Overall, I was disappointed with my purchase.",
        customerRating: 2,
        reviewDate: '11-14-2023',
      },
      {
        customerName: 'Harper Johnson',
        customerImage: 'https://randomuser.me/api/portraits/women/3.jpg',
        customerReview:
          "These shoes are decent. They fit okay, and the design is alright. However, I expected a bit more comfort for the price. They're not bad, but they're not amazing either.",
        customerRating: 3,
        reviewDate: '01-24-2023',
      },
      {
        customerName: 'Noah Garcia',
        customerImage: 'https://randomuser.me/api/portraits/men/1.jpg',
        customerReview:
          "Wow! These shoes are excellent! They are incredibly comfortable, and the design is fantastic. I've been wearing them for both casual outings and athletic activities, and they have exceeded my expectations. Definitely worth the price!",
        customerRating: 5,
        reviewDate: '04-09-2023',
      },
    ],
    sizeOptions: ['W 5 / M 3.5', 'W 6.5 / M 5', 'W 8.5 / M 7', 'W 10 / M 8.5'],
    colorOptions: ['Pale Ivory'],
    shipping: {
      shippingCost: 4.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 2,
    productName: 'Gentle Creeper Bans',
    price: '$265.99',
    description:
      'Discover the Jade sunglasses from Gentle Creeper’s 2023 Collection. This piece is an essential item with a gently flowing round shape and a simple black frame that complements any look. ',
    category: 'Accessories',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707264260/ruqkvoolkb0bbdwgnveo.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707264261/bdvezhhyozzfjncexngv.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Athletic Activities'],
    productRating: { rate: 3.5, count: 10 },
    customerReviews: [
      {
        customerName: 'Harper Johnson',
        customerImage: 'https://randomuser.me/api/portraits/men/3.jpg',
        customerReview:
          'These sunglasses are just okay. The design is nice, but they feel a bit flimsy for the price. I expected better quality from a brand like Gentle Creeper.',
        customerRating: 3,
        reviewDate: '01-05-2024',
      },
      {
        customerName: 'Oliver Davis',
        customerImage: 'https://randomuser.me/api/portraits/men/2.jpg',
        customerReview:
          "I am not impressed with these sunglasses. They look cheap and don't provide enough UV protection. Definitely not worth the high price tag.",
        customerRating: 2,
        reviewDate: '09-07-2023',
      },
      {
        customerName: 'Charlotte Lee',
        customerImage: 'https://randomuser.me/api/portraits/men/4.jpg',
        customerReview:
          "I absolutely love these sunglasses! They are stylish and lightweight, perfect for everyday wear. The lenses provide excellent sun protection, and I've received numerous compliments when wearing them.",
        customerRating: 5,
        reviewDate: '07-11-2023',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['Black'],
    shipping: {
      shippingCost: 'Free Shipping',
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '5-7 business days',
    },
  },
  {
    id: 3,
    productName: 'Vintage Bordeaux Zip Up',
    price: '$160.99',
    description:
      'This Vintage Bordeaux Zip Up is a timeless piece that combines style and comfort. Crafted with attention to detail, it features a classic zip-up design that adds versatility to your wardrobe. Made from high-quality materials, this garment ensures durability and long-lasting wear. ',
    category: "Men's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707525836/u2rb9zknombecf7zkn8z.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707525835/njnef0nsvzf4gzkswilq.jpg',
    ],
    occasion: ['Casual Outings', 'Outdoor Activities', 'Traveling'],
    productRating: { rate: 4.8, count: 2589 },
    customerReviews: [
      {
        customerName: 'Michael Johnson',
        customerImage: 'https://randomuser.me/api/portraits/men/5.jpg',
        customerReview:
          'The Vintage Bordeaux Zip Up exceeded my expectations! It fits perfectly and is incredibly comfortable. The quality of the material is top-notch, and the zip-up design adds a stylish touch. Highly recommend!',
        customerRating: 5,
        reviewDate: '07-18-2023',
      },
      {
        customerName: 'David Smith',
        customerImage: 'https://randomuser.me/api/portraits/men/6.jpg',
        customerReview:
          "I am very pleased with this zip-up. It's versatile and great for layering. The color is exactly as shown, and the material is soft yet durable. Overall, a fantastic addition to my wardrobe.",
        customerRating: 4,
        reviewDate: '04-26-2023',
      },
      {
        customerName: 'Christopher Brown',
        customerImage: 'https://randomuser.me/api/portraits/men/7.jpg',
        customerReview:
          'Disappointed with the quality of this zip-up. It started pilling after just a few wears, and the zipper feels flimsy. Expected better considering the price. Would not purchase again.',
        customerRating: 2,
        reviewDate: '09-09-2023',
      },
    ],
    sizeOptions: ['Small', 'Medium', 'Large', 'X-Large'],
    colorOptions: ['Bordeaux'],
    shipping: {
      shippingCost: 2.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 4,
    productName: 'Ribbed Flared Zip Up',
    price: '$79.00',
    description:
      'Elevate your casual wardrobe with this Ribbed Flared Zip Up. Crafted from soft and stretchy ribbed knit fabric, this t-shirt combines comfort with style effortlessly.',
    category: "Women's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707527358/h8t4ics5rhfilq4pz9mj.webp',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707527359/baw761qc8xobpycmoijt.webp',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 4.7, count: 2539 },
    customerReviews: [
      {
        customerName: 'Emily Johnson',
        customerImage: 'https://randomuser.me/api/portraits/women/5.jpg',
        customerReview:
          "I absolutely adore this Ribbed Flared Zip Up! It's so comfortable and flattering. The ribbed knit fabric feels luxurious, and the flared design adds a stylish flair. Perfect for everyday wear!",
        customerRating: 5,
        reviewDate: '11-20-2023',
      },
      {
        customerName: 'Olivia Smith',
        customerImage: 'https://randomuser.me/api/portraits/women/6.jpg',
        customerReview:
          "I'm in love with this zip-up! The material is soft and stretchy, providing the perfect amount of comfort. The flared style is so trendy, and the fit is amazing. Highly recommend!",
        customerRating: 5,
        reviewDate: '08-15-2023',
      },
      {
        customerName: 'Sophia Brown',
        customerImage: 'https://randomuser.me/api/portraits/women/8.jpg',
        customerReview:
          'Disappointed with the quality of this zip-up. It started pilling after just a few wears, and the zipper feels flimsy. Expected better considering the price. Would not purchase again.',
        customerRating: 2,
        reviewDate: '05-03-2023',
      },
    ],
    sizeOptions: ['Extra Small', 'Small', 'Medium', 'Large'],
    colorOptions: ['Army Green'],
    shipping: {
      shippingCost: 'Free Shipping',
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 5,
    productName: 'Faux Pearl Beaded Bracelet',
    price: '$259.00',
    description:
      "Add an elegant touch to your ensemble with this Simple Faux Pearl Beaded Bracelet. Crafted with faux pearls, this bracelet exudes sophistication and timeless charm. Whether you're dressing up for a special occasion or adding a hint of glamour to your everyday look, this bracelet is the perfect accessory.",
    category: 'Jewelry',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707527319/dolr0idkexpov0kxgoxq.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707527319/jejw8gjjsdozkkkkhxik.webp',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 4.9, count: 322 },
    customerReviews: [
      {
        customerName: 'Emma Thompson',
        customerImage: 'https://randomuser.me/api/portraits/women/10.jpg',
        customerReview:
          "I am thrilled with this bracelet! It looks stunning and feels comfortable to wear. The faux pearls are beautifully crafted, and I've received numerous compliments whenever I wear it. Definitely worth the price!",
        customerRating: 5,
        reviewDate: '03-25-2023',
      },
      {
        customerName: 'Isabella Martinez',
        customerImage: 'https://randomuser.me/api/portraits/women/11.jpg',
        customerReview:
          "I purchased this bracelet for a special event, and it looked gorgeous! However, after wearing it for a few hours, I noticed that some of the pearls were starting to come loose. It's a lovely piece, but I expected better durability.",
        customerRating: 3,
        reviewDate: '04-05-2023',
      },
      {
        customerName: 'Sophia Davis',
        customerImage: 'https://randomuser.me/api/portraits/women/12.jpg',
        customerReview:
          'I bought this bracelet as a gift for my friend, and she absolutely adored it! The pearls are so elegant, and the bracelet has a nice weight to it. It was the perfect accessory to complete her outfit. Highly recommend!',
        customerRating: 4,
        reviewDate: '05-18-2023',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['White'],
    shipping: {
      shippingCost: 8.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 6,
    productName: 'Nylon Cross Mini Bag',
    price: '$859.99',
    description:
      " Elevate your accessory collection with this Luxury Designer Nylon Cross body Mini Bag. Crafted from high-quality nylon, this mini bag exudes luxury and sophistication. Perfect for carrying your essentials, it features a compact design with ample space for your belongings. Whether you're running errands, traveling, or enjoying a casual outing, this crossbody bag adds a touch of elegance to any ensemble.",
    category: 'Accessories',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707525921/xacwvpbhojxlk70ky8b1.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707525922/ip5apnqdwdrjj6fj5kkr.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 2.5, count: 20 },
    customerReviews: [
      {
        customerName: 'Ella Anderson',
        customerImage: 'https://randomuser.me/api/portraits/women/15.jpg',
        customerReview:
          "I am absolutely in love with this bag! It's the perfect size for carrying my essentials, and the nylon material feels durable yet lightweight. The design is sleek and versatile, making it ideal for both casual outings and travel. Highly recommend!",
        customerRating: 5,
        reviewDate: '07-20-2023',
      },
      {
        customerName: 'Grace Evans',
        customerImage: 'https://randomuser.me/api/portraits/women/17.jpg',
        customerReview:
          "This bag is decent, but it's not exactly what I was looking for. The nylon material feels a bit cheap, and the size is smaller than I expected. It's okay for running errands or casual outings, but I wouldn't recommend it for carrying a lot of items.",
        customerRating: 3,
        reviewDate: '08-05-2023',
      },
      {
        customerName: 'Lily Parker',
        customerImage: 'https://randomuser.me/api/portraits/women/18.jpg',
        customerReview:
          "I'm disappointed with the quality of this bag. The nylon started fraying after just a few weeks of use, and the strap broke unexpectedly. It's not worth the high price tag considering the lack of durability. I would not purchase again.",
        customerRating: 1,
        reviewDate: '09-12-2023',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['Alabaster Black'],
    shipping: {
      shippingCost: 'Free Shipping',
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 7,
    productName: "Ban's Beach Sunglasses",
    price: '$125.99',
    description:
      "Elevate your beach attire with these Sun Ban's Beach Sunglasses. These classic round sunglasses are designed with vintage colors, adding a playful touch to your beach ensemble. With anti-glare lenses, these sunglasses provide protection from the sun's rays while ensuring clear vision.",
    category: 'Accessories',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707525918/tgpwvvknwuza5qzzu87v.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707525918/jnroru8kevstclfw98dd.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Athletic Activities'],
    productRating: { rate: 1.5, count: 45 },
    customerReviews: [
      {
        customerName: 'Jack Thompson',
        customerImage: 'https://randomuser.me/api/portraits/men/8.jpg',
        customerReview:
          "I bought these sunglasses for my beach vacation, and they were a total disappointment. The frames felt flimsy, and the lenses scratched easily. They didn't provide much protection from the sun either. Definitely not worth the price.",
        customerRating: 2,
        reviewDate: '10-15-2023',
      },
      {
        customerName: 'James Wilson',
        customerImage: 'https://randomuser.me/api/portraits/men/9.jpg',
        customerReview:
          'I had high hopes for these sunglasses, but they fell short of my expectations. While the design is cool, the quality is lacking. The frames feel cheap, and the lenses distort my vision. Overall, not satisfied with my purchase.',
        customerRating: 2,
        reviewDate: '11-02-2023',
      },
      {
        customerName: 'Ryan Harris',
        customerImage: 'https://randomuser.me/api/portraits/men/10.jpg',
        customerReview:
          'These sunglasses are a complete disappointment. The lenses are too dark, making it difficult to see clearly in bright sunlight. The frames also feel flimsy and easily bend out of shape. I would not recommend these to anyone.',
        customerRating: 1,
        reviewDate: '12-20-2023',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['Black'],
    shipping: {
      shippingCost: 'Free Shipping',
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '5-7 business days',
    },
  },
  {
    id: 8,
    productName: 'Low Top Snuff Suede',
    price: '$159.99',
    description:
      "Elevate your casual footwear collection with these Low Top Snuff Suede shoes. Crafted with high-quality suede, these low-top shoes offer both style and comfort. Their versatile design makes them suitable for various occasions, whether you're going for a casual outing, running errands, or traveling. ",
    category: 'Shoes',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707525837/r6eavykp5sgrl6pcm7e3.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707525836/q12ji2zfltx2grloqp5s.webp',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 4.6, count: 796 },
    customerReviews: [
      {
        customerName: 'Matthew Brown',
        customerImage: 'https://randomuser.me/api/portraits/men/11.jpg',
        customerReview:
          "I absolutely love these shoes! The suede material is high-quality and feels luxurious. They're incredibly comfortable to wear for long periods, and the versatile design makes them perfect for various occasions. Highly recommend!",
        customerRating: 5,
        reviewDate: '01-08-2024',
      },
      {
        customerName: 'William Jones',
        customerImage: 'https://randomuser.me/api/portraits/men/12.jpg',
        customerReview:
          "These shoes exceeded my expectations! The suede is soft yet durable, and the fit is perfect. I've received numerous compliments whenever I wear them. They're now my go-to shoes for everyday wear. Definitely worth the price!",
        customerRating: 5,
        reviewDate: '02-20-2024',
      },
      {
        customerName: 'Daniel Smith',
        customerImage: 'https://randomuser.me/api/portraits/men/14.jpg',
        customerReview:
          "I'm disappointed with the quality of these shoes. The suede material feels cheap, and the stitching started coming apart after just a few wears. They're not as comfortable as I expected either. Overall, not satisfied with my purchase.",
        customerRating: 2,
        reviewDate: '03-15-2024',
      },
    ],
    sizeOptions: ['W 5 / M 3.5', 'W 6.5 / M 5', 'W 8.5 / M 7', 'W 10 / M 8.5'],
    colorOptions: ['Off-White'],
    shipping: {
      shippingCost: 4.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 9,
    productName: 'Manfinity Homme Shirt ',
    price: '$89.99',
    description:
      'Elevate your wardrobe with the Manfinity Homme Patched Detail Shirt. This shirt features unique patched details that add a stylish edge to your look. Crafted with high-quality materials, it ensures both comfort and durability. ',
    category: "Men's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707525836/iegikmgbn0yxydtymonn.webp',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707525836/aeyjn9sndnfxprxj9vsm.webp',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 4.6, count: 37 },
    customerReviews: [
      {
        customerName: 'Michael Davis',
        customerImage: 'https://randomuser.me/api/portraits/men/15.jpg',
        customerReview:
          "I'm very pleased with this shirt! The patched details add a unique touch to my outfit, and the quality of the materials is excellent. It's comfortable to wear and fits true to size. I've received several compliments on it already.",
        customerRating: 5,
        reviewDate: '04-10-2024',
      },
      {
        customerName: 'David Thompson',
        customerImage: 'https://randomuser.me/api/portraits/men/16.jpg',
        customerReview:
          "This shirt is a wardrobe staple for me now! The patched detail gives it a cool, edgy vibe, and the fit is perfect. It's versatile enough to wear for various occasions, and the quality is top-notch. Highly recommend!",
        customerRating: 5,
        reviewDate: '05-05-2024',
      },
      {
        customerName: 'John Wilson',
        customerImage: 'https://randomuser.me/api/portraits/men/18.jpg',
        customerReview:
          "Disappointed with the quality of this shirt. The patched details started fraying after just a couple of washes, and the fabric feels thin and cheap. It's not worth the price in my opinion. Would not purchase again.",
        customerRating: 2,
        reviewDate: '06-20-2024',
      },
    ],
    sizeOptions: ['Small', 'Medium', 'Large', 'X-Large'],
    colorOptions: ['Acid Blue'],
    shipping: {
      shippingCost: 2.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 10,
    productName: 'Foldover Off-shoulder Shirt',
    price: '$79.99',
    description:
      "Designed to showcase your shoulders, this cropped tee adds a touch of femininity to your ensemble. The foldover detail enhances the neckline, while the cropped length creates a flattering silhouette. Whether you're heading out for a casual outing, running errands, or traveling, this t-shirt is a versatile and stylish choice.",
    category: "Women's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707527359/jzmxzqqbzfhtvrd6j424.webp',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707527359/vraiprev8k5s7vjetphb.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 3.0, count: 20 },
    customerReviews: [
      {
        customerName: 'Sophia Johnson',
        customerImage: 'https://randomuser.me/api/portraits/women/19.jpg',
        customerReview:
          "I'm disappointed with this off-shoulder shirt. The fabric feels cheap and uncomfortable against the skin. Additionally, the foldover detail doesn't lay nicely and tends to bunch up. Not worth the price in my opinion.",
        customerRating: 2,
        reviewDate: '08-02-2024',
      },
      {
        customerName: 'Emma Wilson',
        customerImage: 'https://randomuser.me/api/portraits/women/20.jpg',
        customerReview:
          "This off-shoulder shirt exceeded my expectations! The fabric is soft and breathable, making it perfect for hot summer days. The foldover detail adds a stylish flair, and the cropped length is just right. I've received compliments every time I wear it!",
        customerRating: 5,
        reviewDate: '09-10-2024',
      },
      {
        customerName: 'Olivia Harris',
        customerImage: 'https://randomuser.me/api/portraits/women/21.jpg',
        customerReview:
          "I'm not a fan of this off-shoulder shirt. The fit is awkward, and the foldover detail feels unnecessary. It also shrunk significantly after the first wash. Overall, I wouldn't recommend this shirt.",
        customerRating: 2,
        reviewDate: '10-25-2024',
      },
    ],
    sizeOptions: ['Small', 'Medium', 'Large', 'X-Large'],
    colorOptions: ['Acid Blue'],
    shipping: {
      shippingCost: 4.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 11,
    productName: 'Flutter 14k Gold Necklace',
    price: '$259.89',
    description:
      'Elevate your style with our exquisite 14k Gold Necklace, a delicate and enchanting piece that adds a touch of elegance to any ensemble. Crafted with meticulous attention to detail, this necklace features a charming butterfly pendant crafted from stunning 14k gold, radiating a timeless allure.',
    category: 'Jewelry',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707527319/ftfoc7uwwb4jvhvfhnre.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707527319/wt4t2owhzslqfaxmx8fz.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 3.1, count: 490 },
    customerReviews: [
      {
        customerName: 'Ava Brown',
        customerImage: 'https://randomuser.me/api/portraits/women/22.jpg',
        customerReview:
          "Absolutely love this necklace! The butterfly pendant is exquisite, and the 14k gold shines beautifully. It's become my favorite piece of jewelry, and I wear it every day. Highly recommend!",
        customerRating: 5,
        reviewDate: '02-08-2025',
      },
      {
        customerName: 'Sophie White',
        customerImage: 'https://randomuser.me/api/portraits/women/24.jpg',
        customerReview:
          "This necklace exceeded my expectations! The butterfly pendant is so intricate and delicate, and the 14k gold adds a touch of luxury. It's versatile enough to wear with any outfit, and I've received countless compliments on it.",
        customerRating: 5,
        reviewDate: '03-15-2025',
      },
      {
        customerName: 'Grace Miller',
        customerImage: 'https://randomuser.me/api/portraits/women/25.jpg',
        customerReview:
          "I'm thrilled with this necklace! The butterfly pendant is absolutely stunning, and the quality of the 14k gold is evident. It's the perfect accessory to elevate any look, and I couldn't be happier with my purchase.",
        customerRating: 5,
        reviewDate: '04-22-2025',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['Gold/Sliver'],
    shipping: {
      shippingCost: 12.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 12,
    productName: '14k Gold Hearted Necklace',
    price: '$159.89',
    description:
      'Embrace royalty with our stunning 14k Gold Plated Crowned Necklace, a regal accessory that exudes elegance and sophistication. This exquisite Necklace features a majestic heart design, plated with radiant 14k gold, adding a touch of opulence to your everyday attire. Perfect for casual outings, everyday wear, or even while traveling, this versatile piece effortlessly elevates any look with its timeless charm.',
    category: 'Jewelry',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707527319/taablywdappspmx8p1b3.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707527319/fkyrospkgnpqi7krtpny.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 2.5, count: 89 },
    customerReviews: [
      {
        customerName: 'Ella Johnson',
        customerImage: 'https://randomuser.me/api/portraits/women/26.jpg',
        customerReview:
          "The design of this necklace is lovely, and the gold plating adds a nice touch of elegance. However, I was a bit disappointed with the quality. After wearing it for a few weeks, the gold started to fade in some areas. Overall, it's a decent necklace for the price.",
        customerRating: 3,
        reviewDate: '06-10-2024',
      },
      {
        customerName: 'Mia Thompson',
        customerImage: 'https://randomuser.me/api/portraits/women/27.jpg',
        customerReview:
          "I had high hopes for this necklace, but I'm not entirely impressed. While the design is cute, the chain feels quite flimsy, and the clasp doesn't seem very secure. It's okay for occasional wear, but I wouldn't recommend it for everyday use.",
        customerRating: 3,
        reviewDate: '07-25-2024',
      },
      {
        customerName: 'Lily Wilson',
        customerImage: 'https://randomuser.me/api/portraits/women/28.jpg',
        customerReview:
          "This necklace is decent, but it didn't wow me like I had hoped. The heart design is charming, but the gold plating looks a bit cheap up close. It's a nice accessory for casual outings, but I'm not sure how well it will hold up over time.",
        customerRating: 3,
        reviewDate: '08-30-2024',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['Gold/Sliver'],
    shipping: {
      shippingCost: 2.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 13,
    productName: 'Summit 2-Layer Jacket',
    price: '$99.99',
    description:
      "conquer the elements in style with our Summit Shield 2-Layer Men's Jacket, a rugged yet fashionable outerwear essential designed for the modern man. Crafted with durability and versatility in mind, this jacket features two layers for added protection against the elements, ensuring you stay warm and dry during your adventures. Whether you're heading out for casual outings, everyday wear, or engaging in athletic activities, this jacket is your go-to choice",
    category: "Men's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707526247/opatbujxnxrymtbnb8vf.webp',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707526247/wmtd48aod1j3xj989dy5.webp',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707526247/cvdnq5lferieiawxjzpz.webp',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Athletic Activities'],
    productRating: { rate: 5.0, count: 93 },
    customerReviews: [
      {
        customerName: 'James Smith',
        customerImage: 'https://randomuser.me/api/portraits/men/19.jpg',
        customerReview:
          "I absolutely love this jacket! It's incredibly durable and provides excellent protection against the elements. The two-layer design keeps me warm and dry, even in harsh weather conditions. Plus, it looks stylish and versatile enough to wear for any occasion. Highly recommend!",
        customerRating: 5,
        reviewDate: '03-12-2024',
      },
      {
        customerName: 'William Johnson',
        customerImage: 'https://randomuser.me/api/portraits/men/20.jpg',
        customerReview:
          "This jacket is top-notch! The quality is exceptional, and it's clear that it's built to last. I appreciate the attention to detail in the design, especially the two-layer construction that provides superior insulation and protection. It's become my favorite jacket!",
        customerRating: 5,
        reviewDate: '04-25-2024',
      },
      {
        customerName: 'Michael Wilson',
        customerImage: 'https://randomuser.me/api/portraits/men/21.jpg',
        customerReview:
          "I couldn't be happier with this jacket! The Summit 2-Layer Jacket is perfect for outdoor adventures or everyday wear. It keeps me warm and dry in all kinds of weather, and the fit is comfortable and flattering. It's definitely worth the investment!",
        customerRating: 5,
        reviewDate: '05-30-2024',
      },
    ],
    sizeOptions: ['Medium', 'Large'],
    colorOptions: ['Forest Green'],
    shipping: {
      shippingCost: 7.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 14,
    productName: 'Gentle Creeper Nylon',
    price: '$89.50',
    description:
      'Our Gentle Creeper Nylon Strapped Bag, a sleek and versatile essential designed to complement your on-the-go lifestyle. Crafted from durable nylon material, this bag combines practicality with style, making it perfect for casual outings, everyday wear, or even athletic activities',
    category: 'Accessories',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707529800/dde5vwvbsmzo5y53fypc.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707529800/h0ybbc3uyxtkxpikfbhx.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Athletic Activities'],
    productRating: { rate: 2.5, count: 10 },
    customerReviews: [
      {
        customerName: 'Ryan Williams',
        customerImage: 'https://randomuser.me/api/portraits/men/22.jpg',
        customerReview:
          'This bag is terrible! The nylon material is extremely flimsy and started tearing after just a few uses. The strap broke within a week, making the bag unusable. Complete waste of money.',
        customerRating: 1,
        reviewDate: '08-15-2024',
      },
      {
        customerName: 'David Thompson',
        customerImage: 'https://randomuser.me/api/portraits/men/23.jpg',
        customerReview:
          "Do not buy this bag! It's poorly made and falls apart easily. The strap is uncomfortable and digs into my shoulder. Save your money and invest in a better quality bag.",
        customerRating: 1,
        reviewDate: '09-20-2024',
      },
      {
        customerName: 'Christopher Harris',
        customerImage: 'https://randomuser.me/api/portraits/men/24.jpg',
        customerReview:
          "I'm extremely disappointed with this bag. The nylon material is cheap and tears easily. The strap broke on the first day of use, and the stitching started unraveling. Avoid this bag at all costs.",
        customerRating: 1,
        reviewDate: '10-10-2024',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['Black'],
    shipping: {
      shippingCost: 1.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 15,
    productName: 'South Mater Cap',
    price: '$89.50',
    description:
      'Top off your look with the South Mater Baseball Cap, a classic accessory that blends style and functionality seamlessly. Crafted with care and attention to detail, this baseball cap is the perfect choice for casual outings, everyday wear, or engaging in athletic activities. The rich dark brown color option adds a touch of sophistication to any outfit',
    category: 'Accessories',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707350080/fe6ughj1smuobkvhqj93.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707350081/lt7t4x6cjb9wb4xwyr7d.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Athletic Activities'],
    productRating: { rate: 3.2, count: 33 },
    customerReviews: [
      {
        customerName: 'Daniel Brown',
        customerImage: 'https://randomuser.me/api/portraits/men/26.jpg',
        customerReview:
          "I'm quite pleased with this baseball cap. It fits well and feels comfortable to wear. The dark brown color adds a nice touch of sophistication to my outfits. Overall, a solid choice for everyday wear.",
        customerRating: 4,
        reviewDate: '07-12-2024',
      },
      {
        customerName: 'Matthew Taylor',
        customerImage: 'https://randomuser.me/api/portraits/men/27.jpg',
        customerReview:
          "The South Mater Baseball Cap is okay, but it didn't exceed my expectations. The fit is a bit off for me, and the material feels average. It serves its purpose as a casual cap, but I wouldn't say it's anything special.",
        customerRating: 3,
        reviewDate: '09-05-2024',
      },
      {
        customerName: 'Christopher Martinez',
        customerImage: 'https://randomuser.me/api/portraits/men/28.jpg',
        customerReview:
          "I'm not impressed with this baseball cap. The quality is lacking, and the stitching started coming undone after just a few wears. The color is nice, but that's about it. Wouldn't recommend.",
        customerRating: 2,
        reviewDate: '10-22-2024',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['Dark Brown'],
    shipping: {
      shippingCost: 'Free Shipping',
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 16,
    productName: 'Vivian Lemu Windbreaker',
    price: '$89.99',
    description:
      "rave the elements in style with the Vivian Lemu Zip Collar Windbreaker, a sleek and functional addition to any man's wardrobe. Crafted with durability and versatility in mind, this windbreaker is perfect for casual outings, outdoor activities, or traveling adventures. The zip collar design provides added protection against the wind, while the classic black color option ensures timeless appeal.",
    category: "Men's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707350141/foxbesuafdhmpruunw81.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707350142/fw3twjkwbm2ceoobn2z9.jpg',
    ],
    occasion: ['Casual Outings', 'Outdoor Activities', 'Traveling'],
    productRating: { rate: 4.1, count: 29 },
    customerReviews: [
      {
        customerName: "Brian O'Connor",
        customerImage: 'https://randomuser.me/api/portraits/men/29.jpg',
        customerReview:
          "I'm really impressed with the Vivian Lemu Windbreaker. It's lightweight yet offers great protection against the wind. The zip collar design is a nice touch and adds extra warmth when needed. The black color is versatile and goes well with any outfit. Highly recommend!",
        customerRating: 5,
        reviewDate: '08-20-2024',
      },
      {
        customerName: 'Mark Rica',
        customerImage: 'https://randomuser.me/api/portraits/men/32.jpg',
        customerReview:
          "This windbreaker exceeded my expectations. The quality is outstanding, and it's evident that it's built to last. It provides excellent protection against the elements without sacrificing style. The black color looks sleek, and the zip collar adds a unique touch. Definitely worth the investment!",
        customerRating: 5,
        reviewDate: '09-10-2024',
      },
      {
        customerName: 'Andrew Garcia',
        customerImage: 'https://randomuser.me/api/portraits/men/31.jpg',
        customerReview:
          "I'm quite satisfied with this windbreaker. It's comfortable to wear and offers decent protection against the wind. However, I found the sizing to be a bit off - it runs slightly small. Overall, it's a good option for casual outings and outdoor activities.",
        customerRating: 4,
        reviewDate: '10-05-2024',
      },
    ],
    sizeOptions: ['Small', 'Medium', 'X-Large'],
    colorOptions: ['Black'],
    shipping: {
      shippingCost: 2.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 17,
    productName: 'Lox Voyage Collared Shirt',
    price: '$99.95',
    description:
      "Elevate your casual style with the Lox Voyage Classic Collared Shirt, a versatile and sophisticated addition to any man's wardrobe. Crafted with attention to detail, this button-up shirt is perfect for casual outings, outdoor activities, or traveling adventures. The collared design adds a touch of refinement, while the white/tan color option exudes timeless charm. ",
    category: "Men's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707350189/h2wuos3psou0oy5axmak.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707350189/snhbr30h2nndfyeuyg08.jpg',
    ],
    occasion: ['Casual Outings', 'Outdoor Activities', 'Traveling'],
    productRating: { rate: 2.8, count: 289 },
    customerReviews: [
      {
        customerName: "Ryan O'Brien",
        customerImage: 'https://randomuser.me/api/portraits/men/33.jpg',
        customerReview:
          'I had high hopes for the Lox Voyage Collared Shirt, but unfortunately, it fell short of my expectations. The material feels cheap, and the stitching is subpar. Additionally, the sizing is inconsistent - it runs smaller than expected. Overall, not worth the price.',
        customerRating: 2,
        reviewDate: '07-28-2024',
      },
      {
        customerName: 'Matthew Johnson',
        customerImage: 'https://randomuser.me/api/portraits/men/34.jpg',
        customerReview:
          "This shirt is a disappointment. The quality is lacking, and it doesn't hold up well after washing. The collar loses its shape, and the fabric wrinkles easily. I expected better from a shirt at this price point. Would not recommend.",
        customerRating: 1,
        reviewDate: '08-15-2024',
      },
      {
        customerName: 'Micky Smith',
        customerImage: 'https://randomuser.me/api/portraits/men/36.jpg',
        customerReview:
          "Not impressed with the Lox Voyage Collared Shirt. The material feels rough and uncomfortable against the skin. The fit is also off - it's too tight in some areas and too loose in others. Definitely not worth the money.",
        customerRating: 1,
        reviewDate: '09-05-2024',
      },
    ],
    sizeOptions: ['Small', 'X-Large'],
    colorOptions: ['White/Tan'],
    shipping: {
      shippingCost: 4.0,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 18,
    productName: 'Striped Sleeve Zip Up',
    price: '$79.89',
    description:
      "Step up your style game with the Striped Sleeve Zip-Up, a trendy and versatile addition to any man's wardrobe. This zip-up jacket features stylish striped sleeves that add a pop of personality to your ensemble. Perfect for casual outings, outdoor activities, or traveling adventures, this jacket is both fashionable and functional. The white/black color option offers a sleek and modern look that pairs well with any outfit.",
    category: "Men's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707350232/imo8hgklwk1lm44p9xuz.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707350232/vt9s0ihnb0sia9nrwtcy.jpg',
    ],
    occasion: ['Casual Outings', 'Outdoor Activities', 'Traveling'],
    productRating: { rate: 5.0, count: 15 },
    customerReviews: [
      {
        customerName: 'Michael Adams',
        customerImage: 'https://randomuser.me/api/portraits/men/37.jpg',
        customerReview:
          "Absolutely love the Striped Sleeve Zip Up! The design is unique and adds a stylish flair to my outfit. The jacket is comfortable to wear, and the material feels high-quality. I've received numerous compliments whenever I wear it. Highly recommend!",
        customerRating: 5,
        reviewDate: '07-10-2024',
      },
      {
        customerName: 'David Wilson',
        customerImage: 'https://randomuser.me/api/portraits/men/38.jpg',
        customerReview:
          "This jacket is fantastic! The striped sleeves are a cool touch, and the fit is perfect. It's lightweight yet provides just the right amount of warmth. The white/black color combination is versatile and easy to match with other clothing. Overall, extremely satisfied with my purchase.",
        customerRating: 5,
        reviewDate: '08-05-2024',
      },
      {
        customerName: 'James Thompson',
        customerImage: 'https://randomuser.me/api/portraits/men/40.jpg',
        customerReview:
          "The Striped Sleeve Zip Up exceeded my expectations. It's stylish, comfortable, and well-made. The striped sleeves add a trendy touch, and the jacket is suitable for various occasions. The white/black color option looks sharp and modern. Definitely a must-have in any wardrobe!",
        customerRating: 5,
        reviewDate: '09-20-2024',
      },
    ],
    sizeOptions: ['Small', 'Large', 'X-Large'],
    colorOptions: ['White/Black'],
    shipping: {
      shippingCost: 'Free Shipping',
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 19,
    productName: 'Timmy Plaidman Heritage Plaid',
    price: '$89.99',
    description:
      "ntroducing the Timmy Plaidman Button-Up, a classic and versatile addition to any man's wardrobe. Crafted with comfort and style in mind, this button-up shirt features a timeless plaid pattern that adds a touch of sophistication to your look. Perfect for casual outings, outdoor activities, or traveling adventures, this shirt offers both style and functionality.",
    category: "Men's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707350277/khx6w4dt5pexixcfh0bm.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707350277/ibdhaksgxepddmieadco.jpg',
    ],
    occasion: ['Casual Outings', 'Outdoor Activities', 'Traveling'],
    productRating: { rate: 1.0, count: 492 },
    customerReviews: [
      {
        customerName: "Robert O'Connor",
        customerImage: 'https://randomuser.me/api/portraits/men/42.jpg',
        customerReview:
          'Disappointed with the Timmy Plaidman Heritage Plaid shirt. The material feels cheap and itchy, and the fit is awkward. The plaid pattern looks better in the pictures than in person. Would not recommend this shirt.',
        customerRating: 1,
        reviewDate: '06-15-2024',
      },
      {
        customerName: 'Daniel Wilson',
        customerImage: 'https://randomuser.me/api/portraits/men/43.jpg',
        customerReview:
          'This shirt is terrible. The quality is poor, and the stitching is uneven. It looks and feels like it will fall apart after a few wears. Definitely not worth the price. Avoid buying this shirt.',
        customerRating: 1,
        reviewDate: '07-02-2024',
      },
      {
        customerName: 'Kevin Smith',
        customerImage: 'https://randomuser.me/api/portraits/men/44.jpg',
        customerReview:
          'Not impressed with the Timmy Plaidman Heritage Plaid shirt. The fabric is uncomfortable and stiff, and the fit is off. Additionally, the colors in the plaid pattern are dull and unattractive. Overall, a disappointing purchase.',
        customerRating: 1,
        reviewDate: '08-20-2024',
      },
    ],
    sizeOptions: ['Large', 'X-Large', 'XX-Large'],
    colorOptions: ['White/Brown'],
    shipping: {
      shippingCost: 'Free Shipping',
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 20,
    productName: 'Ezra Lu Blazer Fall 23',
    price: '$69.99',
    description:
      "Wrap yourself in comfort and style with the Ezra Lu Blazer Fall 23, the perfect addition to any woman's wardrobe this season. Crafted from soft and cozy materials, this striped sweater is designed for casual outings, everyday wear, or traveling adventures",
    category: "Women's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707525835/ufjbmfrkwyrhbrpubltr.webp',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707525837/ryxidnxtg6phxecilgj0.webp',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 4.1, count: 43 },
    customerReviews: [
      {
        customerName: 'Emily lee',
        customerImage: 'https://randomuser.me/api/portraits/women/29.jpg',
        customerReview:
          "Absolutely love the Ezra Lu Blazer Fall 23! It's incredibly soft and comfortable, perfect for chilly fall days. The striped design adds a stylish touch, and it pairs well with jeans or leggings. I've received many compliments whenever I wear it. Highly recommend!",
        customerRating: 5,
        reviewDate: '09-10-2024',
      },
      {
        customerName: 'Mya Williams',
        customerImage: 'https://randomuser.me/api/portraits/women/30.jpg',
        customerReview:
          'The Ezra Lu Blazer Fall 23 exceeded my expectations. The material is so soft and cozy, and the fit is perfect. I love the striped pattern - it adds a fun pop of color to my outfit. This blazer has quickly become a staple in my wardrobe. Would definitely buy again!',
        customerRating: 5,
        reviewDate: '09-22-2024',
      },
      {
        customerName: 'Emma Johnson',
        customerImage: 'https://randomuser.me/api/portraits/women/31.jpg',
        customerReview:
          "I'm really impressed with the Ezra Lu Blazer Fall 23. It's not only stylish but also incredibly comfortable to wear. The striped design is versatile and easy to mix and match with other clothing. Whether I'm running errands or going out with friends, this blazer is my go-to choice.",
        customerRating: 5,
        reviewDate: '10-05-2024',
      },
    ],
    sizeOptions: ['Small', 'X-Large'],
    colorOptions: ['White/Tan'],
    shipping: {
      shippingCost: 1.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 21,
    productName: 'Cozy Chic Tan Cardigan',
    price: '$110.99',
    description:
      "tep into cozy elegance with the Nighty Cozy Cardigan, a versatile piece that seamlessly blends comfort with style. Crafted for the modern woman's lifestyle, this cardigan is perfect for casual outings.  Its warm and soft fabric envelops you in comfort, while the chic tan color adds a touch of sophistication to any ensemble. ",
    category: "Women's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707351270/oz4fu9tcb0kxbec53taa.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707351270/d4lij6pekaaybo0loirn.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 4.9, count: 643 },
    customerReviews: [
      {
        customerName: 'Aria Smith',
        customerImage: 'https://randomuser.me/api/portraits/women/32.jpg',
        customerReview:
          "Absolutely adore the Cozy Chic Tan Cardigan! It's so soft and cozy, perfect for chilly evenings. The tan color is versatile and goes well with many outfits. I love wearing it for casual outings or just lounging at home. Highly recommend!",
        customerRating: 5,
        reviewDate: '11-15-2024',
      },
      {
        customerName: 'Luna Rivera',
        customerImage: 'https://randomuser.me/api/portraits/women/33.jpg',
        customerReview:
          "The Nighty Cozy Cardigan is my new favorite piece in my wardrobe! It's incredibly comfortable and the tan color is gorgeous. The fabric is soft and warm, perfect for the colder months. I wear it everywhere - from running errands to cozy nights in. Definitely a must-have!",
        customerRating: 5,
        reviewDate: '11-20-2024',
      },
      {
        customerName: 'Willow Harper',
        customerImage: 'https://randomuser.me/api/portraits/women/34.jpg',
        customerReview:
          "I am obsessed with the Cozy Chic Tan Cardigan! It's super cozy and the tan color is beautiful. The fabric is soft and luxurious, and it keeps me warm on chilly days. I've received so many compliments whenever I wear it. Definitely worth every penny!",
        customerRating: 5,
        reviewDate: '11-25-2024',
      },
    ],
    sizeOptions: ['Small'],
    colorOptions: ['Tan'],
    shipping: {
      shippingCost: 6.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 22,
    productName: 'Lemu Ribbon Flare Dress',
    price: '$149.99',
    description:
      "Indulge in effortless sophistication with the Lemu Sleek Ribbon Flare Dress, a timeless piece that exudes grace and style. Perfect for any occasion, whether it's casual outings, everyday wear, or traveling adventures, this dress is designed to elevate your look with its sleek silhouette and elegant ribbon detailing. The classic black color option adds versatility and ensures easy pairing with your favorite accessories.",
    category: "Women's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707351632/lsknofpkaey49ajn6gvc.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707351633/hqcilxk2tnhixxpsvvcc.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 3.1, count: 230 },
    customerReviews: [
      {
        customerName: 'Fiona Everhart',
        customerImage: 'https://randomuser.me/api/portraits/women/35.jpg',
        customerReview:
          "I absolutely love the Lemu Ribbon Flare Dress! It fits perfectly and the ribbon detailing adds a touch of elegance to the dress. The material is high-quality and comfortable to wear. I've received so many compliments whenever I wear it. Highly recommend!",
        customerRating: 5,
        reviewDate: '12-03-2024',
      },
      {
        customerName: 'Violet Montgomery',
        customerImage: 'https://randomuser.me/api/portraits/women/42.jpg',
        customerReview:
          'The Lemu Sleek Ribbon Flare Dress is stunning! The silhouette is so flattering and the ribbon detailing is a beautiful touch. The dress is versatile and can be dressed up or down for any occasion. I feel confident and elegant every time I wear it. Definitely a wardrobe staple!',
        customerRating: 5,
        reviewDate: '12-10-2024',
      },
      {
        customerName: 'Serena Blake',
        customerImage: 'https://randomuser.me/api/portraits/women/43.jpg',
        customerReview:
          "I'm impressed with the Lemu Ribbon Flare Dress! The design is elegant and the fit is perfect. The ribbon detailing adds a unique touch to the dress. It's comfortable to wear and perfect for various occasions. I've already received compliments on it. Highly recommend!",
        customerRating: 5,
        reviewDate: '12-17-2024',
      },
    ],
    sizeOptions: ['Small', 'Medium'],
    colorOptions: ['Black'],
    shipping: {
      shippingCost: 10.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 23,
    productName: 'Lemu Rogue Flare Dress',
    price: '$139.89',
    description:
      "Embrace timeless elegance with the Lemu Elegant Wide Neck Flare Dress, a sophisticated addition to any woman's wardrobe. Crafted with meticulous attention to detail, this dress features a flattering wide neckline and a graceful flare silhouette, perfect for casual outings,",
    category: "Women's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707351782/ucaocj4rpagvmgtqhqof.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707351782/v2zrl6k2rwyp0rhkbqkv.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 3.7, count: 340 },
    customerReviews: [
      {
        customerName: 'Eleanor Bishop',
        customerImage: 'https://randomuser.me/api/portraits/women/44.jpg',
        customerReview:
          "The Lemu Elegant Wide Neck Flare Dress is absolutely stunning! The wide neckline and flare silhouette are so flattering, and the dress is incredibly comfortable to wear. It's perfect for casual outings or everyday wear. I've received so many compliments whenever I wear it. Highly recommend!",
        customerRating: 5,
        reviewDate: '01-05-2023',
      },
      {
        customerName: 'Scarlett Andrews',
        customerImage: 'https://randomuser.me/api/portraits/women/46.jpg',
        customerReview:
          'I adore the Lemu Rogue Flare Dress! The wide neckline adds a touch of elegance, and the flare silhouette is so chic. The dress is versatile and perfect for any occasion. The fabric is high-quality and comfortable. I feel confident and stylish every time I wear it. Definitely a must-have!',
        customerRating: 5,
        reviewDate: '01-12-2023',
      },
      {
        customerName: 'Gemma Cooper',
        customerImage: 'https://randomuser.me/api/portraits/women/48.jpg',
        customerReview:
          "I'm in love with the Lemu Elegant Wide Neck Flare Dress! The design is classic and elegant, and the fit is perfect. The flare silhouette is so flattering, and the dress is comfortable to wear. It's perfect for casual outings or special occasions. Highly recommend!",
        customerRating: 5,
        reviewDate: '01-19-2023',
      },
    ],
    sizeOptions: ['Small', 'Medium', 'Large'],
    colorOptions: ['Rogue Green'],
    shipping: {
      shippingCost: 1.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 24,
    productName: 'Lanza Ribbed skirt  ',
    price: '$99.99',
    description:
      'Elevate your style with the Lanza Sporty Ribbed Skirt, a versatile and chic piece that combines comfort with sophistication. Designed for the modern woman on the go, this skirt is perfect for casual outings, everyday wear, or traveling adventures. Crafted with ribbed detailing, it adds a sporty yet refined touch to your ensemble. The classic black color option ensures effortless pairing with a variety of tops and accessories. ',
    category: "Women's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707352147/sco1fyxxdsq1m21sb0h0.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707352148/eskvlm3mh2jykc9uyl3m.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 5.0, count: 3498 },
    customerReviews: [
      {
        customerName: 'Lila Morrison',
        customerImage: 'https://randomuser.me/api/portraits/women/49.jpg',
        customerReview:
          "The Lanza Sporty Ribbed Skirt is fantastic! It's so comfortable to wear, and the ribbed detailing adds a unique touch to the design. I love how versatile it is—I can wear it for casual outings, everyday wear, or even while traveling. The black color option goes well with everything in my wardrobe. Highly recommend!",
        customerRating: 5,
        reviewDate: '05-02-2023',
      },
      {
        customerName: 'Aurora Brooks',
        customerImage: 'https://randomuser.me/api/portraits/women/50.jpg',
        customerReview:
          "I absolutely adore the Lanza Ribbed Skirt! The ribbed detailing gives it a chic and sophisticated look, and the fabric is high-quality and comfortable. It's perfect for any occasion, whether it's casual outings or everyday wear. The black color option is versatile and easy to style. I highly recommend adding this skirt to your wardrobe!",
        customerRating: 5,
        reviewDate: '10-02-2023',
      },
      {
        customerName: 'Sienna Parker',
        customerImage: 'https://randomuser.me/api/portraits/women/52.jpg',
        customerReview:
          "The Lanza Sporty Ribbed Skirt is my new favorite piece! It's stylish, comfortable, and versatile—I can wear it for any occasion. The ribbed detailing adds a unique touch, and the black color option makes it easy to pair with different tops and accessories. I've received so many compliments whenever I wear it. Highly recommend!",
        customerRating: 5,
        reviewDate: '15-02-2023',
      },
    ],
    sizeOptions: ['Small', 'Medium'],
    colorOptions: ['Black'],
    shipping: {
      shippingCost: 'Free Shipping',
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 25,
    productName: 'Mochi Clare Leggings',
    price: '$109.99',
    description:
      'Introducing the Mochi Clare Leggings, the ultimate blend of comfort and style for the modern woman. Crafted with meticulous attention to detail, these leggings are perfect for casual outings, everyday wear, or traveling adventures. Designed to provide a flattering and comfortable fit, they are available in extra small and small sizes to accommodate a variety of body types. The rich coco brown color option adds a touch of sophistication to your ensemble, making these leggings a versatile wardrobe essential. ',
    category: "Women's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707352292/awdnsewcfw5g5785ge8f.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707352292/xjt3huvwwieiukganuu7.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Athletic Activities'],
    productRating: { rate: 5.0, count: 578 },
    customerReviews: [
      {
        customerName: 'Nina Sinclair',
        customerImage: 'https://randomuser.me/api/portraits/women/54.jpg',
        customerReview:
          "I am absolutely in love with the Mochi Clare Leggings! They are incredibly comfortable and fit perfectly. The coco brown color is so rich and versatile, making them suitable for any occasion. Whether I'm out for a casual outing or hitting the gym, these leggings are my go-to choice. Highly recommend them!",
        customerRating: 5,
        reviewDate: '03-07-2023',
      },
      {
        customerName: 'Violet Morgan',
        customerImage: 'https://randomuser.me/api/portraits/women/55.jpg',
        customerReview:
          'These leggings are fantastic! The Mochi Clare Leggings offer the perfect blend of comfort and style. The coco brown color is gorgeous, and the fit is flattering. I can wear them for casual outings, everyday wear, or even athletic activities. They are so versatile and have become a staple in my wardrobe. Highly recommend!',
        customerRating: 5,
        reviewDate: '08-07-2023',
      },
      {
        customerName: 'Aria Jensen',
        customerImage: 'https://randomuser.me/api/portraits/women/56.jpg',
        customerReview:
          "I can't say enough good things about the Mochi Clare Leggings! They are incredibly comfortable, and the fit is perfect. The coco brown color is beautiful and goes well with various tops. I wear them for everything—casual outings, everyday wear, and even when I'm working out. These leggings are a must-have!",
        customerRating: 5,
        reviewDate: '15-07-2023',
      },
    ],
    sizeOptions: ['Extra Small', 'Small'],
    colorOptions: ['Coco Brown'],
    shipping: {
      shippingCost: 2.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 26,
    productName: 'Mochi Laysi Leggings',
    price: '$99.99',
    description:
      'Introducing the Mochi Laysi Leggings, the epitome of comfort and style for the active woman. Crafted with precision and care, these leggings are perfect for casual outings, everyday wear, or engaging in athletic activities. Designed to provide a flattering fit, they are available in medium and large sizes to suit a range of body types. The sleek noir color option adds a touch of sophistication to your look, making these leggings a versatile addition to your wardrobe. ',
    category: "Women's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707352474/enwl7uvwytxcjsswoklk.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707352474/insnjjs06fzv7hea6yfj.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Athletic Activities'],
    productRating: { rate: 3.8, count: 242 },
    customerReviews: [
      {
        customerName: 'Samantha Rivers',
        customerImage: 'https://randomuser.me/api/portraits/women/57.jpg',
        customerReview:
          "The Mochi Laysi Leggings are quite comfortable, and the sleek noir color gives them a stylish edge. However, I found the fit to be a bit off for my body type. They tend to ride up during workouts, which can be a bit annoying. Overall, they're okay for casual wear, but I wouldn't recommend them for intense athletic activities.",
        customerRating: 3,
        reviewDate: '05-15-2023',
      },
      {
        customerName: 'Isabella Knight',
        customerImage: 'https://randomuser.me/api/portraits/women/58.jpg',
        customerReview:
          "I'm a bit disappointed with the Mochi Laysi Leggings. While they are comfortable for casual wear, they don't offer much support during workouts. The fabric feels a bit flimsy, and the fit is not as flattering as I had hoped. The noir color is nice, but overall, I expected better quality for the price.",
        customerRating: 2,
        reviewDate: '06-20-2023',
      },
      {
        customerName: 'Olivia Chen',
        customerImage: 'https://randomuser.me/api/portraits/women/59.jpg',
        customerReview:
          "I love the sleek look of the Mochi Laysi Leggings! The noir color is so chic, and they are comfortable for everyday wear. However, I wish they had more stretch to accommodate different body types. The fit is a bit tight around the waist for me. Overall, they're decent leggings, but I wouldn't recommend them for intense workouts.",
        customerRating: 3,
        reviewDate: '07-10-2023',
      },
    ],
    sizeOptions: ['Medium', 'Large'],
    colorOptions: ['Noir'],
    shipping: {
      shippingCost: 8.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 27,
    productName: 'Mac-io Acid Wash Jeans',
    price: '$108.99',
    description:
      "Introducing the Mac-io Acid Wash Jeans, a stylish and versatile choice for the modern man's wardrobe. Crafted with attention to detail, these jeans are perfect for casual outings, outdoor activities, or traveling adventures. The acid wash design adds a trendy touch to your ensemble, while the snow blue color option lends a cool and contemporary vibe. ",
    category: "Men's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707352789/eyxz7ccfakarnf7qxeu0.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707352790/f8amjx0wady4a5npmknh.webp',
    ],
    occasion: ['Casual Outings', 'Outdoor Activities', 'Traveling'],
    productRating: { rate: 1.0, count: 15 },
    customerReviews: [
      {
        customerName: 'Jack Reynolds',
        customerImage: 'https://randomuser.me/api/portraits/men/46.jpg',
        customerReview:
          'The Mac-io Acid Wash Jeans exceeded my expectations. The fit is perfect, and the fabric feels comfortable and durable. The acid wash design adds a stylish touch, and the snow blue color is exactly as shown in the pictures. Overall, very satisfied with this purchase!',
        customerRating: 5,
        reviewDate: '03-12-2023',
      },
      {
        customerName: 'William Hayes',
        customerImage: 'https://randomuser.me/api/portraits/men/47.jpg',
        customerReview:
          'I love the Mac-io Acid Wash Jeans! The fit is spot-on, and the fabric is of high quality. The acid wash design gives them a unique look, and the snow blue color is versatile for various outfits. Definitely recommend these jeans to others!',
        customerRating: 5,
        reviewDate: '04-05-2023',
      },
      {
        customerName: 'Oliver Parker',
        customerImage: 'https://randomuser.me/api/portraits/men/51.jpg',
        customerReview:
          "These Mac-io Acid Wash Jeans are fantastic! They fit perfectly, and the fabric is so comfortable. The acid wash design is trendy, and the snow blue color is even better in person. I've received many compliments when wearing them. Highly recommended!",
        customerRating: 5,
        reviewDate: '05-20-2023',
      },
    ],
    sizeOptions: ['30x30', '32x32', '34x34', '36x30'],
    colorOptions: ['Snow Blue'],
    shipping: {
      shippingCost: 'Free Shipping',
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 28,
    productName: 'Richard Coastal Comfort Sweats',
    price: '$109.99',
    description:
      'Meet your new go-to comfort essential: Richard Sport Sweats. Crafted for the active man, these sweats are perfect for casual outings, outdoor activities, or traveling adventures. Designed with both style and functionality in mind, they offer a comfortable fit and freedom of movement. The beach tan color option adds a touch of laid-back sophistication to your look.',
    category: "Men's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707353045/jtmz77ptoo7f4bf6okas.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707353046/yadpj8feaqcmas7cgwaf.jpg',
    ],
    occasion: ['Casual Outings', 'Outdoor Activities', 'Traveling'],
    productRating: { rate: 4.1, count: 55 },
    customerReviews: [
      {
        customerName: 'Ethan Carter',
        customerImage: 'https://randomuser.me/api/portraits/men/52.jpg',
        customerReview:
          "I'm very impressed with the Richard Coastal Comfort Sweats. They're incredibly comfortable to wear, and the fabric feels soft against the skin. The beach tan color is perfect for a relaxed, casual look. These sweats have become my favorite go-to choice for lounging at home or running errands.",
        customerRating: 5,
        reviewDate: '06-10-2023',
      },
      {
        customerName: 'Nathan Scott',
        customerImage: 'https://randomuser.me/api/portraits/men/53.jpg',
        customerReview:
          "The Richard Coastal Comfort Sweats are exactly what I was looking for. They fit perfectly and are super comfortable to wear. The beach tan color is versatile, and the quality of the fabric is excellent. Whether I'm out for a walk or just chilling at home, these sweats keep me comfortable and stylish.",
        customerRating: 5,
        reviewDate: '07-22-2023',
      },
      {
        customerName: 'Lucas Thompson',
        customerImage: 'https://randomuser.me/api/portraits/men/57.jpg',
        customerReview:
          "I absolutely love the Richard Coastal Comfort Sweats! They're incredibly comfortable and stylish at the same time. The beach tan color is perfect for a laid-back, casual vibe, and the fit is just right. These have quickly become my go-to sweats for any occasion.",
        customerRating: 5,
        reviewDate: '08-15-2023',
      },
    ],
    sizeOptions: ['Medium', 'Large'],
    colorOptions: ['Beach Tan'],
    shipping: {
      shippingCost: 'Free Shipping',
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 29,
    productName: "Richard Coastal Knee Short's",
    price: '$100.99',
    description:
      'Introducing the Richard Coastal Knee Shorts, the perfect blend of style and comfort for the modern man. Ideal for casual outings, outdoor activities, or traveling adventures, these shorts are designed to keep you cool and comfortable all day long. Featuring a versatile light gray color, they effortlessly complement any wardrobe.',
    category: "Men's Clothing",
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707353203/yglxtydcvcwsppt9jrmu.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707353204/tnqrtdl9pvqv0qxncbgp.jpg',
    ],
    occasion: ['Casual Outings', 'Outdoor Activities', 'Traveling'],
    productRating: { rate: 1.9, count: 85 },
    customerReviews: [
      {
        customerName: "Jake O'Brien",
        customerImage: 'https://randomuser.me/api/portraits/men/58.jpg',
        customerReview:
          'Unfortunately, I was disappointed with the quality of the Richard Coastal Knee Shorts. The fabric feels cheap and uncomfortable, and the fit is not as expected. Additionally, the stitching started coming loose after just a few wears. Overall, not worth the price.',
        customerRating: 1,
        reviewDate: '04-08-2023',
      },
      {
        customerName: 'Ryan McCall',
        customerImage: 'https://randomuser.me/api/portraits/men/60.jpg',
        customerReview:
          "I had high hopes for the Richard Coastal Knee Shorts, but they fell short of expectations. The fabric feels stiff and doesn't provide much comfort. The fit is also quite tight, even though I ordered my usual size. I wouldn't recommend these shorts.",
        customerRating: 2,
        reviewDate: '05-15-2023',
      },
      {
        customerName: 'Maxwell Nguyen',
        customerImage: 'https://randomuser.me/api/portraits/men/4.jpg',
        customerReview:
          "The Richard Coastal Knee Shorts looked promising, but unfortunately, they didn't meet my expectations. The fabric feels rough against the skin, and the fit is awkward. Additionally, the light gray color seems to attract stains easily. Overall, not satisfied with this purchase.",
        customerRating: 1,
        reviewDate: '06-25-2023',
      },
    ],
    sizeOptions: ['Medium', 'Large'],
    colorOptions: ['Light Gray'],
    shipping: {
      shippingCost: 'Free Shipping',
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 30,
    productName: 'Lelouir Slingback Stiletto Heels',
    price: '$109.97',
    description:
      'Elevate your footwear collection with the Lelouir Slingback Stiletto Heels, a sophisticated choice for any occasion. Crafted with elegance and style in mind, these heels are perfect for casual outings, everyday wear, or traveling adventures. Featuring an ankle strap design, they provide both comfort and support for all-day wear. The pale ivory color option adds a touch of timeless charm to your ensemble. ',
    category: 'Shoes',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707353458/hdwuwgn7kds4zsmbjo1v.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707353458/ln1ux9qfd4ajdyp3ovjw.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707353458/zkks9fkmffpsaqigkanq.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 2.6, count: 20 },
    customerReviews: [
      {
        customerName: 'Seraphina Knight',
        customerImage: 'https://randomuser.me/api/portraits/women/60.jpg',
        customerReview:
          "The Lelouir Slingback Stiletto Heels are simply divine! I adore the ankle strap design, which adds a touch of elegance to any outfit. The heel height is just right, providing both style and comfort. I've received numerous compliments whenever I wear them. Highly recommend!",
        customerRating: 5,
        reviewDate: '10-15-2023',
      },
      {
        customerName: 'Aurelia Everhart',
        customerImage: 'https://randomuser.me/api/portraits/women/63.jpg',
        customerReview:
          'Absolutely thrilled with my purchase of the Lelouir Slingback Stiletto Heels! The ankle strap provides excellent support, and the heel height is perfect for all-day wear. The pale ivory color is versatile and pairs beautifully with various outfits. These heels have become a staple in my wardrobe.',
        customerRating: 5,
        reviewDate: '11-28-2023',
      },
      {
        customerName: 'Isolde Sinclair',
        customerImage: 'https://randomuser.me/api/portraits/women/64.jpg',
        customerReview:
          'I am delighted with the Lelouir Slingback Stiletto Heels! The ankle strap adds a chic touch, and the heel height is just what I was looking for. The pale ivory color is lovely and complements many of my outfits. These heels are comfortable to wear for extended periods. Highly recommend!',
        customerRating: 5,
        reviewDate: '12-20-2023',
      },
    ],
    sizeOptions: ['W 5', 'W 6.5', 'W 10'],
    colorOptions: ['Pale Ivory'],
    shipping: {
      shippingCost: 9.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 31,
    productName: 'Clementine Ribbon Bow Flats',
    price: '$9.97',
    description:
      'Introducing the Clementine Ribbon Bow Flats, the epitome of charm and comfort for the modern woman. These flats are perfect for casual outings, everyday wear, or traveling adventures. Crafted with meticulous attention to detail, they feature a delicate ribbon bow design that adds a touch of elegance to your ensemble. The ivory tan color option exudes sophistication and versatility, making these flats a wardrobe staple.  ',
    category: 'Shoes',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707353771/cyqykrntlcscvrtzrn93.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707353771/yzqfblf16ppukfnvik8p.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 4.6, count: 83 },
    customerReviews: [
      {
        customerName: 'Octavia Frost',
        customerImage: 'https://randomuser.me/api/portraits/women/65.jpg',
        customerReview:
          'I absolutely adore the Clementine Ribbon Bow Flats! They are incredibly comfortable to wear, and the delicate ribbon bow adds a charming touch to any outfit. The ivory tan color is versatile and pairs well with many different styles. These flats have become my go-to choice for both casual and everyday wear.',
        customerRating: 5,
        reviewDate: '09-21-2023',
      },
      {
        customerName: 'Elowen Foxglove',
        customerImage: 'https://randomuser.me/api/portraits/women/66.jpg',
        customerReview:
          'The Clementine Ribbon Bow Flats are lovely! The ribbon bow detail adds a sweet and feminine touch, and the flats are very comfortable to walk in. I appreciate the versatility of the ivory tan color, which makes them easy to pair with various outfits. These flats are a definite must-have in my wardrobe!',
        customerRating: 5,
        reviewDate: '10-07-2023',
      },
      {
        customerName: 'Calliope Hawthorne',
        customerImage: 'https://randomuser.me/api/portraits/women/67.jpg',
        customerReview:
          "I'm thrilled with my purchase of the Clementine Ribbon Bow Flats! They are not only stylish but also incredibly comfortable to wear. The ribbon bow detail adds a chic flair to any outfit, and the ivory tan color is versatile for different occasions. I highly recommend these flats!",
        customerRating: 5,
        reviewDate: '11-15-2023',
      },
    ],
    sizeOptions: ['W 7', 'W 8', 'W 9'],
    colorOptions: ['Ivory Tan'],
    shipping: {
      shippingCost: 2.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 32,
    productName: 'Lelouir Tuxedo Stiletto Heels',
    price: '$199.99',
    description:
      'Indulge in luxury with the Lelouir Tuxedo Stiletto Heels, a glamorous statement piece for the sophisticated woman. Crafted with exquisite attention to detail, these heels are perfect for elevating any outfit, whether for casual outings, everyday wear, or traveling adventures. With a sleek tuxedo-inspired design, they exude elegance and refinement. The off-white color option adds a touch of opulence to your ensemble, making these heels a true symbol of luxury.',
    category: 'Shoes',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707353953/g47bhjqrewtorc4qq4z9.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707353953/napxars80rek7n44d09f.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 5.0, count: 130 },
    customerReviews: [
      {
        customerName: 'Seraphina Nightingale',
        customerImage: 'https://randomuser.me/api/portraits/women/68.jpg',
        customerReview:
          'The Lelouir Tuxedo Stiletto Heels are absolutely stunning! I feel like a million bucks whenever I wear them. The tuxedo-inspired design is so chic and sophisticated, and the off-white color adds a touch of luxury to any outfit. They are surprisingly comfortable for stiletto heels and have become my favorite pair for special occasions.',
        customerRating: 5,
        reviewDate: '08-12-2023',
      },
      {
        customerName: 'Aurelia Evergreen',
        customerImage: 'https://randomuser.me/api/portraits/women/70.jpg',
        customerReview:
          'I am in love with the Lelouir Tuxedo Stiletto Heels! They are the epitome of elegance and style. The tuxedo-inspired design is unique and eye-catching, and the off-white color is so luxurious. These heels are not only beautiful but also comfortable to wear. They instantly elevate any outfit and make me feel confident and glamorous!',
        customerRating: 5,
        reviewDate: '09-05-2023',
      },
      {
        customerName: 'Cassian Hawthorne',
        customerImage: 'https://randomuser.me/api/portraits/women/72.jpg',
        customerReview:
          "I can't say enough good things about the Lelouir Tuxedo Stiletto Heels! They are simply stunning. The design is so sleek and sophisticated, and the off-white color is perfect for adding a touch of luxury to any look. Despite being stiletto heels, they are surprisingly comfortable to walk in. These heels are definitely worth the investment!",
        customerRating: 5,
        reviewDate: '10-18-2023',
      },
    ],
    sizeOptions: ['W 5', 'W 5.5', 'W 6.5', 'W 7.5', 'W 8', 'W 9.5'],
    colorOptions: ['Off-White'],
    shipping: {
      shippingCost: 19.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 33,
    productName: 'Shippo Sailor Low Tops',
    price: '$89.99',
    description:
      'Introducing the Shippo Sailor Low Tops, a luxurious fusion of style and comfort for the discerning individual. Crafted with meticulous craftsmanship, these low tops are perfect for casual outings, everyday wear, or athletic activities. Featuring a sleek sailor-inspired design, they exude sophistication and elegance. The iron white color option adds a touch of refinement to your ensemble, making these low tops a versatile addition to your wardrobe.',
    category: 'Shoes',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707354246/mpojmwq7bgewuodwhwva.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707354246/xra2ubzyctviwv6kctnp.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Athletic Activities'],
    productRating: { rate: 4.6, count: 90 },
    customerReviews: [
      {
        customerName: 'Kairos Stormbringer',
        customerImage: 'https://randomuser.me/api/portraits/men/61.jpg',
        customerReview:
          "The Shippo Sailor Low Tops are fantastic! They're incredibly stylish and comfortable. I love the sailor-inspired design, it's unique and adds a touch of sophistication to any outfit. The iron white color is versatile and easy to pair with different clothing styles. These shoes have become my go-to for both casual outings and everyday wear.",
        customerRating: 5,
        reviewDate: '07-25-2023',
      },
      {
        customerName: 'Azriel Nightshade',
        customerImage: 'https://randomuser.me/api/portraits/men/62.jpg',
        customerReview:
          "I'm impressed with the Shippo Sailor Low Tops! Not only do they look stylish, but they're also very comfortable to wear. The sailor-inspired design sets them apart from other shoes, and the iron white color adds a touch of elegance. I've received numerous compliments whenever I wear them. Highly recommend!",
        customerRating: 5,
        reviewDate: '08-10-2023',
      },
      {
        customerName: 'Thorne Shadowfax',
        customerImage: 'https://randomuser.me/api/portraits/men/64.jpg',
        customerReview:
          "I'm extremely satisfied with the Shippo Sailor Low Tops! The design is sleek and stylish, and the iron white color is versatile and easy to match with different outfits. They're also very comfortable to wear, even for long periods. These shoes have become my favorite pair for both casual outings and athletic activities.",
        customerRating: 5,
        reviewDate: '09-02-2023',
      },
    ],
    sizeOptions: ['W 5 / M 3.5', 'W 6.5 / M 5', 'W 8.5 / M 7', 'W 10 / M 8.5'],
    colorOptions: ['Iron White'],
    shipping: {
      shippingCost: 2.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 34,
    productName: 'Vizla Chelsa Boots',
    price: '$199.99',
    description:
      'ntroducing the Vizla Chelsa Boots, the epitome of luxury and sophistication for the discerning individual. Crafted with precision and expertise, these boots are perfect for casual outings, everyday wear, or traveling adventures. With a timeless Chelsea boot design, they exude elegance and refinement. The noir color option adds a touch of opulence to your ensemble, making these boots a versatile statement piece. ',
    category: 'Shoes',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707354441/kahotrdtyey4b3bafzus.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707354441/wj9twthkwp4ocoakz7op.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707354441/gn0xreilvnotf4tjx6re.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 4.9, count: 4590 },
    customerReviews: [
      {
        customerName: 'Ezra Nightingale',
        customerImage: 'https://randomuser.me/api/portraits/men/66.jpg',
        customerReview:
          "The Vizla Chelsa Boots are absolutely stunning! They're incredibly well-crafted and exude luxury in every detail. The Chelsea boot design is timeless, and the noir color option adds a touch of sophistication to any outfit. I've received numerous compliments whenever I wear them, and they're incredibly comfortable for all-day wear. Highly recommend these boots!",
        customerRating: 5,
        reviewDate: '08-15-2023',
      },
      {
        customerName: 'Orion Evergreen',
        customerImage: 'https://randomuser.me/api/portraits/men/68.jpg',
        customerReview:
          "I'm impressed with the Vizla Chelsa Boots! The craftsmanship is impeccable, and they're incredibly comfortable to wear. The Chelsea boot design is classic and versatile, suitable for various occasions. The noir color option is sleek and adds a touch of elegance to any ensemble. These boots have quickly become my favorite pair for everyday wear.",
        customerRating: 5,
        reviewDate: '09-03-2023',
      },
      {
        customerName: 'Atlas Silvermoon',
        customerImage: 'https://randomuser.me/api/portraits/men/69.jpg',
        customerReview:
          "The Vizla Chelsa Boots are top-notch! They're well-made, stylish, and comfortable to wear. The Chelsea boot design is timeless, and the noir color option is versatile and easy to match with different outfits. I've received many compliments on these boots, and I highly recommend them to anyone looking for a high-quality and stylish footwear option.",
        customerRating: 5,
        reviewDate: '09-20-2023',
      },
    ],
    sizeOptions: ['W 5 / M 3.5', 'W 6.5 / M 5', 'W 8.5 / M 7', 'W 10 / M 8.5'],
    colorOptions: ['Noir'],
    shipping: {
      shippingCost: 5.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 35,
    productName: 'Prestige Chronograph',
    price: '$565.99',
    description:
      "The Platinum Prestige Chronograph offers a blend of style and functionality. Crafted with precision, this accessory is designed to elevate your everyday look. Its sleek design and impeccable craftsmanship make it a versatile choice for various occasions. Whether you're heading for casual outings, everyday wear, or engaging in athletic activities, this chronograph complements your lifestyle effortlessly.",
    category: 'Accessories',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709595383/hzzu5i6o6pbfvoel3xc9.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709595411/qjq0xnqjsvgeo64wjija.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709595430/awoidgtu11cuuc2egil6.jpg'
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Athletic Activities'],
    productRating: { rate: 2.5, count: 10 },
    customerReviews: [
      {
        customerName: 'Cassius Frost',
        customerImage: 'https://randomuser.me/api/portraits/men/64.jpg',
        customerReview:
          "The Platinum Prestige Chronograph is an absolute masterpiece! Its design is sleek and sophisticated, perfect for both formal and casual occasions. The functionality is top-notch, and the craftsmanship is impeccable. I've received numerous compliments whenever I wear it, and it has become my go-to accessory for everyday wear. Highly recommend it to anyone looking for a stylish and reliable timepiece.",
        customerRating: 5,
        reviewDate: '08-25-2023',
      },
      {
        customerName: 'Xavier Sterling',
        customerImage: 'https://randomuser.me/api/portraits/men/70.jpg',
        customerReview:
          "I'm extremely satisfied with the Platinum Prestige Chronograph. It's a beautifully crafted timepiece with a modern and elegant design. The chronograph functions work flawlessly, and the overall quality is outstanding. Whether I'm dressing up for a special occasion or going for a casual outing, this watch adds a touch of sophistication to my ensemble. Highly recommend it to anyone in search of a high-quality and stylish watch.",
        customerRating: 5,
        reviewDate: '09-10-2023',
      },
      {
        customerName: 'Dante Midnight',
        customerImage: 'https://randomuser.me/api/portraits/men/71.jpg',
        customerReview:
          "I couldn't be happier with my purchase of the Platinum Prestige Chronograph. It's a stunning watch with a timeless design and exceptional functionality. The attention to detail is evident in every aspect of the watch, from the dial to the strap. It's comfortable to wear and complements any outfit effortlessly. Whether you're a watch enthusiast or simply looking for a reliable timepiece, this watch won't disappoint.",
        customerRating: 5,
        reviewDate: '09-28-2023',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['Platinum/Sage'],
    shipping: {
      shippingCost: 'Free Shipping',
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '5-7 business days',
    },
  },
  {
    id: 36,
    productName: 'Horizon Chronograph',
    price: '$765.99',
    description:
      "Introducing the Golden Horizon Chronograph, a masterpiece of elegance and functionality that transcends time. This exquisite watch is meticulously crafted to be the perfect accessory for all occasions, whether it's casual outings, everyday wear, or athletic activities. With its sophisticated chronograph design, the Golden Horizon Chronograph seamlessly combines style with precision. The lustrous pearl gold color evokes a sense of luxury and sophistication, making this timepiece a statement of refined taste. ",
    category: 'Accessories',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709595283/zezagkz1uvjx9weknwdw.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709595295/eqyik8tnyddcn50wbszt.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709595307/r7fplzfdrooy6yd17nmk.jpg'
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Athletic Activities'],
    productRating: { rate: 4.5, count: 51 },
    customerReviews: [
      {
        customerName: 'Maxwell Mbappe',
        customerImage: 'https://randomuser.me/api/portraits/men/72.jpg',
        customerReview:
          "The Golden Horizon Chronograph is an exceptional timepiece that exceeds all expectations. Its design is breathtakingly beautiful, and the attention to detail is remarkable. I've received numerous compliments whenever I wear it, and it adds a touch of elegance to any outfit. The chronograph functions are precise and reliable, making it perfect for everyday wear or special occasions. I highly recommend this watch to anyone seeking a luxurious and stylish accessory.",
        customerRating: 5,
        reviewDate: '07-15-2023',
      },
      {
        customerName: 'Elias Phoenix',
        customerImage: 'https://randomuser.me/api/portraits/men/73.jpg',
        customerReview:
          "I'm absolutely thrilled with my purchase of the Golden Horizon Chronograph. The craftsmanship is outstanding, and the design is simply stunning. It's a versatile watch that effortlessly transitions from casual to formal settings. The pearl gold color adds a touch of luxury, and the chronograph functions work flawlessly. Whether I'm out for a run or attending a business meeting, this watch never fails to impress. Highly recommend it!",
        customerRating: 5,
        reviewDate: '08-02-2023',
      },
      {
        customerName: 'Sebastian Ocean',
        customerImage: 'https://randomuser.me/api/portraits/men/74.jpg',
        customerReview:
          "The Golden Horizon Chronograph is a true work of art. Its design is sleek and sophisticated, and the pearl gold color is absolutely stunning. The chronograph functions are easy to use and highly accurate, and the watch is comfortable to wear all day long. It's become my favorite accessory for both casual and formal occasions. If you're in search of a high-quality and stylish watch, look no further than the Golden Horizon Chronograph.",
        customerRating: 5,
        reviewDate: '08-20-2023',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['Pearl Gold'],
    shipping: {
      shippingCost: 'Free Shipping',
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '5-7 business days',
    },
  },
  {
    id: 37,
    productName: 'Moontash Chronograph',
    price: '$300.99',
    description:
      "Introducing the Vintage Leather Moontash Chronograph, a timeless blend of vintage charm and modern sophistication. Crafted with meticulous attention to detail, this exquisite watch is the perfect accessory for all occasions, whether it's casual outings, everyday wear, or athletic activities. With its classic square chronograph design, the Vintage Leather Square Chronograph exudes elegance and style. The luxurious metallic gold color adds a touch of opulence, making this timepiece a statement of refined taste. ",
    category: 'Accessories',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709595451/yepiriyinfgi8wwtfqpl.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709595460/fhbeeedxhlzqxevwbzvb.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709595470/yyg3buzfst5rdsmnngrr.jpg'
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Athletic Activities'],
    productRating: { rate: 3.5, count: 784 },
    customerReviews: [
      {
        customerName: 'Atticus Hawthorne',
        customerImage: 'https://randomuser.me/api/portraits/men/75.jpg',
        customerReview:
          "The Vintage Moontash Chronograph is a masterpiece of horological design. Its vintage charm combined with modern sophistication makes it a standout accessory for any occasion. I love the classic square chronograph design, and the metallic gold color adds a touch of luxury. The watch is comfortable to wear and performs exceptionally well. I've received numerous compliments on its unique and stylish appearance. Highly recommend!",
        customerRating: 5,
        reviewDate: '09-05-2023',
      },
      {
        customerName: 'Phineas Sterling',
        customerImage: 'https://randomuser.me/api/portraits/men/76.jpg',
        customerReview:
          "I'm extremely pleased with my purchase of the Vintage Moontash Chronograph. The craftsmanship is top-notch, and the attention to detail is evident in every aspect of the watch. The square chronograph design is both classic and stylish, and the metallic gold color gives it a luxurious feel. It's a versatile timepiece that transitions seamlessly from casual to formal occasions. I highly recommend it to anyone looking for a sophisticated watch with vintage charm.",
        customerRating: 5,
        reviewDate: '09-18-2023',
      },
      {
        customerName: 'Caspian Wilde',
        customerImage: 'https://randomuser.me/api/portraits/men/79.jpg',
        customerReview:
          "The Vintage Moontash Chronograph is a true gem in my watch collection. Its timeless design and impeccable craftsmanship set it apart from other watches. The metallic gold color adds a touch of elegance, and the square chronograph dial is both stylish and functional. Whether I'm dressed casually or formally, this watch always complements my outfit perfectly. It's become my go-to accessory for any occasion. Highly recommend it to anyone seeking a classic timepiece with a modern twist.",
        customerRating: 5,
        reviewDate: '09-25-2023',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['Metallic Gold'],
    shipping: {
      shippingCost: 'Free Shipping',
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '5-7 business days',
    },
  },
  {
    id: 38,
    productName: 'Gentle Beemer',
    price: '$89.50',
    description:
      'Our Gentle Beemer Bag, a sleek and versatile essential designed to complement your on-the-go lifestyle. Crafted from durable nylon material, this bag combines practicality with style, making it perfect for casual outings, everyday wear, or even athletic activities',
    category: 'Accessories',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707525920/fims8qoiegrjecugyf7r.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707525920/pdnsdu5zylslk3xyvs6e.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707525917/sasnytfoxtxggxvntzxq.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Athletic Activities'],
    productRating: { rate: 2.5, count: 10 },
    customerReviews: [
      {
        customerName: 'Finnegan Archer',
        customerImage: 'https://randomuser.me/api/portraits/men/81.jpg',
        customerReview:
          'Disappointed with the Gentle Beemer Bag. The quality of the nylon material is subpar, and it feels flimsy. After just a few uses, the seams started to come apart, and the zippers began to stick. Not suitable for everyday wear or carrying heavy items. I expected better durability for the price. Would not recommend this bag.',
        customerRating: 1,
        reviewDate: '10-02-2023',
      },
      {
        customerName: 'Beckett Flynn',
        customerImage: 'https://randomuser.me/api/portraits/men/82.jpg',
        customerReview:
          "The Gentle Beemer Bag did not meet my expectations. While the design is sleek and stylish, the quality of the material is lacking. The nylon feels cheap, and the stitching appears weak. Additionally, the bag is smaller than anticipated, limiting its practicality for everyday use. Overall, I'm disappointed with this purchase and would not recommend it to others.",
        customerRating: 2,
        reviewDate: '10-15-2023',
      },
      {
        customerName: 'Sullivan Hayes',
        customerImage: 'https://randomuser.me/api/portraits/men/83.jpg',
        customerReview:
          'I regret purchasing the Gentle Beemer Bag. Despite its sleek appearance, the quality is underwhelming. The nylon material feels flimsy, and the bag lacks structure, making it difficult to organize items effectively. Additionally, the zippers are prone to getting stuck, which is frustrating. Overall, I expected better durability and functionality from this bag.',
        customerRating: 2,
        reviewDate: '10-25-2023',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['Black'],
    shipping: {
      shippingCost: 1.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 39,
    productName: 'Peta Maur Fuzzy Bag',
    price: '$259.99',
    description:
      " Elevate your accessory collection with this Peta Maur Fuzzy Bag Mini Bag. Crafted from high-quality nylon, this mini bag exudes luxury and sophistication. Perfect for carrying your essentials, it features a compact design with ample space for your belongings. Whether you're running errands, traveling, or enjoying a casual outing, this crossbody bag adds a touch of elegance to any ensemble.",
    category: 'Accessories',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707525917/s8x7zdw3tus6nsrrrsdu.webp',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1707525917/gfjev2crqo1reh5uy0wj.webp',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 2.5, count: 20 },
    customerReviews: [
      {
        customerName: 'Aurelia Delgado',
        customerImage: 'https://randomuser.me/api/portraits/women/71.jpg',
        customerReview:
          "I absolutely adore the Peta Maur Fuzzy Bag! It's the perfect size for carrying my essentials, and the nylon material feels luxurious. The fuzzy texture adds a fun and playful element to the design. I've received numerous compliments whenever I wear it, and it's become my go-to accessory for both casual outings and special occasions.",
        customerRating: 5,
        reviewDate: '11-05-2023',
      },
      {
        customerName: 'Esmeralda Cortez',
        customerImage: 'https://randomuser.me/api/portraits/women/74.jpg',
        customerReview:
          "The Peta Maur Fuzzy Bag is a must-have accessory! I love the compact design, which still offers plenty of space for all my essentials. The fuzzy texture adds a unique touch to the overall look, and the adjustable strap allows for comfortable wear. It's perfect for everyday use, and I've received many compliments on its stylish appearance.",
        customerRating: 5,
        reviewDate: '11-12-2023',
      },
      {
        customerName: 'Seraphina Russo',
        customerImage: 'https://randomuser.me/api/portraits/women/79.jpg',
        customerReview:
          "I'm in love with the Peta Maur Fuzzy Bag! The quality is exceptional, and the fuzzy texture gives it a chic and trendy vibe. It's the perfect size for carrying my essentials, and the adjustable strap ensures a comfortable fit. Whether I'm running errands or going out with friends, this bag adds a stylish finishing touch to any outfit. Highly recommend!",
        customerRating: 5,
        reviewDate: '11-20-2023',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['Sepia Brown'],
    shipping: {
      shippingCost: 'Free Shipping',
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 40,
    productName: 'Swan Y necklace',
    price: '$159.00',
    description:
      'This spectacular pendant will bring a touch of cool romance to your everyday look. The rose gold-plated design is dominated by our iconic swan motif, which shines with a full-cut crystal body in cool millennial pink and crisp clear pavé lines. The prong-set crystals that hang above brim with extra sparkle. A gorgeous piece with a bold aesthetic, it will combine with your existing jewelry seamlessly. ',
    category: 'Jewelry',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709587637/k92m34rjqtr0gt2sxkob.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709587687/kqepj4pnf2g0ye0hov4x.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709587698/xeeirwnpwtfz40rcc5hv.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: {
      rate: 3.0,
      count: 100,
    },
    customerReviews: [
      {
        customerName: 'Emily',
        customerImage: 'https://randomuser.me/api/portraits/women/72.jpg',
        customerReview:
          "I adore this necklace! It adds such a graceful touch to my outfits, whether I'm heading out for a casual day or dressing up for a special occasion. The rose gold tone is stunning, and the swan motif is just so elegant.",
        customerRating: 5,
        reviewDate: '03-05-2024',
      },
      {
        customerName: 'Sophia',
        customerImage: 'https://randomuser.me/api/portraits/women/28.jpg',
        customerReview:
          'This necklace is my new favorite piece of jewelry! I wear it every day and always get compliments. The crystal body of the swan pendant catches the light beautifully, and the design is just so unique. Love it!',
        customerRating: 4,
        reviewDate: '02-20-2024',
      },
      {
        customerName: 'Jessica',
        customerImage: 'https://randomuser.me/api/portraits/women/81.jpg',
        customerReview:
          "I'm impressed by the quality of this necklace. It's well-made and feels sturdy, yet it's also delicate and feminine. The price is reasonable for such a lovely piece. Definitely recommend!",
        customerRating: 5,
        reviewDate: '01-14-2024',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['Rose/Gold-Tone'],
    shipping: {
      shippingCost: 2.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 41,
    productName: "Tilda's Bow Pendant",
    price: '$659.00',
    description:
      'This spectacular pendant will bring a touch of cool romance to your everyday look. The rose gold-plated design is dominated by our iconic swan motif, which shines with a full-cut crystal body in cool millennial pink and crisp clear pavé lines. The prong-set crystals that hang above brim with extra sparkle. A gorgeous piece with a bold aesthetic, it will combine with your existing jewelry seamlessly. ',
    category: 'Jewelry',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709596829/aw00ltn4v5ck9tfjbgfo.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709598555/afzcbyvzu7moo6k0nrti.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709598562/u0cbweiactuip22dqowe.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: {
      rate: 5.0,
      count: 20,
    },
    customerReviews: [
      {
        customerName: 'Sophie',
        customerImage: 'https://randomuser.me/api/portraits/women/82.jpg',
        customerReview:
          "Absolutely stunning pendant! The design is so delicate and unique. I've received numerous compliments whenever I wear it. The white gold color adds a touch of elegance to any outfit. Highly recommend it!",
        customerRating: 5,
        reviewDate: '02-25-2024',
      },
      {
        customerName: 'Emma',
        customerImage: 'https://randomuser.me/api/portraits/women/98.jpg',
        customerReview:
          "I'm so happy with my purchase of Tilda's Bow Pendant. It's even more beautiful in person! The craftsmanship is top-notch, and the pendant has a lovely weight to it. It's become a staple in my jewelry collection.",
        customerRating: 5,
        reviewDate: '02-28-2024',
      },
      {
        customerName: 'Olivia',
        customerImage: 'https://randomuser.me/api/portraits/women/51.jpg',
        customerReview:
          "This bow pendant exceeded my expectations! The white gold is stunning, and the bow design is so elegant. It's the perfect accessory for any occasion, and I've received so many compliments on it already.",
        customerRating: 5,
        reviewDate: '02-02-2024',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['Rose Gold'],
    shipping: {
      shippingCost: 9.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 42,
    productName: 'Rhinestone Bow',
    price: '$129.00',
    description:
      'Add a femme touch with these tied-in-a-bow earrings in sparkly rhinestones. Finished with a post backing',
    category: 'Jewelry',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709596600/ougiqidkjzudwuf7v2yb.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709596612/hsewlk7rxoxrwhzawlrn.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709596614/ku3dpzc8f8gyca0wioqp.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: {
      rate: 1.0,
      count: 340,
    },
    customerReviews: [
      {
        customerName: 'Lily',
        customerImage: 'https://randomuser.me/api/portraits/women/7.jpg',
        customerReview:
          "These earrings are so cute! I love the bow design, and the rhinestones add just the right amount of sparkle. They're perfect for dressing up any outfit.",
        customerRating: 4,
        reviewDate: '02-22-2024',
      },
      {
        customerName: 'Ava',
        customerImage: 'https://randomuser.me/api/portraits/women/78.jpg',
        customerReview:
          'Disappointing quality. The rhinestones fell out after wearing them just a couple of times. Not worth the price.',
        customerRating: 1,
        reviewDate: '02-10-2024',
      },
      {
        customerName: 'Chloe',
        customerImage: 'https://randomuser.me/api/portraits/women/97.jpg',
        customerReview:
          "I absolutely adore these earrings! They're elegant and sparkly, perfect for adding a touch of glamour to any outfit. The quality is fantastic, and they're comfortable to wear.",
        customerRating: 5,
        reviewDate: '02-18-2024',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['Gold/Silver'],
    shipping: {
      shippingCost: 2.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 43,
    productName: 'Sparkle Clover',
    price: '$289.00',
    description:
      "Let this bracelet serve as a sparkly reminder, babe, that luck is always by your side. With every lift of your hand, you carry an invisible glistening link to fortune. Adorn yourself with a touch of shimmer, and let luck accompany you en route. Plus, it's adjustable, ensuring a perfect fit for your wrist!",
    category: 'Jewelry',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709596445/jula7s0vj7jpgt173sle.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709596454/b3j2ptnadrbyq4a1a9fj.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709596461/whm9xksqqner8o4qgx3p.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Athletic Activities'],
    productRating: {
      rate: 5.0,
      count: 140,
    },
    customerReviews: [
      {
        customerName: 'Isabella Smith',
        customerImage: 'https://randomuser.me/api/portraits/women/77.jpg',
        customerReview:
          "I absolutely adore this bracelet! It's so delicate and sparkly, and the clover design is adorable. I've been wearing it every day since I got it, and it always brings me luck!",
        customerRating: 5,
        reviewDate: '02-20-2024',
      },
      {
        customerName: 'Mia Johnson',
        customerImage: 'https://randomuser.me/api/portraits/women/25.jpg',
        customerReview:
          "This bracelet is stunning! The sparkle is mesmerizing, and it's such a versatile piece. I wear it to work and to the gym, and it always adds a touch of glamour to my outfit.",
        customerRating: 5,
        reviewDate: '02-15-2024',
      },
      {
        customerName: 'Charlotte Brown',
        customerImage: 'https://randomuser.me/api/portraits/women/31.jpg',
        customerReview:
          "I'm obsessed with this bracelet! The quality is fantastic, and it's so comfortable to wear. The adjustable feature is great, ensuring a perfect fit. I've received so many compliments on it already.",
        customerRating: 5,
        reviewDate: '02-08-2024',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['Silver'],
    shipping: {
      shippingCost: 5.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 44,
    productName: 'Water Lily Earrings',
    price: '$550.00',
    description:
      'Serene blue aquamarines hang from diamond-accented leaves in these feminine nature-inspired earrings.',
    category: 'Jewelry',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709591290/dzisovxqkphy9qqb4nlk.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709591307/eeoundlehofbtg4gqxzy.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709591319/tjeuvqkq2gulnr8ura6q.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Athletic Activities'],
    productRating: {
      rate: 3.1,
      count: 40,
    },
    customerReviews: [
      {
        customerName: 'Ella Taylor',
        customerImage: 'https://randomuser.me/api/portraits/women/84.jpg',
        customerReview:
          "I'm in love with these earrings! The aquamarines are so vibrant, and the diamond-accented leaves add the perfect touch of sparkle. They're lightweight and comfortable to wear, making them perfect for any occasion.",
        customerRating: 5,
        reviewDate: '02-18-2024',
      },
      {
        customerName: 'Avery Clark',
        customerImage: 'https://randomuser.me/api/portraits/women/68.jpg',
        customerReview:
          "These earrings are gorgeous! I love how they're inspired by nature. The aquamarines are beautiful, and the silver setting complements them perfectly. They're my new favorite pair of earrings!",
        customerRating: 4,
        reviewDate: '02-10-2024',
      },
      {
        customerName: 'Harper Martinez',
        customerImage: 'https://randomuser.me/api/portraits/women/51.jpg',
        customerReview:
          "I'm a bit disappointed with these earrings. While they're pretty, they're not as sparkly as I had hoped. The aquamarines are a bit dull, and the silver setting feels a bit cheap for the price.",
        customerRating: 2,
        reviewDate: '02-05-2024',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['Silver'],
    shipping: {
      shippingCost: 2.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 45,
    productName: 'Heart Diamond Pendant',
    price: '$550.00',
    description:
      'A true gift from the heart, this graceful and delicate pendant features an elegantly sparkling diamond, symbolizing the uniqueness and beauty of love.',
    category: 'Jewelry',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709591504/h3lvczynpv45eursxfeh.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709591550/iatu07pvhjjshukecj05.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709591622/gfmpshbg87uax7m6c5mv.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Athletic Activities'],
    productRating: {
      rate: 4.1,
      count: 920,
    },
    customerReviews: [
      {
        customerName: 'Aria Thompson',
        customerImage: 'https://randomuser.me/api/portraits/women/64.jpg',
        customerReview:
          "This pendant is absolutely stunning! The diamond sparkles beautifully, and the design is so elegant. It's the perfect symbol of love and makes a wonderful gift for someone special.",
        customerRating: 5,
        reviewDate: '02-28-2024',
      },
      {
        customerName: 'Grace Wilson',
        customerImage: 'https://randomuser.me/api/portraits/women/58.jpg',
        customerReview:
          "I received this pendant as a gift, and I couldn't be happier with it! The diamond is gorgeous, and the yellow gold setting is so luxurious. It's become one of my favorite pieces of jewelry.",
        customerRating: 5,
        reviewDate: '02-20-2024',
      },
      {
        customerName: 'Luna Rodriguez',
        customerImage: 'https://randomuser.me/api/portraits/women/21.jpg',
        customerReview:
          "I'm a bit disappointed with this pendant. While the diamond is beautiful, the yellow gold setting looks a bit cheap. I expected better quality for the price.",
        customerRating: 3,
        reviewDate: '02-10-2024',
      },
    ],
    sizeOptions: ['One Size Fits All'],
    colorOptions: ['Yellow Gold'],
    shipping: {
      shippingCost: 9.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 46,
    productName: 'Embellished Sole Pumps',
    price: '$150.00',
    description:
      'Crafted with meticulous attention to detail, these pumps feature clear PVC panels adorned with dazzling crystal embellishments, creating a captivating illusion of floating jewels against the skin. The metallic leather accents add a touch of opulence to the design.',
    category: 'Shoes',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709591821/wpnjgktevet0kcvausxz.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709591824/ujvv5fo2akk4expooys2.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709591833/iscgzo6cpbyx5fz5hvhw.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 5.0, count: 130 },
    customerReviews: [
      {
        customerName: 'Eva Brown',
        customerImage: 'https://randomuser.me/api/portraits/women/88.jpg',
        customerReview:
          "These pumps are absolutely stunning! The crystal embellishments are so eye-catching, and the metallic rose-gold accents add a touch of elegance. They're comfortable to wear and perfect for any occasion.",
        customerRating: 5,
        reviewDate: '02-25-2024',
      },
      {
        customerName: 'Lily Garcia',
        customerImage: 'https://randomuser.me/api/portraits/women/44.jpg',
        customerReview:
          "I'm obsessed with these pumps! They're even more beautiful in person. The crystal embellishments are so sparkly, and I love the metallic rose-gold accents. They're true to size and very comfortable.",
        customerRating: 5,
        reviewDate: '02-20-2024',
      },
      {
        customerName: 'Sofia Rodriguez',
        customerImage: 'https://randomuser.me/api/portraits/women/33.jpg',
        customerReview:
          "These pumps are a showstopper! The crystal embellishments are absolutely breathtaking, and the metallic rose-gold accents add the perfect finishing touch. They're comfortable to wear for extended periods, making them perfect for events.",
        customerRating: 5,
        reviewDate: '02-15-2024',
      },
    ],
    sizeOptions: ['W 4', 'W 5.5', 'W 6.5', 'W 7.5', 'W 8', 'W 9.5'],
    colorOptions: ['Metallic/Rose-Gold'],
    shipping: {
      shippingCost: 19.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 47,
    productName: 'Satin Bow Pumps',
    price: '$109.00',
    description:
      'Elevate your big day ensemble with the help of the Steve Madden Valenteen White Satin Mesh Bow Pointed-Toe Ankle Strap Pumps! Sleek woven satin shapes these pumps that have a pointed toe with a low-cut collar and a single sole silhouette. Sturdy heel cup boasts an iconic layered mesh bow, with a slender ankle strap (and silver buckle) to complete the look, all atop an elegant stiletto heel.',
    category: 'Shoes',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709592493/mir4ipjrdrf46aqr7tuc.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709592497/wzjeo70bxwjlyuhjefld.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709592504/wdjle68rgsmltt7iuwrr.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 2.0, count: 92 },
    customerReviews: [
      {
        customerName: 'Olivia Moore',
        customerImage: 'https://randomuser.me/api/portraits/women/74.jpg',
        customerReview:
          "I'm disappointed with these pumps. While they look pretty in the picture, they're not as comfortable as I had hoped. The ankle strap feels flimsy, and the heel is too high for everyday wear. Plus, the white satin gets dirty easily.",
        customerRating: 2,
        reviewDate: '02-27-2024',
      },
      {
        customerName: 'Chloe Harris',
        customerImage: 'https://randomuser.me/api/portraits/women/32.jpg',
        customerReview:
          'These pumps are gorgeous! I wore them for my wedding, and they were perfect. The satin material is beautiful, and the bow detail adds a touch of elegance. They were surprisingly comfortable to wear all day.',
        customerRating: 5,
        reviewDate: '02-20-2024',
      },
      {
        customerName: 'Emily Martin',
        customerImage: 'https://randomuser.me/api/portraits/women/63.jpg',
        customerReview:
          "I'm not impressed with these pumps. The ankle strap is too tight, and the heel feels unstable. They're also a bit too narrow in the toe area. Overall, not worth the price.",
        customerRating: 2,
        reviewDate: '02-15-2024',
      },
    ],
    sizeOptions: ['W 6', 'W 7', 'W 8', 'W 9', 'W 10', 'W 11'],
    colorOptions: ['White'],
    shipping: {
      shippingCost: 19.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
  {
    id: 48,
    productName: 'Nori Ballet Flat',
    price: '$189.00',
    description:
      'An undeniably chic, timeless ballet flat. Featuring a bow at the toe accented with minimal hardware, this elegant pair is crafted from ultra-smooth leather in a classic silhouette that gently molds to your foot with wear. Make them your wear-with-everything shoe, from dresses to denim.',
    category: 'Shoes',
    image: [
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709593361/muc0chtypzp2jgcaahev.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709593390/olxiprrjnpwqoaaaxnqu.jpg',
      'https://res.cloudinary.com/dpgbxk6w7/image/upload/v1709593405/mfhrktd5t5l3z2d3gpio.jpg',
    ],
    occasion: ['Casual Outings', 'Everyday Wear', 'Traveling'],
    productRating: { rate: 2.5, count: 32 },
    customerReviews: [
      {
        customerName: 'Sophia Lee',
        customerImage: 'https://randomuser.me/api/portraits/women/52.jpg',
        customerReview:
          "These ballet flats are so comfortable! The leather is soft and molds to my foot nicely. I love the simple bow detail; it adds a touch of elegance to the shoes. They're perfect for both casual outings and workwear.",
        customerRating: 4,
        reviewDate: '02-28-2024',
      },
      {
        customerName: 'Ava Wilson',
        customerImage: 'https://randomuser.me/api/portraits/women/86.jpg',
        customerReview:
          "I'm a bit disappointed with these ballet flats. While they're comfortable, the leather feels cheap, and the bow detail looks a bit tacky. I expected better quality for the price.",
        customerRating: 2,
        reviewDate: '02-22-2024',
      },
      {
        customerName: 'Mia Martinez',
        customerImage: 'https://randomuser.me/api/portraits/women/87.jpg',
        customerReview:
          "These ballet flats are my go-to shoes! They're comfortable and stylish, and the bow detail adds a cute touch. I've received so many compliments whenever I wear them.",
        customerRating: 5,
        reviewDate: '02-15-2024',
      },
    ],
    sizeOptions: ['W 6.5', 'W 7', 'W 8.5', 'W 9', 'W 10.5', 'W 11.5'],
    colorOptions: ['White'],
    shipping: {
      shippingCost: 1.99,
      shippingMethod: 'Standard Shipping',
      estimatedDeliveryTime: '3-5 business days',
    },
  },
];

export default items;


