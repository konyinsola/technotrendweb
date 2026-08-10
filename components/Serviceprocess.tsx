const steps = [
  {
    title: "Star Call",
    description:
      "Enables subscribers with low or no airtime to send a callback request through a simple missed-call interaction.",
  },
  {
    title: "Call Collect",
    description:
      "Allows a subscriber to place a call and have the recipient accept and pay the call charges.",
  },
  {
    title: "Star Collect",
    description:
      "Automates the collection, tracking, and reconciliation of charges generated from value added services.",
  },
  {
    title: "Star Logic",
    description:
      "Manages the eligibility rules, routing, charging, and service workflows that power each VAS product.",
  },
  {
    title: "Star Zero",
    description:
      "Automatically activates a missed call or callback service when a subscriber cannot complete a call due to insufficient balance.",
  },
];

export default function Serviceprocess() {
  return (
    <section
      className="w-full pt-4 pb-12 lg:pt-6 lg:pb-20"
      style={{
        background: "#F9FAFB",
      }}
    >
      <div className="max-w-288.5 mx-auto px-6 text-center">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-white text-left"
              style={{
                borderRadius: "16px",
                padding: "16px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "3px",
                  borderRadius: "2px",
                  background: "#201020",
                }}
              />

              <p
                className="font-['DM_Serif_Display'] mt-3 text-[16px] leading-[24px] lg:text-[18px] lg:leading-[27px]"
                style={{
                  fontWeight: 800,
                  letterSpacing: "0px",
                }}
              >
                {step.title}
              </p>

              <p
                className="font-['DM_Serif_Display'] mt-2 text-[12px] leading-[20px] lg:text-[13px] lg:leading-[22px]"
                style={{
                  fontWeight: 400,
                  letterSpacing: "0px",
                  color: "#6F7169",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}