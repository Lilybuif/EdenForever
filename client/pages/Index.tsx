import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  User,
  Leaf,
  Star,
  ArrowRight,
  Heart,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-sage-evergreen rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">
                  Eden Forever
                </span>
              </Link>

              <div className="hidden md:flex items-center space-x-6">
                <Link
                  to="/plants"
                  className="text-foreground hover:text-sage-evergreen transition-colors"
                >
                  Plants
                </Link>
                <Link
                  to="/energy-saving"
                  className="text-foreground hover:text-sage-evergreen transition-colors"
                >
                  Energy-Saving Lights
                </Link>
                <Link
                  to="/furniture"
                  className="text-foreground hover:text-sage-evergreen transition-colors"
                >
                  Furniture
                </Link>
                <Link
                  to="/paints"
                  className="text-foreground hover:text-sage-evergreen transition-colors"
                >
                  Paints
                </Link>
                <Link
                  to="/artwork"
                  className="text-foreground hover:text-sage-evergreen transition-colors"
                >
                  Artwork & Decor
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="search"
                  placeholder="Search sustainable products..."
                  className="pl-10 w-64 bg-sage-ivory border-sage-blush"
                />
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-sage-evergreen"
              >
                <User className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="relative text-foreground hover:text-sage-evergreen"
              >
                <ShoppingCart className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 bg-sage-terracotta text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
                  2
                </Badge>
              </Button>

              <Button className="hidden md:inline-flex bg-sage-evergreen hover:bg-sage-evergreen/90 text-white">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-ivory via-sage-blush/20 to-sage-sage/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-sage-sage/20 text-sage-evergreen border-sage-sage/30">
                  🌱 Sustainable Living
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Nurture Your
                  <span className="text-sage-evergreen block">
                    Natural Haven
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Supporting sustainable living through local businesses and
                  eco-friendly products. Transform your space with nature's
                  finest offerings.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-sage-evergreen hover:bg-sage-evergreen/90 text-white"
                >
                  Shop Plants
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-sage-sage text-sage-evergreen hover:bg-sage-sage/10"
                >
                  Explore Categories
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sage-evergreen">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Plant Varieties
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-sage-evergreen">
                    50k+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Happy Customers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-sage-evergreen">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Eco-Friendly
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-sage-sage/20 to-sage-evergreen/20 rounded-3xl p-8">
                <div className="w-full h-full bg-sage-ivory rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">🌿</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-sage-terracotta/20 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-sage-terracotta" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Plants
            </h2>
            <p className="text-xl text-muted-foreground">
              Carefully selected for your indoor garden
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Monstera Deliciosa",
                price: "$45.00",
                rating: 4.8,
                category: "Indoor Plant",
                image: "🌿",
              },
              {
                name: "Snake Plant",
                price: "$32.00",
                rating: 4.9,
                category: "Low Light",
                image: "🌱",
              },
              {
                name: "Fiddle Leaf Fig",
                price: "$68.00",
                rating: 4.7,
                category: "Statement Plant",
                image: "🍃",
              },
            ].map((plant, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-sage-blush/50 hover:border-sage-sage"
              >
                <CardContent className="p-6">
                  <div className="aspect-square bg-sage-ivory rounded-xl mb-4 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                    {plant.image}
                  </div>

                  <div className="space-y-3">
                    <Badge
                      variant="secondary"
                      className="bg-sage-sage/10 text-sage-evergreen"
                    >
                      {plant.category}
                    </Badge>

                    <h3 className="text-xl font-semibold text-foreground">
                      {plant.name}
                    </h3>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(plant.rating) ? "text-sage-terracotta fill-current" : "text-sage-blush"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({plant.rating})
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-sage-evergreen">
                        {plant.price}
                      </span>
                      <Button
                        size="sm"
                        className="bg-sage-evergreen hover:bg-sage-evergreen/90 text-white"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-sage-ivory/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Eden Forever?
            </h2>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in sustainable living
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Expert Care Guide",
                description:
                  "Detailed care instructions and ongoing support for all your plants",
              },
              {
                icon: Leaf,
                title: "100% Organic",
                description:
                  "All our plants are grown without harmful chemicals or pesticides",
              },
              {
                icon: Heart,
                title: "Local Support",
                description:
                  "Supporting local growers and sustainable business practices",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center border-sage-blush/50 bg-card/50"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-sage-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-sage-evergreen" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-evergreen text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-sage-evergreen" />
                </div>
                <span className="text-xl font-bold">Eden Forever</span>
              </div>
              <p className="text-sage-ivory">
                Supporting sustainable living through local businesses and
                eco-friendly products.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <div className="space-y-2 text-sage-ivory">
                <div>Plants</div>
                <div>Energy-Saving Lights</div>
                <div>Furniture</div>
                <div>Paints</div>
                <div>Artwork & Decor</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sage-ivory">
                <div>Help Center</div>
                <div>Shipping Info</div>
                <div>Returns</div>
                <div>Community</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-sage-sage rounded-full flex items-center justify-center">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-sage-sage rounded-full flex items-center justify-center">
                  <span className="text-sm">𝕏</span>
                </div>
                <div className="w-10 h-10 bg-sage-sage rounded-full flex items-center justify-center">
                  <span className="text-sm">ig</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
