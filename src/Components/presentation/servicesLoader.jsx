import { CardServices } from "./CardServices/CardServices";
import servicesEN from "./servicesEN";
import servicesES from "./servicesES";

export function servicesLoader(language) {
  let services = undefined;
  if (language == "EN") {
    services = servicesEN.map((value, index) => {
      return (
        <CardServices
          key={index}
          img={value.img}
          title={value.title}
          description={value.description}
        />
      );
    });
    return <>{services}</>;
  }
  
  services = servicesES.map((value, index) => {
    return (
      <CardServices
        key={index}
        img={value.img}
        title={value.title}
        description={value.description}
      />
    );
  });
  return <>{services}</>;
}
