const GoggleMaps = () => {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31352.26183100558!2d106.6877611!3d10.8088052!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529353b07f8c1%3A0xfb34c2672b4e4586!2zMTUzLzE1LzkgTmd1eeG7hW4gVGjGsOG7o25nIEhp4buBbiwgUGjGsOG7nW5nIDUsIELDrG5oIFRo4bqhbmgsIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1742913874019!5m2!1svi!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoggleMaps;
