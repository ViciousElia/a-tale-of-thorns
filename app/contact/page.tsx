import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <div className="w-full md:w-4/5 transition-all duration-500 mx-auto px-4 flex flex-col bg-mid-800 dark:bg-mid-200 min-h-full border-l-3 border-l-primary border-r-3 border-r-primary-100 flex-grow">
      <div className="intro text-center">
        <h1 className="m-8">Contact Me</h1>
      </div>
      <div className="content w-full md:w-[80%] m-auto flex flex-col md:flex-row justify-between">
        <ContactForm />
        <div className="text-center"><h2 className="m-6">Or email me ...</h2><p>terra@fruitfolio.com</p></div>
      </div>
    </div>
  )
}
/* TODO: Add appropriate metadata (exists in page context) and structured data */