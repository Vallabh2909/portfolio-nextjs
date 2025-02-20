import Link from "next/link";

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4H2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
const Footer = () => {
  return (
    <footer className="bg-background border-t px-4 md:px-6 py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs text-muted-foreground">
        &copy; 2024 Vallabh Wasule. All rights reserved.
      </p>
      <div className="flex gap-4">
        <Link
          href="https://github.com/Vallabh2909/"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          <GithubIcon className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/vallabhwasule2909"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          <LinkedinIcon className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link
          href="https://x.com/vallabh_wa89401"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          <TwitterIcon className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link
          href="mailto:vallabhwasule913@gmail.com"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          <MailIcon className="h-5 w-5" />
          <span className="sr-only">Mail</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
