import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// HeroSection component
function HeroSection({ title, imageUrl }: { title: string; imageUrl: string }) {
  return (
    <section className="relative h-[calc(100vh-64px)]">
      <Image
        src={imageUrl}
        alt="PACE satellite"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">{title}</h1>
        <div className="flex space-x-4">
          <Button variant="default" size="lg">
            Learn More
          </Button>
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

// ContentSection component
function ContentSection() {
  return (
    <section className="py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-8">
        Data Collection and Analysis in Environmental Research
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle>Carbon Cycling & Phytoplankton</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Through its precise measurements of ocean color, PACE provides
              invaluable insights into the role of phytoplankton in carbon
              cycling.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle>Atmospheric Aerosols & Climate Models</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              PACE&apos;s advanced sensors capture atmospheric data allowing
              scientists to refine climate models, particularly by improving
              understanding of aerosol-cloud interactions.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle>Ocean-Atmosphere Interaction Studies</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              By combining data from both the OCE and the atmospheric sensors
              (HARP2, SPEXone), PACE can provide a holistic view of the
              interaction between the ocean and atmosphere.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// MissionStatus component
function MissionStatus() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-900">
      <h2 className="text-3xl font-bold mb-8">
        Mission Status and Future Developments
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle>Expanded Global Monitoring</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              PACE is set to enhance its observational capabilities, especially
              in tracking seasonal changes in phytoplankton and aerosol
              composition, essential for long-term monitoring of global
              environmental health.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle>Machine Learning & AI Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              NASA is working on integrating machine learning models to better
              analyze the massive amounts of data PACE collects. This will
              enable quicker identification of trends in aerosol composition and
              ocean color, allowing for faster responses to climate change
              indicators.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// ExampleDatasets component
function ExampleDatasets() {
  return (
    <section className="py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-8">Example Datasets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle>Chlorophyll Concentrations</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Available globally with high temporal resolution, aiding in
              understanding marine productivity.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle>Aerosol Optical Depth (AOD)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Datasets used to estimate air quality and assess aerosol impacts
              on climate forcing, available for specific regions like Asia and
              North America.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <Image
          src="https://cdn.jsdelivr.net/gh/jashezan/aqua-vision@main/public/images/ocean-data-map.jpg"
          alt="Ocean Data Map"
          width={1200}
          height={600}
          className="rounded-lg"
        />
        <p className="text-sm text-gray-400 mt-2">
          Image: Earth and Ocean Atmosphere
        </p>
      </div>
    </section>
  );
}

// ReadyToTest component
function ReadyToTest() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ready to test your PACE knowledge?
      </h2>
      <p className="mb-8">See how much you&apos;ve learned about the PACE</p>
      <Button size="lg">LET&apos;S GO</Button>
    </section>
  );
}

// Main page component
export default function AdvancedGuidePage() {
  return (
    <main className="min-h-screen bg-[#0a0e17] text-white">
      <HeroSection
        title="Advanced Guide to PACE"
        imageUrl="https://cdn.jsdelivr.net/gh/jashezan/aqua-vision@main/public/images/pace-satellite.jpg"
      />
      <ContentSection />
      <MissionStatus />
      <ExampleDatasets />
      <ReadyToTest />
    </main>
  );
}
