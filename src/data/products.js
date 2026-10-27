const makeProduct = (product) => ({
  ...product,
  gallery: [product.image, product.image, product.image],
  careTips: ['Keep away from water, perfume, and harsh chemicals.', 'Wipe gently with a soft, dry cloth after use.', 'Store separately in its pouch to protect the finish.'],
});

const products = [
  makeProduct({
    id: 'watermelon-keychain', category: 'keychains', name: 'Viva la Vida Watermelon Keychain', price: 399,
    image: '/assets/products/watermelon-keychain.jpg',
    description: 'A bright watermelon charm, hand-painted with a little sunshine and a cheerful Viva la Vida message.',
    longDescription: 'A little slice of summer, shaped and painted by hand in vivid watermelon reds and greens. Its cheerful lettering and tiny sparkle details make every bag or set of keys feel a little sunnier.',
    details: { size: '5.5 × 4 cm charm', material: 'Hand-shaped polymer clay', finish: 'Hand-painted satin glaze', hangingType: 'Silver-tone key ring', handmadeTime: 'About 2.5 hours' },
    customization: 'Choose a short name or initials on the back; lettering colour can be personalized.', rating: 4.8,
    reviews: [
      { name: 'Ananya Sharma', rating: 5, date: '2026-08-12', comment: 'The colours are so cheerful and the lettering is lovely. It feels special on my keys.' },
      { name: 'Riya Mehta', rating: 5, date: '2026-07-28', comment: 'Such a sweet little gift. The finish is smooth and the details are even prettier in person.' },
      { name: 'Kavya Nair', rating: 4, date: '2026-06-19', comment: 'Really cute and carefully packed. I get compliments on it all the time.' },
    ],
  }),
  makeProduct({
    id: 'camera-star-keychain', category: 'keychains', name: 'Camera & Shooting Star Keychain', price: 599,
    image: '/assets/products/camera-star-keychain.png',
    description: 'A tiny black camera and silvery star for the friend who loves collecting little moments.',
    longDescription: 'Made for the memory keeper, this mini camera charm is paired with a sculpted shooting star. Hand-painted details give the glossy black clay a playful, nostalgic finish.',
    details: { size: '6 × 4.5 cm charm set', material: 'Polymer clay and metal findings', finish: 'Gloss glaze with pearly star', hangingType: 'Stainless-steel key ring', handmadeTime: 'About 3 hours' },
    customization: 'Camera body can be made in a colour of your choice; add a tiny initial on request.', rating: 4.9,
    reviews: [
      { name: 'Ishita Rao', rating: 5, date: '2026-09-05', comment: 'The tiny camera is adorable and the star catches the light beautifully.' },
      { name: 'Meera Iyer', rating: 5, date: '2026-08-22', comment: 'Bought it for my photography-loving sister and she absolutely loves it.' },
      { name: 'Aarohi Singh', rating: 5, date: '2026-07-11', comment: 'Beautifully made, sturdy ring, and such a thoughtful handmade piece.' },
    ],
  }),
  makeProduct({
    id: 'pink-giraffe-charm', category: 'charms', name: 'Pink Heart Giraffe Charm', price: 499,
    image: '/assets/products/pink-giraffe-charm.png',
    description: 'A sweet, hand-sculpted pink giraffe with tiny hearts and rosy details.',
    longDescription: 'This tiny giraffe is sculpted one detail at a time, with rosy feet, little heart markings, and a gentle expression. No two faces or hand-painted spots are exactly alike.',
    details: { size: '5 × 3.5 cm figure', material: 'Hand-sculpted polymer clay', finish: 'Gloss protective glaze', hangingType: 'Gold-tone jump ring', handmadeTime: 'About 3.5 hours' },
    customization: 'Heart colours and a small initial can be customized before the piece is made.', rating: 4.8,
    reviews: [
      { name: 'Diya Patel', rating: 5, date: '2026-09-14', comment: 'The sweetest little giraffe! The tiny hearts are so neat and cute.' },
      { name: 'Sana Khan', rating: 5, date: '2026-08-03', comment: 'Gifted this to my best friend and she has already clipped it to her tote.' },
      { name: 'Nisha Verma', rating: 4, date: '2026-06-30', comment: 'Lovely handmade detail and arrived safely wrapped.' },
    ],
  }),
  makeProduct({
    id: 'flower-headphones-keychain', category: 'keychains', name: 'Flower & Headphones Keychain', price: 699,
    image: '/assets/products/flower-headphones-keychain.png',
    description: 'A playful bouquet and mini headphones charm in soft pink, white, and gold.',
    longDescription: 'A tiny flower, headphones, and a pop of rosy colour come together in this playful charm set. Each element is shaped and assembled by hand, then finished with a smooth protective glaze.',
    details: { size: '7 × 5 cm charm set', material: 'Polymer clay with metal chain', finish: 'Gloss glaze and painted flower', hangingType: 'Silver-tone split ring', handmadeTime: 'About 3 hours' },
    customization: 'Pick a flower centre and headphone colour to make the set your own.', rating: 4.7,
    reviews: [
      { name: 'Tara Bose', rating: 5, date: '2026-09-01', comment: 'The combination is so fun and the little flower is beautifully done.' },
      { name: 'Pooja Kulkarni', rating: 5, date: '2026-07-25', comment: 'A lovely pop of colour on my backpack. Great handmade quality.' },
      { name: 'Manya Das', rating: 4, date: '2026-05-18', comment: 'Cute and lightweight, with a really nice smooth finish.' },
    ],
  }),
  makeProduct({
    id: 'storytime-keychain', category: 'keychains', name: 'Storytime Keepsake Keychain', price: 799,
    image: '/assets/products/storytime-keychain.png',
    description: 'A tiny storybook mix of a star, a cassette, and a hand-lettered alphabet charm.',
    longDescription: 'A pocket-sized story made from a star, cassette, and tiny alphabet board, all assembled into one nostalgic keepsake. Hand-painted lettering and small accents make this a delightfully personal statement charm.',
    details: { size: '9 × 4 cm assembled charm', material: 'Polymer clay, ribbon, and metal findings', finish: 'Hand-painted satin and gloss accents', hangingType: 'Silver-tone clasp ring', handmadeTime: 'About 4 hours' },
    customization: 'Alphabet board can include a short name, favourite word, or initials.', rating: 4.9,
    reviews: [
      { name: 'Saanvi Joshi', rating: 5, date: '2026-08-30', comment: 'So many lovely details to discover. It feels like a tiny piece of art.' },
      { name: 'Aditi Menon', rating: 5, date: '2026-07-08', comment: 'I customized the little board with my nickname and it came out perfect.' },
      { name: 'Anushka Roy', rating: 5, date: '2026-06-12', comment: 'A memorable gift and clearly made with a lot of patience and care.' },
    ],
  }),
  makeProduct({
    id: 'blue-camera-charms', category: 'charms', name: 'Blue Camera & Polaroid Charms', price: 549,
    image: '/assets/products/blue-camera-charms.png',
    description: 'Mini blue cameras and picture charms, made for memory keepers and photo lovers.',
    longDescription: 'These tiny blue camera and picture charms celebrate the moments worth keeping. Smooth pale-blue clay, little black lenses, and miniature heart details are shaped and assembled by hand.',
    details: { size: '5 × 4 cm charm pair', material: 'Polymer clay and stainless findings', finish: 'Gloss glaze with painted details', hangingType: 'Silver-tone lobster clasp', handmadeTime: 'About 2.5 hours' },
    customization: 'Choose a camera colour and a small symbol for the picture frame.', rating: 4.6,
    reviews: [
      { name: 'Lavanya Reddy', rating: 5, date: '2026-08-17', comment: 'The blue shade is gorgeous and the tiny heart detail makes me smile.' },
      { name: 'Myra Shah', rating: 4, date: '2026-07-03', comment: 'A cute little set for my camera bag. Nicely finished and lightweight.' },
      { name: 'Ira Chatterjee', rating: 5, date: '2026-05-26', comment: 'Lovely keepsake for anyone who enjoys taking photos.' },
    ],
  }),
  makeProduct({
    id: 'headphones-phone-charm', category: 'phone charms', name: 'Little Headphones Phone Charm', price: 299,
    image: '/assets/products/headphones-phone-charm.png',
    description: 'A glossy black headphones charm with a tiny burgundy heart and a soft wrist loop.',
    longDescription: 'A miniature pair of headphones curves around a tiny burgundy heart in this playful phone charm. Its soft loop makes it easy to attach, while the glossy hand-finished clay gives it a polished little shine.',
    details: { size: '4 × 3 cm charm', material: 'Polymer clay with nylon wrist loop', finish: 'Gloss glaze', hangingType: 'Black phone loop and metal connector', handmadeTime: 'About 2 hours' },
    customization: 'Heart colour and loop colour can be changed to suit your phone case.', rating: 4.8,
    reviews: [
      { name: 'Rhea Kapoor', rating: 5, date: '2026-09-10', comment: 'Tiny, glossy, and so cute on my phone case. The loop feels secure.' },
      { name: 'Tanvi Ghosh', rating: 5, date: '2026-08-06', comment: 'Perfect little gift for my music-obsessed friend.' },
      { name: 'Sia Fernandes', rating: 4, date: '2026-06-21', comment: 'Really sweet charm and the burgundy heart is a lovely detail.' },
    ],
  }),
  makeProduct({
    id: 'blue-sky-polaroid-earrings', category: 'earrings', name: 'Blue Sky Polaroid Earrings', price: 449,
    image: '/assets/products/polaroid-earrings.jpg',
    description: 'Mini polaroid-style clay earrings with a hand-painted blue sky, tiny birds and a handwritten caption.',
    longDescription: 'Little snapshots of a blue-sky day, shaped and painted by hand in soft blue and white clay. Tiny birds and a handwritten caption make each pair feel like a miniature keepsake, and the caption can be personalized just for you.',
    details: { size: 'About 3 cm', material: 'Polymer clay', finish: 'Glossy protective glaze', hangingType: 'Gold-tone hooks', handmadeTime: 'Made in 3 to 4 days' },
    customization: 'The handwritten caption can be customized with a short name, date, or little message.', rating: 4.9,
    reviews: [
      { name: 'Ishani Desai', rating: 5, date: '2026-09-18', comment: 'The tiny sky and birds are so lovely. They feel light to wear and came beautifully packed.' },
      { name: 'Sakshi Malhotra', rating: 5, date: '2026-08-29', comment: 'I had my initials added to the caption and they turned out just how I imagined.' },
      { name: 'Nandita Rao', rating: 4, date: '2026-07-16', comment: 'Such a sweet design and the hand-painted details are really neat.' },
    ],
  }),
  makeProduct({
    id: 'disco-star-charm-keychain', category: 'keychains', name: 'Disco Star Charm Keychain', price: 649,
    image: '/assets/products/charm-keychain.jpg',
    description: 'A glossy charm cluster with a burgundy star, checkered disco ball, crystal shard and red lip charm on a silver chain.',
    longDescription: 'A little party for your keys or favourite bag, with a deep burgundy star, a checkered disco ball, a crystal shard, and a glossy red lip charm. Each piece is sculpted and assembled by hand on a silver-tone chain, so every cluster has its own playful character.',
    details: { size: 'Chain about 12 cm', material: 'Polymer clay and metal findings', finish: 'Glossy glaze', hangingType: 'Silver chain with lobster clasp', handmadeTime: 'Made in 3 to 4 days' },
    customization: 'Ask for a different star colour or a small initial charm when placing a custom request.', rating: 4.8,
    reviews: [
      { name: 'Prisha Menon', rating: 5, date: '2026-09-22', comment: 'The disco ball catches the light so nicely, and the whole charm feels wonderfully fun.' },
      { name: 'Ayesha Qureshi', rating: 5, date: '2026-08-31', comment: 'I love all the tiny details. It looks gorgeous clipped to my everyday tote.' },
      { name: 'Mitali Sen', rating: 4, date: '2026-07-20', comment: 'A unique little statement piece, carefully made and packaged with care.' },
    ],
  }),
];

export default products;
