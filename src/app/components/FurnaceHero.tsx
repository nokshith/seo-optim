'use client';

export default function FurnaceHero() {
  return (
    <section className="bg-gray-100 flex justify-center py-10">
      <div
        className="flex flex-col items-center text-center"
        style={{
          width: '763px',
          height: '153px',
          gap: '23px',
        }}
      >
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-[#001F5C]">
          Let Your Furnace Think. Let Your Factory Breathe.
        </h2>

        {/* Subtext */}
        <p className="text-sm text-gray-700 max-w-xl">
          Ignis AI turns heat into thought, and thought into action. It is not an upgrade — it is a transformation.
        </p>

        {/* Button */}
        <button className="mt-4 border border-[#001F5C] text-[#001F5C] px-6 py-2 rounded-full hover:bg-[#001F5C] hover:text-white transition">
          Book a Demo
        </button>
      </div>
    </section>
  );
}
