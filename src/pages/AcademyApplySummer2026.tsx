import { useEffect } from "react";

export default function AcademyApplySummer2026() {
  useEffect(() => {
    document.title = "Apply — Summer 2026 | nHRMS Academy";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Apply for the nHRMS Academy Associate HRTech Implementation programme — Summer 2026 cohort, Bangalore."
      );
    }
  }, []);

  return (
    <iframe
      src="/academy-apply-summer-2026.html"
      title="nHRMS Academy Summer 2026 Application"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
}
