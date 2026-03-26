type Testimonial = {
  name: string;
  role: string;
  message: string;
};

export default function TestimonialCard({ name, role, message }: Testimonial) {
  return (
    <div className="flex flex-col text-center justify-center h-auto min-h-50 bg-[#1f1f1f] p-6 rounded-2xl border border-gray-800 hover:border-black transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-white-400">{role}</p>
        <p className="text-gray-400 italic">"{message}"</p>
    </div>
  );
}