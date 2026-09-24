export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      Loading another remote image:
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="The Earth and Moon, imaged by NASA's Galileo spacecraft"
        src="https://images-assets.nasa.gov/image/PIA00342/PIA00342~small.jpg"
      />
      <br />
      Astana, Kazakhstan:
      <br />
      <img 
        id="wd-your-image"
        src="https://www.wanderlustmagazine.com/wp-content/uploads/2023/10/Baiterek-1536x1025.jpg"
        height="200px"
        alt="Astana"
      />
    </div>
  );
}