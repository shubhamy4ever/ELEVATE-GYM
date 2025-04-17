import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request data
      const contactData = insertContactSchema.parse(req.body);
      
      // Create contact submission in storage
      const result = await storage.createContactSubmission(contactData);
      
      res.status(201).json({ 
        message: "Contact submission successful", 
        data: result 
      });
    } catch (error) {
      console.error("Error creating contact submission:", error);
      res.status(400).json({ 
        message: "Failed to submit contact form", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });
  
  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        message: "Failed to fetch contact submissions", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
