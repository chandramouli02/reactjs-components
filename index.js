const Button = (props) => {
  const { className, text } = props;
  return <button class={className}>{text}</button>;
};

const element = (
  <div class="main-container">
    <h1 class="heading">Social Buttons</h1>
    <div class="buttons-container">
      <Button className="like-button" text="like" />
      <Button className="comment-button" text="comment" />
      <Button className="share-button" text="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
