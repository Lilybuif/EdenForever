import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  User,
  Leaf,
  CheckCircle,
  Package,
  Truck,
  Mail,
  Download,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function OrderConfirmation() {
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
                  0
                </Badge>
              </Button>

              <Button className="hidden md:inline-flex bg-sage-evergreen hover:bg-sage-evergreen/90 text-white">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Success Header */}
      <div className="bg-gradient-to-r from-sage-evergreen to-sage-sage text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-sage-evergreen" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Order Confirmed! 🌱</h1>
          <p className="text-xl text-sage-ivory">
            Thank you for your purchase. Your plants are on their way!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Details */}
          <div className="space-y-6">
            <Card className="border-sage-blush/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <Package className="w-5 h-5 mr-2 text-sage-evergreen" />
                  Order Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Order Number:</span>
                    <div className="font-mono font-bold text-sage-evergreen">
                      #EF-2024-001247
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Order Date:</span>
                    <div className="font-medium">January 15, 2024</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">
                      Estimated Delivery:
                    </span>
                    <div className="font-medium">January 20-22, 2024</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Total:</span>
                    <div className="font-bold text-sage-evergreen text-lg">
                      $89.20
                    </div>
                  </div>
                </div>

                <Separator className="bg-sage-blush/30" />

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">
                    Items Ordered
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-sage-ivory rounded-lg flex items-center justify-center text-lg">
                        🌿
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">
                          Monstera Deliciosa
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Indoor Plant • Qty: 1
                        </div>
                      </div>
                      <div className="font-semibold text-sage-evergreen">
                        $45.00
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-sage-ivory rounded-lg flex items-center justify-center text-lg">
                        🌱
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">
                          Snake Plant
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Low Light Plant • Qty: 1
                        </div>
                      </div>
                      <div className="font-semibold text-sage-evergreen">
                        $32.00
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-sage-blush/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <Truck className="w-5 h-5 mr-2 text-sage-evergreen" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-medium text-foreground mb-2">
                    Shipping Address
                  </div>
                  <div className="text-muted-foreground">
                    <div>John Doe</div>
                    <div>123 Main Street</div>
                    <div>New York, NY 10001</div>
                  </div>
                </div>

                <Separator className="bg-sage-blush/30" />

                <div>
                  <div className="font-medium text-foreground mb-2">
                    Shipping Method
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-sage-sage/10 text-sage-evergreen">
                      Standard Shipping
                    </Badge>
                    <span className="text-muted-foreground">
                      5-7 business days
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <div className="space-y-6">
            <Card className="border-sage-blush/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  What happens next?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-sage-evergreen rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                      1
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        Order Processing
                      </div>
                      <div className="text-sm text-muted-foreground">
                        We're carefully preparing your plants for shipment
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-sage-sage rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                      2
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        Quality Check
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Each plant is inspected for health and vitality
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-sage-blush rounded-full flex items-center justify-center text-sage-evergreen text-sm font-bold mt-1">
                      3
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        Secure Packaging
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Plants are carefully packaged for safe transport
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-sage-blush rounded-full flex items-center justify-center text-sage-evergreen text-sm font-bold mt-1">
                      4
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        Delivery
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Your plants arrive at your doorstep ready to thrive
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-sage-blush/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-sage-evergreen" />
                  Stay Updated
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We'll send you email updates about your order status and
                  tracking information.
                </p>

                <div className="space-y-3">
                  <Button className="w-full bg-sage-evergreen hover:bg-sage-evergreen/90 text-white">
                    Track Your Order
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-sage-sage text-sage-evergreen hover:bg-sage-sage/10"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Receipt
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-sage-blush/50 bg-sage-ivory/30">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="font-semibold text-foreground mb-2">
                  Plant Care Tips Coming Soon!
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We'll email you personalized care guides for your new plants
                  when they ship.
                </p>
                <Badge className="bg-sage-sage/10 text-sage-evergreen">
                  <Heart className="w-3 h-3 mr-1" />
                  Expert Care Included
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-12 text-center space-y-4">
          <h3 className="text-2xl font-semibold text-foreground">
            What would you like to do next?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button
                variant="outline"
                className="border-sage-sage text-sage-evergreen hover:bg-sage-sage/10"
              >
                Continue Shopping
              </Button>
            </Link>
            <Button className="bg-sage-evergreen hover:bg-sage-evergreen/90 text-white">
              View Order History
            </Button>
            <Button
              variant="outline"
              className="border-sage-sage text-sage-evergreen hover:bg-sage-sage/10"
            >
              Contact Support
            </Button>
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
