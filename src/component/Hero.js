import imghero from "../media/blavier.jpg";

function Hero() {
  const media_social = [
    "logo-facebook",
    "logo-instagram",
    "logo-linkedin",
    "logo-github"
  ];

  return (
    <section
      id="home"
      className="h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={imghero}
          alt="imghero"
          className="md:w-11/12 h-80  object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-blue-600 md:text-6xl text-5xl ">
              Salut! <br />
            </span>
            Je Suis <span>Blavier Kula</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-5 font-bold text-gray-600">
            Developpeur Front-end
          </h4>
          <button
            className="bg-blue-600 font-semibold text-white 
 md:mx-0 mx-auto rounded-full py-3 px-6 flex items-center gap-2 mt-8"
          >
            Contactez-Moi
          </button>
          <div className="mt-8 text-3xl flex items-center  md:justify-start justify-center ">
            {media_social?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer mr-5"
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
