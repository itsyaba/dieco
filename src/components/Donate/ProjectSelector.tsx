import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SponsorshipTiers } from "./SponsershipTiers";
import waterImg from "@/assets/1-1.jpg";
import hospitalImg from "@/assets/edu.jpg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const PROJECTS = {
  water: {
    title: "Clean Drinking Water",
    description:
      "Our mission is to provide clean, safe drinking water to every member of our community. Through sustainable infrastructure and modern purification systems, we're working to ensure that clean water is not a privilege, but a right for all residents.",
    image: waterImg,
  },
  hospital: {
    title: "Dikome Balue Hospital Rebuild",
    description:
      "The rebuilding of Dikome Balue hospital is crucial for providing essential healthcare services to our community. This project aims to create a modern medical facility equipped with necessary resources to serve our growing population.",
    image: hospitalImg,
  },
};

export function ProjectSelector() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectChange = (project: string) => {
    setSelectedProject(project === selectedProject ? null : project);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-center mb-4 text-darkish">
          Select a Project to Support
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(PROJECTS).map(([key, project]) => (
            <Card
              key={key}
              className={`cursor-pointer transition-shadow hover:shadow-md bg-darkish ${
                selectedProject === key ? "ring-2 ring-primary" : ""
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`project-${key}`}
                    checked={selectedProject === key}
                    onCheckedChange={() => handleProjectChange(key)}
                  />
                  <Label htmlFor={`project-${key}`}>
                    <CardTitle>{project.title}</CardTitle>
                  </Label>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link to="/projects">
                  <Button className="bg-greenish text-white hover:bg-greenish/70 " size="lg">
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-center text-darkish">
          Choose Your Sponsorship Level
        </h3>
        <SponsorshipTiers selectedProject={selectedProject} />
      </div>
    </div>
  );
}
