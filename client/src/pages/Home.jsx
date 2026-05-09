import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  // Initialize navigation hook for page redirects
  const navigate = useNavigate();

  // State management for user interactions
  const [hoveredCard, setHoveredCard] = useState(null); // Track which feature card is hovered
  const [activePlan, setActivePlan] = useState("pro"); // Track selected pricing plan (default: "pro")

  // Sample features data with icons and descriptions
  const features = [
    {
      id: 1,
      icon: "✨",
      title: "AI-Powered Generation",
      description: "Create stunning thumbnails using advanced AI technology",
    },
    {
      id: 2,
      icon: "⚡",
      title: "Lightning Fast",
      description: "Generate thumbnails in seconds, not hours",
    },
    {
      id: 3,
      icon: "🎨",
      title: "Customizable Templates",
      description: "Choose from hundreds of professionally designed templates",
    },
    {
      id: 4,
      icon: "📊",
      title: "Analytics Insights",
      description: "Track performance metrics and optimize your thumbnails",
    },
  ];

  // Sample testimonials data with ratings and user info
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "YouTube Creator",
      content: "Thumblify transformed my channel! My CTR increased by 40% in just one month.",
      avatar: "👩‍💼",
      rating: 5,
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Content Producer",
      content: "The AI suggestions are incredibly accurate. Saved me hours of design work.",
      avatar: "👨‍💼",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Twitch Streamer",
      content: "Best decision for my streaming setup. Highly recommended!",
      avatar: "👩‍🎨",
      rating: 4,
    },
  ];

  // Sample pricing plans with features and credits
  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "$9",
      credits: 50,
      popular: false,
      features: [
        "50 monthly credits",
        "Basic AI suggestions",
        "Community templates",
        "Email support",
      ],
    },
    {
      id: "pro",
      name: "Professional",
      price: "$29",
      credits: 500,
      popular: true,
      features: [
        "500 monthly credits",
        "Advanced AI features",
        "Premium templates",
        "Priority support",
        "Analytics dashboard",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Custom",
      credits: "Unlimited",
      popular: false,
      features: [
        "Unlimited credits",
        "Custom AI training",
        "White-label options",
        "24/7 dedicated support",
        "API access",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950 to-gray-950 text-white overflow-hidden">

      {/* ========== HERO SECTION ========== */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Left content area */}
            <div className="space-y-6">
              {/* Badge label - small tag indicating new/featured */}
              <div className="inline-block px-3 py-1 bg-purple-900/50 border border-purple-700 rounded-full text-sm">
                ✨ AI-Powered Thumbnail Creator
              </div>

              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Create Professionals <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Thumbnails</span> in Seconds
              </h1>

              {/* Subtext describing the value proposition */}
              <p className="text-lg text-gray-300">
                Transform your content with AI-generated thumbnails that boost engagement and click-through rates.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {/* Primary button - Generate Now */}
                <button
                  onClick={() => navigate("/generate")}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition duration-300"
                >
                  Generate Now
                </button>
                {/* Secondary button - View Creations */}
                <button
                  onClick={() => navigate("/community")}
                  className="px-8 py-3 border border-purple-600 rounded-lg font-semibold hover:bg-purple-900/30 transition duration-300"
                >
                  View Creations
                </button>
              </div>
            </div>

            {/* Right side - Thumbnail preview placeholder */}
            <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
              {/* Decorative gradient blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
              {/* Placeholder text */}
              <div className="relative text-center">
                <p className="text-6xl mb-4">🎬</p>
                <p className="text-xl font-semibold">Your Thumbnails Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16 bg-black/30">
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Thumblify?</h2>
            <p className="text-gray-400 text-lg">Powerful features designed for content creators</p>
          </div>

          {/* Features grid - responsive layout with hover effects */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-6 rounded-lg border transition duration-300 cursor-pointer ${
                  hoveredCard === feature.id
                    ? "bg-purple-900/50 border-purple-500 scale-105"
                    : "bg-gray-900/50 border-gray-700"
                }`}
              >
                {/* Feature icon */}
                <div className="text-4xl mb-4">{feature.icon}</div>
                {/* Feature title */}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                {/* Feature description */}
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-400 text-lg">Join thousands of satisfied creators</p>
          </div>

          {/* Testimonials grid - 3 column layout */}
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-6 rounded-lg bg-gray-900/50 border border-gray-700 hover:border-purple-500 transition duration-300"
              >
                {/* Star rating - render 5 stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-600"}>
                      ★
                    </span>
                  ))}
                </div>

                {/* Testimonial quote/content */}
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>

                {/* Author info - avatar, name, and role */}
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRICING SECTION ========== */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16 bg-black/50">
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 text-lg">Choose the plan that works for you</p>
          </div>

          {/* Pricing plans grid - responsive layout */}
          <div className="grid gap-8 md:grid-cols-3 lg:gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setActivePlan(plan.id)}
                className={`relative p-8 rounded-xl border transition duration-300 cursor-pointer ${
                  activePlan === plan.id
                    ? "bg-gradient-to-br from-purple-900 to-pink-900 border-purple-500 shadow-lg shadow-purple-500/50"
                    : "bg-gray-900/50 border-gray-700 hover:border-purple-500/50"
                }`}
              >
                {/* "Most Popular" badge - shown only for popular plans */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                {/* Plan name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

                {/* Plan price and credits */}
                <div className="mb-6">
                  <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {plan.price}
                  </p>
                  <p className="text-gray-400 text-sm">{plan.credits} credits/month</p>
                </div>

                {/* Get Started button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition duration-300 mb-6 ${
                    activePlan === plan.id
                      ? "bg-white text-purple-900 hover:bg-gray-200"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                >
                  Get Started
                </button>

                {/* Features list - checkmark for each feature */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <span className="text-green-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl">
          {/* CTA card with gradient background */}
          <div className="p-12 rounded-xl bg-gradient-to-r from-purple-900 to-pink-900 border border-purple-700 text-center">
            {/* CTA heading */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Content?
            </h2>

            {/* CTA subtext */}
            <p className="text-lg text-gray-200 mb-8">
              Start creating professional thumbnails today. No credit card required.
            </p>

            {/* CTA button - Generate Your First Thumbnail */}
            <button
              onClick={() => navigate("/generate")}
              className="px-8 py-4 bg-white text-purple-900 font-bold rounded-lg hover:bg-gray-200 transition duration-300 shadow-lg"
            >
              Generate Your First Thumbnail
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}