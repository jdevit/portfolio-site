export type AboutProps = {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
};

export default function About({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
}: AboutProps) {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Right: Image or illustration */}
        <div className="flex justify-center md:justify-end">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="rounded-2xl border-1 border-gray-300 shadow-lg max-w-xs md:max-w-sm object-cover p-2"
          />
        </div>
      </div>
    </section>
  );
}
