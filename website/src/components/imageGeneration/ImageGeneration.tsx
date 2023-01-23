import "./ImageGeneration.css";

const ImageGeneration = () => {
  return (
    <div className="imageGeneration">
      <div className="imageGenerationInteraction">
        <input
          type="text"
          className="imageGenerationInput imageGenerationInputNotFocused"
          onFocus={(e) => {
            e.target.value = "";
            e.target.className =
              "imageGenerationInput imageGenerationInputFocused";
          }}
          defaultValue="An impressionist oil painting of sunflowers in a field..."
        />
        <button type="button" className="imageGenerationButton">
          Skapa
        </button>
      </div>
      <h2>AI-genererad konst hem till dig</h2>
    </div>
  );
};

export default ImageGeneration;
