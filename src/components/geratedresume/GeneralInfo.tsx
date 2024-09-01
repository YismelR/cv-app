export default function GeneralInfo() {
  return (
    <section className="flex flex-col place-items-center gap-1">
      <h2 className="text-lg font-semibold">Full Name</h2>
      <div className="flex">
        <p className="border-r border-black px-2">Email</p>
        <p className="px-2">Phone Number</p>
      </div>
    </section>
  );
}
