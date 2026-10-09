import { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureDishes } from './components/SignatureDishes';
import { OurStory } from './components/OurStory';
import { InteractiveMenu } from './components/InteractiveMenu';
import { ExperienceSection } from './components/ExperienceSection';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { ReservationForm } from './components/ReservationForm';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';

export function App() {
  const [selectedDishForReservation, setSelectedDishForReservation] = useState<string>('');

  const handleDishSelected = (dishName: string) => {
    setSelectedDishForReservation(dishName);
    const element = document.getElementById('reservations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-charcoal-950 text-ivory-100 flex flex-col relative selection:bg-saffron-500 selection:text-charcoal-950">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Navigation */}
      <Navbar onOpenBooking={() => {
        const el = document.getElementById('reservations');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. Signature Dishes */}
        <SignatureDishes onSelectDishForReservation={handleDishSelected} />

        {/* 5. Our Story */}
        <OurStory />

        {/* 6. Menu Preview */}
        <InteractiveMenu onSelectItemForReservation={handleDishSelected} />

        {/* 7. Experience Section */}
        <ExperienceSection />

        {/* 8. Food and Restaurant Gallery */}
        <Gallery />

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. Reservation Section */}
        <ReservationForm initialRequest={selectedDishForReservation} />

        {/* 11. Location and Opening Hours */}
        <LocationSection />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}

export default App;
