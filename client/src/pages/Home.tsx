import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, TrendingUp, Zap, Lock, BarChart3 } from "lucide-react";

/**
 * GenLayer Prediction Market - Home Page
 * 
 * Design Philosophy: Futuristic AI-Native
 * - Deep indigo background (#0F1419) with cyan (#00D9FF) and purple (#8B5CF6) accents
 * - Space Grotesk for headlines, Inter for body text
 * - Glowing borders, floating cards, and smooth animations
 * - Emphasis on AI intelligence and blockchain technology
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
              <Brain className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold gradient-text">GenLayer</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-primary transition">Features</a>
            <a href="#how-it-works" className="text-sm hover:text-primary transition">How It Works</a>
            <a href="#benefits" className="text-sm hover:text-primary transition">Benefits</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-background">
            Launch App
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background gradient and pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663432925082/FuzK5dhM2TkFYZ6D97jeM6/genlayer-hero-bg-FQGJDjxkaKGCZ6riEb7Dx2.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">AI-Powered</span> Prediction Markets
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              GenLayer brings intelligent contracts to prediction markets. Resolve outcomes with AI-native consensus, 
              enabling real-time market settlements without centralized oracles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-background">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-border/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powered by Intelligent Contracts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              GenLayer's Intelligent Contracts integrate Large Language Models directly into blockchain consensus, 
              enabling sophisticated market resolution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <Card className="glow-border floating-card bg-card/50 backdrop-blur border-border/50 p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Resolution</h3>
              <p className="text-muted-foreground">
                Outcomes resolved through multi-LLM validation and Optimistic Democracy consensus, 
                eliminating single points of failure.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="glow-border floating-card bg-card/50 backdrop-blur border-border/50 p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Markets</h3>
              <p className="text-muted-foreground">
                Markets self-settle by fetching and verifying outcomes directly from primary sources, 
                enabling instant resolution.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="glow-border floating-card bg-card/50 backdrop-blur border-border/50 p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-xl font-bold mb-3">Subjectivity Native</h3>
              <p className="text-muted-foreground">
                Handle subjective outcomes with AI-native consensus, enabling prediction markets 
                on qualitative events and opinions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 border-t border-border/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How GenLayer Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A revolutionary approach to market resolution combining blockchain security with AI intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-background font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Create Market</h3>
                  <p className="text-muted-foreground">
                    Deploy an intelligent contract specifying the prediction event, resolution criteria, and market parameters.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-secondary text-background font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Trade Predictions</h3>
                  <p className="text-muted-foreground">
                    Users trade on predicted outcomes, with prices reflecting collective probability estimates.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-background font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">AI Consensus</h3>
                  <p className="text-muted-foreground">
                    Multiple LLMs analyze event data and reach consensus on the outcome through Optimistic Democracy.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-background font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Auto-Settlement</h3>
                  <p className="text-muted-foreground">
                    Market automatically settles based on verified outcome, distributing winnings to correct predictors.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glow-border rounded-xl overflow-hidden bg-card/50 backdrop-blur p-8">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663432925082/FuzK5dhM2TkFYZ6D97jeM6/genlayer-market-card-mJpSCeQCujGXTGfJ8gwVVA.webp"
                  alt="Market Visualization"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 border-t border-border/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose GenLayer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the next generation of prediction markets with AI-native intelligence and blockchain security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-6 rounded-lg border border-border/50 hover:border-primary/50 transition">
              <Lock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Trustless Resolution</h3>
                <p className="text-muted-foreground text-sm">
                  No centralized oracle needed. AI consensus is verified on-chain, ensuring fair and transparent outcomes.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-lg border border-border/50 hover:border-primary/50 transition">
              <BarChart3 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Scalable Markets</h3>
                <p className="text-muted-foreground text-sm">
                  Create markets on any event—sports, weather, politics, or subjective outcomes that traditional oracles can't handle.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-lg border border-border/50 hover:border-primary/50 transition">
              <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Instant Settlement</h3>
                <p className="text-muted-foreground text-sm">
                  Markets settle automatically upon AI consensus, eliminating delays and enabling rapid market cycles.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-lg border border-border/50 hover:border-primary/50 transition">
              <Brain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">AI Intelligence</h3>
                <p className="text-muted-foreground text-sm">
                  Leverage cutting-edge LLMs for sophisticated market resolution, enabling complex prediction scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center glow-border rounded-xl p-12 bg-card/50 backdrop-blur">
            <h2 className="text-3xl font-bold mb-4">Ready to Predict the Future?</h2>
            <p className="text-muted-foreground mb-8">
              Join the GenLayer ecosystem and start trading on real-world events powered by AI intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-background">
                Launch GenLayer <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500" />
                <span className="font-bold">GenLayer</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered prediction markets with intelligent contract resolution.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Markets</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contracts</a></li>
                <li><a href="#" className="hover:text-foreground transition">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Developers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition">GitHub</a></li>
                <li><a href="#" className="hover:text-foreground transition">Testnet</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Discord</a></li>
                <li><a href="#" className="hover:text-foreground transition">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 GenLayer Foundation. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition">Privacy</a>
              <a href="#" className="hover:text-foreground transition">Terms</a>
              <a href="#" className="hover:text-foreground transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
