import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  User,
  Leaf,
  ArrowLeft,
  ArrowRight,
  MapPin,
  CreditCard,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Checkout() {
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

      {/* Progress Steps */}
      <div className="bg-sage-ivory/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-sage-evergreen rounded-full flex items-center justify-center text-white text-sm font-bold">
                ✓
              </div>
              <span className="text-sage-evergreen font-medium">Cart</span>
            </div>
            <div className="w-12 h-px bg-sage-sage"></div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-sage-evergreen rounded-full flex items-center justify-center text-white text-sm font-bold">
                2
              </div>
              <span className="text-sage-evergreen font-medium">Checkout</span>
            </div>
            <div className="w-12 h-px bg-sage-blush"></div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-sage-blush rounded-full flex items-center justify-center text-muted-foreground text-sm font-bold">
                3
              </div>
              <span className="text-muted-foreground">Payment</span>
            </div>
            <div className="w-12 h-px bg-sage-blush"></div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-sage-blush rounded-full flex items-center justify-center text-muted-foreground text-sm font-bold">
                4
              </div>
              <span className="text-muted-foreground">Confirmation</span>
            </div>
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
            <Package className="w-6 h-6 mr-3 text-sage-evergreen" />
            Checkout
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Forms */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="shipping" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 bg-sage-ivory">
                <TabsTrigger
                  value="shipping"
                  className="data-[state=active]:bg-sage-evergreen data-[state=active]:text-white"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Shipping
                </TabsTrigger>
                <TabsTrigger
                  value="payment"
                  className="data-[state=active]:bg-sage-evergreen data-[state=active]:text-white"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Payment
                </TabsTrigger>
              </TabsList>

              <TabsContent value="shipping" className="space-y-6">
                <Card className="border-sage-blush/50">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">
                      Shipping Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-foreground">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          className="bg-sage-ivory border-sage-blush focus:border-sage-sage"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-foreground">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          className="bg-sage-ivory border-sage-blush focus:border-sage-sage"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="bg-sage-ivory border-sage-blush focus:border-sage-sage"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        className="bg-sage-ivory border-sage-blush focus:border-sage-sage"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-foreground">
                        Address
                      </Label>
                      <Input
                        id="address"
                        className="bg-sage-ivory border-sage-blush focus:border-sage-sage"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-foreground">
                          City
                        </Label>
                        <Input
                          id="city"
                          className="bg-sage-ivory border-sage-blush focus:border-sage-sage"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state" className="text-foreground">
                          State
                        </Label>
                        <Input
                          id="state"
                          className="bg-sage-ivory border-sage-blush focus:border-sage-sage"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip" className="text-foreground">
                          ZIP Code
                        </Label>
                        <Input
                          id="zip"
                          className="bg-sage-ivory border-sage-blush focus:border-sage-sage"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-sage-blush/50">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">
                      Shipping Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 border border-sage-sage rounded-lg bg-sage-ivory/30">
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="shipping"
                            className="text-sage-evergreen"
                            defaultChecked
                          />
                          <div>
                            <div className="font-medium text-foreground">
                              Standard Shipping
                            </div>
                            <div className="text-sm text-muted-foreground">
                              5-7 business days
                            </div>
                          </div>
                        </div>
                        <div className="font-bold text-sage-evergreen">
                          $5.00
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-sage-blush rounded-lg">
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="shipping"
                            className="text-sage-evergreen"
                          />
                          <div>
                            <div className="font-medium text-foreground">
                              Express Shipping
                            </div>
                            <div className="text-sm text-muted-foreground">
                              2-3 business days
                            </div>
                          </div>
                        </div>
                        <div className="font-bold text-sage-evergreen">
                          $15.00
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-sage-blush rounded-lg">
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="shipping"
                            className="text-sage-evergreen"
                          />
                          <div>
                            <div className="font-medium text-foreground">
                              Overnight Shipping
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Next business day
                            </div>
                          </div>
                        </div>
                        <div className="font-bold text-sage-evergreen">
                          $25.00
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payment">
                <div className="text-center py-12">
                  <div className="text-sage-evergreen mb-4">
                    <CreditCard className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Payment Details
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Complete your shipping information first, then proceed to
                    payment.
                  </p>
                  <Link to="/payment">
                    <Button className="bg-sage-evergreen hover:bg-sage-evergreen/90 text-white">
                      Continue to Payment
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
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
                {/* Products */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-sage-ivory rounded-lg flex items-center justify-center text-lg">
                      🌿
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">
                        Monstera Deliciosa
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Qty: 1
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
                        Qty: 1
                      </div>
                    </div>
                    <div className="font-semibold text-sage-evergreen">
                      $32.00
                    </div>
                  </div>
                </div>

                <Separator className="bg-sage-blush/30" />

                {/* Totals */}
                <div className="space-y-3">
                  <div className="flex justify-between text-foreground">
                    <span>Subtotal</span>
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

                {/* Contact Support */}
                <div className="bg-sage-ivory/50 p-4 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">
                    Need Help?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Our plant specialists are here to help with your order.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-sage-sage text-sage-evergreen hover:bg-sage-sage/10"
                  >
                    Contact Support
                  </Button>
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
