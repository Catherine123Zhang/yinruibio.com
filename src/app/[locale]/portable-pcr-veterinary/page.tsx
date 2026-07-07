import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import Link from "next/link";
import InquiryFormCompact from "@/components/InquiryFormCompact";
import CatalogButton from "@/components/CatalogButton";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const TITLE = "Portable PCR for Veterinary Diagnostics: Complete Buyer Guide (2026)";
const DESCRIPTION =
  "Comprehensive guide to portable PCR technology for veterinary clinics. Learn how point-of-care molecular diagnostics works, clinical applications, platform comparison, and ROI analysis.";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: `/${locale}/portable-pcr-veterinary/` },
  };
}

const FAQS = [
  {
    q: "What is portable PCR and how does it differ from laboratory PCR?",
    a: "Portable PCR (Polymerase Chain Reaction) is a miniaturized, point-of-care version of the gold-standard molecular diagnostic technique used in reference laboratories. While lab-based PCR instruments weigh 20-50 kg, require trained technicians, and take 2-6 hours to deliver results, portable PCR devices like the CarryOn analyzer weigh under 1 kg, require no specialized training, and provide results in 40-60 minutes. The core technology — thermocycling to amplify target DNA/RNA sequences — is identical, so portable PCR achieves the same 95-99% sensitivity and specificity as laboratory systems. The key innovation enabling portability is microfluidic chip technology that miniaturizes the entire sample-to-result workflow onto a disposable chip.",
  },
  {
    q: "Which animal diseases can portable PCR detect?",
    a: "Portable PCR can detect virtually any disease caused by a pathogen with a known genetic sequence. Common veterinary applications include: canine diseases (canine distemper virus CDV, canine parvovirus CPV, canine coronavirus CCV, Ehrlichia, Anaplasma, Babesia), feline diseases (feline herpesvirus FHV, feline calicivirus FCV, feline parvovirus FPV, FeLV, FIV), livestock diseases (African swine fever ASF, PRRSV, foot-and-mouth disease, avian influenza), and equine diseases (EHV, strangles, EPM). New test panels are continuously developed as pathogen genomes are sequenced.",
  },
  {
    q: "How accurate is portable PCR compared to sending samples to a reference lab?",
    a: "Peer-reviewed studies consistently show portable PCR achieves 95-99% concordance with reference laboratory results. The CarryOn platform, for example, uses real-time fluorescence detection with the same Taq polymerase amplification chemistry as benchtop PCR instruments. Sensitivity (ability to detect true positives) is typically 96-99%, and specificity (ability to correctly identify negatives) is 97-99.5%. The primary limitation is the sample collection step — poor sample quality affects all PCR methods equally. With proper sample collection technique, portable PCR results are clinically equivalent to lab PCR.",
  },
  {
    q: "What is the cost per test for portable PCR in veterinary practice?",
    a: "The cost per test varies by platform and test type but typically ranges from $8-$25 per test chip for veterinary applications. Triple-panel tests (detecting 3 pathogens simultaneously) cost $12-$20, while single-pathogen tests cost $8-$15. The device itself ranges from $3,000-$8,000 depending on features. With most clinics billing $45-$120 per PCR test to clients, the profit margin per test is $25-$100. At just 2-3 tests per week, the device pays for itself within 6-12 months. Reference lab testing typically costs $30-$80 per test with 24-72 hour turnaround, making in-house portable PCR both faster and more profitable.",
  },
  {
    q: "Do portable PCR devices require special training or laboratory setup?",
    a: "No. Modern portable PCR devices are designed for point-of-care use by veterinary staff without molecular biology training. The CarryOn platform, for example, uses pre-loaded microfluidic chips that contain all necessary reagents in a sealed, room-temperature-stable format. The workflow is: collect sample with provided swab, insert swab into chip port, place chip into device, press start. The device handles lysis, extraction, amplification, and detection automatically. No pipetting, no reagent preparation, no biosafety cabinet required. Results display on the device screen or companion app within 40-60 minutes.",
  },
  {
    q: "How should I choose a portable PCR platform for my veterinary clinic?",
    a: "Evaluate platforms across five criteria: (1) Test menu — ensure the platform covers diseases common in your patient population, including canine, feline, and any specialty species you treat. (2) Cost per test — calculate total cost including device, test chips, and any maintenance fees. (3) Turnaround time — most platforms deliver results in 30-60 minutes. (4) Ease of use — look for walk-away automation with minimal sample handling. (5) Reagent storage — platforms using room-temperature-stable reagents (like Yinrui Bio's CarryOn) eliminate the need for refrigeration and reduce waste from expired reagents. Request a demo unit for a 2-week trial before committing.",
  },
];

export default async function PortablePCRVeterinaryGuide({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);

  const breadcrumbs = [
    { name: dict.nav.home, url: `/${locale}/` },
    { name: "Portable PCR Veterinary Guide", url: `/${locale}/portable-pcr-veterinary/` },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href={`/${locale}/`} className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Portable PCR Veterinary Guide</span>
          </nav>
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm border border-white/20 mb-4">
            Buyer Guide
          </span>
          <h1 className="text-3xl font-bold sm:text-5xl leading-tight">
            Portable PCR for Veterinary Diagnostics
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-3xl">
            How point-of-care molecular testing is transforming veterinary medicine — technology, clinical applications, platform selection, and ROI analysis.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-white/50">
            <span>Updated July 2026</span>
            <span>|</span>
            <span>22 min read</span>
            <span>|</span>
            <span>3,500+ words</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose prose-lg max-w-none">

            <p className="text-xl text-[var(--color-text-light)] leading-relaxed">
              Veterinary diagnostics is undergoing a fundamental transformation. For decades, molecular testing meant sending samples to reference laboratories and waiting 24-72 hours for results. Now, portable PCR technology brings laboratory-grade molecular diagnostics directly to the point of care — the veterinary exam room, the farm barn, the field station. This guide explains the technology, its clinical applications, how to evaluate platforms, and the business case for bringing PCR in-house.
            </p>

            {/* TOC */}
            <div className="my-8 bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">Table of Contents</h3>
              <ol className="space-y-2 text-sm">
                <li><a href="#what-is" className="text-[var(--color-accent)] hover:underline">What Is Portable PCR?</a></li>
                <li><a href="#how-it-works" className="text-[var(--color-accent)] hover:underline">How Portable PCR Works</a></li>
                <li><a href="#microfluidics" className="text-[var(--color-accent)] hover:underline">Microfluidic Chip Technology</a></li>
                <li><a href="#clinical" className="text-[var(--color-accent)] hover:underline">Clinical Applications in Veterinary Medicine</a></li>
                <li><a href="#choosing" className="text-[var(--color-accent)] hover:underline">Choosing a Portable PCR Platform</a></li>
                <li><a href="#roi" className="text-[var(--color-accent)] hover:underline">ROI Analysis for Veterinary Clinics</a></li>
                <li><a href="#implementation" className="text-[var(--color-accent)] hover:underline">Implementation Guide</a></li>
                <li><a href="#faq" className="text-[var(--color-accent)] hover:underline">Frequently Asked Questions</a></li>
              </ol>
            </div>

            <h2 id="what-is">What Is Portable PCR?</h2>
            <p>
              Polymerase Chain Reaction (PCR) is the gold-standard method for detecting pathogens, genetic mutations, and biological markers by amplifying specific DNA or RNA sequences. Invented by Kary Mullis in 1983, PCR has become the backbone of molecular diagnostics across human medicine, veterinary science, food safety, and forensics.
            </p>
            <p>
              Traditional PCR requires a laboratory environment: benchtop thermocyclers, centrifuges, pipettes, reagent refrigerators, and trained molecular biologists. The sample-to-result workflow takes 2-6 hours of hands-on work plus 1-3 days for sample shipping if the lab is off-site.
            </p>
            <p>
              Portable PCR eliminates these barriers by integrating the entire PCR workflow — sample lysis, nucleic acid extraction, amplification, and fluorescent detection — into a handheld device weighing less than 1 kg. The <Link href={`/${locale}/products/carryon-device/`}>CarryOn Portable PCR Analyzer</Link> developed by Yinrui Bio exemplifies this approach: a battery-powered device that delivers real-time fluorescence PCR results in 40-60 minutes with no laboratory infrastructure required.
            </p>

            <h2 id="how-it-works">How Portable PCR Works</h2>
            <p>
              The fundamental principle is identical to laboratory PCR: repeated heating and cooling cycles (thermocycling) cause a DNA polymerase enzyme to replicate target sequences exponentially. After 30-40 cycles, even a single copy of target DNA is amplified to billions of copies — enough to detect with fluorescent probes.
            </p>
            <p>
              In portable PCR devices, the thermocycling happens within a microfluidic chip rather than a plastic tube in a benchtop thermocycler. The key innovations enabling miniaturization include:
            </p>
            <ul>
              <li><strong>Micro-heaters:</strong> Thin-film resistive heaters embedded in the chip achieve heating rates of 10-20 degrees C per second — 5-10x faster than conventional Peltier-based thermocyclers</li>
              <li><strong>Microfluidic channels:</strong> Sample volumes of 1-5 microliters flow through channels narrower than a human hair, reducing reagent consumption by 90% and enabling faster thermal equilibration</li>
              <li><strong>Integrated optics:</strong> Miniature LED excitation sources and photodiode detectors replace the expensive laser/CCD systems in benchtop instruments</li>
              <li><strong>Pre-loaded reagents:</strong> Lyophilized (freeze-dried) primers, probes, and enzymes are stored directly on the chip at room temperature, eliminating cold-chain requirements</li>
            </ul>
            <p>
              Learn more about the underlying science on our <Link href={`/${locale}/technology/`}>Technology page</Link>.
            </p>

            <h2 id="microfluidics">Microfluidic Chip Technology</h2>
            <p>
              The microfluidic test chip is the consumable component that makes portable PCR practical. Each chip is a self-contained diagnostic cartridge containing all the reagents needed for one test. Yinrui Bio&apos;s <Link href={`/${locale}/products/test-chips/`}>test chip lineup</Link> includes panels for canine, feline, livestock, and food safety applications.
            </p>
            <p>
              The chip manufacturing process involves precision injection molding of cyclic olefin polymer (COP) substrate, followed by reagent deposition and sealing. Key specifications include:
            </p>
            <ul>
              <li><strong>Channel dimensions:</strong> 50-200 micrometers wide, 20-100 micrometers deep</li>
              <li><strong>Reaction chambers:</strong> 1-5 microliters per chamber, with 2-4 independent chambers per chip for multiplex testing</li>
              <li><strong>Reagent stability:</strong> Room temperature storage for 12-24 months — no refrigeration needed</li>
              <li><strong>Sample input:</strong> Raw samples (swab, blood, tissue) with integrated sample preparation</li>
            </ul>
            <p>
              The room-temperature stability of Yinrui Bio&apos;s test chips is a major differentiator. Most competing platforms require cold-chain storage (2-8 degrees C) for their reagents, adding complexity and cost, especially in field settings and developing markets. Browse the full <Link href={`/${locale}/products/test-chips/`}>test chip catalog</Link> for available panels.
            </p>

            <h2 id="clinical">Clinical Applications in Veterinary Medicine</h2>

            <h3>Small Animal (Companion Animal) Practice</h3>
            <p>
              Portable PCR has the greatest immediate impact in small animal clinics where rapid, definitive diagnosis changes treatment decisions during the same appointment. Key applications include:
            </p>
            <ul>
              <li><strong>Canine infectious disease screening:</strong> <Link href={`/${locale}/products/test-chips/canine-triple-screening/`}>Triple screening panels</Link> test for CDV, CPV, and CCV simultaneously — critical for shelter intake, puppy wellness exams, and kennel cough outbreak investigation</li>
              <li><strong>Feline respiratory panels:</strong> <Link href={`/${locale}/products/test-chips/feline-triple-respiratory/`}>FHV/FCV/FPV panels</Link> differentiate viral causes of upper respiratory infection, guiding antiviral vs. supportive therapy decisions</li>
              <li><strong>Tick-borne disease panels:</strong> <Link href={`/${locale}/products/test-chips/canine-tick-borne/`}>Ehrlichia/Anaplasma/Babesia panels</Link> detect active infections that serology-based rapid tests may miss in early stages</li>
              <li><strong>Pre-surgical screening:</strong> Confirming absence of active infection before elective procedures reduces post-operative complications</li>
            </ul>

            <h3>Livestock &amp; Production Animal Medicine</h3>
            <p>
              In production animal settings, speed of diagnosis directly impacts economic outcomes. A single day of delay in diagnosing African swine fever (ASF) can mean the difference between containing an outbreak to one barn versus losing an entire herd. Portable PCR enables:
            </p>
            <ul>
              <li><strong>ASF surveillance:</strong> <Link href={`/${locale}/products/test-chips/african-swine-fever/`}>On-farm ASF testing</Link> with results in 40 minutes vs. 2-3 days for laboratory confirmation</li>
              <li><strong>PRRSV monitoring:</strong> <Link href={`/${locale}/products/test-chips/prrsv-test/`}>Regular PRRSV screening</Link> of breeding herds to detect viral introduction before clinical signs appear</li>
              <li><strong>Biosecurity checkpoints:</strong> Testing incoming animals at farm gates before they enter the main herd</li>
              <li><strong>Regulatory compliance:</strong> Providing documentary evidence of disease-free status for export certification and movement permits</li>
            </ul>

            <h3>Food Safety &amp; Meat Species Identification</h3>
            <p>
              Portable PCR is increasingly used in food supply chain verification. <Link href={`/${locale}/products/test-chips/meat-beef-pork-chicken-duck/`}>Meat species identification panels</Link> detect adulteration — for example, confirming that beef products do not contain undeclared pork, horse, or other species. This addresses both food fraud concerns and religious/dietary compliance (halal, kosher) verification. Applications on our <Link href={`/${locale}/applications/`}>Applications page</Link> cover these use cases in detail.
            </p>

            {/* Mid-article CTA */}
            <div className="my-10 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl p-8 text-center not-prose">
              <h3 className="text-xl font-semibold text-white mb-3">
                See Portable PCR in Action
              </h3>
              <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                Request a demo of the CarryOn Portable PCR Platform. We offer 2-week trial programs for qualified veterinary clinics and distributors.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href={`/${locale}/contact/`}
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[var(--color-primary)] bg-white rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Request a Demo
                </Link>
                <CatalogButton
                  label="Download Product Catalog"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
                />
              </div>
            </div>

            <h2 id="choosing">Choosing a Portable PCR Platform</h2>
            <p>
              The portable PCR market is growing rapidly, with multiple platforms now available for veterinary use. Here is a framework for evaluating your options:
            </p>

            <h3>Test Menu Coverage</h3>
            <p>
              The most critical factor is whether the platform offers test panels for the diseases you encounter most frequently. Evaluate the current test menu and the manufacturer&apos;s R&amp;D pipeline for upcoming panels. Yinrui Bio currently offers 15+ veterinary panels covering canine, feline, swine, and food safety applications, with new panels released quarterly.
            </p>

            <h3>Total Cost of Ownership</h3>
            <p>
              Beyond the device purchase price, calculate the cost per test (test chip/cartridge), any required maintenance contracts, software subscription fees, and training costs. Platforms with room-temperature-stable reagents (like Yinrui Bio&apos;s) have lower hidden costs because there is no waste from expired cold-stored reagents.
            </p>

            <h3>Ease of Use</h3>
            <p>
              The platform should be operable by veterinary technicians without molecular biology training. Key usability features include: walk-away automation (no manual pipetting), clear visual instructions on the device or companion app, built-in quality control, and results interpretation guidance. The best platforms reduce the workflow to three steps: collect sample, insert chip, press start.
            </p>

            <h3>Connectivity &amp; Data Management</h3>
            <p>
              Modern platforms should integrate with your practice management software. Look for Bluetooth/Wi-Fi connectivity, cloud-based result storage, automatic patient record linking, and the ability to generate PDF reports for client communication. Data export capabilities are also important for multi-site practices tracking disease trends.
            </p>

            <h3>Regulatory Status</h3>
            <p>
              Verify that the platform carries appropriate regulatory approvals for your market. In the EU, look for CE-IVD marking. In the US, check FDA registration status. For veterinary-specific devices, regulatory requirements vary by country — our <Link href={`/${locale}/markets/`}>Markets page</Link> provides region-specific regulatory guidance.
            </p>

            <h2 id="roi">ROI Analysis for Veterinary Clinics</h2>
            <p>
              The business case for portable PCR is compelling. Here is a realistic ROI analysis based on typical small animal practice volumes:
            </p>

            <h3>Revenue Model</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-2 pr-4">Metric</th>
                    <th className="text-left py-2 pr-4">Conservative</th>
                    <th className="text-left py-2 pr-4">Moderate</th>
                    <th className="text-left py-2 pr-4">Aggressive</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="py-2 pr-4">Tests per week</td><td className="pr-4">3</td><td className="pr-4">8</td><td className="pr-4">15</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">Average charge to client</td><td className="pr-4">$65</td><td className="pr-4">$75</td><td className="pr-4">$85</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">Cost per test chip</td><td className="pr-4">$15</td><td className="pr-4">$15</td><td className="pr-4">$15</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">Gross profit per test</td><td className="pr-4">$50</td><td className="pr-4">$60</td><td className="pr-4">$70</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">Annual gross profit</td><td className="pr-4">$7,800</td><td className="pr-4">$24,960</td><td className="pr-4">$54,600</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">Device cost</td><td className="pr-4">$5,000</td><td className="pr-4">$5,000</td><td className="pr-4">$5,000</td></tr>
                  <tr><td className="py-2 pr-4 font-semibold">Payback period</td><td className="pr-4 font-semibold">7.7 months</td><td className="pr-4 font-semibold">2.4 months</td><td className="pr-4 font-semibold">1.1 months</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Additional Revenue Streams</h3>
            <ul>
              <li><strong>Increased case capture:</strong> Clients who previously declined to test (due to lab turnaround time) are more likely to approve in-clinic testing with same-visit results</li>
              <li><strong>Follow-up testing:</strong> Monitoring treatment response with serial PCR tests generates recurring revenue</li>
              <li><strong>Wellness plan integration:</strong> Adding annual PCR screening to wellness packages increases plan value and client retention</li>
              <li><strong>Emergency/after-hours testing:</strong> In-house PCR capability enables definitive diagnosis during emergency shifts when reference labs are closed</li>
            </ul>

            <h2 id="implementation">Implementation Guide</h2>
            <p>
              Successfully integrating portable PCR into your veterinary practice involves these steps:
            </p>

            <h3>Phase 1: Evaluation (Weeks 1-2)</h3>
            <ul>
              <li>Request demo units from 2-3 platform manufacturers</li>
              <li>Run the demo on 10-15 clinical cases to assess ease of use and clinical utility</li>
              <li>Compare results with reference lab submissions for concordance validation</li>
              <li>Survey staff on usability and willingness to incorporate into workflow</li>
            </ul>

            <h3>Phase 2: Launch (Weeks 3-4)</h3>
            <ul>
              <li>Train all veterinary technicians on sample collection and device operation</li>
              <li>Establish pricing and add PCR test codes to your practice management system</li>
              <li>Create client-facing educational materials explaining the value of in-clinic PCR</li>
              <li>Designate a &quot;PCR champion&quot; responsible for quality control and troubleshooting</li>
            </ul>

            <h3>Phase 3: Optimization (Months 2-3)</h3>
            <ul>
              <li>Track test volumes, turnaround times, and client satisfaction metrics</li>
              <li>Identify high-value use cases specific to your practice population</li>
              <li>Expand the test menu based on clinical demand</li>
              <li>Develop standard operating procedures (SOPs) for sample collection and result interpretation</li>
            </ul>

            <p>
              Yinrui Bio provides comprehensive implementation support including staff training, SOP templates, and ongoing technical assistance. <Link href={`/${locale}/contact/`}>Contact our veterinary support team</Link> to discuss your clinic&apos;s specific needs, or learn more <Link href={`/${locale}/about/`}>about our company</Link> and <Link href={`/${locale}/faq/`}>frequently asked questions</Link>.
            </p>

          </div>

          {/* FAQ Section */}
          <div className="mt-16 border-t border-[var(--color-border)] pt-12" id="faq">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[var(--color-primary)]">{faq.q}</h3>
                  <p className="mt-3 text-[var(--color-text-light)] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="mt-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-8">
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">
              Request Platform Information
            </h3>
            <p className="text-sm text-[var(--color-text-light)] mb-6">
              Get pricing, technical specifications, and arrange a demo of the CarryOn Portable PCR Platform for your veterinary clinic.
            </p>
            <InquiryFormCompact
              productName="CarryOn Portable PCR (Veterinary)"
              sourcePage="portable-pcr-veterinary-guide"
              locale={locale}
            />
          </div>

          {/* Cross-links */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <h3 className="text-sm font-semibold text-[var(--color-text-light)] uppercase tracking-wider mb-4">Related Resources</h3>
            <div className="grid gap-3 sm:grid-cols-3">
              <Link href={`/${locale}/point-of-care-animal-testing/`} className="rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                Point-of-Care Animal Testing Guide
              </Link>
              <Link href={`/${locale}/products/carryon-device/`} className="rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                CarryOn Device
              </Link>
              <Link href={`/${locale}/products/test-chips/`} className="rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                Test Chip Catalog
              </Link>
              <Link href={`/${locale}/technology/`} className="rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                {dict.nav.technology}
              </Link>
              <Link href={`/${locale}/applications/`} className="rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                Applications
              </Link>
              <Link href={`/${locale}/contact/`} className="rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
