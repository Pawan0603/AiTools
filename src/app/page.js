'use client';
import { Sparkles, Zap, BarChart, Layers, Bot, PenTool, Search, Database, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 flex justify-between items-center bg-gradient-to-r from-blue-300 to-purple-300">
        <div className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-white" />
          <span className="font-bold text-xl text-purple-800">AI Tool</span>
        </div>
      </header>

      <main className="flex-grow">
        <section className="hero min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
          <div className="text-center space-y-6 max-w-2xl mx-auto p-4">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl text-purple-800">
              Revolutionize Your Workflow with AI
            </h1>
            <p className="text-xl text-purple-700">
              Harness the power of artificial intelligence to streamline your tasks and boost productivity.
            </p>
            <Button size="lg" className="animate-fade-in bg-purple-600 text-white hover:bg-purple-700">Get Started</Button>
          </div>
        </section>

        <section className="tools py-16 bg-gradient-to-r from-purple-100 to-pink-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">AI-Powered Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Chatbot Assistant', icon: Bot, description: 'Engage customers with our intelligent chatbot.', path: '/chatbot' },
                { title: 'Content Generator', icon: PenTool, description: 'Create high-quality content with AI assistance.', path: '/' },
                { title: 'Smart Search', icon: Search, description: 'Find information quickly with AI-enhanced search.', path: '/' },
                { title: 'Data Analysis', icon: Database, description: 'Gain insights from your data using AI algorithms.', path: '/' },
                { title: 'Image Recognition', icon: Sparkles, description: 'Identify and categorize images with AI precision.', path: '/' },
                { title: 'Predictive Modeling', icon: BarChart, description: 'Forecast trends and outcomes with AI models.', path: '/' },
              ].map((tool, index) => (
                <Link href={tool.path} key={index}>
                  <div key={index} className="tool-card p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <tool.icon className="h-8 w-8 mb-4 text-purple-600" />
                    <h3 className="text-xl font-semibold mb-2 text-purple-800">{tool.title}</h3>
                    <p className="text-gray-600">{tool.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="features py-16 bg-gradient-to-r from-blue-100 to-purple-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Smart Automation', icon: Zap, description: 'Automate repetitive tasks and workflows with AI.' },
                { title: 'Advanced Analytics', icon: BarChart, description: 'Get deep insights from your data with AI-powered analytics.' },
                { title: 'Seamless Integration', icon: Layers, description: 'Easily integrate our AI tools with your existing systems.' }
              ].map((feature, index) => (
                <div key={index} className="feature-card p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <feature.icon className="h-8 w-8 mb-4 text-purple-600" />
                  <h3 className="text-xl font-semibold mb-4 text-purple-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing py-16 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Basic', price: '$29', features: ['5 AI-powered tools', 'Basic analytics', 'Email support'] },
                { title: 'Pro', price: '$79', features: ['All AI-powered tools', 'Advanced analytics', 'Priority support', 'API access'] },
                { title: 'Enterprise', price: 'Custom', features: ['All Pro features', 'Dedicated account manager', 'Custom integrations', 'On-premise deployment'] },
              ].map((plan, index) => (
                <div key={index} className="pricing-card p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-800">{plan.title}</h3>
                  <p className="text-4xl font-bold mb-6 text-purple-600">{plan.price}<span className="text-sm font-normal text-gray-600">{plan.price !== 'Custom' && '/month'}</span></p>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Choose Plan</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta py-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Work?</h2>
            <Button size="lg" className="animate-pulse bg-white text-purple-600 hover:bg-purple-100">Start Free Trial</Button>
          </div>
        </section>
      </main>

      <footer className="py-4 text-center text-purple-800 bg-gradient-to-r from-purple-200 to-blue-200">
        <p>&copy; 2025 AI Tool. All rights reserved.</p>
      </footer>
    </div>
  )
}

