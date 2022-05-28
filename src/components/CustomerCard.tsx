import "./CustomerCard.css";

export default function CustomerCard({
  logo,
  name,
  designation,
  description,
  services,
  image,
}: {
  logo: string;
  name: string;
  designation: string;
  description: string;
  services: string[];
  image: string;
}) {
  return (
    <div className="customerCard">
      <div className="customerCardContent">
        <div className="customerCardDetails">
          <img src={logo} alt={name} className="customerLogo" />
          <div className="customerPersonal">
            <h3 className="customerName">{name}</h3>
            <h3 className="customerDesignation">{designation}</h3>
          </div>
          <p className="customerDescriptionNormal">{description}</p>
        </div>
        <img src={image} alt={name} className="customerImage" />
      </div>
      <p className="customerDescriptionSmall">{description}</p>
      <div className="customerCardFooter">
        <div className="customerCardServicesText">Services provided: </div>
        <div className="customerCardServicesProvided">
          {services.map((service) => {
            return <div className="customerCardService">{service}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
