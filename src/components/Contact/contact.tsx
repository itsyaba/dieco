import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { User, Phone, Mail, HelpCircle } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";
import DescCard from "../DescCard";
import Img from "@/assets/new/WhatsApp Image 2025-02-13 at 11.09.03_682f21e4.jpg";
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    const serviceID = "service_nc6zvsa";
    const templateID = "template_719uh5d";
    const userID = "atkoIvKSPAVeQsWDv";

    try {
      await emailjs.send(serviceID, templateID, data, userID);
      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mt-40 text-darkish">
      <DescCard title="Contact us" breadcrumb="Contact US" backgroundImage={Img} />
      <section className="w-full py-20 overflow-hidden relative " id="contact">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-darkish rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-greenish rounded-full translate-y-1/2 -translate-x-1/2 opacity-80" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-darkish  mb-4">
              <span className="line"> </span>
              Contact Us
            </h2>
            <p className="text-gray-400">Get in touch with us.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Name"
                              {...field}
                              className="pl-10 py-6 bg-white border-gray-200 text-gray-700"
                            />
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Phone"
                              {...field}
                              className="pl-10 py-6 bg-white border-gray-200 text-gray-700"
                            />
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                          </div>
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
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Email"
                              {...field}
                              className="pl-10 py-6 bg-white border-gray-200 text-gray-700"
                            />
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Textarea
                              placeholder="How can we help?"
                              {...field}
                              className="pl-10 pt-4 min-h-[150px]  bg-white border-gray-200 text-gray-700"
                            />
                            <HelpCircle className="absolute left-3 top-4 text-gray-400 h-5 w-5" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-greenish hover:bg-greenish/70 text-white py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </Button>
                </form>
              </Form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="line"> </span>
                  Contact Info
                </h3>
                <div className="flex items-start space-x-3 text-gray-600 mt-2">
                  <Mail className="h-5 w-5 mt-1 text-[#F47458]" />
                  <p>Email: DIDECONORTHAMERICA@GMAIL.COM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
}
