import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Phone, User, MessageSquare, CheckCircle2, AlertCircle, Info, Sparkles } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';

interface ReservationFormProps {
  initialRequest?: string;
}

export const ReservationForm: React.FC<ReservationFormProps> = ({ initialRequest = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: '2',
    specialRequests: initialRequest,
  });

  useEffect(() => {
    if (initialRequest) {
      setFormData((prev) => ({
        ...prev,
        specialRequests: prev.specialRequests
          ? `${prev.specialRequests}; Request: ${initialRequest}`
          : `Interested in: ${initialRequest}`,
      }));
    }
  }, [initialRequest]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState<null | {
    reference: string;
    name: string;
    guests: string;
    date: string;
    time: string;
  }>(null);

  // Suggested today date minimum for input
  const today = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name (minimum 2 characters)';
    }

    // Phone validation (accepting 10 digits or with +91)
    const phoneClean = formData.phone.replace(/[\s\-()]/g, '');
    if (!phoneClean || phoneClean.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit phone number';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date for your table';
    } else {
      const selectedDate = new Date(formData.date);
      const minDate = new Date();
      minDate.setHours(0, 0, 0, 0);
      if (selectedDate < minDate) {
        newErrors.date = 'Reservation date must be today or in the future';
      }
    }

    if (!formData.time) {
      newErrors.time = 'Please select a dining time slot';
    }

    if (!formData.guests || parseInt(formData.guests) < 1) {
      newErrors.guests = 'Please select at least 1 guest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API reservation submission with clear demo feedback
    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = 'SS-' + Math.floor(100000 + Math.random() * 900000);
      setBookingSuccess({
        reference: randomRef,
        name: formData.name,
        guests: formData.guests,
        date: formData.date,
        time: formData.time,
      });
    }, 700);
  };

  const handleReset = () => {
    setBookingSuccess(null);
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '19:30',
      guests: '2',
      specialRequests: '',
    });
    setErrors({});
  };

  return (
    <section
      id="reservations"
      className="py-24 bg-charcoal-950 relative border-t border-charcoal-850"
      aria-label="Table reservation"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs uppercase tracking-widest font-semibold border border-saffron-500/20 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            Table Reservations
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-ivory-50 tracking-tight">
            Reserve Your Experience
          </h2>
          <div className="editorial-divider my-4">
            <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
          </div>
          <p className="text-ivory-300 font-light text-base sm:text-lg">
            Join us for an unforgettable evening of culinary storytelling. Walk-ins are accommodated subject to availability; prior reservation is recommended.
          </p>

          {/* Demo feature disclosure */}
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-ivory-400/80 bg-charcoal-900/60 px-3 py-1 rounded-md border border-charcoal-800">
            <Info className="w-3.5 h-3.5 text-gold-500" />
            <span>Interactive Demo: Form validates inputs and demonstrates the booking workflow</span>
          </div>
        </div>

        {/* Card Container */}
        <div className="bg-charcoal-900/90 border border-charcoal-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          {bookingSuccess ? (
            /* Success Feedback State */
            <div className="text-center py-8 px-4 max-w-xl mx-auto animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-xs uppercase tracking-widest text-gold-400 font-mono">
                Booking Demo Confirmation
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 mt-2">
                Thank You, {bookingSuccess.name}
              </h3>

              <div className="my-6 p-4 rounded-xl bg-charcoal-950 border border-charcoal-800 text-left space-y-2 text-sm">
                <div className="flex justify-between border-b border-charcoal-850 pb-2">
                  <span className="text-ivory-400">Demo Reference:</span>
                  <span className="font-mono text-saffron-400 font-semibold">{bookingSuccess.reference}</span>
                </div>
                <div className="flex justify-between border-b border-charcoal-850 pb-2">
                  <span className="text-ivory-400">Table for:</span>
                  <span className="text-ivory-100">{bookingSuccess.guests} Guests</span>
                </div>
                <div className="flex justify-between border-b border-charcoal-850 pb-2">
                  <span className="text-ivory-400">Date & Time:</span>
                  <span className="text-ivory-100">{bookingSuccess.date} at {bookingSuccess.time}</span>
                </div>
                <div className="pt-1 text-xs text-gold-400 italic">
                  Note: In a production deployment, this submits to the restaurant's table management system (such as Posist, Dineout, or custom webhook) and triggers instant SMS confirmations.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-saffron-600 to-copper-500 text-ivory-50 transition-colors"
                >
                  Book Another Table
                </button>
              </div>
            </div>
          ) : (
            /* Reservation Form Inputs */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Guest Name */}
                <div>
                  <label htmlFor="res-name" className="block text-xs uppercase tracking-wider text-ivory-300 font-medium mb-2">
                    Full Name <span className="text-saffron-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ivory-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="res-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ananya Sharma"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-charcoal-950 border text-ivory-100 text-sm focus:outline-none focus:ring-1 transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-charcoal-700 focus:border-gold-subtle focus:ring-saffron-500'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="res-phone" className="block text-xs uppercase tracking-wider text-ivory-300 font-medium mb-2">
                    Contact Phone <span className="text-saffron-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ivory-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="res-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-charcoal-950 border text-ivory-100 text-sm focus:outline-none focus:ring-1 transition-colors ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-charcoal-700 focus:border-gold-subtle focus:ring-saffron-500'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Date */}
                <div>
                  <label htmlFor="res-date" className="block text-xs uppercase tracking-wider text-ivory-300 font-medium mb-2">
                    Date <span className="text-saffron-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ivory-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      id="res-date"
                      type="date"
                      min={today}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-charcoal-950 border text-ivory-100 text-sm focus:outline-none focus:ring-1 transition-colors ${
                        errors.date
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-charcoal-700 focus:border-gold-subtle focus:ring-saffron-500'
                      }`}
                    />
                  </div>
                  {errors.date && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.date}
                    </p>
                  )}
                </div>

                {/* Time Slot */}
                <div>
                  <label htmlFor="res-time" className="block text-xs uppercase tracking-wider text-ivory-300 font-medium mb-2">
                    Time Slot <span className="text-saffron-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ivory-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      id="res-time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-charcoal-950 border border-charcoal-700 text-ivory-100 text-sm focus:outline-none focus:border-gold-subtle focus:ring-1 focus:ring-saffron-500 transition-colors"
                    >
                      <optgroup label="Lunch Service">
                        <option value="12:00">12:00 PM</option>
                        <option value="12:30">12:30 PM</option>
                        <option value="13:00">01:00 PM</option>
                        <option value="13:30">01:30 PM</option>
                        <option value="14:00">02:00 PM</option>
                      </optgroup>
                      <optgroup label="Dinner Service">
                        <option value="19:00">07:00 PM</option>
                        <option value="19:30">07:30 PM</option>
                        <option value="20:00">08:00 PM</option>
                        <option value="20:30">08:30 PM</option>
                        <option value="21:00">09:00 PM</option>
                        <option value="21:30">09:30 PM</option>
                        <option value="22:00">10:00 PM</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label htmlFor="res-guests" className="block text-xs uppercase tracking-wider text-ivory-300 font-medium mb-2">
                    Guests <span className="text-saffron-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ivory-400">
                      <Users className="w-4 h-4" />
                    </div>
                    <select
                      id="res-guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-charcoal-950 border border-charcoal-700 text-ivory-100 text-sm focus:outline-none focus:border-gold-subtle focus:ring-1 focus:ring-saffron-500 transition-colors"
                    >
                      <option value="1">1 Person (Solo Dining)</option>
                      <option value="2">2 Guests (Couple)</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="8">8 Guests (Large Table)</option>
                      <option value="10+">10+ Guests (Private Dining)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="res-requests" className="block text-xs uppercase tracking-wider text-ivory-300 font-medium mb-2">
                  Special Requests / Dietary Preferences (Optional)
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3.5 pointer-events-none text-ivory-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    id="res-requests"
                    rows={3}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="E.g. Window booth preferred, celebrating an anniversary, vegetarian Jain preparation, non-spicy..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-charcoal-950 border border-charcoal-700 text-ivory-100 text-sm focus:outline-none focus:border-gold-subtle focus:ring-1 focus:ring-saffron-500 transition-colors placeholder:text-ivory-400/50"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-saffron-600 via-saffron-500 to-copper-500 hover:from-saffron-500 hover:to-copper-400 text-ivory-50 shadow-xl shadow-saffron-950/50 border border-saffron-400/30 transition-all duration-300 disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4 text-gold-300" />
                  {isSubmitting ? 'Validating Table...' : 'Confirm Table Reservation'}
                </button>

                <div className="text-center sm:text-right">
                  <span className="text-xs text-ivory-400 block">
                    Direct phone assistance available during dining hours:
                  </span>
                  <a
                    href={`tel:${RESTAURANT_CONFIG.phone}`}
                    className="mt-1 text-xs text-gold-400 hover:text-gold-300 font-medium underline underline-offset-4 inline-flex items-center gap-1 font-mono"
                  >
                    <span>{RESTAURANT_CONFIG.phone}</span>
                  </a>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
