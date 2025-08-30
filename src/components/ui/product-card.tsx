import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviews?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  onAddToCart: (id: string) => void;
  onClick: (id: string) => void;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating = 4.5,
  reviews = 0,
  isNew = false,
  isBestSeller = false,
  onAddToCart,
  onClick,
}: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group cursor-pointer hover:shadow-warm transition-smooth overflow-hidden">
      <div className="relative" onClick={() => onClick(id)}>
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 space-y-1">
          {isNew && (
            <Badge variant="secondary" className="text-xs">
              New
            </Badge>
          )}
          {isBestSeller && (
            <Badge className="text-xs bg-accent">
              Best Seller
            </Badge>
          )}
          {discount > 0 && (
            <Badge variant="destructive" className="text-xs">
              {discount}% OFF
            </Badge>
          )}
        </div>
      </div>

      <CardContent className="p-4">
        <h3 
          className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-smooth cursor-pointer"
          onClick={() => onClick(id)}
        >
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${
                  i < Math.floor(rating) 
                    ? 'fill-secondary text-secondary' 
                    : 'text-muted-foreground'
                }`} 
              />
            ))}
          </div>
          {reviews > 0 && (
            <span className="text-xs text-muted-foreground">({reviews})</span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-bold text-primary">₹{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button 
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(id);
          }}
          className="w-full"
          size="sm"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;