import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/navigation/Header';
import ProductCard from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Truck, Shield, Award, Phone } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import heroImage from '@/assets/hero-spices.jpg';

const Index = () => {
  const navigate = useNavigate();
  const { addToCart, getTotalItems } = useCart();
  const featuredProducts = getFeaturedProducts();

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (productId: string) => {
    const product = featuredProducts.find(p => p.id === productId);
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
  };

  const categories = [
    { name: 'Ground Spices', description: 'Finely ground authentic spices', icon: '🌶️' },
    { name: 'Whole Spices', description: 'Fresh whole spices and seeds', icon: '🌿' },
    { name: 'Spice Blends', description: 'Traditional masala blends', icon: '🥄' },
    { name: 'Premium', description: 'Luxury spices like saffron', icon: '⭐' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={getTotalItems()} />
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <Badge className="mb-4 bg-primary">Authentic Indian Spices</Badge>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Bringing Authentic Flavors to Your Kitchen
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Experience the rich heritage of Indian spices with our premium collection of handpicked masalas, sourced directly from the finest regions of India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => navigate('/shop')}
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-foreground"
                onClick={() => navigate('/about')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Explore Our Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From everyday cooking essentials to premium specialty spices, find everything you need to create authentic Indian flavors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card 
                key={category.name}
                className="cursor-pointer hover:shadow-warm transition-smooth group"
                onClick={() => navigate('/shop')}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our bestsellers and new arrivals, carefully selected to bring you the finest quality spices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                rating={product.rating}
                reviews={product.reviews}
                isNew={product.isNew}
                isBestSeller={product.isBestSeller}
                onAddToCart={handleAddToCart}
                onClick={handleProductClick}
              />
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/shop')}
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">Free delivery on orders above ₹500</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quality Assured</h3>
              <p className="text-muted-foreground">100% authentic and fresh spices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Trusted Brand</h3>
              <p className="text-muted-foreground">Serving authentic flavors since decades</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-spice">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to Transform Your Cooking?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of home cooks who trust Masala Mantra for their authentic Indian spice needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/shop')}
            >
              Start Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
