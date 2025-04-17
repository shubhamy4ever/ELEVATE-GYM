import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { fadeIn, slideInLeft, slideInRight } from "@/lib/animations";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ContactFormData } from "@/lib/types";
import { Loader2 } from "lucide-react";

// Create a schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  interest: z.string().min(1, "Please select an interest"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: ""
    }
  });
  
  const isSubmitting = form.formState.isSubmitting;
  
  async function onSubmit(data: ContactFormData) {
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message Sent",
        description: "Thank you! Your message has been sent successfully.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
      console.error(error);
    }
  }
  
  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-white fade-in">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 inline-block relative">
            <span className="text-primary">CONTACT</span> <span className="text-[#FF3366]">US</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#00C9FF]"></span>
          </h2>
          <p className="text-[#333333] text-lg max-w-2xl mx-auto">
            Ready to transform your fitness journey? Get in touch with us today to discuss your goals or schedule a free consultation.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInLeft}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-[#333333] font-montserrat font-medium mb-2">Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            placeholder="Your name" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#00C9FF] focus:ring-2 focus:ring-[#00C9FF] focus:ring-opacity-25 transition-all bg-white text-gray-900"
                            disabled={isSubmitting}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-[#333333] font-montserrat font-medium mb-2">Email</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            type="email" 
                            placeholder="Your email address" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#00C9FF] focus:ring-2 focus:ring-[#00C9FF] focus:ring-opacity-25 transition-all"
                            disabled={isSubmitting}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-[#333333] font-montserrat font-medium mb-2">Phone (optional)</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="tel" 
                          placeholder="Your phone number" 
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#00C9FF] focus:ring-2 focus:ring-[#00C9FF] focus:ring-opacity-25 transition-all"
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-[#333333] font-montserrat font-medium mb-2">I'm interested in</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#00C9FF] focus:ring-2 focus:ring-[#00C9FF] focus:ring-opacity-25 transition-all">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="membership">Membership Information</SelectItem>
                          <SelectItem value="trial">Free Trial</SelectItem>
                          <SelectItem value="personal-training">Personal Training</SelectItem>
                          <SelectItem value="group-classes">Group Classes</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-[#333333] font-montserrat font-medium mb-2">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          rows={4} 
                          placeholder="Tell us about your fitness goals" 
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#00C9FF] focus:ring-2 focus:ring-[#00C9FF] focus:ring-opacity-25 transition-all bg-white text-gray-900"
                          disabled={isSubmitting}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#FF3366] hover:bg-opacity-90 text-white font-montserrat font-bold py-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    "SEND MESSAGE"
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 bg-gray-100 rounded-xl overflow-hidden relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInRight}
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              {/* Map placeholder */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <p className="font-montserrat text-gray-500">Interactive Map Location</p>
              </div>
            </div>
            
            <div className="bg-black/80 backdrop-blur-md p-8 rounded-2xl m-6 relative z-10 shadow-xl border border-gray-800">
              <h3 className="text-white font-montserrat font-bold text-2xl mb-6">FIND US</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-[#FF3366] text-xl mr-4 mt-1"></i>
                  <div>
                    <h4 className="text-white font-montserrat font-medium">Address</h4>
                    <p className="text-white opacity-80">123 Fitness Avenue<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-phone-alt text-[#FF3366] text-xl mr-4 mt-1"></i>
                  <div>
                    <h4 className="text-white font-montserrat font-medium">Phone</h4>
                    <p className="text-white opacity-80">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-envelope text-[#FF3366] text-xl mr-4 mt-1"></i>
                  <div>
                    <h4 className="text-white font-montserrat font-medium">Email</h4>
                    <p className="text-white opacity-80">info@elevategym.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <i className="fas fa-clock text-[#FF3366] text-xl mr-4 mt-1"></i>
                  <div>
                    <h4 className="text-white font-montserrat font-medium">Hours</h4>
                    <p className="text-white opacity-80">
                      Monday - Friday: 5am - 11pm<br />
                      Saturday - Sunday: 7am - 9pm
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <a href="#" className="text-white hover:text-[#FF3366] transition-colors">
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                  <a href="#" className="text-white hover:text-[#FF3366] transition-colors">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="#" className="text-white hover:text-[#FF3366] transition-colors">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="#" className="text-white hover:text-[#FF3366] transition-colors">
                    <i className="fab fa-youtube text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
