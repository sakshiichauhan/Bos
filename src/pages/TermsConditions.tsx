// src/pages/TermsPage.tsx
import React, { useEffect } from "react";


type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "introduction", label: "Introduction" },
  { id: "access-to-site", label: "Access to Site" },
  { id: "user-content", label: "User Content" },
  { id: "acceptable-use-policy", label: "Acceptable use policy" },
  { id: "third-party", label: "Third party" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "limitation-liablity", label: "Limitation on Liability" },
  { id: "copy-right", label: "Copyright policy" },
  { id: "your-privacy", label: "Your privacy" },
];

const TermsPage: React.FC = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
     
      <main className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
        <Sidebar />
        <TermsContent />
      </main>
    
    </>
  );
};

export default TermsPage;


const Sidebar: React.FC = () => (
  <nav
    className="w-full lg:w-48 bg-blue-50 rounded-lg shadow p-4 text-sm sticky top-20"
    aria-label="Terms Sections"
  >
    <h2 className="font-semibold text-blue-800 mb-3">On this page</h2>
    <ul className="space-y-2">
      {SECTIONS.map(({ id, label }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className="block pl-1 border-l-4 border-transparent hover:border-blue-400 hover:bg-blue-100 rounded transition text-blue-600 hover:text-blue-800"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);


const TermsContent: React.FC = () => (
  <article className="flex-1 bg-gradient-to-br from-white to-gray-100 text-gray-800 rounded-2xl shadow-lg p-8 overflow-auto">
    <h1 id="top" className="text-center text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">
      Terms &amp; Conditions
    </h1>
    <p className="text-center italic text-gray-500 text-sm">Last Updated: 22/01/2024</p>
    <p className="text-center italic text-gray-500 text-sm mb-6">Effective From: 22/01/2024</p>

    {/* Introduction */}
    <SectionHeading id="introduction">Introduction</SectionHeading>
    <p>
      The <a href="https://HSWF.Network" className="text-blue-600 underline">HSWF.Network</a> website
      located at www.hswf.network is a copyright work belonging to Hard-Core Sports Welfare Foundation.
      Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be
      posted on the Site in connection with such features.
    </p>
    <p>
      All such additional terms, guidelines, and rules are incorporated by reference into these Terms.
    </p>
    <p>
      These Terms of Use describe the legally binding terms and conditions that oversee your use of the Site.
      BY LOGGING INTO THE SITE, YOU ARE AGREEING THAT THESE TERMS APPLY and you represent that you have
      the authority and capacity to enter into these Terms. YOU SHOULD BE AT LEAST 18 YEARS OF AGE TO ACCESS
      THE SITE. IF YOU DISAGREE WITH ANY PROVISION OF THESE TERMS, DO NOT LOG INTO AND/OR USE THE SITE.
      In case you are below 18 years, it is advised that you access this site with your guardian and under
      strict supervision. These terms require that resolution shall be resorted to arbitration on an individual
      basis to resolve disputes and also limit the remedies available to you.
    </p>

    {/* Access to site */}
    <SectionHeading id="access-to-site">Access to the site</SectionHeading>
    <p>
      Subject to these Terms, HSWF Network grants you a non-transferable, non-exclusive, revocable, limited
      license to access the Site solely for your own personal, noncommercial use.
    </p>
    <strong>Certain Restrictions</strong>
    <p>
      The rights granted to you in these Terms are subject to the following restrictions:
      (a) you shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially
      exploit the Site; (b) you shall not change, make derivative works of, disassemble, reverse compile or
      reverse engineer any part of the Site; (c) you shall not access the Site to build a similar or
      competitive website; and (d) except as expressly stated herein, no part of the Site may be copied,
      reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by
      any means unless otherwise indicated. Any future release, update, or addition to functionality of the
      Site shall be subject to these Terms. All copyright and other proprietary notices on the Site must be
      retained.
    </p>
    <p>
      HSWF Network reserves the right to change, suspend, or cease the Site with or without notice to you.
      You agree that HSWF Network will not be held liable to you or any third party for any change,
      interruption, or termination of the Site or any part.
    </p>
    <strong>No Support or Maintenance</strong>
    <p>
      You agree that HSWF Network will have no obligation to provide you with any support in connection with
      the Site.
    </p>
    <p>
      Excluding any User Content that you may provide, you acknowledge that all intellectual property rights,
      including copyrights, patents, trademarks, and trade secrets, in the Site and its content are owned by
      HSWF Network or its suppliers. These Terms and access to the Site do not give you any rights, title, or
      interest in such intellectual property, except for the limited access rights above. HSWF Network and its
      suppliers reserve all rights not granted in these Terms.
    </p>
    <p>
      You hereby grant HSWF Network an irreversible, nonexclusive, royalty-free, worldwide license to
      reproduce, distribute, publicly display and perform, prepare derivative works of, incorporate into other
      works, and otherwise use and exploit your User Content for the purposes of including it in the Site. You
      irrevocably waive any claims of moral rights or attribution.
    </p>

    {/* User Content */}
    <SectionHeading id="user-content">User Content</SectionHeading>
    <p>
      “User Content” means any information and content you submit to the Site. You are solely responsible for
      your User Content and bear all risks associated with its use. You certify your User Content does not
      violate our Acceptable Use Policy. You may not imply that your User Content is provided, sponsored, or
      endorsed by HSWF Network. HSWF Network is not obliged to back up any User Content, and may delete it at
      any time without notice. You are responsible for making your own backups.
    </p>
    <p>
      You grant HSWF Network an irreversible, nonexclusive, royalty-free, worldwide license to reproduce,
      distribute, publicly display and perform, prepare derivative works of, incorporate into other works, and
      otherwise use and exploit your User Content for inclusion in the Site. You waive any moral rights or
      attribution claims.
    </p>

    {/* Acceptable use */}
    <SectionHeading id="acceptable-use-policy">Acceptable Use Policy</SectionHeading>
    <p>The following terms constitute our “Acceptable Use Policy”: you agree not to use the Site to collect, upload, transmit, display, or distribute any User Content</p>
    <ul className="list-disc pl-6 mb-6 bg-blue-50 rounded-lg py-2 px-4 shadow border border-gray-200">
      <li>that violates any third-party right or any intellectual property or proprietary right</li>
      <li>that is unlawful, harassing, abusive, tortious, threatening, harmful, invasive of privacy, vulgar, defamatory, false, intentionally misleading, trade libelous, pornographic, obscene, patently offensive, promotes hatred or physical harm of any kind</li>
      <li>that is harmful to minors in any way;</li>
      <li>that violates any law, regulation, or third-party restriction.</li>
    </ul>
    <p>In addition, you agree not to:</p>
    <ul className="list-disc pl-6 mb-6 bg-blue-50 rounded-lg py-2 px-4 shadow border border-gray-200">
      <li>upload, transmit, or distribute any software intended to damage or alter a computer system or data</li>
      <li>send unsolicited or unauthorized advertising, spam, chain letters, pyramid schemes, or any other duplicative messages</li>
      <li>harvest or collect information or data about other users without their consent</li>
      <li>interfere with, disrupt, or burden servers or networks connected to the Site</li>
      <li>attempt to gain unauthorized access to the Site, harass or interfere with any other user, or use automated agents or scripts to create multiple accounts or generate automated requests</li>
    </ul>
    <p>
      We reserve the right to review any User Content and take action—including removal of your content,
      termination of your account, or reporting to law enforcement—if you violate these Terms.
    </p>
    <p>
      If you provide feedback or suggestions, you assign all rights in that feedback to HSWF Network, and
      agree it will be treated as non-confidential and non-proprietary.
    </p>
    <p>
      You agree to indemnify HSWF Network and its officers, employees, and agents from any claim or demand
      arising out of your use of the Site, your violation of these Terms, applicable laws, or your User
      Content. HSWF Network may assume exclusive defense of any matter, and you agree not to settle without
      written consent.
    </p>

    {/* ...and so on for all the remaining sections, following the same pattern */}
    {/* Copy the rest of your content into <SectionHeading> ... </SectionHeading> + <p> / <ul> blocks */}

  </article>
);


// Helper for consistent section headings
const SectionHeading: React.FC<{ id: string; children: React.ReactNode }> = ({ id, children }) => (
  <h2
    id={id}
    className="text-xl font-bold text-blue-800 border-l-4 border-blue-400 pl-3 py-1 my-6 bg-gradient-to-r from-blue-50 to-transparent rounded"
  >
    {children}
  </h2>
);
