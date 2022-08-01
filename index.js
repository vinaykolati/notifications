const Notification = (props) => {
  const { className, notificationImg, notificationText } = props;
  const containerClassName = `notify ${className}`;

  return (
    <div className={containerClassName}>
      <img className="notification" src={notificationImg} />
      <p className="message">{notificationText}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="list-notification">
      <Notification
        className="notify1"
        notificationImg="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        notificationText="Information Message"
      />
      <Notification
        className="notify2"
        notificationImg="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        notificationText="Success Message"
      />
      <Notification
        className="notify3"
        notificationImg="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        notificationText="Warning Message"
      />
      <Notification
        className="notify4"
        notificationImg="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        notificationText="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
