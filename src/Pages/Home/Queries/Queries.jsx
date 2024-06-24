import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Queries = () => {
    return (
        <div className="mt-5">
            <SectionTitle
            heading="We got you!!"
            subHeading="Got more question?"
            ></SectionTitle>
        <div className="m-5">
            <h1 className="m-5 text-center text-xl font-extrabold"> No worries! Know more about our Restaurant</h1>
            <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium">Where are we located?</div>
  <div className="collapse-content">
    <p>19780, East Khulshi near town center, Chittagong</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">Do we serve other cuisines?</div>
  <div className="collapse-content">
    <p>We do not. We only serve authentic Asian cuisine</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">Do we have dine in in our restaurant?</div>
  <div className="collapse-content">
    <p>Yes, we do. We also delivery food on your door step using our food app.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">Where can I find food app to order?</div>
  <div className="collapse-content">
    <p>You can download it from both play store & app store.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">Any contact number for booking or queries?</div>
  <div className="collapse-content">
    <p>Yes. Call us on +88017826476576 or +88017485665756 for bookings. You can also mail us at asianfusion@gmail.com</p>
  </div>
</div>
            </div>
          
        </div>
    );
};

export default Queries;