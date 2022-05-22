import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import MainButton from "../Shared/MainButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center "
    >
      <div className="flex-1 hidden lg:block md:block">
        <img
          className="md:mt-[-100px] lg:mt-[-150px]"
          src={doctor}
          alt="doctor"
        />
      </div>
      <div className="flex-1 px-5">
        <h3 className="text-xl text-primary">Appointment</h3>
        <h2 className="text-3xl text-white py-5">Make an Appointment Today</h2>
        <p className="text-white pb-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
          blanditiis libero amet debitis perferendis atque ex dolore, labore,
          omnis, repellendus inventore maiores! Itaque, quidem, possimus vel
          impedit sed minima delectus eveniet dolor illum asperiores quis minus
          laudantium iusto sit porro!
        </p>
        <MainButton>Get Started</MainButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
