const Accordion = () => {
  return (
    <div className="mt-16">
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xl font-medium">Size Guide</div>
        <div className="collapse-content">
          <p>
            Ensure you get the perfect fit with our comprehensive size guide.
            Measure your feet accurately to find the right size for you.
          </p>
          <h3 className="font-semibold my-2">How to Measure:</h3>
          <ol className="list-decimal list-inside">
            <li>Place your foot on a piece of paper.</li>
            <li>Mark the end of your heel and the tip of your longest toe.</li>
            <li>Measure the distance between the two marks.</li>
            <li>Refer to our size chart to find your size.</li>
          </ol>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
