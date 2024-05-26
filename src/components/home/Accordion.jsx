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
          <p className="font-semibold my-5">How to Measure:</p>
          <ol className="list-decimal list-inside">
            <li className="mb-2">Place your foot on a piece of paper.</li>
            <li className="mb-2">
              Mark the end of your heel and the tip of your longest toe.
            </li>
            <li className="mb-2">
              Measure the distance between the two marks.
            </li>
            <li className="mb-2">Refer to our size chart to find your size.</li>
          </ol>
          <p className="font-semibold my-5">Size Chart:</p>
          <ul className="list-disc list-inside">
            <li className="mb-2">US Sizes: 5, 6, 7, 8, 9, 10, 11, 12</li>
            <li className="mb-2">UK Sizes: 4, 5, 6, 7, 8, 9, 10, 11</li>
            <li className="mb-2">EU Sizes: 37, 38, 39, 40, 41, 42, 43, 44</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xl font-medium">
          Shipping & Delivery
        </div>
        <div className="collapse-content">
          <p>
            Learn about our shipping options and delivery times to get your
            shoes as quickly as possible.
          </p>
          <p className="font-semibold my-5">Shipping Options:</p>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              Standard Shipping: 5-7 Business Days, $5.99
            </li>
            <li className="mb-2">
              Express Shipping: 2-3 Business Days, $15.99
            </li>
            <li className="mb-2">
              International Shipping: 7-14 Business Days, $25.99
            </li>
          </ul>
          <p className="font-semibold my-5">Tracking Your Order:</p>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              Once your order is shipped, you will receive a tracking number via
              email.
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xl font-medium">Size Guide</div>
        <div className="collapse-content">
          <p>
            Ensure you get the perfect fit with our comprehensive size guide.
            Measure your feet accurately to find the right size for you.
          </p>
          <p className="font-semibold my-5">How to Measure:</p>
          <ol className="list-decimal list-inside">
            <li className="mb-2">Place your foot on a piece of paper.</li>
            <li className="mb-2">
              Mark the end of your heel and the tip of your longest toe.
            </li>
            <li className="mb-2">
              Measure the distance between the two marks.
            </li>
            <li className="mb-2">Refer to our size chart to find your size.</li>
          </ol>
          <p className="font-semibold my-5">Size Chart:</p>
          <ul className="list-disc list-inside">
            <li className="mb-2">US Sizes: 5, 6, 7, 8, 9, 10, 11, 12</li>
            <li className="mb-2">UK Sizes: 4, 5, 6, 7, 8, 9, 10, 11</li>
            <li className="mb-2">EU Sizes: 37, 38, 39, 40, 41, 42, 43, 44</li>
          </ul>
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
