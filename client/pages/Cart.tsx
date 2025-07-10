import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  User,
  Leaf,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Cart() {
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

      {/* Breadcrumb */}
      <div className="bg-sage-ivory/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-sage-evergreen hover:underline">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Shopping Cart</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-sage-evergreen hover:underline mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-bold text-foreground flex items-center">
            <ShoppingCart className="w-6 h-6 mr-3 text-sage-evergreen" />
            Shopping Cart
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart Item 1 */}
            <Card className="border-sage-blush/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-sage-ivory rounded-lg flex items-center justify-center text-3xl">
                    🌿
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      Monstera Deliciosa
                    </h3>
                    <p className="text-muted-foreground">Indoor Plant</p>
                    <Badge className="mt-2 bg-sage-sage/10 text-sage-evergreen">
                      In Stock
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 border-sage-blush hover:bg-sage-ivory"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">1</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 border-sage-blush hover:bg-sage-ivory"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-sage-evergreen">
                        $45.00
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-sage-terracotta hover:text-sage-terracotta/80"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cart Item 2 */}
            <Card className="border-sage-blush/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-sage-ivory rounded-lg flex items-center justify-center text-3xl">
                    🌱
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      Snake Plant
                    </h3>
                    <p className="text-muted-foreground">Low Light Plant</p>
                    <Badge className="mt-2 bg-sage-sage/10 text-sage-evergreen">
                      In Stock
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 border-sage-blush hover:bg-sage-ivory"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">1</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 border-sage-blush hover:bg-sage-ivory"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-sage-evergreen">
                        $32.00
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-sage-terracotta hover:text-sage-terracotta/80"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Products */}
            <Card className="border-sage-blush/50">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">
                  You might also like
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center space-y-2">
                    <div className="w-full aspect-square bg-sage-ivory rounded-lg flex items-center justify-center text-4xl">
                      🍃
                    </div>
                    <h4 className="font-medium text-sm">Fiddle Leaf Fig</h4>
                    <div className="text-sage-evergreen font-bold">$68.00</div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-sage-sage text-sage-evergreen hover:bg-sage-sage/10"
                    >
                      Add to Cart
                    </Button>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-full aspect-square bg-sage-ivory rounded-lg flex items-center justify-center text-4xl">
                      🌾
                    </div>
                    <h4 className="font-medium text-sm">Peace Lily</h4>
                    <div className="text-sage-evergreen font-bold">$38.00</div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-sage-sage text-sage-evergreen hover:bg-sage-sage/10"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="border-sage-blush/50 sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-foreground">
                    <span>Subtotal (2 items)</span>
                    <span>$77.00</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Shipping</span>
                    <span>$5.00</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Tax</span>
                    <span>$7.20</span>
                  </div>
                  <Separator className="bg-sage-blush/30" />
                  <div className="flex justify-between text-lg font-bold text-foreground">
                    <span>Total</span>
                    <span className="text-sage-evergreen">$89.20</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link to="/checkout" className="w-full block">
                    <Button className="w-full bg-sage-evergreen hover:bg-sage-evergreen/90 text-white py-6 text-lg font-semibold">
                      Proceed to Checkout
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>

                  {/* Promo Code */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Promo Code
                    </label>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Enter code"
                        className="bg-sage-ivory border-sage-blush"
                      />
                      <Button
                        variant="outline"
                        className="border-sage-sage text-sage-evergreen hover:bg-sage-sage/10"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Free Shipping Notice */}
                <div className="bg-sage-ivory/50 p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    🚚 Free shipping on orders over $100
                  </p>
                  <div className="w-full bg-sage-blush/30 rounded-full h-2 mt-2">
                    <div
                      className="bg-sage-sage h-2 rounded-full"
                      style={{ width: "89%" }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Add $10.80 more for free shipping
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-sage-evergreen text-white py-16 mt-16">
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
