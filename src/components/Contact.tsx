import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let's start a conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-accent/10 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Email</h4>
                    <a href="mailto:sandagomi@zencuit.com" className="text-sm sm:text-base text-muted-foreground hover:text-accent transition-colors break-words">
                      sandagomi@zencuit.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-accent/10 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Phone</h4>
                    <a href="tel:+94766157067" className="text-sm sm:text-base text-muted-foreground hover:text-accent transition-colors">
                      +94 766 15 7067
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-accent/10 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Location</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      72/4 Gothatuwa<br />
                      Kolonnawa,<br />
                      Colombo,<br /> Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/80 text-white p-6 sm:p-8 rounded-2xl">
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Why Choose Zencuit?</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">AI-Enhanced Solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Expert Development Team</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">End-to-End Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Innovation-Driven Approach</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border-2 border-border hover:border-accent transition-all duration-300 rounded-2xl p-6 sm:p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="border-border focus:border-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="border-border focus:border-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+94 123 456 789"
                  className="border-border focus:border-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  className="border-border focus:border-accent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  className="border-border focus:border-accent min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent to-secondary hover:opacity-90 transition-opacity text-primary font-semibold py-5 sm:py-6 text-base"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2" size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
