import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  User,
  Leaf,
  Lock,
  CreditCard,
  Shield,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function Payment() {
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
            <Link to="/cart" className="text-sage-evergreen hover:underline">
              Cart
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Secure Payment</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link
            to="/cart"
            className="inline-flex items-center text-sage-evergreen hover:underline mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cart
          </Link>
          <h1 className="text-3xl font-bold text-foreground flex items-center">
            <Lock className="w-6 h-6 mr-3 text-sage-evergreen" />
            Secure Payment
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Information */}
          <div className="lg:col-span-2">
            <Card className="border-sage-blush/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Card Number */}
                <div className="space-y-2">
                  <Label
                    htmlFor="cardNumber"
                    className="text-foreground font-medium"
                  >
                    Card Number
                  </Label>
                  <div className="relative">
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="pl-12 bg-sage-ivory border-sage-blush focus:border-sage-sage focus:ring-sage-sage/20"
                    />
                    <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
                      <div className="w-6 h-4 bg-sage-blush rounded text-xs flex items-center justify-center text-white">
                        💳
                      </div>
                      <div className="w-6 h-4 bg-sage-sage rounded text-xs flex items-center justify-center text-white">
                        💳
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expiry Date and CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="expiryDate"
                      className="text-foreground font-medium"
                    >
                      Expiry Date
                    </Label>
                    <Input
                      id="expiryDate"
                      placeholder="MM/YY"
                      className="bg-sage-ivory border-sage-blush focus:border-sage-sage focus:ring-sage-sage/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="cvv"
                      className="text-foreground font-medium"
                    >
                      CVV
                    </Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      className="bg-sage-ivory border-sage-blush focus:border-sage-sage focus:ring-sage-sage/20"
                    />
                  </div>
                </div>

                {/* Cardholder Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="cardholderName"
                    className="text-foreground font-medium"
                  >
                    Cardholder Name
                  </Label>
                  <Input
                    id="cardholderName"
                    placeholder="John Doe"
                    className="bg-sage-ivory border-sage-blush focus:border-sage-sage focus:ring-sage-sage/20"
                  />
                </div>

                <Separator className="bg-sage-blush/30" />

                {/* Billing Address */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Billing Address
                  </h3>

                  <div className="space-y-2">
                    <Label
                      htmlFor="address"
                      className="text-foreground font-medium"
                    >
                      Address
                    </Label>
                    <Input
                      id="address"
                      placeholder="123 Main Street"
                      className="bg-sage-ivory border-sage-blush focus:border-sage-sage focus:ring-sage-sage/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="city"
                        className="text-foreground font-medium"
                      >
                        City
                      </Label>
                      <Input
                        id="city"
                        placeholder="New York"
                        className="bg-sage-ivory border-sage-blush focus:border-sage-sage focus:ring-sage-sage/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="zipCode"
                        className="text-foreground font-medium"
                      >
                        ZIP Code
                      </Label>
                      <Input
                        id="zipCode"
                        placeholder="10001"
                        className="bg-sage-ivory border-sage-blush focus:border-sage-sage focus:ring-sage-sage/20"
                      />
                    </div>
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
                {/* Product */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-sage-ivory rounded-lg flex items-center justify-center text-2xl">
                    🌿
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">
                      Monstera Deliciosa
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Indoor Plant • 1
                    </p>
                  </div>
                  <span className="font-semibold text-sage-evergreen">
                    $45.00
                  </span>
                </div>

                <Separator className="bg-sage-blush/30" />

                {/* Summary */}
                <div className="space-y-3">
                  <div className="flex justify-between text-foreground">
                    <span>Subtotal</span>
                    <span>$45.00</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Shipping</span>
                    <span>$5.00</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Tax</span>
                    <span>$4.00</span>
                  </div>
                  <Separator className="bg-sage-blush/30" />
                  <div className="flex justify-between text-lg font-bold text-foreground">
                    <span>Total</span>
                    <span className="text-sage-evergreen">$54.00</span>
                  </div>
                </div>

                {/* Payment Button */}
                <Link to="/order-confirmation" className="w-full block">
                  <Button className="w-full bg-sage-evergreen hover:bg-sage-evergreen/90 text-white py-6 text-lg font-semibold">
                    <Lock className="w-5 h-5 mr-2" />
                    Complete Secure Payment
                  </Button>
                </Link>

                {/* Security Notice */}
                <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-sage-ivory/50 p-3 rounded-lg">
                  <Shield className="w-4 h-4 text-sage-sage" />
                  <span>Your payment information is encrypted and secure</span>
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
