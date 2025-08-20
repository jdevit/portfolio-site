export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I’m <span className="font-semibold">Jeremy Barber</span>, a Cloud
            Engineer and Full-Stack Developer with 4+ years of experience
            supporting hybrid on-prem and cloud environments. I specialize in
            designing scalable AWS architectures, automating workflows with
            Bash, Python, and Node.js, and troubleshooting complex networking
            and Linux system issues.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beyond infrastructure, I enjoy building modern web applications with
            React and Node.js, bridging the gap between cloud systems and
            user-facing tools. My work blends hands-on technical support,
            automation scripting, and development to deliver reliable, efficient
            solutions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            AWS Solutions Architect – Associate certified, I’m actively building
            and deploying projects that showcase cloud-native design, security
            best practices, and practical problem solving.
          </p>
        </div>

        {/* Right: Image or illustration */}
        <div className="flex justify-center md:justify-end">
          <img
            src="profile.png"
            alt="Jeremy Barber"
            className="rounded-2xl border-1 border-gray-300 shadow-lg max-w-xs md:max-w-sm object-cover p-2"
          />
        </div>
      </div>
    </section>
  );
}
