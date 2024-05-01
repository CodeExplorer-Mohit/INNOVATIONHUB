const MapSection = () => {
    return (
        <section className="flex justify-center items-center w-[100%] mt-10 py-10">
            <div className="flex justify-center items-center w-[80%]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19056.005897173953!2d-6.259336!3d53.343243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9b76719607%3A0x9d13471d963893a7!2s1%20Grafton%20Street%2C%20Dublin%2C%20Ireland!5e0!3m2!1sen!2sus!4v1684527415441!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}

export default MapSection
