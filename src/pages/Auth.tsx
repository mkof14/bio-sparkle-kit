import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Lock, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { signUpSchema, signInSchema } from "@/lib/validations/auth";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    try {
      if (isSignUp) {
        // Validate sign up data
        const validatedData = signUpSchema.parse(formData);
        
        const { error } = await supabase.auth.signUp({
          email: validatedData.email,
          password: validatedData.password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: {
              first_name: validatedData.name.split(' ')[0],
              last_name: validatedData.name.split(' ').slice(1).join(' '),
            }
          }
        });

        if (error) throw error;

        toast({
          title: "Account created!",
          description: "Welcome to Bio Sparkle Kit. Redirecting...",
        });
        
        navigate('/');
      } else {
        // Validate sign in data
        const validatedData = signInSchema.parse({
          email: formData.email,
          password: formData.password,
        });

        const { error } = await supabase.auth.signInWithPassword({
          email: validatedData.email,
          password: validatedData.password,
        });

        if (error) throw error;

        toast({
          title: "Welcome back!",
          description: "Successfully signed in.",
        });
        
        navigate('/');
      }
    } catch (error: any) {
      if (error.name === 'ZodError') {
        // Handle validation errors
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err: any) => {
          const field = err.path[0];
          fieldErrors[field] = err.message;
        });
        setErrors(fieldErrors);
      } else {
        // Handle auth errors
        toast({
          title: "Error",
          description: error.message || "An error occurred during authentication",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-md">
          <div className="bg-card border border-border rounded-2xl p-8">
            <h1 className="text-4xl font-bold text-center mb-2">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h1>
            <p className="text-muted-foreground text-center mb-8">
              {isSignUp
                ? "Start your health journey today"
                : "Sign in to access your health dashboard"}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      disabled={isLoading}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                  )}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    disabled={isLoading}
                  />
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-destructive">{errors.password}</p>
                )}
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                {isLoading ? "Processing..." : (isSignUp ? "Create Account" : "Sign In")}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setErrors({});
                  setFormData({ name: "", email: "", password: "" });
                }}
                className="text-primary hover:underline"
                disabled={isLoading}
              >
                {isSignUp
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign up"}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
