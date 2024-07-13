import RestaurantCard from "./RestaurantCard";
import VenueCard from "./VenueCard";

function AboutYourVenue({
  withAlcoholNumber,
  withoutAlcoholNumber,
  sameLocation,
  quantityNumber,
  handleWithAlcoholNumberChange,
  handleWithoutAlcoholNumberChange,
  handleSameLocationChange,
  handleQuantityNumberChange,
}) {
  return (
    <>
      {/* Restaurant Card here */}
      <RestaurantCard
        withAlcoholNumber={withAlcoholNumber}
        withoutAlcoholNumber={withoutAlcoholNumber}
        handleWithAlcoholNumberChange={handleWithAlcoholNumberChange}
        handleWithoutAlcoholNumberChange={handleWithoutAlcoholNumberChange}
      ></RestaurantCard>
      {/* Venue Card */}
      <VenueCard
        isLocation={true}
        sameLocation={sameLocation}
        handleSameLocationChange={handleSameLocationChange}
        isOtherText={true}
        otherText={"Choose the total no. of venue available in your property"}
        quantityNumber={quantityNumber}
        handleQuantityNumberChange={handleQuantityNumberChange}
        title={"Venues"}
        description={"Ballroom, Dance Studio +4"}
      ></VenueCard>
    </>
  );
}

export default AboutYourVenue;
