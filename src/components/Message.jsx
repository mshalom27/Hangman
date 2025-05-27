
const Message = ({ showNotification }) => {
  return (
    showNotification && (
      <div className="message-container">
        <p>You have already entered this letter</p>
      </div>
    )
  );
};

export default Message