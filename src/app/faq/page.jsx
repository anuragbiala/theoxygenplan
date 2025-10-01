"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHeadTitle from "@/components/PageHeadTitle";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // Open the first FAQ by default

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqItems = [
    {
      question: "1) What is the Stress Number™?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          A clinically validated, pre-diagnostic behavioral health utility that
          quantifies stress as a single score across three domains—Home, Work,
          and Social. It flags risk and guides next steps (education, brief
          intervention, referral). It is not a diagnosis but a standardized
          early signal.
        </p>
      ),
    },
    {
      question: "2) Is Stress Number™ legit?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          Yes. Developed by The Oxygen Plan™ and validated in collaboration with
          Mayo Clinic (Mayo Clinic Ventures is a shareholder). Peer-reviewed,
          IRB-approved, and designed for clinical governance and scalable use.
        </p>
      ),
    },
    {
      question:
        "3) Why has there never been a validated cutoff for stress until now?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          Stress has always been recognized but never standardized. Previous
          tools focused on disorders (depression, anxiety). Stress Number™
          delivers the first validated cutoff (≤23) that makes stress actionable
          in clinical workflows.
        </p>
      ),
    },
    {
      question: "4) How was the Stress Number™ validated?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          Validated through a Mayo Clinic–affiliated study comparing results
          against gold-standard instruments. ROC analyses established
          sensitivity/specificity and a usable cutoff. Supports use as a
          pre-diagnostic screener.
        </p>
      ),
    },
    {
      question: "5) What does ≤23 mean, and how was the cutoff determined?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          A score of ≤23 = safe/low-risk. &gt;23 = elevated risk requiring
          follow-up. Cutoff determined by optimizing ROC curves and confirmed
          across subgroups.
        </p>
      ),
    },
    {
      question: "6) What are the psychometric results?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          AUC ~0.90 (excellent discrimination); Sensitivity ~0.90–0.95 (at ≤23);
          Specificity ~0.80–0.90 (population dependent).
        </p>
      ),
    },
    {
      question: "7) How does it compare to PHQ-9 and GAD-7?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          Scope: PHQ-9 = depression, GAD-7 = anxiety. Stress Number™ =
          cross-cutting stress load. Stress Number™ is earlier (pre-diagnostic)
          and serves as a triage tool. One number to flag risk, then use
          PHQ-9/GAD-7 as needed.
        </p>
      ),
    },
    {
      question: "8) Does it replace those tools?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          No. It works alongside them as the front door screen.
        </p>
      ),
    },
    {
      question: "9) Is Stress Number™ a diagnostic tool?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          No. It’s a pre-diagnostic screener—a risk flag, not a diagnosis.
        </p>
      ),
    },
    {
      question: "10) Can it be billed under CPT codes?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          Yes. Often under 96127 (brief emotional/behavioral assessment). Final
          coding depends on payer policy.
        </p>
      ),
    },
    {
      question: "11) Is it EPIC / EHR ready?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          Yes. Integration-ready via HL7®/FHIR®, discrete scoring fields, and
          risk flags.
        </p>
      ),
    },
    {
      question: "12) How is it administered?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          In under 3 minutes: MA/Intake (tablet/portal/text), RN/MD review, then
          follow-up protocol if &gt;23. Auto-routing to education, intervention,
          or referral.
        </p>
      ),
    },
    {
      question: "13) Does it work across populations?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          Validated in diverse adults. Results consistent across gender and
          ethnicity. Pediatric use requires new validation.
        </p>
      ),
    },
    {
      question: "14) How does it align with CMS Mandate Aim 1?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          By 2026, CMS requires universal behavioral screening. Stress Number™
          provides one standardized metric, a clear cutoff (≤23 safe; &gt;23
          escalate), and documentation-ready outputs.
        </p>
      ),
    },
    {
      question: "15) Why is this important for Medicaid, Medicare, and equity?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          Scalable: one number fits busy clinics. Equitable: removes subjective
          bias. Efficient: earlier detection → earlier care → reduced crises.
        </p>
      ),
    },
    {
      question: "16) How does it support state pilots and waivers?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          1115 & value-based care: clear inclusion criteria and measurable
          outcomes. Supports screen-and-refer models, care management fees, and
          quality incentives.
        </p>
      ),
    },
    {
      question: "17) What makes it different from wellness apps?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          Clinically validated cutoff, three-domain model (Home, Work, Social) →
          one actionable score. Built for EHRs, CMS, and billing—not consumer
          apps.
        </p>
      ),
    },
    {
      question: "18) Is this the first validated stress screener?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          Yes—the first with a validated cutoff for standardized escalation.
        </p>
      ),
    },
    {
      question: "19) Why unify stress, anxiety, and depression?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          Symptoms overlap. One signal reduces missed needs, speeds triage, and
          simplifies reporting.
        </p>
      ),
    },
    {
      question: "20) Why now?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          Because CMS mandates, EHR interoperability, and value-based models
          demand a policy-grade stress cutoff.
        </p>
      ),
    },
    {
      question: "21) Who built it?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          The Oxygen Plan™, validated with Mayo Clinic. Mayo Clinic Ventures is
          a shareholder.
        </p>
      ),
    },
    {
      question: "22) What role did Mayo Clinic play?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          Study design, validation, scientific governance. Mayo clinician
          authored the peer-reviewed publication.
        </p>
      ),
    },
    {
      question: "23) Who else is using it?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          Live training with a state agency; additional pilots with agencies,
          employers, and community orgs in planning.
        </p>
      ),
    },
    {
      question: "24) How can organizations adopt it?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          Step 1: Fit & Pilot → define sites/workflows. Step 2: Integrate →
          EHR/flags/referrals. Step 3: Scale → coding, reporting, expansion.
        </p>
      ),
    },
    {
      question: "25) What NAICS codes apply?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          621999 — Misc. Ambulatory Health Care; 541990 — Professional,
          Scientific, Technical; 541720 — R&D in Social Sciences; 611430 —
          Professional Training.
        </p>
      ),
    },
    {
      question: "26) What product codes apply?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          PSC Q301 — Behavioral Health Services; PSC B506 — Special
          Studies/Analysis—Medical; PSC D317 — Web-Based Subscription; PSC D399
          — IT & Telecom Services.
        </p>
      ),
    },
    {
      question: "27) What keywords are associated?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          Stress Number™, The Oxygen Plan™, Smart Referral Engine℠, Check In
          Fam™, behavioral health screening, CMS Aim 1, stress cutoff, validated
          screener, EPIC integration, Medicaid modernization, CPT billing,
          National Stress Registry™.
        </p>
      ),
    },
    {
      question: "28) How can I partner?",
      answer: (
        <p className="mb-2 text-gray-500 text-left">
          Health Systems: intake/EHR workflows. Payers/Employers: scalable
          front-door screen. Government: Medicaid pilots, 1115 waivers.
          Research/Licensing: validation, AI, population studies.
        </p>
      ),
    },
  ];

  return (
    <>
      <PageHeadTitle
        title="The Oxygen Plan | FAQ"
        description="In Collaboration With Mayo Clinic. Clinically Validated For Stress, Anxiety And Depression"
      />
      <Header />

      <section className="w-full bg-green-700 lg:pt-20 pt-10 pb-0 text-center">
        <h2 className="font-[700] lg:text-4xl text-2xl text-white">FAQ</h2>
        <div className="w-full bg-white lg:py-20 py-5 lg:mt-20 mt-10 lg:rounded-t-[55px] rounded-t-[15px] lg:px-0 px-4">
          <div className="max-w-screen-xl m-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`flex items-center justify-between w-full p-5 font-medium text-left text-white focus:ring-4 focus:ring-gray-200 gap-3 bg-gray-700 ${
                    index === 0 ? "rounded-t-xl" : ""
                  }`}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`w-3 h-3 transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="p-5 border-t border-gray-200 bg-gray-100">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
