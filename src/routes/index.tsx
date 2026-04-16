import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { Bestsellers } from "@/components/Bestsellers";
import { FeaturedSection } from "@/components/FeaturedSection";
import { PopularProducts } from "@/components/PopularProducts";
import { BlogSection } from "@/components/BlogSection";
import { ForYouSection } from "@/components/ForYouSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "oléo.shop — Natural Beauty & Skincare" },
      { name: "description", content: "Discover natural beauty products, skincare essentials, and luxury wellness collections at oléo.shop." },
      { property: "og:title", content: "oléo.shop — Natural Beauty & Skincare" },
      { property: "og:description", content: "Discover natural beauty products and luxury wellness collections." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroBanner />
        <Bestsellers />
        <FeaturedSection />
        <PopularProducts />
        <BlogSection />
        <ForYouSection />
      </main>
      <Footer />
    </div>
  );
}
