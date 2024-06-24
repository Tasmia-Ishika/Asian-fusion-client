import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Phone = () => {
    return (
        <div >
            <SectionTitle
            heading="An overview"
            subHeading="Get our app for hassle free orders"
            ></SectionTitle>
<div className="flex grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 mt-4">
<div className="grid justify-items-center">
<div className="mockup-phone border-primary">
  <div className="camera"></div>
  <div className="display">
    <div className="artboard artboard-demo phone-1"><div className="carousel carousel-vertical rounded-box h-96">
  <div className="carousel-item w-full h-full">
    <img src="https://i.ibb.co/M2MZ2h4/Screenshot-2024-06-25-012428.png" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co/DQqTnr7/Screenshot-2024-06-25-012608.png" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co/MGC0yg8/Screenshot-2024-06-25-012700.png" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co/YTmbTkJ/Screenshot-2024-06-25-012720.png" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co/V2WHh7Q/Screenshot-2024-06-25-012635.png" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co/Mf65vcB/Screenshot-2024-06-25-013014.png" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co/bJT2rH0/Screenshot-2024-06-25-013044.png" />
  </div>
</div> 
<h1 className="font-serif font-bold">App Version</h1>
    </div>
  </div>
</div>
</div>
<div className="grid justify-items-center">
<div className="card glass w-96 mt-10">
  <figure>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbiHox1yF8dTMBJkAOf4HOqSUXDLvxBOpuA&s"
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Get fastest delivery from us.</h2>
    <p>We provide authentic asian food at your doorstep within 30 minutes which is guaranteed!!</p>
    <div className="card-actions justify-end">
    <a href="https://play.google.com/store/apps?hl=en_US"> <button className="btn btn-warning">Download app</button></a>
     
    </div>
  </div>
</div>
</div>
</div>

        </div>
    );
};

export default Phone;