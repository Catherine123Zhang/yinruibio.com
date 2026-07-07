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

const TITLE = "Point-of-Care Animal Testing: Complete Guide to In-Clinic Veterinary Diagnostics (2026)";
const DESCRIPTION =
  "Comprehensive guide to point-of-care (POC) testing for veterinary clinics. Compare POC vs lab testing, diseases detected, ROI for practices, implementation steps, and technology overview.";

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
    alternates: { canonical: `/${locale}/point-of-care-animal-testing/` },
  };
}

const FAQS = [
  {
    q: "What is point-of-care testing in veterinary medicine?",
    a: "Point-of-care (POC) testing refers to diagnostic tests performed at or near the site of patient care — in the veterinary exam room, on the farm, or in the field — rather than in a centralized reference laboratory. POC tests deliver results within minutes to an hour, enabling veterinarians to make treatment decisions during the same appointment. POC testing encompasses rapid antigen/antibody tests (lateral flow), portable PCR (molecular diagnostics), handheld blood analyzers (hematology/chemistry), and urine analyzers. The trend in veterinary medicine is toward higher-complexity POC tests that approach reference laboratory accuracy.",
  },
  {
    q: "How does point-of-care PCR differ from rapid antigen tests for animals?",
    a: "Rapid antigen tests (lateral flow immunoassays) detect proteins produced by pathogens — similar to COVID rapid tests for humans. They deliver results in 10-15 minutes but have lower sensitivity (70-85%) and cannot detect infections in the early stages before antigen levels rise. Point-of-care PCR detects the pathogen's genetic material (DNA/RNA) and amplifies it millions of times, achieving 95-99% sensitivity even in early-stage infections with very low pathogen loads. PCR also differentiates between closely related pathogens and can detect multiple targets simultaneously (multiplexing). For definitive diagnosis, PCR is the gold standard; rapid tests are best for quick screening.",
  },
  {
    q: "What diseases can point-of-care testing detect in dogs and cats?",
    a: "POC testing can now detect a comprehensive range of canine and feline diseases. For dogs: parvovirus (CPV), distemper (CDV), coronavirus (CCV), Ehrlichia, Anaplasma, Babesia, Leptospira, Borrelia (Lyme disease), heartworm (Dirofilaria), Giardia, and canine influenza. For cats: feline leukemia virus (FeLV), feline immunodeficiency virus (FIV), feline herpesvirus (FHV), calicivirus (FCV), panleukopenia (FPV), Mycoplasma haemofelis, and feline coronavirus (FCoV/FIP). Many of these are available as multiplex panels testing 3-4 pathogens simultaneously from a single sample.",
  },
  {
    q: "Is point-of-care testing accurate enough to replace reference laboratory testing?",
    a: "For many applications, yes. Modern POC PCR platforms achieve 95-99% concordance with reference laboratory results. However, POC testing complements rather than fully replaces reference labs. POC is ideal for: urgent clinical decisions, screening and surveillance, outbreak response, and initial diagnosis. Reference labs remain necessary for: culture and sensitivity testing (guiding antibiotic selection), histopathology, comprehensive chemistry panels, and confirmatory testing for regulatory/legal purposes. The optimal approach is using POC for rapid initial diagnosis and referring to reference labs for complex or regulatory-required testing.",
  },
  {
    q: "How much does it cost to set up point-of-care testing in a veterinary clinic?",
    a: "Initial investment varies by technology level. A basic rapid test kit collection costs $500-$1,500 (lateral flow tests at $5-$15 each). A portable PCR platform costs $3,000-$8,000 for the analyzer plus $8-$25 per test chip. A comprehensive POC lab (PCR + hematology + chemistry) costs $15,000-$30,000. Most clinics start with a portable PCR device for infectious disease testing, then expand. The ROI is rapid: at 5 tests/week with $60 profit per test, a $5,000 PCR device pays for itself in under 4 months. Financing and lease options are typically available from device manufacturers.",
  },
  {
    q: "What are the regulatory requirements for point-of-care veterinary testing?",
    a: "Regulatory requirements for veterinary POC testing vary significantly by country. In the United States, veterinary diagnostic devices do not require FDA approval (FDA only regulates human diagnostics), but USDA approval is needed for tests used in disease eradication programs. In the EU, veterinary diagnostic devices fall under the In Vitro Diagnostic Regulation (IVDR) with specific requirements for CE marking. In most markets, there is no requirement for laboratory certification (like CLIA in human diagnostics) to perform POC tests in veterinary clinics. However, maintaining quality control records and following manufacturer protocols is essential for reliable results and professional liability protection.",
  },
];

export default async function PointOfCareAnimalTestingGuide({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);

  const breadcrumbs = [
    { name: dict.nav.home, url: `/${locale}/` },
    { name: "Point-of-Care Animal Testing Guide", url: `/${locale}/point-of-care-animal-testing/` },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href={`/${locale}/`} className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Point-of-Care Animal Testing Guide</span>
          </nav>
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm border border-white/20 mb-4">Buyer Guide</span>
          <h1 className="text-3xl font-bold sm:text-5xl leading-tight">Point-of-Care Animal Testing: The Complete Guide</h1>
          <p className="mt-4 text-white/80 text-lg max-w-3xl">
            How in-clinic diagnostic testing is revolutionizing veterinary practice — from rapid tests to portable PCR, with ROI analysis and implementation roadmap.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-white/50">
            <span>Updated July 2026</span><span>|</span><span>20 min read</span><span>|</span><span>3,300+ words</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose prose-lg max-w-none">

            <p className="text-xl text-[var(--color-text-light)] leading-relaxed">
              Point-of-care (POC) testing is the fastest-growing segment of veterinary diagnostics, projected to reach $3.2 billion globally by 2028. The shift from centralized laboratory testing to bedside diagnostics is being driven by advances in microfluidics, molecular biology, and artificial intelligence. For veterinary clinics, POC testing means faster diagnosis, better patient outcomes, higher client satisfaction, and significant new revenue streams. This guide covers everything you need to know about implementing point-of-care testing in your veterinary practice.
            </p>

            {/* TOC */}
            <div className="my-8 bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">Table of Contents</h3>
              <ol className="space-y-2 text-sm">
                <li><a href="#poc-vs-lab" className="text-[var(--color-accent)] hover:underline">POC vs Laboratory Testing: A Detailed Comparison</a></li>
                <li><a href="#technology-types" className="text-[var(--color-accent)] hover:underline">POC Technology Types for Veterinary Medicine</a></li>
                <li><a href="#diseases" className="text-[var(--color-accent)] hover:underline">Diseases Detected by POC Testing</a></li>
                <li><a href="#roi" className="text-[var(--color-accent)] hover:underline">ROI Analysis for Veterinary Clinics</a></li>
                <li><a href="#implementation" className="text-[var(--color-accent)] hover:underline">Implementation Steps</a></li>
                <li><a href="#quality" className="text-[var(--color-accent)] hover:underline">Quality Control &amp; Best Practices</a></li>
                <li><a href="#future" className="text-[var(--color-accent)] hover:underline">The Future of Veterinary POC Testing</a></li>
                <li><a href="#faq" className="text-[var(--color-accent)] hover:underline">Frequently Asked Questions</a></li>
              </ol>
            </div>

            <h2 id="poc-vs-lab">POC vs Laboratory Testing: A Detailed Comparison</h2>
            <p>
              Understanding the strengths and limitations of point-of-care testing versus reference laboratory testing helps veterinarians deploy each appropriately for optimal patient care.
            </p>

            <h3>Speed</h3>
            <p>
              POC tests deliver results in 10-60 minutes (rapid antigen tests in 10-15 minutes; portable PCR in 40-60 minutes). Reference laboratory turnaround depends on sample shipping (same-day courier or overnight mail) plus lab processing time, typically totaling 24-72 hours. For acute cases — a parvo-suspect puppy, a pyrexic cat, a horse with sudden neurological signs — this time difference is clinically significant. Same-visit diagnosis enables same-visit treatment initiation.
            </p>

            <h3>Accuracy</h3>
            <p>
              Reference laboratories remain the gold standard for accuracy, with established quality management systems, proficiency testing programs, and specialized equipment. However, the accuracy gap is narrowing rapidly. Modern POC PCR platforms achieve 95-99% concordance with lab PCR. Rapid antigen tests are less accurate (70-85% sensitivity) but serve well for screening purposes. The key principle: a moderately sensitive test performed immediately is often more clinically valuable than a perfectly sensitive test performed three days later.
            </p>

            <h3>Cost Structure</h3>
            <p>
              Reference lab testing involves per-test fees ($30-$80 for PCR panels) with no upfront equipment investment. POC testing requires device investment ($3,000-$8,000 for PCR, $500-$1,500 for rapid test readers) but per-test costs are lower ($8-$25 for PCR chips, $5-$15 for rapid tests). Critically, POC testing generates revenue that would otherwise go to external laboratories. A clinic running 5-10 POC tests per week at $60-$100 per test client charge generates $15,000-$50,000 in annual revenue — revenue that previously went to IDEXX, Antech, or other reference lab providers.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-2 pr-4">Factor</th>
                    <th className="text-left py-2 pr-4">POC Testing</th>
                    <th className="text-left py-2 pr-4">Reference Lab</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="py-2 pr-4 font-medium">Turnaround time</td><td className="pr-4">10-60 minutes</td><td className="pr-4">24-72 hours</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4 font-medium">Sensitivity (PCR)</td><td className="pr-4">95-99%</td><td className="pr-4">97-99.5%</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4 font-medium">Capital investment</td><td className="pr-4">$3,000-$8,000</td><td className="pr-4">None</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4 font-medium">Cost per test</td><td className="pr-4">$8-$25</td><td className="pr-4">$30-$80</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4 font-medium">Revenue capture</td><td className="pr-4">In-house (100%)</td><td className="pr-4">External (0%)</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4 font-medium">Test menu breadth</td><td className="pr-4">15-30 analytes</td><td className="pr-4">200+ analytes</td></tr>
                  <tr><td className="py-2 pr-4 font-medium">Staff training needed</td><td className="pr-4">Minimal (1-2 hours)</td><td className="pr-4">None (outsourced)</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="technology-types">POC Technology Types for Veterinary Medicine</h2>

            <h3>1. Lateral Flow Immunoassays (Rapid Tests)</h3>
            <p>
              The simplest and most widely used POC format. A sample is applied to a test strip containing antibodies that bind target antigens or antibodies. Results appear as colored lines within 10-15 minutes. Common applications: canine heartworm (antigen), FeLV/FIV antibody screening, canine parvovirus antigen. Limitations include moderate sensitivity and qualitative-only results (positive/negative, no quantification).
            </p>

            <h3>2. Portable PCR (Molecular Diagnostics)</h3>
            <p>
              The highest-accuracy POC technology, using DNA/RNA amplification to detect pathogens at molecular level. The <Link href={`/${locale}/products/carryon-device/`}>CarryOn Portable PCR Analyzer</Link> by Yinrui Bio represents the latest generation: a sub-1kg, battery-powered device using <Link href={`/${locale}/technology/`}>microfluidic chip technology</Link> with room-temperature-stable reagents. Results in 40-60 minutes with 95-99% accuracy. This technology is the focus of our companion guide: <Link href={`/${locale}/portable-pcr-veterinary/`}>Portable PCR for Veterinary Diagnostics</Link>.
            </p>

            <h3>3. Handheld Blood Analyzers</h3>
            <p>
              Compact instruments for basic hematology (CBC) and serum chemistry (liver enzymes, kidney values, electrolytes) from a few drops of blood. These complement infectious disease POC tests by providing a broader clinical picture during the same appointment.
            </p>

            <h3>4. Digital Cytology / AI-Assisted Microscopy</h3>
            <p>
              Emerging POC technology that uses smartphone-attached microscope adapters and AI algorithms to analyze blood smears, skin scrapings, and cytology samples. While still evolving, this technology promises to bring pathologist-level analysis to the point of care.
            </p>

            {/* Mid-article CTA */}
            <div className="my-10 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl p-8 text-center not-prose">
              <h3 className="text-xl font-semibold text-white mb-3">Bring PCR-Level Diagnostics to Your Clinic</h3>
              <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                The CarryOn Portable PCR Platform delivers lab-grade molecular diagnostics in 40 minutes. Request a demo or trial unit.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href={`/${locale}/contact/`} className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[var(--color-primary)] bg-white rounded-lg hover:bg-gray-100 transition-colors">
                  Request a Demo
                </Link>
                <CatalogButton label="Download Product Catalog" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors" />
              </div>
            </div>

            <h2 id="diseases">Diseases Detected by POC Testing</h2>

            <h3>Canine Diseases</h3>
            <ul>
              <li><strong>Canine Parvovirus (CPV):</strong> The most common reason for urgent POC testing. <Link href={`/${locale}/products/test-chips/canine-triple-screening/`}>PCR triple panels</Link> detect CPV with higher sensitivity than fecal antigen rapid tests, especially in early-stage infection and vaccinated dogs</li>
              <li><strong>Canine Distemper (CDV):</strong> PCR detects CDV RNA in conjunctival swabs, nasal secretions, or blood — enabling diagnosis before pathognomonic signs develop</li>
              <li><strong>Tick-borne diseases:</strong> <Link href={`/${locale}/products/test-chips/canine-tick-borne/`}>Ehrlichia/Anaplasma/Babesia panels</Link> detect active infections that serology may miss in acute phase or immunosuppressed patients</li>
              <li><strong>Respiratory infections:</strong> <Link href={`/${locale}/products/test-chips/canine-triple-respiratory/`}>Respiratory PCR panels</Link> differentiate viral from bacterial causes, guiding appropriate treatment</li>
            </ul>

            <h3>Feline Diseases</h3>
            <ul>
              <li><strong>Upper respiratory complex:</strong> <Link href={`/${locale}/products/test-chips/feline-triple-respiratory/`}>FHV/FCV/FPV panels</Link> identify specific viral pathogens, particularly important in shelter and cattery settings</li>
              <li><strong>Screening panels:</strong> <Link href={`/${locale}/products/test-chips/feline-triple-screening/`}>Triple screening</Link> for common feline pathogens during wellness visits and new cat intake</li>
            </ul>

            <h3>Livestock Diseases</h3>
            <ul>
              <li><strong>African Swine Fever:</strong> <Link href={`/${locale}/products/test-chips/african-swine-fever/`}>On-farm ASF PCR testing</Link> enables 40-minute detection vs 2-3 day lab turnaround — critical for outbreak containment</li>
              <li><strong>PRRSV:</strong> <Link href={`/${locale}/products/test-chips/prrsv-test/`}>Routine PRRSV surveillance</Link> of breeding herds detects viral introduction before clinical signs and production losses</li>
            </ul>

            <h2 id="roi">ROI Analysis for Veterinary Clinics</h2>
            <p>
              The financial case for POC testing is compelling when analyzed across three dimensions: direct revenue, indirect revenue, and cost avoidance.
            </p>

            <h3>Direct Revenue</h3>
            <p>
              Every POC test performed in-house generates revenue that would otherwise go to a reference lab. At a typical charge of $65-$100 per PCR test and a cost of $15-$25 per test chip, the gross margin per test is $40-$75. A clinic performing just 5 tests per week generates $10,000-$19,500 in annual gross margin from POC testing alone.
            </p>

            <h3>Indirect Revenue</h3>
            <p>
              Same-visit diagnosis leads to same-visit treatment initiation, increasing treatment compliance and follow-up visit rates. Clinics report 20-35% higher test acceptance rates when results are available during the appointment (vs. requiring a separate follow-up for lab results). This translates to more tests ordered, more treatments initiated, and more follow-up visits scheduled.
            </p>

            <h3>Cost Avoidance</h3>
            <p>
              Empiric treatment (treating without a diagnosis) is expensive and carries risks. POC testing enables targeted therapy from day one, reducing unnecessary antibiotic use, shortening hospital stays, and improving outcomes. In emergency settings, POC testing eliminates the need for costly overnight hospitalization while awaiting lab results.
            </p>

            <h2 id="implementation">Implementation Steps</h2>

            <h3>Step 1: Assess Your Practice Needs</h3>
            <p>
              Review your last 12 months of reference lab submissions. Identify the top 10 tests by volume and revenue. These are your primary candidates for POC implementation. Calculate the revenue currently going to external labs that could be captured in-house.
            </p>

            <h3>Step 2: Select Technology and Platform</h3>
            <p>
              Match your test volume profile to the right technology. For practices focused on infectious disease, a portable PCR platform like the <Link href={`/${locale}/products/carryon-device/`}>CarryOn analyzer</Link> covers the highest-value tests. For practices wanting broader coverage, combine PCR with a handheld chemistry analyzer. See our <Link href={`/${locale}/portable-pcr-veterinary/`}>Portable PCR Veterinary Guide</Link> for detailed platform comparison.
            </p>

            <h3>Step 3: Train Your Team</h3>
            <p>
              POC testing succeeds when the entire team understands the value proposition and the workflow. Training should cover sample collection technique, device operation, result interpretation, quality control procedures, and client communication. Most POC platforms require only 1-2 hours of initial training. Yinrui Bio provides <Link href={`/${locale}/contact/`}>comprehensive training support</Link> including video tutorials and on-site sessions.
            </p>

            <h3>Step 4: Set Pricing and Integrate into Workflow</h3>
            <p>
              Price POC tests competitively with or slightly below reference lab fees — clients receive results faster at the same or lower price, increasing satisfaction and test acceptance. Add test codes to your practice management system and create standard operating procedures for common clinical scenarios. Develop client-facing handouts explaining the benefits of in-clinic testing.
            </p>

            <h3>Step 5: Monitor and Optimize</h3>
            <p>
              Track test volumes, revenue, turnaround times, and quality control results monthly. Survey clients on satisfaction with in-clinic testing. Expand your test menu as clinical demand evolves. Share test data with the POC platform manufacturer for ongoing technical support and result correlation studies.
            </p>

            <h2 id="quality">Quality Control &amp; Best Practices</h2>
            <ul>
              <li><strong>Run controls regularly:</strong> Use positive and negative control samples monthly (or per manufacturer recommendation) to verify device performance</li>
              <li><strong>Document results:</strong> Maintain a log of all POC test results, control results, and any discordant findings</li>
              <li><strong>Follow SOPs:</strong> Create and follow written standard operating procedures for sample collection, device operation, and result reporting</li>
              <li><strong>Correlate with labs:</strong> Periodically submit split samples to reference labs to verify ongoing concordance with your POC platform</li>
              <li><strong>Maintain equipment:</strong> Follow manufacturer maintenance schedules and keep devices clean and calibrated</li>
            </ul>

            <h2 id="future">The Future of Veterinary POC Testing</h2>
            <p>
              Several emerging technologies will expand POC testing capabilities in the coming years:
            </p>
            <ul>
              <li><strong>CRISPR-based diagnostics:</strong> Next-generation molecular tests using CRISPR enzymes promise even faster results (15-20 minutes) with PCR-equivalent accuracy</li>
              <li><strong>AI-powered result interpretation:</strong> Machine learning algorithms will provide automated result interpretation, flagging unusual patterns and suggesting follow-up testing</li>
              <li><strong>Antimicrobial susceptibility:</strong> POC platforms capable of rapid phenotypic AST will enable same-visit targeted antibiotic selection</li>
              <li><strong>Multiplex expansion:</strong> Future test chips will test for 10-20 targets simultaneously on a single chip, further reducing per-pathogen testing costs</li>
              <li><strong>Telemedicine integration:</strong> POC results transmitted to specialist telemedicine consultants in real-time during the appointment</li>
            </ul>
            <p>
              Yinrui Bio is actively developing next-generation platforms across these frontiers. Learn more on our <Link href={`/${locale}/technology/`}>Technology page</Link>, explore our current <Link href={`/${locale}/products/`}>product lineup</Link>, or <Link href={`/${locale}/contact/`}>contact us</Link> to discuss distribution partnerships. Visit our <Link href={`/${locale}/about/`}>About page</Link> and <Link href={`/${locale}/faq/`}>FAQ</Link> for more information.
            </p>

          </div>

          {/* FAQ Section */}
          <div className="mt-16 border-t border-[var(--color-border)] pt-12" id="faq">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {FAQS.map((faq, i) => (
                <div key={i} className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[var(--color-primary)]">{faq.q}</h3>
                  <p className="mt-3 text-[var(--color-text-light)] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="mt-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-8">
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">Start Your POC Testing Journey</h3>
            <p className="text-sm text-[var(--color-text-light)] mb-6">
              Request information about the CarryOn Platform, pricing, and trial programs for your veterinary clinic or distribution network.
            </p>
            <InquiryFormCompact productName="CarryOn POC Testing Platform" sourcePage="point-of-care-animal-testing-guide" locale={locale} />
          </div>

          {/* Cross-links */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <h3 className="text-sm font-semibold text-[var(--color-text-light)] uppercase tracking-wider mb-4">Related Resources</h3>
            <div className="grid gap-3 sm:grid-cols-3">
              <Link href={`/${locale}/portable-pcr-veterinary/`} className="rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">Portable PCR Veterinary Guide</Link>
              <Link href={`/${locale}/products/carryon-device/`} className="rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">CarryOn Device</Link>
              <Link href={`/${locale}/products/test-chips/`} className="rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">Test Chip Catalog</Link>
              <Link href={`/${locale}/technology/`} className="rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">{dict.nav.technology}</Link>
              <Link href={`/${locale}/markets/`} className="rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">Markets</Link>
              <Link href={`/${locale}/contact/`} className="rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
