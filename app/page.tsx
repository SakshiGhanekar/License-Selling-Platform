import HeroSection from '../components/hero-section';
import HowItWorksSection from '../components/how-it-works-section';
import WhyChooseUsSection from '../components/why-choose-us-section';
import TestimonialsSection from '../components/testimonials-section';
import ContactFormSection from '../components/contact-form-section';
import FooterSection from '../components/footer-section';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactFormSection />
      <FooterSection />
      </div>
  )
}