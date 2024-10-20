import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`serve is running on the port ${3000}`);
});

app.get("/api/products", (req, res) => {
  const products = [
    {
      product_id: "P001",
      name: "Moisturizing Face Cream",
      category: "Skincare",
      brand: "GlowNaturals",
      price: 25.99,
      currency: "USD",
      in_stock: true,
      quantity_available: 50,
      description:
        "A hydrating face cream suitable for all skin types. Provides deep moisture for 24 hours.",
      ratings: {
        average_rating: 4.6,
        number_of_reviews: 120,
      },
      features: ["Paraben-free"],
      images: ["https://example.com/images/facecream_front.jpg"],
    },
    {
      product_id: "P002",
      name: "Hair Repair Shampoo",
      category: "Haircare",
      brand: "SilkyLocks",
      price: 12.5,
      currency: "USD",
      in_stock: false,
      quantity_available: 0,
      description:
        "Revitalize your hair with this repairing shampoo enriched with argan oil.",
      ratings: {
        average_rating: 4.3,
        number_of_reviews: 80,
      },
      features: ["Sulfate-free"],
      images: ["https://example.com/images/shampoo_front.jpg"],
    },
    {
      product_id: "P003",
      name: "Vitamin C Serum",
      category: "Skincare",
      brand: "BrightGlow",
      price: 18.75,
      currency: "USD",
      in_stock: true,
      quantity_available: 30,
      description:
        "A concentrated serum with Vitamin C to brighten and even skin tone.",
      ratings: {
        average_rating: 4.8,
        number_of_reviews: 150,
      },
      features: ["For all skin types"],
      images: ["https://example.com/images/vitamin_c_serum.jpg"],
    },
    {
      product_id: "P004",
      name: "Revitalizing Eye Cream",
      category: "Skincare",
      brand: "EyeCarePro",
      price: 22.99,
      currency: "USD",
      in_stock: true,
      quantity_available: 20,
      description:
        "A revitalizing eye cream that reduces puffiness and dark circles.",
      ratings: {
        average_rating: 4.5,
        number_of_reviews: 95,
      },
      features: ["Reduces puffiness"],
      images: ["https://example.com/images/eye_cream.jpg"],
    },
    {
      product_id: "P005",
      name: "Herbal Body Lotion",
      category: "Bodycare",
      brand: "NatureCare",
      price: 15.0,
      currency: "USD",
      in_stock: true,
      quantity_available: 60,
      description: "A soothing body lotion with herbal extracts for dry skin.",
      ratings: {
        average_rating: 4.4,
        number_of_reviews: 70,
      },
      features: ["Herbal extracts"],
      images: ["https://example.com/images/body_lotion.jpg"],
    },
  ];
  //http://localhost:3000/api/products?search=metal
  if(req.query.search){
    const filterProducts=products.filter(product=>{
        return product.name.includes(req.query.search)
    })  
    res.send(filterProducts);
    return;
  }
  setTimeout(() => {
    res.send(products);
  },3000);
});
