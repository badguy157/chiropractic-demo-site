"use client";

import React, { useState } from "react";

export default function ChiropractorDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    symptoms: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo form - just log the data
    console.log("Form submitted:", formData);
    alert("Thanks for your interest! This is a demo site. We'll get back to you within one business day.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1) Sticky Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                BrightSpine Chiropractic
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("conditions")}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Conditions
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Why us
              </button>
              <button
                onClick={() => scrollToSection("treatments")}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Treatments
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Location
              </button>
            </nav>
            <button
              onClick={() => scrollToSection("booking")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base"
              data-kt-event="book_appointment_click"
            >
              Book appointment
            </button>
          </div>
        </div>
      </header>

      {/* 2) Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Chiropractic care for people who actually want to move again.
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                Relief from back and neck pain, better posture, and support to help active people stay active.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 text-base sm:text-lg">
                    Relief from back and neck pain
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 text-base sm:text-lg">
                    Personalised treatment plans
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 text-base sm:text-lg">
                    Support for desk workers and active lifestyles
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 text-base sm:text-lg">
                    Evidence-based care you can trust
                  </span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("booking")}
                  className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-base sm:text-lg"
                  data-kt-event="book_appointment_click"
                >
                  Book appointment
                </button>
                <a
                  href="tel:+11234567890"
                  className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium text-base sm:text-lg text-center"
                  data-kt-event="call_click"
                >
                  Call the clinic
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl h-64 sm:h-80 lg:h-96 flex items-center justify-center text-gray-600 text-lg font-medium shadow-lg">
              Clinic photo / Chiropractor with patient
            </div>
          </div>
        </div>
      </section>

      {/* 3) Conditions Section */}
      <section id="conditions" className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Is this you?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We help people who are tired of living around their pain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Back pain from sitting at a desk
              </h3>
              <p className="text-gray-600">
                Chiropractic adjustments and postural correction can help relieve tension and improve your sitting posture, so you can work comfortably again.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Neck and shoulder pain
              </h3>
              <p className="text-gray-600">
                Gentle adjustments and soft tissue work can reduce stiffness and restore range of motion, helping you feel more mobile and less restricted.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sciatica and leg pain
              </h3>
              <p className="text-gray-600">
                Targeted treatment can help address nerve irritation and reduce radiating pain, so you can walk, sit, and move without discomfort.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Headaches linked to posture
              </h3>
              <p className="text-gray-600">
                Upper neck adjustments and muscle release techniques can reduce tension headaches and improve overall head and neck alignment.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sports and gym injuries
              </h3>
              <p className="text-gray-600">
                Get back to training with treatment plans designed to improve mobility, strengthen weak areas, and prevent re-injury.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                General aches and stiffness
              </h3>
              <p className="text-gray-600">
                Whether it's morning stiffness or end-of-day fatigue, chiropractic care can help you feel more comfortable and move with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4) Treatments Section */}
      <section id="treatments" className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How we treat your pain
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Chiropractic adjustments
              </h3>
              <p className="text-gray-600 mb-3">
                Precise, gentle adjustments to restore proper joint movement and reduce nerve irritation. We use evidence-based techniques tailored to your body and comfort level.
              </p>
              <p className="text-gray-600">
                The goal is less pain, better movement, and the confidence to do the things you love without holding back.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Posture and ergonomic coaching
              </h3>
              <p className="text-gray-600 mb-3">
                Learn how to sit, stand, and move in ways that support your spine rather than strain it. We'll assess your workspace and daily habits to identify problem areas.
              </p>
              <p className="text-gray-600">
                Small changes can make a big difference in how you feel at the end of the day.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Soft tissue work and stretching
              </h3>
              <p className="text-gray-600 mb-3">
                Tight muscles and trigger points can contribute to pain and limit your movement. We use hands-on techniques to release tension and improve flexibility.
              </p>
              <p className="text-gray-600">
                This helps your adjustments hold better and keeps you feeling loose and comfortable between visits.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Rehab exercises and movement plans
              </h3>
              <p className="text-gray-600 mb-3">
                Strengthening weak areas and improving movement patterns is key to long-term results. We'll give you simple, practical exercises you can do at home or at the gym.
              </p>
              <p className="text-gray-600">
                The goal is to make you more resilient, so pain doesn't keep coming back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5) Why Choose Us Section */}
      <section id="why-us" className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why patients choose BrightSpine
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Thorough first visit
                </h3>
                <p className="text-gray-600">
                  We actually listen and assess before we adjust. You'll understand what's going on with your body and have a clear plan forward.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Evidence-based care
                </h3>
                <p className="text-gray-600">
                  Clear plans, no endless mystery treatment. We'll tell you how many visits we expect you'll need and adjust based on your progress.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Designed for real life
                </h3>
                <p className="text-gray-600">
                  Plans that fit around work, family, and training. We understand you're busy and we respect your time.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Clear communication
                </h3>
                <p className="text-gray-600">
                  We explain what we're doing and why, in plain English. No jargon, no upselling, just honest care.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Your typical treatment journey
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Visit 1</h4>
                <p className="text-gray-600 text-sm">
                  Listen, assess, and relieve acute pain. You'll leave with a clear understanding and initial relief.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2-4
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Visits 2–4</h4>
                <p className="text-gray-600 text-sm">
                  Stabilise and improve movement. Build strength and resilience so pain doesn't return.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  ∞
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Ongoing</h4>
                <p className="text-gray-600 text-sm">
                  Keep you feeling and moving better. Maintenance visits as needed to stay on track.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) Testimonials Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What patients are saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
              <p className="text-gray-700 mb-4 italic">
                "I went from constant neck pain at my desk to actually looking forward to the gym again."
              </p>
              <p className="text-gray-900 font-semibold">— Sarah M.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
              <p className="text-gray-700 mb-4 italic">
                "Clear explanations, no pressure, and my back finally feels stable. I can play with my kids without worrying."
              </p>
              <p className="text-gray-900 font-semibold">— James P.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
              <p className="text-gray-700 mb-4 italic">
                "After years of chronic back pain, I finally found someone who takes the time to understand what's really going on."
              </p>
              <p className="text-gray-900 font-semibold">— Emma K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7) Pricing Section */}
      <section id="pricing" className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What does it cost?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                First visit & assessment
              </h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$120</div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Full assessment of your condition
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Initial treatment to relieve pain
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Clear treatment plan moving forward
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Postural and movement advice
                </li>
              </ul>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Follow-up visits
              </h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$75</div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Hands-on treatment session
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Progress reassessment
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Adjusted treatment as needed
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Continued rehab guidance
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 max-w-4xl mx-auto">
            <p className="text-gray-700 text-center">
              <strong>Health funds / insurance:</strong> Many private health funds cover chiropractic care. We provide detailed receipts for you to claim directly with your insurer. Contact your provider to confirm your level of coverage.
            </p>
          </div>
        </div>
      </section>

      {/* 8) Booking Section */}
      <section id="booking" className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to book an appointment?
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                What happens next?
              </h3>
              <p className="text-gray-600 mb-4">
                Fill out the form and we'll get back to you within one business day to confirm your appointment time. If you need to speak with someone sooner, feel free to call us directly.
              </p>
              <p className="text-gray-600 mb-4">
                Your first visit will include a thorough assessment, initial treatment, and a clear plan forward. We'll take the time to understand your concerns and answer any questions you have.
              </p>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">
                  What to bring:
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Any relevant medical imaging or reports
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Your health fund card (if applicable)
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Comfortable clothing for movement assessment
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred appointment days/times
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a time preference</option>
                    <option value="weekday-morning">Weekday mornings</option>
                    <option value="weekday-afternoon">Weekday afternoons</option>
                    <option value="weekday-evening">Weekday evenings</option>
                    <option value="saturday">Saturday</option>
                    <option value="flexible">I'm flexible</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="symptoms"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Brief note about your symptoms
                  </label>
                  <textarea
                    id="symptoms"
                    name="symptoms"
                    rows={4}
                    value={formData.symptoms}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us a little about what's bothering you..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
                  data-kt-event="book_appointment_click"
                >
                  Request an appointment
                </button>
                <p className="text-sm text-gray-600 text-center">
                  We'll get back to you within one business day.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 9) Location Section */}
      <section id="location" className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Where to find us
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-100 rounded-xl p-6 sm:p-8 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Address
                </h3>
                <p className="text-gray-700 mb-4">
                  123 Spine Street<br />
                  Suburb, State 2000<br />
                  Australia
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
                  Opening hours
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span>8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM – 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Contact
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong>{" "}
                    <a
                      href="tel:+11234567890"
                      className="text-blue-600 hover:underline"
                      data-kt-event="call_click"
                    >
                      (02) 1234 5678
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:hello@brightspine.com.au"
                      className="text-blue-600 hover:underline"
                    >
                      hello@brightspine.com.au
                    </a>
                  </p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl h-96 lg:h-full flex items-center justify-center text-gray-600 text-lg font-medium min-h-[400px]">
              Map goes here
            </div>
          </div>
        </div>
      </section>

      {/* 10) Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BrightSpine Chiropractic</h3>
              <p className="text-gray-400">
                Professional chiropractic care for people who want to move better and feel better.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">
                <a href="tel:+11234567890" className="hover:text-white transition-colors">
                  (02) 1234 5678
                </a>
              </p>
              <p className="text-gray-400">
                <a href="mailto:hello@brightspine.com.au" className="hover:text-white transition-colors">
                  hello@brightspine.com.au
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>
              This is a demo site created by Keyturn Studio for clinic website makeovers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
