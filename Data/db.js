const plants = [
  {
    species: "Syngonium rose",
    commonName: "Syngonium Rose",
    waterNeeds: "Medium",
    sunlightRequirements: "Low to Medium Light",
    size: "Small to Medium",
    optimalTemperature: "18-26°C",
    image: "images/SyngoniumRose",
    description:
      "Syngonium Rose is a lovely plant known for its arrow-shaped leaves. It requires moderate watering and can thrive in low to medium light conditions. A great choice for indoor greenery.",
    petFriendly: true,
  },
  {
    species: "Alocasia Zebrina",
    commonName: "Zebrina Plant",
    waterNeeds: "High",
    sunlightRequirements: "Bright Indirect Light",
    size: "Large",
    optimalTemperature: "20-30°C",
    image: "URL_TO_IMAGE",
    description:
      "Alocasia Zebrina, also known as the Zebrina Plant, features striking zebra-like patterns on its stems. It prefers high humidity and bright indirect light. A stunning addition to any plant collection.",
    petFriendly: false,
  },
  {
    species: "Aloe vera",
    commonName: "Aloe Vera",
    waterNeeds: "Low",
    sunlightRequirements: "Bright Indirect Light",
    size: "Medium",
    optimalTemperature: "15-27°C",
    image:
      "https://images.unsplash.com/photo-1534180426208-09f4b0193839?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Aloe Vera is well-known for its succulent leaves with healing properties. It requires infrequent watering and thrives in bright indirect light. A versatile plant that adds a touch of green and serves practical purposes.",
    petFriendly: true,
  },
  {
    species: "Sansevieria",
    commonName: "Snake Plant",
    waterNeeds: "Low",
    sunlightRequirements: "Low to Bright Light",
    size: "Medium to Large",
    optimalTemperature: "15-23°C",
    image: "URL_TO_IMAGE",
    description:
      "Sansevieria, commonly known as the Snake Plant, is a hardy and low-maintenance plant. It can thrive in various light conditions and requires minimal watering. An excellent choice for beginners.",
    petFriendly: true,
  },
  {
    species: "Ficus microcarpa",
    commonName: "Bonsai Ficus Ginseng",
    waterNeeds: "Medium",
    sunlightRequirements: "Bright Indirect Light",
    size: "Small to Medium",
    optimalTemperature: "20-30°C",
    image: "URL_TO_IMAGE",
    description:
      "Bonsai Ficus Ginseng, also known as Ficus microcarpa, is a popular choice for bonsai enthusiasts. It requires moderate watering and bright indirect light. Its unique appearance adds an artistic touch to any space.",
    petFriendly: false,
  },
  {
    species: "Bromelia Guzmania",
    commonName: "Guzmania Bromeliad",
    waterNeeds: "Medium to High",
    sunlightRequirements: "Bright Indirect Light",
    size: "Medium",
    optimalTemperature: "18-24°C",
    image: "URL_TO_IMAGE",
    description:
      "Bromelia Guzmania, or Guzmania Bromeliad, is known for its vibrant and long-lasting flower bracts. It requires moderate to high humidity and bright indirect light. A tropical beauty that enhances any room.",
    petFriendly: true,
  },
  {
    species: "Ananas comosus",
    commonName: "Pineapple Plant",
    waterNeeds: "Medium",
    sunlightRequirements: "Bright Indirect Light",
    size: "Medium",
    optimalTemperature: "20-30°C",
    image: "URL_TO_IMAGE",
    description:
      "Ananas comosus, the Pineapple Plant, is a unique tropical plant with spiky foliage. It requires moderate watering and bright indirect light. A conversation starter and a delightful addition to your plant collection.",
    petFriendly: false,
  },
  {
    species: "Cycas revoluta",
    commonName: "Sago Palm",
    waterNeeds: "Low to Medium",
    sunlightRequirements: "Bright Indirect Light",
    size: "Medium to Large",
    optimalTemperature: "18-25°C",
    image: "URL_TO_IMAGE",
    description:
      "Cycas revoluta, commonly known as the Sago Palm, is a slow-growing and resilient plant. It prefers bright indirect light and infrequent watering. A classic choice for adding a touch of the tropics to your space.",
    petFriendly: true,
  },
  {
    species: "Asparagus plumosus",
    commonName: "Asparagus Fern",
    waterNeeds: "Medium to High",
    sunlightRequirements: "Bright Indirect Light",
    size: "Medium",
    optimalTemperature: "18-25°C",
    image: "URL_TO_IMAGE",
    description:
      "Asparagus plumosus, or Asparagus Fern, is a delicate and feathery plant. It thrives in bright indirect light and requires regular watering. An elegant choice for adding a soft and lush green touch to your home.",
    petFriendly: true,
  },
  {
    species: "Dypsis lutescens",
    commonName: "Areca Palm",
    waterNeeds: "Medium",
    sunlightRequirements: "Bright Indirect Light",
    size: "Medium to Large",
    optimalTemperature: "18-25°C",
    image: "URL_TO_IMAGE",
    description:
      "Dypsis lutescens, commonly known as the Areca Palm, is a popular indoor palm with feathery fronds. It prefers bright indirect light and moderate watering. An excellent choice for creating a tropical oasis indoors.",
    petFriendly: false,
  },
  {
    species: "Euphorbia ingens",
    commonName: "Cactus Euphorbia",
    waterNeeds: "Low",
    sunlightRequirements: "Bright Direct Light",
    size: "Medium",
    optimalTemperature: "20-30°C",
    image: "URL_TO_IMAGE",
    description:
      "Euphorbia ingens, or Cactus Euphorbia, is a succulent with a tree-like appearance. It thrives in bright direct light and requires minimal watering. A unique and low-maintenance addition to your succulent collection.",
    petFriendly: true,
  },
  {
    species: "Monstera deliciosa",
    commonName: "Monstera Deliciosa",
    waterNeeds: "Medium",
    sunlightRequirements: "Bright Indirect Light",
    size: "Large",
    optimalTemperature: "20-30°C",
    image: "URL_TO_IMAGE",
    description:
      "Monstera deliciosa, commonly known as the Monstera, is a popular and iconic houseplant with fenestrated leaves. It requires moderate watering and bright indirect light. A must-have for any plant enthusiast.",
    petFriendly: false,
  },
  {
    species: "Philodendron",
    commonName: "Philodendron",
    waterNeeds: "Medium",
    sunlightRequirements: "Low to Medium Light",
    size: "Small to Medium",
    optimalTemperature: "18-25°C",
    image: "URL_TO_IMAGE",
    description:
      "Philodendron is a versatile and easy-to-care-for plant with heart-shaped leaves. It thrives in low to medium light conditions and requires moderate watering. A classic choice for indoor greenery.",
    petFriendly: true,
  },
  {
    species: "Rosa",
    commonName: "Rose",
    waterNeeds: "Medium",
    sunlightRequirements: "Full Sun",
    size: "Varies",
    optimalTemperature: "15-30°C",
    image: "URL_TO_IMAGE",
    description:
      "Rosa, or Rose, is a beloved flowering plant with a wide range of varieties. It prefers full sun and regular watering. A symbol of love and beauty, making it a timeless addition to gardens and landscapes.",
    petFriendly: true,
  },
  {
    species: "Rosmarinus officinalis",
    commonName: "Rosemary",
    waterNeeds: "Low to Medium",
    sunlightRequirements: "Full Sun",
    size: "Medium",
    optimalTemperature: "18-24°C",
    image: "URL_TO_IMAGE",
    description:
      "Rosmarinus officinalis, or Rosemary, is a fragrant herb with needle-like leaves. It thrives in full sun and requires well-drained soil. A culinary and aromatic herb that adds flavor and fragrance to your garden.",
    petFriendly: true,
  },
  {
    species: "Spathiphyllum",
    commonName: "Peace Lily",
    waterNeeds: "High",
    sunlightRequirements: "Low to Medium Light",
    size: "Medium",
    optimalTemperature: "18-24°C",
    image: "URL_TO_IMAGE",
    description:
      "Spathiphyllum, commonly known as the Peace Lily, is a popular indoor plant with elegant white flowers. It prefers low to medium light and high humidity. A symbol of peace and purity for your home.",
    petFriendly: false,
  },
  {
    species: "Schefflera arboricola",
    commonName: "Schefflera Gold Capella",
    waterNeeds: "Medium",
    sunlightRequirements: "Bright Indirect Light",
    size: "Medium to Large",
    optimalTemperature: "18-25°C",
    image: "URL_TO_IMAGE",
    description:
      "Schefflera arboricola, or Schefflera Gold Capella, is a striking plant with variegated leaves. It requires moderate watering and bright indirect light. A decorative and air-purifying addition to your indoor space.",
    petFriendly: true,
  },
  {
    species: "Syngonium podophyllum",
    commonName: "Arrowhead Plant",
    waterNeeds: "Medium",
    sunlightRequirements: "Low to Medium Light",
    size: "Small to Medium",
    optimalTemperature: "18-24°C",
    image: "URL_TO_IMAGE",
    description:
      "Syngonium podophyllum, or Arrowhead Plant, is a versatile and easy-to-grow plant with arrow-shaped leaves. It thrives in low to medium light conditions and requires moderate watering. A charming addition to your indoor garden.",
    petFriendly: true,
  },
  {
    species: "Phalaenopsis",
    commonName: "White Orchid",
    waterNeeds: "Medium",
    sunlightRequirements: "Bright Indirect Light",
    size: "Medium",
    optimalTemperature: "18-25°C",
    image: "URL_TO_IMAGE",
    description:
      "Phalaenopsis, or White Orchid, is an elegant and graceful flowering orchid. It requires moderate watering and bright indirect light. A symbol of beauty and sophistication, perfect for enhancing your living space.",
    petFriendly: false,
  },
  {
    species: "Yucca elephantipes",
    commonName: "Yucca Palm",
    waterNeeds: "Low",
    sunlightRequirements: "Bright Indirect Light",
    size: "Medium to Large",
    optimalTemperature: "20-30°C",
    image: "URL_TO_IMAGE",
    description:
      "Yucca elephantipes, or Yucca Palm, is a resilient and architectural plant with sword-like leaves. It thrives in bright indirect light and requires infrequent watering. A bold and modern addition to your indoor landscape.",
    petFriendly: true,
  },
];
