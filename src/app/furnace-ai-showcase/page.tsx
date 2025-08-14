"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Download,
  Users,
  Target,
  Zap,
  Shield,
  BarChart3,
  FileText,
  Settings,
  Cog,
  CheckCircle,
} from "lucide-react";
import Footer from "../components/Footer";

export default function WhitepaperLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleDownloadClick = () => {
    setIsModalOpen(true);
    setIsSubmitted(false);
    setEmail("");
    setEmailError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setEmailError("");

    try {
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);

        // After 2 seconds, open the white paper and close modal
        setTimeout(() => {
          window.open(
            "https://drive.google.com/file/d/1H1l7INPEWAsl9o7o2whxYqXxNbCROcFI/view?usp=drive_link",
            "_blank"
          );
          setIsModalOpen(false);
        }, 2000);
      } else {
        console.error("API returned error:", result.error);
        setEmailError(
          result.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setEmailError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side with decorative elements */}
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -left-20 -top-10 w-32 h-32 bg-gray-100 rounded-full opacity-60"></div>
              <div className="absolute -left-10 top-20 w-24 h-24 bg-gray-200 rounded-full opacity-40"></div>
              <div className="absolute left-10 top-40 w-16 h-16 bg-gray-150 rounded-full opacity-30"></div>
              <div className="absolute -left-16 top-60 w-20 h-20 bg-gray-100 rounded-full opacity-50"></div>

              <div className="relative z-10">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <div className="text-slate-900">Furnace</div>
                  <div className="text-orange-500">Intelligence</div>
                  <div className="text-slate-900 text-4xl lg:text-5xl mt-4">
                    White Paper
                  </div>
                </h1>
              </div>
            </div>

            {/* Right side content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Tracking to Tapping
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  How Davinci MES Orchestrates the Entire Metallurgical Chain.
                  A first-of-its-kind white paper that explores how AI-driven
                  execution is transforming thermal metallurgy—from charge
                  intelligence to autonomous tap control.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  size="lg"
                  onClick={handleDownloadClick}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-md"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download White Paper
                </Button>
                <Badge
                  variant="outline"
                  className="text-slate-600 border-slate-300"
                >
                  Free Download
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              Why This White Paper Matters
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              In metallurgical manufacturing, even minor inefficiencies in melt
              dynamics can lead to major losses in energy, yield, and quality.
              Most MES systems today offer digitization—but not orchestration.
              Davinci Smart MES, powered by Ignis AI, is rewriting this
              paradigm.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features - What You'll Learn */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What You'll Learn
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: BarChart3,
                title: "Legacy MES Limitations",
                description:
                  "Why legacy MES systems fall short in high-heat metallurgy",
              },
              {
                icon: Zap,
                title: "Neural Intelligence",
                description:
                  "How Ignis AI uses neural intelligence to optimize melt dynamics",
              },
              {
                icon: Settings,
                title: "Cyber-Physical Architecture",
                description:
                  "The architecture behind Davinci's cyber-physical orchestration layer",
              },
              {
                icon: Target,
                title: "Real-World Outcomes",
                description:
                  "Lower scrap, tighter melt-to-tap timing, and improved ESG performance",
              },
              {
                icon: FileText,
                title: "Full-Spectrum Traceability",
                description:
                  "How traceability is achieved—from raw material to final casting",
              },
              {
                icon: Cog,
                title: "Process Optimization",
                description:
                  "Real-time process optimization across the entire furnace lifecycle",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                  <feature.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Who Should Read This
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Plant Managers",
                subtitle: "Operations Heads",
                description:
                  "Optimize production efficiency and reduce operational costs",
              },
              {
                icon: Zap,
                title: "CTOs",
                subtitle: "Digital Leaders",
                description:
                  "Lead the digital transformation of manufacturing processes",
              },
              {
                icon: Shield,
                title: "Quality Officers",
                subtitle: "ESG Compliance",
                description:
                  "Ensure quality standards and environmental compliance",
              },
              {
                icon: Users,
                title: "Metallurgists",
                subtitle: "Production Engineers",
                description:
                  "Implement advanced process control and optimization",
              },
            ].map((audience, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <audience.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {audience.title}
                </h3>
                <p className="text-orange-500 font-medium mb-4">
                  {audience.subtitle}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              Download the White Paper
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              Get instant access to "Tracking to Tapping" - your guide to
              intelligent metallurgy
            </p>

            <div className="bg-gray-50 rounded-2xl p-12">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                  <Download className="w-10 h-10 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    "Tracking to Tapping" White Paper
                  </h3>
                  <p className="text-slate-600">PDF Format • Free Download</p>
                </div>
                <Button
                  size="lg"
                  onClick={handleDownloadClick}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg font-semibold rounded-md"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Why It Matters
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              This is not MES as usual. This is intelligent metallurgy,
              orchestrated in real time. Whether you're running an EAF,
              converter, or ladle metallurgy station, Davinci Smart MES gives
              you the predictive control and plant-wide synchronization needed
              to thrive in today's high-variance, high-stakes production
              environment.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Download Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-slate-900 text-center">
              {isSubmitted ? "Thank You!" : "Download White Paper"}
            </DialogTitle>
            <DialogDescription className="text-center text-slate-600">
              {isSubmitted
                ? "Your download will begin shortly. Check your email for additional resources."
                : "Enter your email address to access the white paper instantly."}
            </DialogDescription>
          </DialogHeader>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  className={`w-full ${emailError ? "border-red-500" : ""}`}
                  disabled={isSubmitting}
                />
                {emailError && (
                  <p className="text-sm text-red-600">{emailError}</p>
                )}
              </div>

              <div className="flex space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Download Now
                    </>
                  )}
                </Button>
              </div>

              <p className="text-xs text-slate-500 text-center">
                By downloading, you agree to receive occasional updates about Da
                Vinci MES. You can unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-slate-600 mb-4">
                Your white paper is being prepared and will open in a new tab
                shortly.
              </p>
              <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
