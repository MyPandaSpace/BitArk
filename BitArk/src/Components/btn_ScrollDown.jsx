import "./btn_ScrollDown.css";

const btn_ScrollDown = () => {
  const handleScroll = () => {
    const introSection = document.getElementById("Intro2-banner");
    if (introSection) {
      introSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="scroll-down-arrow" onClick={handleScroll}>
      <span>&#9660;</span>
    </div>
  );
};

export default btn_ScrollDown;