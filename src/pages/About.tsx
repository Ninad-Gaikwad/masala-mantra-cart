import React from 'react';
import Header from '@/components/navigation/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Leaf, Heart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

const About = () => {
  const { getTotalItems } = useCart();

  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality First',
      description: 'We source only the finest spices from trusted farmers across India, ensuring authentic taste and aroma in every packet.',
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Sustainable Sourcing',
      description: 'Our commitment to sustainable farming practices helps preserve traditional cultivation methods while supporting local communities.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Family Heritage',
      description: 'Three generations of spice expertise, passed down through our family, brings you time-tested recipes and blends.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Customer Love',
      description: 'Every spice is carefully selected and processed with love, ensuring that your family gets the best flavors nature has to offer.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={getTotalItems()} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16">
          <Badge className="mb-4">Our Story</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bringing Authentic Flavors to Your Kitchen
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over three decades, Masala Mantra has been India's trusted source for premium spices. 
            What started as a small family business has grown into a beloved brand that serves thousands 
            of households across the country.
          </p>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Our Journey
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1990 by Ramesh Kumar in the bustling spice markets of Delhi, 
                  Masala Mantra began with a simple vision: to bring the authentic taste of 
                  traditional Indian spices to modern kitchens.
                </p>
                <p>
                  Starting with just five varieties of spices sold in local markets, we've 
                  grown to offer over 50 different products, each carefully sourced from 
                  the finest regions across India. From the saffron fields of Kashmir to 
                  the cardamom plantations of Kerala, we travel far and wide to bring you 
                  the best.
                </p>
                <p>
                  Today, led by the second and third generations of the Kumar family, we 
                  continue to uphold the same principles of quality, authenticity, and 
                  customer satisfaction that our founder instilled in us.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 gradient-saffron rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">1990</span>
                    </div>
                    <h3 className="font-semibold text-foreground">Founded</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Started as a small family business in Delhi's spice market
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 gradient-saffron rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">50+</span>
                    </div>
                    <h3 className="font-semibold text-foreground">Products</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Premium spices and blends sourced from across India
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 gradient-saffron rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">10K+</span>
                    </div>
                    <h3 className="font-semibold text-foreground">Happy Customers</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Families trust us for their authentic spice needs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/50 -mx-4 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do, from sourcing our spices 
                to serving our customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {value.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              To preserve and share the rich culinary heritage of India by providing 
              authentic, high-quality spices that bring families together around the 
              dining table, one delicious meal at a time.
            </p>
            <div className="gradient-spice p-8 rounded-lg text-white">
              <blockquote className="text-xl italic">
                "Every spice tells a story, and we're honored to be part of yours. 
                From our family to yours, we bring you the authentic taste of India."
              </blockquote>
              <p className="mt-4 font-semibold">- The Kumar Family</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;