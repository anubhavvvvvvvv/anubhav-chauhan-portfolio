import { contact } from "@/data/profile";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: contact.name,
    jobTitle: contact.role,
    email: contact.email,
    url: "https://anubhavchauhan.dev",
    sameAs: [contact.linkedin, contact.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: contact.location,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Netaji Subhas University of Technology",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
