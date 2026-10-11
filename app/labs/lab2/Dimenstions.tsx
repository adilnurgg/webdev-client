export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This is a long sentence that keeps going so you can clearly see the
          box stays 120px wide and 60px tall while the text spills past it.
        </div>
        <div className="wd-bg-color-green wd-dimension-custom">My Custom Dimensions</div>
      </div>
    </div>
  );
}