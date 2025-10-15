import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage(){
  return (
    <div>
      <div className="intro text-center">
        <h1 className="text-4xl m-8">Contact Me</h1>
      </div>
      <div className="content w-full md:w-[80%] m-auto flex flex-col md:flex-row justify-between">
        <ContactForm />
        <div className="text-center"><h2 className="text-3xl m-6">Or email me ...</h2><p>terra@fruitfolio.com</p></div>
      </div>
    </div>
  )
}