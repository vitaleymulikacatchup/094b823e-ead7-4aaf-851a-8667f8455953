"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: "futuristicAndOutOfBox",
      colorTemplate: 2,
      textAnimation: "slide"
    }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={50}
          buttonText="Get started"
          onButtonClick={() => { /* Action for CTA */ }}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero 
          title="Peak"
          subtitle="Unlock the Future of Productivity"  
        />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout 
          title="Our Journey"
          descriptions={[
            "At Peak, we drive innovation and efficiency.",
            "Join us and experience the future."
          ]} 
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D 
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Sign up for a free account.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Choose a plan that suits you.", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Complete your purchase and start using.", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]} 
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <NumberGridTokenomics 
          title="Tokenomics"
          description="Understand our pricing model and metrics."
          kpiItems={[
            { value: "1000", description: "Total Users" },
            { value: "500K", description: "Revenue" },
            { value: "100", description: "Projects" }
          ]} 
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasisBackgroundGradient 
          logoSrc="/images/logo.svg"
          logoAlt="Peak Logo"
          logoText="Peak"
          items={[
            { label: "Privacy Policy", onClick: () => { /* Navigate to policy */ } },
            { label: "Terms of Service", onClick: () => { /* Navigate to terms */ } },
            { label: "Contact Us", onClick: () => { /* Navigate to contact */ } }
          ]} 
        />
      </div>
    </SiteThemeProvider>
  );
}