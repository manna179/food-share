const Faq = () => {
  return (
    <div>
      <h2 className="text-3xl text-center font-bold text-red-500 my-6">General FAQ for Food Share</h2>

      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
           What is Food Share?
          </div>
          <div className="collapse-content">
            <p>Food Share is a platform that connects people who have surplus food with those who need it. Our goal is to reduce food waste and ensure that no one goes hungry by making food sharing simple and accessible for everyone.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
          How does Food Share work?
          </div>
          <div className="collapse-content">
            <p>Food Share allows users to either donate or request food. If you have excess food, you can list it on the platform for others to claim. If you are in need of food, you can browse available listings nearby and request what you need.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
          Is Food Share free to use?
          </div>
          <div className="collapse-content">
            <p>Yes! Food Share is completely free to use for both donors and recipients. We believe that sharing food should never come at a cost.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
